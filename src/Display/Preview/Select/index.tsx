import React, { useMemo } from 'react';
import { Select as AntSelect, Form, SelectProps } from 'antd';
import { SelectFieldProps } from '../../../types';
import { isNil } from 'lodash';

export default function Select(props: SelectFieldProps) {
  const mode: SelectProps['mode'] = useMemo(() => {
    if (props.single) {
      return 'tags';
    } else {
      return 'multiple';
    }
  }, [props.single]);
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
      label={props.label}
      labelCol={labelCol}
      required={props.required}
    >
      <AntSelect
        options={props.options}
        disabled={props.disabled}
        mode={mode}
      />
    </Form.Item>
  );
}
