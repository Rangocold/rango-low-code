import React, { useCallback, useEffect } from 'react';
import { Drawer, Row, Col, Button, Form } from 'antd';
import { ConfigDrawerProps } from './types';
import { ComponentProps } from '../types';
import { useGlobalContext } from '../Stores';
import { useComponents } from '../Hooks/useComponents';

export default function ConfigDrawer({
  visible,
  onHideDrawer,
  onSave,
}: ConfigDrawerProps) {
  const { state, dispatch } = useGlobalContext();
  const [form] = Form.useForm<ComponentProps>();
  const { findComponentByUuid } = useComponents();

  useEffect(() => {
    const component = findComponentByUuid(state.editingComponentUuid);
    if (component) {
      form.setFieldsValue({ ...component });
    } else {
      form.setFieldsValue({});
    }

  }, [state.editingComponentUuid, state.components]);

  const onValuesChange = useCallback((_: unknown, allValues: ComponentProps) => {

  }, [state.editingComponentUuid, state.components]);
  return (
    <Drawer
      visible={visible}
      onClose={onHideDrawer}
      footer={
        <Row>
          <Col>
            <Button onClick={() => onHideDrawer()}>Cancel</Button>
          </Col>
          <Col>
            <Button onClick={() => onSave(form.getFieldsValue())}>Save</Button>
          </Col>
        </Row>
      }
    >
      <Form form={form} onValuesChange={onValuesChange}>

      </Form>
    </Drawer>
  );
}
