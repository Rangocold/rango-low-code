import React from 'react';
import { Input, Form } from 'antd';

export default function UUID() {
  return (
    <Form.Item name='uuid' label='UUID'>
      <Input disabled />
    </Form.Item>
  );
}
