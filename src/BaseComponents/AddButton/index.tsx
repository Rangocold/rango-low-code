import React from 'react';
import { Button, ButtonProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import style from './style.module.css';

interface AddButtonProps extends ButtonProps {
  onAdd?: () => void;
}

export default function AddButton({ onAdd, ...props }: AddButtonProps) {
  return (
    <Button
      onClick={() => onAdd && onAdd()}
      icon={<PlusOutlined />}
      className={style['add_btn']}
      {...props}
    >
      Add
    </Button>
  );
}
