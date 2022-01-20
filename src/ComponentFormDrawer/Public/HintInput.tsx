import React from 'react';
import { Form, Input } from 'antd';

export default function HintInput() {
  return (
    <Form.Item name='hint' label='Hint'>
      <Input />
    </Form.Item>
  )
}