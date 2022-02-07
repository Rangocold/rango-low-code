import { IntegrationTableColumnProps, IntegrationTableColumnConvertRulesProps } from './../../types';
export interface ColumnConfigProps {
  value?: IntegrationTableColumnProps[];
  onChange?: (columns: IntegrationTableColumnProps[]) => void;
}

export interface SingleColumnConfigProps extends IntegrationTableColumnProps {
  onChange?: (column: IntegrationTableColumnProps) => void;
}

export interface ConvertRuleConfigProps {
  value?: IntegrationTableColumnConvertRulesProps;
  onChange?: (value: IntegrationTableColumnConvertRulesProps) => void;
}