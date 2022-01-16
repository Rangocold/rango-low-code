import React from 'react';
import { InputNumber, Form } from 'antd';
import { NumberProps } from '../../types';
import PublicPropsInput from '../Public';
import MaxInput from '../Public/MaxInput';
import MinInput from '../Public/MinInput';

export default function Number(props: NumberProps) {
  return (
    <>
      <PublicPropsInput />

      <MaxInput />
      <MinInput />
    </>
  );
}
