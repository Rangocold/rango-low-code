import type { ComponentProps } from '../types';

export interface ConfigDrawerProps {
  visible: boolean;
  onHideDrawer: () => void;
  onSave: (ComponentProps) => void;
}
