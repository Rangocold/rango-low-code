import React from 'react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

export function wrapLabelWithHint(label?: string, hint?: string) {
  if (hint) {
    return (
      <p style={{ marginBottom: 0 }}>
        {label}
        <Tooltip title={hint}>
          <InfoCircleOutlined style={{ marginLeft: '4px' }}/>
        </Tooltip>
      </p>
    );
  } else {
    return label;
  }
}
