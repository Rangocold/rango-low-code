import React, { useMemo } from 'react';
import { Input as AntInput, Form } from 'antd';
import { InputProps } from '../../../types';
import { isNil } from 'lodash';
import { Rule } from 'rc-field-form/lib/interface';
import style from './style.module.css';

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
      label={props.label}
      labelCol={labelCol}
    >
      <AntInput disabled={props.disabled} className={style['preview__input']} />
    </Form.Item>
  );
}
