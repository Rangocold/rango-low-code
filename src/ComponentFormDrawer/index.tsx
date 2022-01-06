import React, { ComponentProps } from 'react';
import { Drawer, Row, Col, Button, Form } from 'antd';
import { ConfigDrawerProps } from './types';

export default function ConfigDrawer({ visible, onHideDrawer, onSave }: ConfigDrawerProps) {
  const [form] = Form.useForm<ComponentProps>();
  return (
    <Drawer
      visible={visible}
      onClose={onHideDrawer}
      footer={
        <Row>
          <Col><Button onClick={() => onHideDrawer()}>Cancel</Button></Col>
          <Col><Button onClick={() => onSave(form.getFieldsValue())}>Save</Button></Col>
        </Row>
      }
    >

    </Drawer>
  );
}