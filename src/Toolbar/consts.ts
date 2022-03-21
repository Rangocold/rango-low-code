import { ComponentProps } from '../types';
import { v4 as genUUID } from 'uuid';
import { DefaultDateFormat } from '../consts';

export enum ComponentTypes {
  select = 1,
  input,
  textarea,
  date,
  number,
  button,
  interationForm,
  componentSelection,
  integrationTable,
  integrationTableFilter,
  integrationTableColumnList,
  integrationTableColumnItem,
}

/* export const DefaultComponentMap: Record<ComponentTypes, ComponentProps> = {
  [ComponentTypes.select]: {
    uuid: genUUID(),
    type: ComponentTypes.select,
    options: [],
    single: true,
  },
  [ComponentTypes.input]: {
    uuid: genUUID(),
    type: ComponentTypes.input,
  },
  [ComponentTypes.textarea]: {
    uuid: genUUID(),
    type: ComponentTypes.textarea,
  },
  [ComponentTypes.date]: {
    uuid: genUUID(),
    type: ComponentTypes.date,
    format: DefaultDateFormat,
  },
  [ComponentTypes.number]: {
    uuid: genUUID(),
    type: ComponentTypes.number,
  },
  [ComponentTypes.button]: {
    text: '',
    uuid: genUUID(),
    type: ComponentTypes.button,
  },
  [ComponentTypes.interationForm]: {
    uuid: genUUID(),
    type: ComponentTypes.interationForm,
    components: [],
    submitUrl: '',
    button: {
      type: ComponentTypes.button,
      uuid: genUUID(),
      text: '',
    },
  },
  [ComponentTypes.componentSelection]: {
    uuid: genUUID(),
    type: ComponentTypes.componentSelection,
  },
};
 */
export const ComponentOptions: {
  value: ComponentTypes;
  label: string;
  disabled?: boolean;
}[] = [
  {
    value: ComponentTypes.interationForm,
    label: 'Interation Form',
  },
  {
    value: ComponentTypes.select,
    label: 'Select',
    //disabled: true,
  },
  {
    value: ComponentTypes.input,
    label: 'Input',
    //disabled: true,
  },
  {
    value: ComponentTypes.textarea,
    label: 'Textarea',
    //disabled: true,
  },
  {
    value: ComponentTypes.date,
    label: 'Date',
    //disabled: true,
  },
  {
    value: ComponentTypes.number,
    label: 'Number',
    //disabled: true,
  },
  {
    value: ComponentTypes.button,
    label: 'Button',
    //disabled: true,
  },
  {
    label: 'Array Selection',
    value: ComponentTypes.componentSelection,
  },
  {
    label: 'Table',
    value: ComponentTypes.integrationTable,
  },
];

export const BasicInputTypes = [
  ComponentTypes.select,
  ComponentTypes.input,
  ComponentTypes.textarea,
  ComponentTypes.date,
  ComponentTypes.number,
];

export const BasicInputOptions = ComponentOptions.filter((option) =>
  BasicInputTypes.includes(option.value)
);

export const ToolbarOptionsTypes = [
  ComponentTypes.interationForm,
  ComponentTypes.integrationTable,
];

export const ToolbarOptions = ComponentOptions.filter((option) =>
  ToolbarOptionsTypes.includes(option.value)
);
