import React from 'react';
import { Input, Form, Radio, InputNumber } from 'antd';
import PublicPropsInput from '../Public';
import MaxInput from '../Public/MaxInput';
import HintInput from '../Public/HintInput';
import { BaseInputConfigProps } from '../../types';

export default function Textarea(config: BaseInputConfigProps) {
  return (
    <>
      <PublicPropsInput {...config} />
      {!config.isHideHint ? <HintInput /> : null}
      {!config.isHideInitialValue ? (
        <Form.Item name='initialValue' label='Initial Value'>
          <Input />
        </Form.Item>
      ) : null}
      <MaxInput />
    </>
  );
}
