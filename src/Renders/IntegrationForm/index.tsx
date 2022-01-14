import React, { useCallback } from 'react';
import { Form, Button } from 'antd';
import { IntegrationFormProps } from '../../types';
import { RenderSpecifiedNode } from '../RenderSpecifiedNode';
import axios from 'axios';
import BaseForm from '../BaseForm';

export default function IntegrationForm(props: IntegrationFormProps) {
  const [form] = Form.useForm();
  const onClick = useCallback(() => {
    form
      .validateFields()
      .then(() => {
        axios.post(props.button.url, form.getFieldsValue());
      })
      .catch((errors) => {
        form.scrollToField(errors[0].name);
      });
  }, [props]);
  return (
    <>
      <Form form={form}>
        <BaseForm components={props.components} />
      </Form>
      <Button type='primary' onClick={() => onClick()}>
        {props.button.text}
      </Button>
    </>
  );
}
