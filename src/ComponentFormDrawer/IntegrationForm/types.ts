import { ComponentProps } from "../../types";

export interface ComponentSelectionProps {
  value?: ComponentProps[];
  onChange?: (values: ComponentProps[]) => void;
}
