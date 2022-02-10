import { IntegrationTableColumnItemProps, IntegrationTableColumnConvertRulesProps, IntegrationTableColumnListProps } from './../../types';
export interface ColumnConfigProps {
  value?: IntegrationTableColumnListProps['components'];
  onChange?: (columns: IntegrationTableColumnListProps['components']) => void;
}

export interface SingleColumnConfigProps extends IntegrationTableColumnItemProps {
  onChange?: (column: IntegrationTableColumnItemProps) => void;
}

export interface ConvertRuleConfigProps {
  value?: IntegrationTableColumnConvertRulesProps;
  onChange?: (value: IntegrationTableColumnConvertRulesProps) => void;
}