import React, { useCallback } from 'react';
import { Button } from 'antd';
import { ButtonProps } from '../../types';
import axios from 'axios';

export default function CustomButton({
  url,
  text,
}: ButtonProps) {
  const onClick = useCallback(() => {
    // todo 从当前节点往上找，把最近的一个form提交
    // 或者做成业务强相关
    axios.post(url);
  }, [url]);
  return <Button onClick={() => onClick()}>{text}</Button>;
}