import { ComponentTypes } from '../Toolbar/consts';
import { ComponentProps } from '../types';

export interface GlobalContextStateProps {
  components: ComponentProps[];
  editingComponentUuid: string;
  registedComponentsMap: Map<ComponentTypes, any>;
}
export type GlobalContextProps = {
  state: GlobalContextStateProps;
  dispatch: React.Dispatch<GlobalContextAction>;
};

export enum GlobalContextActionEnum {
  setComponents = 1,
  setEditingUuid = 2,
  setRegistedComponentsMap = 3,
}

export type GlobalContextActionPayload = unknown;

export type GlobalContextAction =
  | GlobalContextActionSetComponents
  | GlobalContextActionSetEditingUuid
  | GlobalContextActionSetRegistedComponentsMap;

export interface GlobalContextActionSetComponents {
  type: GlobalContextActionEnum.setComponents;
  payload: ComponentProps[];
}

export interface GlobalContextActionSetEditingUuid {
  type: GlobalContextActionEnum.setEditingUuid;
  payload: string;
}

export interface GlobalContextActionSetRegistedComponentsMap {
  type: GlobalContextActionEnum.setRegistedComponentsMap;
  payload: {
    componentType: ComponentTypes;
    componentConstructor: any;
  };
}