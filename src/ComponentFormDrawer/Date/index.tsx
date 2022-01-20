import React from 'react';
import { Input, Form } from 'antd';
import PublicPropsInput from '../Public';

export default function Date() {
  return (
    <>
      <PublicPropsInput />
      <Form.Item name='format' label='Format'>
        <Input />
      </Form.Item>
    </>
  )
}