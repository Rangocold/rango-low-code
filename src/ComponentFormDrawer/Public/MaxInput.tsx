import React from 'react';
import { InputNumber, Form } from 'antd';

export default function Max() {
  return (
    <Form.Item name='max' label='Max'>
      <InputNumber />
    </Form.Item>
  );
}
