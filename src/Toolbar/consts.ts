export enum ComponentTypes {
  select = 1,
  input,
  textarea,
  date,
  number,
  button,
  interationForm,
}

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