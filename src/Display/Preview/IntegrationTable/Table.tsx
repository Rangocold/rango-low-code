import React, { useMemo, useState } from 'react';
import { Table, Card } from 'antd';
import { IntegrationTableProps } from '../../../types';
import { ColumnProps } from 'antd/lib/table';
import { isNil } from 'lodash';

interface IntegrationTableColumsProps {
  columns: IntegrationTableProps['columns'];
}

export default function IntegrationTableColums(props: IntegrationTableColumsProps) {
  const columns = useMemo(() => {
    const res: ColumnProps<Record<string, string>>[] = [];
    for (const column of props?.columns ?? []) {
      res.push({
        title: column.fieldName,
        dataIndex: column.fieldKey,
        sorter: column.sorter,
        render: (value: string) => {
          if (!isNil(column.convertRuleMap) && column.convertRuleMap.has(value)) {
            return column.convertRuleMap.get(value);
          }
          return value;
        }
      })
    }
    return res;
  }, [props.columns]);
  return (
    <>
      <Table columns={columns} />
    </>
  );
}