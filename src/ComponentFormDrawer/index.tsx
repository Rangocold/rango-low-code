import React, { useCallback, useEffect } from 'react';
import { Form, Layout } from 'antd';
import { ConfigDrawerProps } from './types';
import { ComponentProps } from '../types';
import { useGlobalContext } from '../Stores';
import { useComponents } from '../Hooks/useComponents';

export default function ConfigDrawer() {
  const { state, dispatch } = useGlobalContext();
  const [form] = Form.useForm<ComponentProps>();
  const { findComponentByUuid, updateComponentByUuid } = useComponents();

  const initConfigForm = useCallback(() => {
    const component = findComponentByUuid(state.editingComponentUuid);
    if (component) {
      form.setFieldsValue({ ...component });
    } else {
      form.setFieldsValue({});
    }
  }, [state.editingComponentUuid, form]);

  const onValuesChange = useCallback(
    (_: unknown, allValues: ComponentProps) => {
      updateComponentByUuid(state.editingComponentUuid, allValues);
    },
    [state.editingComponentUuid, state.components]
  );

  useEffect(() => {
    initConfigForm();
  }, [initConfigForm, state.editingComponentUuid]);
  return (
    <Layout.Sider>
      <Form form={form} onValuesChange={onValuesChange}>
        {/* todo render by fields */}
      </Form>
    </Layout.Sider>
  );
}
