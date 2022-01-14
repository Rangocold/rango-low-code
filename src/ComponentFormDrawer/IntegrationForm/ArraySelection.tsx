import React, { useCallback } from 'react';
import { Select, Col, Row, Button } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { ComponentSelectionProps } from './types';
import { cloneDeep } from 'lodash';
import { updateArray } from '../../Utils';

export default function ArraySelection(
  props: ComponentSelectionProps
) {
  const onDelete = useCallback((idx: number) => {
    const newValue = cloneDeep(props.value) ?? [];
    newValue.splice(idx, 1);
    props.onChange && props.onChange(newValue);
  }, [props]);

  const onChange = useCallback((idx: number, newValue: number | string) => {
    const res = updateArray(props.value ?? [], idx, newValue);
    props.onChange && props.onChange(res);
  }, [props]);

  const onAdd = useCallback(() => {
    const res = cloneDeep(props.value) ?? [];
    res.push(props.defaultValue);
    props.onChange && props.onChange(res);
  }, [props]);
  return (
    <>
      {(props.value ?? []).map((value: number | string) => {
        const options = props.options ?? [];
        for (let i = 0; i < options.length; ++i) {
          const option = options[i];
          if (option.value === value) {
            return (
              <Row>
                <Col span={20}>
                  <Select value={value} options={options} onChange={(value) => {
                    onChange(i, value);
                  }} />
                </Col>
                <Col span={4}>
                  <DeleteOutlined onClick={() => onDelete(i)} />
                </Col>
              </Row>
            );
          }
        }
        return null;
      })}
      <Button onClick={() => onAdd()} icon={<PlusOutlined />}>Add</Button>
    </>
  );
}
