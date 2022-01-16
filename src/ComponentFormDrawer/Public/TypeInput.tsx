import React from 'react';
import { Input, Form } from 'antd';

export default function TypeInput() {
  return (
    <Form.Item name='type' hidden>
      <Input disabled />
    </Form.Item>
  );
}
