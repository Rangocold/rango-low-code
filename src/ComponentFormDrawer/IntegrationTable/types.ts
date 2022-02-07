import { IntegrationTableColumnItemProps, IntegrationTableColumnConvertRulesProps } from './../../types';
export interface ColumnConfigProps {
  value?: IntegrationTableColumnItemProps[];
  onChange?: (columns: IntegrationTableColumnItemProps[]) => void;
}

export interface SingleColumnConfigProps extends IntegrationTableColumnItemProps {
  onChange?: (column: IntegrationTableColumnItemProps) => void;
}

export interface ConvertRuleConfigProps {
  value?: IntegrationTableColumnConvertRulesProps;
  onChange?: (value: IntegrationTableColumnConvertRulesProps) => void;
}