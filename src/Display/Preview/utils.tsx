import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';

export function wrapLabelWithHint(label?: string, hint?: string) {
  if (hint) {
    return <p>{label}<InfoCircleOutlined /></p>;
  } else {
    return label;
  }
}