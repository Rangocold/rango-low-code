import { ComponentTypes } from './Toolbar/consts';
import type { FormProps } from 'antd';

export interface FieldPublicProps {
  uuid: string;
}

export interface SelectFieldProps
  extends FieldPublicProps,
    BaseInputPublicProps {
  type: ComponentTypes.select;
  options: { label: string; value: string }[];
  single: boolean;
}

export interface InputProps extends FieldPublicProps, BaseInputPublicProps {
  type: ComponentTypes.input;
  max?: number;
}

export interface TextareaProps extends FieldPublicProps, BaseInputPublicProps {
  type: ComponentTypes.textarea;
  max?: number;
}

export interface NumberProps extends FieldPublicProps, BaseInputPublicProps {
  type: ComponentTypes.number;
  max?: number;
  min?: number;
}

export interface DateProps extends FieldPublicProps, BaseInputPublicProps {
  type: ComponentTypes.date;
  showTime?: boolean;
}

export interface ButtonProps extends FieldPublicProps {
  type: ComponentTypes.button;
  text: string;
}

// no uuid, because not for user
export interface BaseFormProps {
  components: ComponentProps[];
}

export interface IntegrationFormProps extends FieldPublicProps {
  type: ComponentTypes.interationForm;
  submitUrl: string;
  button: ButtonProps;
  components: BaseFormProps['components'];
}

export interface IntegrationTableProps extends FieldPublicProps {
  url: string;
  searchBar: {
    components: ComponentProps[];
  };
  filterBar: {
    items: { label: string; value: string; }[];
    defaultValue?: string;
  };
  columns: {
    fieldName: string;
    fieldKey: string;
    convertRuleMap: Map<string, string>;
    component?: ComponentProps;
  }[];
  pagination: {
    defaultPageSize?: number;
    defaultPageNumber?: number;
  };
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
