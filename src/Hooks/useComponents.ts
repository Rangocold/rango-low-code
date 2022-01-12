import { ComponentProps } from '../types';
import { useCallback } from 'react';
import { useGlobalContext } from '../Stores';

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

  const updateComponentByUuid = useCallback(
    (uuid: string, newValue: ComponentProps, components?: ComponentProps[]) => {
      if (!Array.isArray(components)) {
        return false;
      }

      for (let i = 0; i < components.length; ++i) {
        const current = components[i];
        if (current.uuid === uuid) {
          components[i] = newValue;
          return true;
        }

        if ('components' in current) {
          const tmp = updateComponentByUuid(uuid, newValue, current.components);
          if (tmp) {
            return true;
          }
        }
      }

      return false;
    },
    [state.components]
  );

  return {
    findComponentByUuid,
    updateComponentByUuid,
  };
}
