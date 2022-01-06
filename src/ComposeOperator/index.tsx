import React from 'react';
<<<<<<< HEAD
import { Button } from 'antd';
import { ComponentOperatorProps } from './types';
import HeaderBackground from '../Assets/field_preview_status_bar.png';

export default function ComponentOperator({}: ComponentOperatorProps) {
  return <div style={{
    width: '750px',
  }}>
    <div style={{ background: HeaderBackground, width: '750px', height: '38px' }}>

    </div>
    <Button>Submit</Button>
  </div>
=======
import { Layout } from 'antd';
const { Content } = Layout; 

export default function ComposeOperator() {
  return <Content>{/* todo render here */}</Content>
>>>>>>> b4c23cb2c5ff721fbfccbde40dd22799b4cd5f34
}