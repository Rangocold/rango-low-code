import {
  IntegrationTableColumnListProps,
  IntegrationTableFilterProps,
} from '../../../types';
import type { TablePaginationConfig } from 'antd';
import { SorterResult } from 'antd/lib/table/interface';

export interface IntegrationTableColumsProps {
  sorter?: SorterResult<DataSourceProps>;
  columns: IntegrationTableColumnListProps['components'];
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

export type IntegrationTableFilterConfigProps = IntegrationTableFilterProps & {
  onFilterChange: (filter: Record<string, unknown>) => unknown;
};
