import { ComponentProps } from '../types';
import type { ComponentTypes } from './consts';

export interface ToolbarProps {
  onAddComponent: (componentType: ComponentTypes) => void;
  componentList: ComponentProps[];
}
