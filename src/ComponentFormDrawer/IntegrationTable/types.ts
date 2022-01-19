import { IntegrationTableColumnProps } from './../../types';
export interface ColumnConfigProps {
  value?: IntegrationTableColumnProps[];
  onChange?: (columns: IntegrationTableColumnProps[]) => void;
}