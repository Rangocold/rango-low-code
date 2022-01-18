import { ComponentType } from "react";
import { ComponentProps } from "../../types";

export interface ComponentSelectionProps {
  value?: ComponentProps[];
  onChange?: (values: ComponentProps[]) => void;
  options?: { label: string; value: ComponentProps; }[];
}
