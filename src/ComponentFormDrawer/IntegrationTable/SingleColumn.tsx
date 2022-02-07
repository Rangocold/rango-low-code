import React, { useCallback, useMemo } from 'react';
import { Form, Input, Radio, Col, Row } from 'antd';

import type { ConvertRuleConfigProps, SingleColumnConfigProps } from './types';
import AddButton from '../../BaseComponents/AddButton';
import { updateArray } from '../../Utils';
import { IntegrationTableColumnConvertRulesProps } from '../../types';

const DefaultRuleKey = '';
const DefaultRuleValue = '';
function ConvertRuleConfig(props: ConvertRuleConfigProps) {
  const onAdd = useCallback(() => {
    const newValue = Array.isArray(props.value) ? [...props.value] : [];
    newValue.push({ key: DefaultRuleKey, value: DefaultRuleValue });
    props.onChange && props.onChange(newValue);
  }, [props.onChange, props.value]);
  const disabledAdd = useMemo(() => {
    if (Array.isArray(props.value)) {
      for (const item of props.value) {
        if (item.key === DefaultRuleKey) {
          return true;
        }
      }
    }
    return false;
  }, [props.value]);
  const onChange = useCallback(
    (item: { key: string; value: string }, idx: number) => {
      const newValue = updateArray(props.value ?? [], idx, item);
      props.onChange && props.onChange(newValue);
    },
    [props.onChange, props.value]
  );
  return (
    <>
      {(props.value ?? []).map((item, idx) => {
        return (
          <Row key={item.key}>
            <Col span={2}>Key</Col>
            <Col span={10}>
              <Input
                onChange={(event) => {
                  onChange(
                    {
                      key: event.target.value,
                      value: item.value,
                    },
                    idx
                  );
                }}
                value={item.key}
              />
            </Col>
            <Col span={2}>Value</Col>
            <Col span={10}>
              <Input
                onChange={(event) => {
                  onChange(
                    {
                      value: event.target.value,
                      key: item.key,
                    },
                    idx
                  );
                }}
                value={item.value}
              />
            </Col>
          </Row>
        );
      })}
      <AddButton onAdd={onAdd} disabled={disabledAdd} />
    </>
  );
}

export default function SingleColumnConfig(props: SingleColumnConfigProps) {
  const [form] = Form.useForm();
  const onValuesChange = useCallback(
    (_: unknown, values) => {
      props.onChange && props.onChange(values);
    },
    [props.onChange]
  );
  return (
    <Form form={form} onValuesChange={onValuesChange}>
      <Form.Item name='fieldName' label='Field Name'>
        <Input />
      </Form.Item>
      <Form.Item name='fieldKey' label='Field Key'>
        <Input />
      </Form.Item>
      <Form.Item
        name='convertRuleMap'
        label='Convert Rule'
        rules={[
          {
            validator: (
              _: unknown,
              value: IntegrationTableColumnConvertRulesProps
            ) => {
              const keySet = new Set<string>();
              if (Array.isArray(value)) {
                for (const item of value) {
                  if (keySet.has(item.key)) {
                    return Promise.reject('Please keep every key different');
                  }
                }
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <ConvertRuleConfig />
      </Form.Item>
      <Form.Item name='sorter' label='Sorter'>
        <Radio.Group>
          <Radio value={true}>True</Radio>
          <Radio value={false}>False</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
  );
}
