import React, { useMemo } from 'react';
import { Select as AntSelect, Form, SelectProps } from 'antd';
import { SelectFieldProps } from '../../../types';

export default function Select(props: SelectFieldProps) {
  const mode: SelectProps['mode'] = useMemo(() => {
    if (props.single) {
      return 'tags';
    } else {
      return 'multiple';
    }
  }, [props.single]);
  return (
    <Form.Item name={props.uuid}>
      <AntSelect
        options={props.options}
        disabled={props.disabled}
        mode={mode}
      />
    </Form.Item>
  );
}
