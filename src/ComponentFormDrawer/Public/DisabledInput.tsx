import React from 'react';
import { Radio, Form } from 'antd';

export default function Disabled() {
  return (
    <Form.Item name='disabled' required label='Disabled'>
      <Radio.Group>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
    </Form.Item>
  );
}
