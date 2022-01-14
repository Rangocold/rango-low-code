import React from 'react';
import { ComponentTypes } from '../Toolbar/consts';
import { ComponentProps, IntegrationFormProps } from '../types';
import { v4 as genUUID } from 'uuid';
import { RenderSpecifiedNode } from '../Renders/RenderSpecifiedNode';
import { Input } from 'antd';

export function getIntegrationFormDSL(props: IntegrationFormProps): ComponentProps[] {
  return [
    {
      uuid: genUUID(),
      type: ComponentTypes.input,
      disabled: true,
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
