import React, { useMemo } from 'react';
import { Select as AntSelect, Form, SelectProps } from 'antd';
import { SelectFieldProps } from '../../../types';
import { isNil, wrap } from 'lodash';
import { wrapLabelWithHint } from '../utils';

export default function Select(props: SelectFieldProps) {
  const mode: SelectProps['mode'] = useMemo(() => {
    if (props.single === false) {
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
      name={props.fieldKey}
      label={wrapLabelWithHint(props.label, props.hint)}
      labelCol={labelCol}
      required={props.required}
    >
      <AntSelect
        options={props.options ?? []}
        disabled={props.disabled}
        mode={mode}
      />
    </Form.Item>
  );
}
