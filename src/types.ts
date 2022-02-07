import { ComponentTypes } from './Toolbar/consts';
import type { FormProps } from 'antd';
import { HTMLInputTypeAttribute } from 'react';

export interface FieldPublicProps {
  uuid: string;
}

export interface SelectFieldProps
  extends FieldPublicProps,
    BaseInputPublicProps {
  type: ComponentTypes.select;
  options: { label: string; value: string }[];
  single: boolean;
  hint?: string;
}

export interface InputProps extends FieldPublicProps, BaseInputPublicProps {
  type: ComponentTypes.input;
  max?: number;
  hint?: string;
}

export interface TextareaProps extends FieldPublicProps, BaseInputPublicProps {
  type: ComponentTypes.textarea;
  max?: number;
  hint?: string;
}

export interface NumberProps extends FieldPublicProps, BaseInputPublicProps {
  type: ComponentTypes.number;
  max?: number;
  min?: number;
  hint?: string;
}

export interface DateProps extends FieldPublicProps, BaseInputPublicProps {
  type: ComponentTypes.date;
  format: string;
  hint?: string;
  showTime?: boolean;
}

export interface ButtonProps extends FieldPublicProps {
  type: ComponentTypes.button;
  text: string;
}

// no uuid, because not for user
export interface BaseFormProps {
  components: ComponentProps[];
  itemPerRow?: number;
}

export interface IntegrationFormProps extends FieldPublicProps {
  type: ComponentTypes.interationForm;
  submitUrl: string;
  button: ButtonProps;
  components: BaseFormProps['components'];
}

export type IntegrationTableColumnConvertRulesProps = { key: string, value: string }[];

export interface IntegrationTableColumnProps {
  fieldName: string;
  fieldKey: string;
  convertRuleMap: IntegrationTableColumnConvertRulesProps;
  component?: ComponentProps;
  sorter?: boolean;
}

export interface IntegrationTableProps extends FieldPublicProps {
  type: ComponentTypes.integrationTable;
  url: string;
  filters: {
    components: ComponentProps[];
  };
  columns: IntegrationTableColumnProps[];
};

export type ComponentProps =
  | IntegrationFormProps
  | SelectFieldProps
  | InputProps
  | TextareaProps
  | NumberProps
  | DateProps
  | ButtonProps
  | IntegrationTableProps;

export interface BaseInputPublicProps {
  label?: string;
  required?: boolean;
  labelCol?: number;
  initialValue?: string;
  disabled?: boolean;
}
