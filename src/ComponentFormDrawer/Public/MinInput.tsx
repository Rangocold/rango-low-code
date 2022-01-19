import React from 'react';
import { InputNumber, Form } from 'antd';
import { Width100Percent } from '../../consts';

export default function Min() {
  return (
    <Form.Item name='min' label='Min'>
      <InputNumber style={Width100Percent} />
    </Form.Item>
  );
}
