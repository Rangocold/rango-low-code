import React from 'react';
import { InputNumber, Form } from 'antd';

export default function Min() {
  return (
    <Form.Item name='min' label='Min'>
      <InputNumber />
    </Form.Item>
  );
}
