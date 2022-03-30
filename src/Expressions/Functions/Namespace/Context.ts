import { useCallback } from 'react';
import { useGlobalContextReducer } from '../../../Stores';
import { ComponentProps } from '../../../types';

export function useContextNameSpace() {
  const { state } = useGlobalContextReducer();
  const getComponentByUuid = useCallback((uuid: string, componentList?: ComponentProps[]) => {
    if (!Array.isArray(componentList)) {
      componentList = state.components;
    }

    for (const component of componentList) {
      if (component.uuid === uuid) {
        return component;
      }

      if ('components' in component && Array.isArray(component.components)) {
        const target = getComponentByUuid(uuid, component.components) as ComponentProps;
        if (target) {
          return target;
        }
      } else {
        return undefined;
      }
    }
  }, [state.components]);
  return {
    getComponentByUuid,
  };
}