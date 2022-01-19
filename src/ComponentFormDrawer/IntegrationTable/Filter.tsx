import React from 'react';
import UUIDInput from '../Public/UUIDInput';
import ComponentSelection from '../Public/ComponentSelection';
import { Form } from 'antd';
export default function FilterConfig() {
  return (
    <>
      <Form.Item name={['filters', 'components']}>
        <ComponentSelection />
      </Form.Item>
    </>
  );
}
