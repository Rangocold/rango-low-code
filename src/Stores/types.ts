import React from 'react';
import { ComponentTypes } from '../Toolbar/consts';
import { ComponentProps } from '../types';

interface DeveloperProps {
  developerId: string;
  displayName: string;
  photoUrl: string;
}
export interface GlobalContextStateProps {
  components: ComponentProps[];
  editingComponentUuid: string;
  registedComponentsMap: Map<ComponentTypes, any>;
  currentDeveloper?: DeveloperProps;
}

export type GlobalContextProps = {
  state: GlobalContextStateProps;
  dispatch: React.Dispatch<GlobalContextAction>;
};

export enum GlobalContextActionEnum {
  setComponents = 1,
  setEditingUuid = 2,
  setRegistedComponentsMap = 3,
  setCurrentDeveloper = 4,
}

export type GlobalContextActionPayload = unknown;

export type GlobalContextAction =
  | GlobalContextActionSetComponents
  | GlobalContextActionSetEditingUuid
  | GlobalContextActionSetRegistedComponentsMap
  | GlobalContextActionSetCurrentDeveloper;

export interface GlobalContextActionSetCurrentDeveloper {
  type: GlobalContextActionEnum.setCurrentDeveloper;
  payload: DeveloperProps;
}

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
