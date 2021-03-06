import { ComponentTypes } from './Toolbar/consts';
import type { FormProps } from 'antd';
import { HTMLInputTypeAttribute } from 'react';
import { ComponentSelectionProps } from './ComponentFormDrawer/IntegrationForm/types';

export interface FieldPublicProps {
  uuid: string;
}

export interface BaseInputConfigProps {
  isHideHint?: boolean;
  isHideLabelCol?: boolean;
  isHideInitialValue?: boolean;
  isHideRequired?: boolean;
  isHideDisabled?: boolean;
}

export interface SelectFieldProps
  extends FieldPublicProps,
    Omit<BaseInputPublicProps, 'fieldConfig'> {
  type: ComponentTypes.select;
  options: { label: string; value: string }[];
  single: boolean;
  hint?: string;
  fieldConfig?: BaseInputConfigProps & {
    isOptionCustomUuid?: boolean;
  }
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

export type IntegrationTableColumnConvertRulesProps = {
  key: string;
  value: string;
}[];

export interface IntegrationTableColumnListProps extends FieldPublicProps {
  type: ComponentTypes.integrationTableColumnList;
  components: IntegrationTableColumnItemProps[];
}

export interface IntegrationTableColumnItemProps extends FieldPublicProps {
  type: ComponentTypes.integrationTableColumnItem;
  fieldName: string;
  fieldKey: string;
  convertRuleMap: IntegrationTableColumnConvertRulesProps;
  components?: ComponentProps[];
  sorter?: boolean;
}

export interface IntegrationTableFilterProps extends FieldPublicProps {
  type: ComponentTypes.integrationTableFilter;
  components: ComponentProps[];
}

export interface IntegrationTableProps extends FieldPublicProps {
  type: ComponentTypes.integrationTable;
  url: string;
  components: [IntegrationTableFilterProps, IntegrationTableColumnListProps];
}

export type ComponentProps =
  | IntegrationFormProps
  | SelectFieldProps
  | InputProps
  | TextareaProps
  | NumberProps
  | DateProps
  | ButtonProps
  | IntegrationTableProps
  | IntegrationTableColumnItemProps
  | IntegrationTableColumnListProps
  | IntegrationTableFilterProps;

export interface BaseInputPublicProps {
  label?: string;
  fieldKey: string;
  required?: boolean;
  labelCol?: number;
  initialValue?: string;
  disabled?: boolean;
  fieldConfig?: BaseInputConfigProps;
}

export interface ResponseProps<T> {
  code: number;
  message: string;
  data: T;
}