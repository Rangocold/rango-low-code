import React from 'react';
import { Input, Form } from 'antd';

export default function Label() {
  return (
    <Form.Item name='label' required label='label'>
      <Input />
    </Form.Item>
  );
}
