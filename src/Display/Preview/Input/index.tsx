import React, { useMemo } from 'react';
import { Input as AntInput, Form } from 'antd';
import { InputProps } from '../../../types';
import { isNil } from 'lodash';
import { Rule } from 'rc-field-form/lib/interface';

export default function Input(props: InputProps) {
  const rules = useMemo(() => {
    const res: Rule[] = [];
    if (!isNil(props.max)) {
      res.push({
        max: props.max,
        type: 'string',
      });
    }
    if (props.required) {
      res.push({
        required: true,
        type: 'string',
      });
    }
    return res;
  }, [props]);
  return (
    <Form.Item name={props.uuid} rules={rules}>
      <AntInput disabled={props.disabled} />
    </Form.Item>
  );
}
