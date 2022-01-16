import React, { useCallback, useEffect, useState } from 'react';
import { Form, Layout } from 'antd';
import { ComponentProps } from '../types';
import { useGlobalContext } from '../Stores';
import { useComponents } from '../Hooks/useComponents';
import { useRenderPreviewNode } from '../Display/Preview/useRenderPreviewNode';
import { useRenderConfig } from './useRenderConfig';
import style from './style.module.css';

export default function ConfigDrawer() {
  const { state, dispatch } = useGlobalContext();
  const [form] = Form.useForm<ComponentProps>();
  const [editingComponent, setEditingComponent] = useState<ComponentProps>();
  const { findComponentByUuid, updateComponentByUuid } = useComponents();
  const { renderConfig } = useRenderConfig();
  const initConfigForm = useCallback(() => {
    const component = findComponentByUuid(
      state.editingComponentUuid,
      state.components
    );
    if (component) {
      form.setFieldsValue({ ...component });
      setEditingComponent(component);
    } else {
      form.setFieldsValue({});
      setEditingComponent(undefined);
    }
  }, [state.editingComponentUuid, form]);

  const onValuesChange = useCallback(
    (_: unknown, allValues: ComponentProps) => {
      updateComponentByUuid(state.editingComponentUuid, allValues, state.components);
    },
    [state.editingComponentUuid, state.components]
  );

  useEffect(() => {
    initConfigForm();
  }, [initConfigForm, state.editingComponentUuid]);
  return (
    <Layout.Sider className={style['config_form__container']} width={400} theme='light'>
      <Form form={form} onValuesChange={onValuesChange} layout={'vertical'}>
        {renderConfig(editingComponent?.type)}
      </Form>
    </Layout.Sider>
  );
}
