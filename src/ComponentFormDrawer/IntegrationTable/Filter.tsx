import React from 'react';
import UUIDInput from '../Public/UUIDInput';
import ComponentSelection from '../Public/ComponentSelection';
import { Form } from 'antd';
export default function FilterConfig() {
  return (
    <>
      <UUIDInput />
      <Form.Item name='components'>
        <ComponentSelection />
      </Form.Item>
    </>
  );
}
