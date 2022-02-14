import React, { useCallback, useEffect, useState } from 'react';
import { Form, Layout } from 'antd';
import { ComponentProps } from '../types';
import { useGlobalContext } from '../Stores';
import { useComponents } from '../Hooks/useComponents';
import { useRenderPreviewNode } from '../Display/Preview/useRenderPreviewNode';
import { useRenderConfig } from './useRenderConfig';
import TypeInput from './Public/TypeInput';
import style from './style.module.css';
import { GlobalContextActionEnum } from '../Stores/types';

export default function ConfigDrawer() {
  const { state, dispatch } = useGlobalContext();
  const [form] = Form.useForm<ComponentProps>();
  const [editingComponent, setEditingComponent] = useState<ComponentProps>();
  const { findComponentByUuid, updateComponentByUuid } = useComponents();
  const { renderConfig } = useRenderConfig();
  const initConfigForm = useCallback(() => {
    form.resetFields();
    const component = findComponentByUuid(
      state.editingComponentUuid,
      state.components
    );
    if (component) {
      form.setFieldsValue({ ...component });
      setEditingComponent(component);
    } else {
      setEditingComponent(undefined);
    }
  }, [state.editingComponentUuid, form]);

  const onValuesChange = useCallback(() => {
    const formData = form.getFieldsValue(true);
    updateComponentByUuid(
      state.editingComponentUuid,
      formData,
      state.components
    );
    dispatch({
      type: GlobalContextActionEnum.setComponents,
      payload: state.components,
    });
  }, [state.editingComponentUuid, state.components, form, dispatch]);

  useEffect(() => {
    initConfigForm();
  }, [initConfigForm, state.editingComponentUuid]);
  return editingComponent ? (
    <Layout.Sider
      className={style['config_form__container']}
      width={400}
      theme='light'
    >
      <Form form={form} onValuesChange={onValuesChange} layout={'vertical'}>
        <TypeInput />
        {'fieldConfig' in editingComponent
          ? renderConfig(editingComponent.type, editingComponent.fieldConfig)
          : renderConfig(editingComponent.type)}
      </Form>
    </Layout.Sider>
  ) : null;
}
