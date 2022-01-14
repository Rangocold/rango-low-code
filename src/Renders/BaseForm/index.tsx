import React from 'react';
import { Form } from 'antd';
import { RenderSpecifiedNode } from '../RenderSpecifiedNode';
import { BaseFormProps } from '../../types';

export default function BaseForm(props: BaseFormProps) {
  return (
    <>
      {props.components.map((component) => {
        return (
          <Form.Item key={component.uuid} name={component.uuid}>
            {RenderSpecifiedNode(component)}
          </Form.Item>
        );
      })}
    </>
  );
}
