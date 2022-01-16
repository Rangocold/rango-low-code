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
    onChange && onChange(options);
  }, [value, onChange]);
  const onDelete = useCallback((uuid: string) => {
    const options = (value ?? []).filter((option) => option.value !== uuid);
    onChange && onChange(options);
  }, [value, onChange]);
  const onChangeLabel = useCallback((uuid: string, label: string) => {
    const options = value ?? [];
    for (const option of options) {
      if (option.value === uuid) {
        option.label = label;
      }
    }

    onChange && onChange(options);
  }, [value, onChange]);
  return (
    <>
      {(value ?? []).map((option) => {
        return (
          <Row>
            <Col><Input onChange={(e) => onChangeLabel(option.value, e.target.value)}/></Col>
            <Col><DeleteOutlined onClick={() => onDelete(option.value)}/></Col>
          </Row>
        );
      })}
      <Button onClick={() => onAdd()} icon={<PlusOutlined />}>
        Add
      </Button>
    </>
  );
}
