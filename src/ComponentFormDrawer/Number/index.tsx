import React from 'react';
import { InputNumber, Form } from 'antd';
import { BaseInputConfigProps, NumberProps } from '../../types';
import PublicPropsInput from '../Public';
import MaxInput from '../Public/MaxInput';
import MinInput from '../Public/MinInput';
import HintInput from '../Public/HintInput';

export default function Number(config: BaseInputConfigProps) {
  return (
    <>
      <PublicPropsInput {...config} />
      {!config.isHideHint ? <HintInput /> : null}
      <MaxInput />
      <MinInput />
    </>
  );
}
