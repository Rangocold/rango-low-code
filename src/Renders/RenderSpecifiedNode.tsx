import React, { useMemo } from 'react';
import { useGlobalContext } from '../Stores';
import { ComponentProps } from '../types';
import Container from './Container';

export function RenderSpecifiedNode(component: ComponentProps) {
  const { state } = useGlobalContext();
  const register = useMemo(() => {
    return state.registedComponentsMap;
  }, [state.registedComponentsMap]);

  const constructor = register[component.type];
  const node = (
    <Container key={component.uuid} uuid={component.uuid}>
      {constructor(component)}
    </Container>
  );

  if (React.isValidElement(node)) {
    return node;
  } else {
    return null;
  }
}
