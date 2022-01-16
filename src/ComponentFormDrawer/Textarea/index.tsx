import React from 'react';
import { Input, Form, Radio, InputNumber } from 'antd';
import PublicPropsInput from '../Public';
import MaxInput from '../Public/MaxInput';

export default function Textarea() {
  return (
    <>
      <PublicPropsInput />
      <Form.Item name='initialValue'>
        <Input />
      </Form.Item>
      <MaxInput />
    </>
  );
}