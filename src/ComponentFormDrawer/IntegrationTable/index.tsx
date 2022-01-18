import React from 'react';
import UUIDInput from '../Public/UUIDInput';
import { Input, Form } from 'antd';

export default function IntegrationTable() {
  return (
    <>
      <UUIDInput />
      <Form.Item label='Data Source Url' name='url'>
        <Input />
      </Form.Item>
    </>
  );
}
