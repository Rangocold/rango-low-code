import { ComponentType } from "react";
import { ComponentTypes } from "../../Toolbar/consts";
import { ComponentProps } from "../../types";

export interface ComponentSelectionProps {
  value?: ComponentProps[];
  onChange?: (values: ComponentProps[]) => void;
  options?: { label: string; value: ComponentTypes; }[];
}
