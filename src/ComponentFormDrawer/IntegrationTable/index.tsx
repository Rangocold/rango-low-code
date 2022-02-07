import React from 'react';
import UUIDInput from '../Public/UUIDInput';
import { Input, Form, Collapse, Col } from 'antd';
import FilterConfig from './Filter';
import TableConfig from './Table';

const PanelKey = {
  Filter: 'Filter',
  Table: 'Table',
}

export default function IntegrationTable() {
  return (
    <>
      <UUIDInput />
      <Form.Item label='Data Source Url' name='url'>
        <Input />
      </Form.Item>
      <Collapse>
        <Collapse.Panel header='Filter' key={PanelKey.Filter}>
          <FilterConfig />
        </Collapse.Panel>
        <Collapse.Panel header='Table' key={PanelKey.Table}>
          <TableConfig />
        </Collapse.Panel>
      </Collapse>
    </>
  );
}
