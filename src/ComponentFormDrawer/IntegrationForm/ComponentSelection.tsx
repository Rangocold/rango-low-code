import React, { useCallback, useMemo } from 'react';
import { Select, Col, Row, Button } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { ComponentSelectionProps } from './types';
import { cloneDeep } from 'lodash';
import { updateArray } from '../../Utils';
import style from './style.module.css';
import { getInitialComponentValue } from '../../consts';
import { BasicInputOptions, ComponentTypes } from '../../Toolbar/consts';
import { ComponentProps } from '../../types';

export default function ComponentSelection(props: ComponentSelectionProps) {
  const options = useMemo(() => {
    return BasicInputOptions;
  }, []);
  const onDelete = useCallback(
    (idx: number) => {
      const newValue = cloneDeep(props.value) ?? [];
      newValue.splice(idx, 1);
      props.onChange && props.onChange(newValue);
    },
    [props]
  );

  const onChange = useCallback(
    (idx: number, newComponentType: ComponentTypes) => {
      const newValue = getInitialComponentValue()[newComponentType];
      const res = updateArray(props.value ?? [], idx, newValue);
      props.onChange && props.onChange(res);
    },
    [props]
  );

  const onAdd = useCallback(() => {
    const res = cloneDeep(props.value) ?? [];
    res.push(getInitialComponentValue()[ComponentTypes.input]);

    props.onChange && props.onChange(res);
  }, [props]);
  return (
    <>
      {(props.value ?? []).map((value: ComponentProps, idx: number) => {
        return (
          <Row key={value.uuid}>
            <Col span={20}>
              <Select
                className={style['config_form__component_selection_select']}
                value={value.type}
                options={options}
                onChange={(value) => {
                  onChange(idx, value);
                }}
              />
            </Col>
            <Col span={4}>
              <DeleteOutlined onClick={() => onDelete(idx)} />
            </Col>
          </Row>
        );
      })}
      <Button
        onClick={() => onAdd()}
        icon={<PlusOutlined />}
        className={style['config_form__component_selection_btn']}
      >
        Add
      </Button>
    </>
  );
}
