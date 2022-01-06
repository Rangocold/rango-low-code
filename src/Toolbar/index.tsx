import React from 'react';
import { Layout, Button } from 'antd';
import { ComponentOptions, DefaultComponentMap } from './consts';
import { ToolbarProps } from './types';

export default function Toolbar({ onAddField }: ToolbarProps) {
  return (
    <Layout.Sider>
      {ComponentOptions.map(
        (option) => {
          return (
            <Button
              key={option.value}
              onClick={() => {
                onAddField(DefaultComponentMap[option.value]);
              }}
            >
              {option.label}
            </Button>
          );
        })
      }
    </Layout.Sider>
  );
}