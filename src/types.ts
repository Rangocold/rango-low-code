import { ComponentTypes } from "./Toolbar/consts";

export interface FieldPublicProps {
  title: string;
  uuid: string;
}

export interface SelectFieldProps extends FieldPublicProps {
  type: ComponentTypes.select;
  options: { label: string; value: string }[];
  single: boolean;
}

export interface InputProps extends FieldPublicProps {
  type: ComponentTypes.input;
};

export interface TextareaProps extends FieldPublicProps {
  type: ComponentTypes.textarea;
};

export interface NumberProps extends FieldPublicProps {
  type: ComponentTypes.number;
};

export interface DateProps extends FieldPublicProps {
  type: ComponentTypes.date;
  showTime?: boolean;
};

export interface ButtonProps extends Omit<FieldPublicProps, 'title'> {
  type: ComponentTypes.button;
  text: string;
  url: string;
}

export interface IntegrationFormProps extends FieldPublicProps {
  type: ComponentTypes.interationForm;
  submitUrl: string;
}

export type ComponentProps = IntegrationFormProps | SelectFieldProps | InputProps | TextareaProps | NumberProps | DateProps | ButtonProps;