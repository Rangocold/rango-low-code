import React, { useCallback } from 'react';
import { Button } from 'antd';
import { ButtonProps } from '../../types';
import axios from 'axios';

export default function CustomButton({ url, text }: ButtonProps) {
  const onClick = useCallback(() => {
    // todo 确认onclick的业务规则
    //axios.post(url);
  }, [url]);
  return <Button onClick={() => onClick()}>{text}</Button>;
}
