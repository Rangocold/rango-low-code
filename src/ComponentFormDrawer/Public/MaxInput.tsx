import React from 'react';
import { InputNumber, Form } from 'antd';
import { Width100Percent } from '../../consts';

export default function Max() {
  return (
    <Form.Item name='max' label='Max'>
      <InputNumber style={Width100Percent} />
    </Form.Item>
  );
}
