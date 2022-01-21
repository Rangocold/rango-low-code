import React, { useMemo } from 'react';
import { InputNumber, Form } from 'antd';
import { NumberProps } from '../../../types';
import { isNil } from 'lodash';
import { Rule } from 'rc-field-form/lib/interface';
import { Width100Percent } from '../../../consts';
import { wrapLabelWithHint } from '../utils';

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
      label={wrapLabelWithHint(props.label, props.hint)}
      labelCol={labelCol}
    >
      <InputNumber style={Width100Percent} />
    </Form.Item>
  );
}
