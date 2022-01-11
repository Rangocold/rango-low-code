import React from 'react';
import { Layout, Button } from 'antd';
import { ComponentOptions } from './consts';
import type { ToolbarProps } from './types';

export default function Toolbar(props: ToolbarProps) {
  return (
    <Layout.Sider>
      {ComponentOptions.map((option) => {
        return (
          <Button
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
    </Layout.Sider>
  );
}
