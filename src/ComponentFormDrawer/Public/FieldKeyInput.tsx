import React from 'react';
import { Form, Input } from 'antd';

export default function FieldKeyInput() {
  return (
    <Form.Item name='fieldKey' label='Field Key' rules={[{ required: true }]}>
      <Input />
    </Form.Item>
  );
}
