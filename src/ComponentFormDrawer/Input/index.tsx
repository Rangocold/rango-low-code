import React from 'react';
import { Input, Form } from 'antd';
import MaxInput from '../Public/MaxInput';
import PublicPropsInput from '../Public';
import HintInput from '../Public/HintInput';
import { BaseInputConfigProps } from '../../types';

export default function InputConfig(config: BaseInputConfigProps) {
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
