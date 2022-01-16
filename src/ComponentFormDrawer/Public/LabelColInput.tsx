import React from 'react';
import { InputNumber, Form } from 'antd';

export default function LabelCol() {
  return (
    <Form.Item name='labelCol' label='Label Col'>
      <InputNumber />
    </Form.Item>
  );
}
