import React from 'react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export function wrapLabelWithHint(label?: string, hint?: string) {
  if (hint) {
    return (
      <p>
        {label}
        <Tooltip title={hint}>
          <InfoCircleOutlined />
        </Tooltip>
      </p>
    );
  } else {
    return label;
  }
}
