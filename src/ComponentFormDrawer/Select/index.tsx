import React from 'react';
import { Input, Form, Radio, InputNumber } from 'antd';
import PublicPropsInput from '../Public';
import OptionsConfig from './OptionsConfig';
import HintInput from '../Public/HintInput';
import { BaseInputConfigProps } from '../../types';

export default function SelectConfig(config: BaseInputConfigProps) {
  return (
    <>
      <PublicPropsInput {...config} />
      <Form.Item name='single' required label='Single'>
        <Radio.Group>
          <Radio value={true}>true</Radio>
          <Radio value={false}>false</Radio>
        </Radio.Group>
      </Form.Item>
      {!config.isHideHint ? <HintInput /> : null}
      <Form.Item name='options' required label='Options'>
        <OptionsConfig />
      </Form.Item>
    </>
  );
}