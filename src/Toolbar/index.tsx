import React from 'react';
import { Layout, Button } from 'antd';
import { ComponentOptions } from './consts';

export default function Toolbar() {
  return (
    <Layout.Sider>
      {ComponentOptions.map(
        (option) => {
          return <Button key={option.value} onClick={() => { }}>{option.label}</Button>;
        })
      }
    </Layout.Sider>
  );
}