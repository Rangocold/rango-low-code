import React, { useMemo } from 'react';
import { InputNumber, Form } from 'antd';
import { NumberProps } from '../../../types';
import { isNil } from 'lodash';
import { Rule } from 'rc-field-form/lib/interface';

export default function Number(props: NumberProps) {
  const rules = useMemo(() => {
    const res: Rule[] = [];
    if (!isNil(props.min)) {
      res.push({
        type: 'number',
        min: props.min,
      });
    }
    if (!isNil(props.max)) {
      res.push({
        type: 'number',
        max: props.max,
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
      <InputNumber />
    </Form.Item>
  );
}
