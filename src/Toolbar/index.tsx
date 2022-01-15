import React from 'react';
import { Layout, Button, Row, Col, Space } from 'antd';
import { ComponentOptions } from './consts';
import type { ToolbarProps } from './types';
import { Width100Percent } from '../consts';

export default function Toolbar(props: ToolbarProps) {
  return (
    <Layout.Sider style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Space direction='vertical' style={{ justifyContent: 'center' }} align='center'>
        {ComponentOptions.map((option) => {
          return (
            <Button
              style={Width100Percent}
              key={option.value}
              disabled={option.disabled}
              onClick={() => {
                props.onAddComponent(option.value);
              }}
            >
              {option.label}
            </Button>
          );
        })}
      </Space>
    </Layout.Sider>
  );
}
