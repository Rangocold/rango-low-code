import React, { useMemo, useCallback } from 'react';
import { useGlobalContext } from '../../Stores';
import { ComponentProps } from '../../types';
import Container from './Container';

export function useRenderPreviewNode() {
  const { state } = useGlobalContext();
  const renderPreviewNode = useCallback(
    (component: ComponentProps) => {
      const register = state.registedComponentsMap;
      const func = register.get(component.type);
      const node =
        typeof func === 'function'
          ? React.createElement(func, component)
          : null;
      return React.isValidElement(node) ? (
        <Container key={component.uuid} uuid={component.uuid}>
          {node}
        </Container>
      ) : null;
    },
    [state.registedComponentsMap]
  );

  return {
    renderPreviewNode,
  };
}
