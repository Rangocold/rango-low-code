import React, { useCallback, useMemo, useState } from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { isNil } from 'lodash';
import { DefaultPageNumber, DefaultPageSize } from '../../../consts';
import type { TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';
import type { IntegrationTableColumsProps, DataSourceProps } from './types';

export default function IntegrationTableColums(
  props: IntegrationTableColumsProps
) {
  const [pagination, setPagination] = useState({
    pageNumber: DefaultPageNumber,
  });
  const columns = useMemo(() => {
    const res: ColumnProps<Record<string, string>>[] = [];
    for (const column of props?.columns ?? []) {
      res.push({
        title: column.fieldName,
        dataIndex: column.fieldKey,
        sorter: column.sorter,
        render: (value: string) => {
          if (
            !isNil(column.convertRuleMap) &&
            column.convertRuleMap.has(value)
          ) {
            return column.convertRuleMap.get(value);
          }
          return value;
        },
      });
    }
    return res;
  }, [props.columns]);
  const onTableChange = useCallback(
    (
      pagination: TablePaginationConfig,
      _: unknown,
      sorter: SorterResult<DataSourceProps> | SorterResult<DataSourceProps>[]
    ) => {
      // todo
    },
    []
  );

  return (
    <>
      <Table
        onChange={onTableChange}
        columns={columns}
        pagination={{
          pageSize: DefaultPageSize,
          current: pagination.pageNumber,
        }}
      />
    </>
  );
}
