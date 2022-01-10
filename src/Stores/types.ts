import { ComponentProps } from '../types';

export interface GlobalContextStateProps {
  components: ComponentProps[];
  editingComponentUuid: string;
}
export type GlobalContextProps = {
  state: GlobalContextStateProps;
  dispatch: React.Dispatch<GlobalContextAction>;
}

export enum GlobalContextActionEnum {
  setComponents = 1,
  setEditingUuid = 2,
}

export type GlobalContextActionPayload = unknown;

export type GlobalContextAction = GlobalContextActionSetComponents | GlobalContextActionSetEditingUuid;

export interface GlobalContextActionSetComponents {
  type: GlobalContextActionEnum.setComponents;
  payload: ComponentProps[];
}

export interface GlobalContextActionSetEditingUuid {
  type: GlobalContextActionEnum.setEditingUuid,
  payload: string;
}