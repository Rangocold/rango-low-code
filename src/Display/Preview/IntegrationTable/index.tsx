import React, { useCallback, useState, useEffect, useRef, useMemo } from 'react';
import { IntegrationTableColumnListProps, IntegrationTableProps } from '../../../types';
import Filter from './Filter';
import Table from './Table';
import type { DataSourceProps } from './types';
import { DefaultPageNumber, getInitialComponentValue } from '../../../consts';
import { SorterResult } from 'antd/lib/table/interface';
import type { TablePaginationConfig } from 'antd';
import { message } from 'antd';
import axios from 'axios';
import type { CancelTokenSource } from 'axios';
import { ComponentTypes } from '../../../Toolbar/consts';
import { isNil } from 'lodash';

// ascend descend
const NumOfRows = 10;
const EmptyRow = '-';
const SortAscend = 'ascend';
const SortDescend = 'descend';
const SortNull = null;

export default function IntegrationTable(props: IntegrationTableProps) {
  const filterConfig = useMemo(() => {
    for (const config of props.components ?? []) {
      if (config.type === ComponentTypes.integrationTableFilter) {
        return config;
      }
    }
  }, [props.components]);
  const columnsConfig = useMemo(() => {
    for (const config of props.components ?? []) {
      if (config.type === ComponentTypes.integrationTableColumnList) {
        return config;
      }
    }
    message.error(`Integration Table ${props.uuid} does not container columns`);
    const initialComponentValue = getInitialComponentValue();
    return initialComponentValue[ComponentTypes.integrationTableColumnList] as IntegrationTableColumnListProps;
  }, []);
  const tokenSourceRef = useRef<CancelTokenSource>();
  const cancelRequesting = useCallback(() => {
    if (tokenSourceRef.current && tokenSourceRef.current.cancel) {
      tokenSourceRef.current.cancel();
    }
  }, [tokenSourceRef]);
  const generateDefaultDataSource = useCallback(() => {
    const tmpDataSource: DataSourceProps[] = [];

    for (let i = 0; i < NumOfRows; ++i) {
      const row: DataSourceProps = {};
      for (const column of columnsConfig.components ?? []) {
        row[column.fieldKey] = EmptyRow;
      }
      tmpDataSource.push(row);
    }

    return tmpDataSource;
  }, [columnsConfig]);

  const [dataSource, setDataSource] = useState<DataSourceProps[]>([]);
  const [pagination, setPagination] = useState({
    pageNumber: DefaultPageNumber,
  });
  const [sorter, setSorter] = useState<SorterResult<DataSourceProps>>();
  const [filter, setFilter] = useState<Record<string, unknown>>();
  const requestData = useCallback(() => {
    tokenSourceRef.current = axios.CancelToken.source();
    axios
      .post(
        props.url,
        {
          filter,
          pagination,
          sorter,
        },
        {
          cancelToken: tokenSourceRef.current.token,
        }
      )
      .then((res) => {
        if (Array.isArray(res)) {
          setDataSource(res);
        }
      })
      .catch(() => {
        const tmpDataSource = generateDefaultDataSource();
        setDataSource(tmpDataSource);
      });
  }, [props.url, filter, pagination, sorter]);

  const onTableChange = useCallback(
    (
      pagination: TablePaginationConfig,
      _: unknown,
      sorter: SorterResult<DataSourceProps> | SorterResult<DataSourceProps>[]
    ) => {
      if (Array.isArray(sorter)) {
        setSorter(sorter[0]);
      } else {
        setSorter(sorter);
      }
      setPagination({ pageNumber: pagination.current ?? DefaultPageNumber });
    },
    []
  );

  const onFilterChange = useCallback((filters) => {
    setSorter({ order: SortNull });
    setPagination({ pageNumber: DefaultPageNumber });
    setFilter(filters);
  }, []);

  useEffect(() => {
    requestData();
    return () => {
      cancelRequesting();
    }
  }, [filter, pagination, sorter]);
  return (
    <>
      {!isNil(filterConfig) && <Filter {...filterConfig} onFilterChange={onFilterChange} />}
      <Table
        dataSource={dataSource}
        columns={columnsConfig.components}
        pagination={pagination}
        onTableChange={onTableChange}
      />
    </>
  );
}
