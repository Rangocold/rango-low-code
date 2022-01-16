import React from 'react';
import { Input, Form } from 'antd';
import MaxInput from '../Public/MaxInput';
import PublicPropsInput from '../Public';

export default function InputConfig() {
  return (
    <>
      <PublicPropsInput />
      <Form.Item name='label'>
        <Input />
      </Form.Item>
      <Form.Item name='initialValue'>
        <Input />
      </Form.Item>
      <MaxInput />
    </>
  );
}