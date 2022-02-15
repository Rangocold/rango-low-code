import React from 'react';
import { Radio, Form } from 'antd';
import { BaseInputConfigProps } from '../../types';

function IComponents({ value, onChange }: {
  value?: BaseInputConfigProps;
  onChange?: (newValue: BaseInputConfigProps) => void;
}) {
  return <></>
}

export default function FieldConfig() {
  return (
    <Form.Item name='fieldConfig' hidden>
      <IComponents />
    </Form.Item>
  );
}
