import React from 'react';
import { ComponentTypes } from '../../Toolbar/consts';
import { ComponentProps, IntegrationFormProps } from '../../types';
import { v4 as genUUID } from 'uuid';
import { RenderSpecifiedNode } from '../../Renders/RenderSpecifiedNode';

export function getIntegrationFormDSL(props: IntegrationFormProps): ComponentProps[] {
  return [
    {
      uuid: genUUID(),
      type: ComponentTypes.input,
      disabled: true,
    },
    {
      uuid: genUUID(),
      type: ComponentTypes.arraySelection,
    },
  ];
}

export default function IntegrationForm(props: IntegrationFormProps) {
  return (
    <>
      {props.components.map(RenderSpecifiedNode)}
    </>
  )
}
