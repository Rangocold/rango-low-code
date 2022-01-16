import React from 'react';
import { Radio, Form } from 'antd';

export default function Required() {
  return (
    <Form.Item name='required' required label='Required'>
      <Radio.Group>
        <Radio value={true}>true</Radio>
        <Radio value={false}>false</Radio>
      </Radio.Group>
    </Form.Item>
  );
}
