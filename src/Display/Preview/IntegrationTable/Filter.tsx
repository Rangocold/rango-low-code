import React, { useCallback } from 'react';
import { Card, Form, Button, Row, Col, Space } from 'antd';
import { IntegrationTableFilterConfigProps } from './types';
import { useRenderPreviewNode } from '../useRenderPreviewNode';

export default function IntegrationTableFilters(
  props: IntegrationTableFilterConfigProps
) {
  const [form] = Form.useForm();
  const onSearch = useCallback(
    (filters) => {
      props.onFilterChange(filters);
    },
    [props.onFilterChange]
  );
  const onReset = useCallback(() => {
    props.onFilterChange({});
  }, [props.onFilterChange]);
  const { renderPreviewNode } = useRenderPreviewNode();
  return (
    <Card>
      <Form
        form={form}
        onValuesChange={(_, values) => props.onFilterChange(values)}
      >
        <Row gutter={16}>
          {props.components.map((component) => {
            return <Col span={8}>{renderPreviewNode(component)}</Col>;
          })}
          <Col>
            <Space>
              <Button type='primary' onClick={onSearch}>
                Search
              </Button>
              <Button onClick={onReset}>Reset</Button>
            </Space>
          </Col>
        </Row>
        {/* <BaseForm components={props.components} itemPerRow={3} /> */}
      </Form>
    </Card>
  );
}
