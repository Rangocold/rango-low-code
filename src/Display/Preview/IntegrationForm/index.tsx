import React, { useCallback } from 'react';
import { Form, Button } from 'antd';
import { IntegrationFormProps } from '../../types';
import axios from 'axios';
import BaseForm from '../BaseForm';
import style from './style.module.css';

export default function IntegrationForm(props: IntegrationFormProps) {
  const [form] = Form.useForm();
  const onClick = useCallback(() => {
    form
      .validateFields()
      .then(() => {
        axios.post(props.submitUrl, form.getFieldsValue());
      })
      .catch((errors) => {
        form.scrollToField(errors[0].name);
      });
  }, [props]);
  return (
    <div className={style['integration_form__container']}>
      <Form
        form={form}
        className={style['integration_form__form']}
        layout='vertical'
      >
        <BaseForm components={props.components} />
      </Form>
      <Button
        type='primary'
        onClick={() => onClick()}
        className={style['integration_form__btn']}
      >
        {props?.button?.text}
      </Button>
    </div>
  );
}
