import React from 'react';
import { Form } from 'antd';
import ColumnConfig from './Columns';

export default function TableConfig() {
  return (
    <>
      <Form.Item name='columns'>
        <ColumnConfig />
      </Form.Item>
    </>
  )
}