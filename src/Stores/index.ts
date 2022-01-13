import React, { useContext, useReducer } from 'react';
import {
  GlobalContextStateProps,
  GlobalContextAction,
  GlobalContextActionEnum,
  GlobalContextProps,
} from './types';

export function reducer(
  state: GlobalContextStateProps,
  action: GlobalContextAction
): GlobalContextStateProps {
  switch (action.type) {
    case GlobalContextActionEnum.setComponents: {
      state.components = action.payload;
      return { ...state };
    }
    case GlobalContextActionEnum.setEditingUuid: {
      state.editingComponentUuid = action.payload;
      return { ...state };
    }
    case GlobalContextActionEnum.setRegistedComponentsMap: {
      state.registedComponentsMap.set(
        action.payload.componentType,
        action.payload.componentConstructor
      );
      return { ...state };
    }
  }
}

export const InitialContextPure: GlobalContextStateProps = {
  components: [],
  editingComponentUuid: '',
  registedComponentsMap: new Map(),
};

export const GlobalContext = React.createContext<GlobalContextProps>({
  state: InitialContextPure,
  dispatch: () => null,
});

export function useGlobalContext(): GlobalContextProps {
  return useContext<GlobalContextProps>(GlobalContext);
}

export function useGlobalContextReducer() {
  const [state, dispatch] = useReducer(reducer, InitialContextPure);
  return {
    state,
    dispatch,
  };
}
