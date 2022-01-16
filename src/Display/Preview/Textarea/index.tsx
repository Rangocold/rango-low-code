import React, { useMemo } from 'react';
import { isNil } from 'lodash';
import { Input, Form } from 'antd';
import { TextareaProps } from '../../../types';
import { Rule } from 'rc-field-form/lib/interface';

export default function Textarea(props: TextareaProps) {
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
  const labelCol = useMemo(() => {
    if (!isNil(props.labelCol)) {
      return {
        span: props.labelCol,
      };
    }
  }, [props.labelCol]);
  return (
    <Form.Item
      name={props.uuid}
      rules={rules}
      labelCol={labelCol}
      label={props.label}
    >
      <Input.TextArea disabled={props.disabled} />
    </Form.Item>
  );
}
