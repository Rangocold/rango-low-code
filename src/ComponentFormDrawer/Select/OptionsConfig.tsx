import React, { useCallback } from 'react';
import { OptionsConfigProps } from './types';
import { Input, Button, Row, Col } from 'antd';
import { v4 as genUUID } from 'uuid';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

export default function OptionsConfig({ value, onChange }: OptionsConfigProps) {
  const onAdd = useCallback(() => {
    const options = Array.isArray(value) ? value : [];
    options.push({
      label: '',
      value: genUUID(),
    });
    onChange && onChange([...options]);
  }, [value, onChange]);
  const onDelete = useCallback(
    (idx: number) => {
      const options = (value ?? []);
      options.slice(idx, 1);
      onChange && onChange([...options]);
    },
    [value, onChange]
  );
  const onChangeLabel = useCallback(
    (idx: number, label: string) => {
      const options = value ?? [];
      options[idx] = { ...options[idx], label };

      onChange && onChange([...options]);
    },
    [value, onChange]
  );
  const onChangeValue = useCallback((idx: number, optionValue: string) => {
    const options = value ?? [];
    options[idx] = { ...options[idx], value: optionValue };

    onChange && onChange([...options]);
  }, [value, onChange]);
  return (
    <>
      {(value ?? []).map((option, idx) => {
        return (
          <Row>
            <Col span={3}>Label: </Col>
            <Col span={8}>
              <Input
                value={option.label}
                onChange={(e) => onChangeLabel(idx, e.target.value)}
              />
            </Col>
            <Col span={3}>Value: </Col>
            <Col span={8}>
              <Input
                value={option.value}
                onChange={(e) => onChangeValue(idx, e.target.value)}
              />
            </Col>
            <Col span={2}>
              <DeleteOutlined onClick={() => onDelete(idx)} />
            </Col>
          </Row>
        );
      })}
      <Button onClick={() => onAdd()} icon={<PlusOutlined />}>
        Add
      </Button>
    </>
  );
}
