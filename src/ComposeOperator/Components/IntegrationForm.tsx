import React, { useCallback } from "react";
import { Button, Form } from "antd";
import axios from "axios";
import type { IntegrationFormProps } from "../../types";

export default function IntegrationForm(config: IntegrationFormProps) {
  const [form] = Form.useForm();
  const { components } = config;

  const onSubmit = useCallback(() => {
    const data = form.getFieldsValue();
    axios.post(config.submitUrl, data);
  }, [form, config.submitUrl]);
  return (
    <div>
      <Form form={form}></Form>
      <Button onClick={() => onSubmit()}>Submit</Button>
    </div>
  );
}
