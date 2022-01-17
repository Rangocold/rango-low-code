import React from 'react';
import { Input, Form, Radio, InputNumber } from 'antd';
import PublicPropsInput from '../Public';
import OptionsConfig from './OptionsConfig';

export default function SelectConfig() {
  return (
    <>
      <PublicPropsInput />
      <Form.Item name='single' required label='Single'>
        <Radio.Group>
          <Radio value={true}>true</Radio>
          <Radio value={false}>false</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name='options' required label='Options'>
        <OptionsConfig />
      </Form.Item>
    </>
  );
}