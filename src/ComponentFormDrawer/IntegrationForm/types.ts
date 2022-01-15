export interface ComponentSelectionProps {
  options: {
    value: number | string;
    label: string;
  }[];
  value?: (number | string)[];
  defaultValue: number | string;
  onChange?: (values: (number | string)[]) => void;
}
