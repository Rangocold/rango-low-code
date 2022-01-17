import React from 'react';
import { Input, Form } from 'antd';
import MaxInput from '../Public/MaxInput';
import PublicPropsInput from '../Public';

export default function InputConfig() {
  return (
    <>
      <PublicPropsInput />
      <Form.Item name='initialValue' label='Initial Value'>
        <Input />
      </Form.Item>
      <MaxInput />
    </>
  );
}