export enum ComponentTypes {
  select = 1,
  input,
  textarea,
  date,
  number,
  button,
}

export const ComponentOptions = [
  {
    value: ComponentTypes.select,
    label: 'Select',
  },
  {
    value: ComponentTypes.input,
    label: 'Input',
  },
  {
    value: ComponentTypes.textarea,
    label: 'Textarea',
  },
  {
    value: ComponentTypes.date,
    label: 'Date',
  },
  {
    value: ComponentTypes.number,
    label: 'Number',
  },
  {
    value: ComponentTypes.button,
    label: 'Button',
  },
];