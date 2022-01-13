import React from 'react';
import { useGlobalContext } from '../Stores';
import { RenderSpecifiedNode } from './RenderSpecifiedNode';

export default function Renders() {
  const { state } = useGlobalContext();
  return (
    <div>
      {state.components.map((component) => RenderSpecifiedNode(component))}
    </div>
  );
}
