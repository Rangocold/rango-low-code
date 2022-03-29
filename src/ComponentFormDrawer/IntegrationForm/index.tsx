import React from 'react';
import { Input, Form } from 'antd';
import { ComponentTypes } from '../../Toolbar/consts';
import { ComponentProps, IntegrationFormProps } from '../../types';
import { v4 as genUUID } from 'uuid';
import ComponentSelection from '../Public/ComponentSelection';
import UUIDInput from '../Public/UUIDInput';

// 暂时不用，先做固定渲染
export function getIntegrationFormDSL(
  props: IntegrationFormProps
): ComponentProps[] {
  return [
    {
      uuid: genUUID(),
      type: ComponentTypes.input,
      disabled: true,
      fieldKey: '',
    },
    {
      uuid: genUUID(),
      // @ts-ignore
      type: ComponentTypes.componentSelection,
    },
  ];
}

export default function IntegrationForm() {
  return (
    <>
      <UUIDInput />
      {/* TODO 实现api之后做成可选 */}
      <Form.Item name='submitUrl' rules={[{ required: true }]} label='Submit Url'>
        <Input />
      </Form.Item>
      <Form.Item name='components' label='Components'>
        <ComponentSelection />
      </Form.Item>
    </>
  );
}
