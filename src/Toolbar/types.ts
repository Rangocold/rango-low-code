import { ComponentTypes } from "./consts";
import type { ComponentProps } from "../types";

export interface ToolbarProps {
  onAddField: (fieldType: ComponentProps) => void;
}