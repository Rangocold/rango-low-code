import React, { useMemo } from 'react';
import { DateProps } from '../../../types';
import { Form } from 'antd';
import DatePicker from '../../../BaseComponents/DatePicker';
import { isNil } from 'lodash';
import { DefaultDateFormat } from '../../../consts';
import { Dayjs } from 'dayjs';
import { wrapLabelWithHint } from '../utils';

export default function Date(props: DateProps) {
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
      rules={[
        {
          required: props.required,
        },
      ]}
      label={wrapLabelWithHint(props.label, props.hint)}
      labelCol={labelCol}
      getValueProps={(value: string) => {
        return { value: new Dayjs(value) };
      }}
      getValueFromEvent={(day: Dayjs) => {
        return day.format(props.format);
      }}
    >
      <DatePicker
        format={props?.format ? props.format : DefaultDateFormat}
        showTime={props.showTime}
      />
    </Form.Item>
  );
}
