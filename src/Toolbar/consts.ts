import { ComponentProps } from '../types';
import { v4 as genUUID } from 'uuid';

export enum ComponentTypes {
  select = 1,
  input,
  textarea,
  date,
  number,
  button,
  interationForm,
}

export const DefaultComponentMap: Record<ComponentTypes, ComponentProps> = {
  [ComponentTypes.select]: {
    title: '',
    uuid: genUUID(),
    type: ComponentTypes.select,
    options: [],
    single: true,
  },
  [ComponentTypes.input]: {
    title: '',
    uuid: genUUID(),
    type: ComponentTypes.input,
  },
  [ComponentTypes.textarea]: {
    title: '',
    uuid: genUUID(),
    type: ComponentTypes.textarea,
  },
  [ComponentTypes.date]: {
    title: '',
    uuid: genUUID(),
    type: ComponentTypes.date,
    showTime: true,
  },
  [ComponentTypes.number]: {
    title: '',
    uuid: genUUID(),
    type: ComponentTypes.number,
  },
  [ComponentTypes.button]: {
    text: '',
    url: '',
    uuid: genUUID(),
    type: ComponentTypes.button,
  },
};

export const ComponentOptions = [
  {
    value: ComponentTypes.interationForm,
    label: 'Interation Form',
  },
  {
    value: ComponentTypes.select,
    label: 'Select',
    disabled: true,
  },
  {
    value: ComponentTypes.input,
    label: 'Input',
    disabled: true,
  },
  {
    value: ComponentTypes.textarea,
    label: 'Textarea',
    disabled: true,
  },
  {
    value: ComponentTypes.date,
    label: 'Date',
    disabled: true,
  },
  {
    value: ComponentTypes.number,
    label: 'Number',
    disabled: true,
  },
  {
    value: ComponentTypes.button,
    label: 'Button',
    disabled: true,
  },
];
