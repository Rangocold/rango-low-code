import React, { useCallback } from 'react';
import { Form } from 'antd';
import ComponentSelection from '../Public/ComponentSelection';
import UUIDInput from '../Public/UUIDInput';
import { IntegrationTableColumnProps } from '../../types';
import { ColumnConfigProps } from './types';

function ColumnConfig(props: ColumnConfigProps) {
  return (
    <div></div>
  );
}

export default function TableConfig() {
  return (
    <>
      <Form.Item name='columns'>
        <ColumnConfig />
      </Form.Item>
    </>
  )
}