import React from 'react';
import { Layout, Button, Row, Col, Space } from 'antd';
import { ComponentOptions } from './consts';
import type { ToolbarProps } from './types';
import { Width100Percent } from '../consts';
import style from './style.module.css';

export default function Toolbar(props: ToolbarProps) {
  return (
    <Layout.Sider className={style['left_side_bar']} theme='dark'>
      <div style={{ height: '24px' }} />
      <Space direction='vertical' style={{ justifyContent: 'center', width: '100%' }} align='center'>
        {([ComponentOptions[0]]).map((option) => {
          return (
            <Button
              style={Width100Percent}
              key={option.value}
              disabled={option?.disabled}
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
