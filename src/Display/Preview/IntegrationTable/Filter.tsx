import React from 'react';
import { Card, Form } from 'antd';
import { IntegrationTableProps } from '../../../types';
import BaseForm from '../BaseForm';

export default function IntegrationTableFilters(
  props: IntegrationTableProps['filters']
) {
  const [form] = Form.useForm();
  return (
    <Card>
      <Form form={form}>
        <BaseForm components={props.components} />
      </Form>
    </Card>
  );
}
