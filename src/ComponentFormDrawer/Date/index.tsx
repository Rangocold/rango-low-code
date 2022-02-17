import React from 'react';
import { Input, Form } from 'antd';
import PublicPropsInput from '../Public';
import HintInput from '../Public/HintInput';
import { BaseInputConfigProps } from '../../types';
import FieldKeyInput from '../Public/FieldKeyInput';
export default function Date(config: BaseInputConfigProps) {
  return (
    <>
      <PublicPropsInput {...config} />
      {!config.isHideHint ? <HintInput /> : null}
      <Form.Item name='format' label='Format'>
        <Input />
      </Form.Item>
    </>
  )
}