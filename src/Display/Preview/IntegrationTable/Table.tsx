import React, { useMemo } from 'react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { isNil } from 'lodash';
import { DefaultPageSize } from '../../../consts';
import type { IntegrationTableColumsProps } from './types';

export default function IntegrationTableColums(
  props: IntegrationTableColumsProps
) {
  const columns = useMemo(() => {
    const res: ColumnProps<Record<string, string>>[] = [];
    for (const column of props?.columns ?? []) {
      res.push({
        title: column.fieldName,
        dataIndex: column.fieldKey,
        sorter: column.sorter,
        render: (text: string) => {
          for (const convertRule of column.convertRuleMap) {
            if (convertRule.key === text) {
              return convertRule.value;
            }
          }
          return text;
        },
      });
    }
    return res;
  }, [props.columns]);
  return (
    <>
      <Table
        onChange={props.onTableChange}
        dataSource={props.dataSource}
        columns={columns}
        pagination={{
          pageSize: DefaultPageSize,
          current: props.pagination.pageNumber,
        }}
      />
    </>
  );
}
