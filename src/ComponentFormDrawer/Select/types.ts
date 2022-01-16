export interface Option {
  label: string;
  value: string;
}

export interface OptionsConfigProps {
  value?: Option[];
  onChange?: (tmp: Option[]) => void;
}