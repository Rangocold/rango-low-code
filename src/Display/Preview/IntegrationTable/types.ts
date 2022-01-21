import { IntegrationTableProps } from '../../../types';
import type { TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';

export interface IntegrationTableColumsProps {
  columns: IntegrationTableProps['columns'];
  dataSource: DataSourceProps[];
  pagination: {
    pageNumber: number;
  };
  onTableChange: (
    pagination: TablePaginationConfig,
    _: unknown,
    sorter: SorterResult<DataSourceProps> | SorterResult<DataSourceProps>[]
  ) => void;
}
export type DataSourceProps = Record<string, string>;

export type IntegrationTableFilterConfigProps = IntegrationTableProps['filters'] & {
  onFilterChange: (filter: Record<string, unknown>) => unknown;
}