import React, { useMemo } from 'react';
import { Table, Card } from 'antd';
import { ColumnProps } from 'antd/lib/table';
import { isNil } from 'lodash';
import { DefaultPageSize } from '../../../consts';
import type { IntegrationTableColumsProps } from './types';
import { SortNull } from './consts';
import { IntegrationTableColumnItemProps } from '../../../types';

function getSortOrder(column: IntegrationTableColumnItemProps, sorter: IntegrationTableColumsProps['sorter']) {
  if (!column.sorter) {
    return SortNull;
  }

  if (sorter?.field === column.fieldKey) {
    return sorter.order;
  }
  return SortNull;
}

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
        sortOrder: getSortOrder(column, props.sorter),
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
    <Card>
      <Table
        onChange={props.onTableChange}
        dataSource={props.dataSource}
        columns={columns}
        pagination={{
          pageSize: DefaultPageSize,
          current: props.pagination.pageNumber,
        }}
      />
    </Card>
  );
}
