import React, { useCallback, useState, useEffect, useRef } from 'react';
import { IntegrationTableProps } from '../../../types';
import Filter from './Filter';
import Table from './Table';
import type { DataSourceProps } from './types';
import { DefaultPageNumber } from '../../../consts';
import { SorterResult } from 'antd/lib/table/interface';
import axios from 'axios';
import type { TablePaginationConfig } from 'antd';
import type { CancelTokenSource } from 'axios';

export default function IntegrationTable(props: IntegrationTableProps) {
  const tokenSourceRef = useRef<CancelTokenSource>();
  const cancelRequesting = useCallback(() => {
    if (tokenSourceRef.current && tokenSourceRef.current.cancel) {
      tokenSourceRef.current.cancel();
    }
  }, [tokenSourceRef]);
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
      .catch((e) => {
        console.log(e);
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
      <Filter {...props.filters} onFilterChange={onFilterChange} />
      <Table
        dataSource={dataSource}
        columns={props.columns}
        pagination={pagination}
        onTableChange={onTableChange}
      />
    </>
  );
}
