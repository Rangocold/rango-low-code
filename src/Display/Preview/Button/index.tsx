import React, { useCallback } from 'react';
import { Button } from 'antd';
import { ButtonProps } from '../../../types';

export default function CustomButton({ text }: ButtonProps) {
  return <Button>{text}</Button>;
}
