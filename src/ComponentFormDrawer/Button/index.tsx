import React from 'react';
import { Input, Form } from 'antd';
import UUIDInput from '../Public/UUIDInput';

export default function Button() {
  return (
    <>
      <UUIDInput />
      <Form.Item name='text' required>
        <Input />
      </Form.Item>
    </>
  );
}
