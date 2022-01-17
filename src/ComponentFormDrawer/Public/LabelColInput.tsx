import React from 'react';
import { InputNumber, Form } from 'antd';
import { Width100Percent } from '../../consts';

export default function LabelCol() {
  return (
    <Form.Item name='labelCol' label='Label Col'>
      <InputNumber style={Width100Percent} />
    </Form.Item>
  );
}
