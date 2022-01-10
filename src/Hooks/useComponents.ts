import { ComponentProps } from '../types';
import { useCallback } from 'react';
import { useGlobalContext } from '../Stores';
import { cloneDeep } from 'lodash';
import { clone } from '@babel/types';

export function useComponents() {
  const { state } = useGlobalContext();
  const findComponentByUuid = useCallback(
    (uuid: string, components?: ComponentProps[]) => {
      if (!Array.isArray(components)) {
        return undefined;
      }

      for (const component of components) {
        if (component.uuid === uuid) {
          return component;
        }

        if ('components' in component) {
          const tmp = findComponentByUuid(uuid, component?.components);
          if (tmp) {
            return tmp;
          }
        }
      }
      return undefined;
    },
    [state.components]
  );

  const updateComponentByUuid = useCallback((uuid: string, newValue: ComponentProps) => {
    
  }, [state.components]);

  return {
    findComponentByUuid,
  };
}
