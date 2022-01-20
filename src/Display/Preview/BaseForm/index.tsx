import React from 'react';
import { Form, Row, Col } from 'antd';
import { useRenderPreviewNode } from '../../Preview/useRenderPreviewNode';
import { BaseFormProps } from '../../../types';

export default function BaseForm(props: BaseFormProps) {
  const { renderPreviewNode } = useRenderPreviewNode();
  return (
    <>
      {props.components.map((component) => {
        return (
          <Row>
            <Col span={24 / (props.itemPerRow || 1)}>
              <Form.Item key={component.uuid} name={component.uuid}>
                {renderPreviewNode(component)}
              </Form.Item>
            </Col>
          </Row>
        );
      })}
    </>
  );
}
