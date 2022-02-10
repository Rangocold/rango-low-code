import React, { useCallback, useMemo } from 'react';
import { ColumnConfigProps } from './types';
import AddButton from '../../BaseComponents/AddButton';
import SingleColumnConfig from './SingleColumn';
import { IntegrationTableColumnItemProps } from '../../types';
import { updateArray } from '../../Utils';
import { v4 as genUUID } from 'uuid';
import { ComponentTypes } from '../../Toolbar/consts';
import UUIDInput from '../Public/UUIDInput';
import { Form, Collapse } from 'antd';

export function ColumnConfig({ value, onChange }: ColumnConfigProps) {
  const components = useMemo(() => {
    return Array.isArray(value) ? value : [];
  }, [value]);
  const onAdd = useCallback(() => {
    const newValue = [...components];
    newValue.push({
      uuid: genUUID(),
      type: ComponentTypes.integrationTableColumnItem,
      fieldKey: '',
      fieldName: '',
      convertRuleMap: [],
      sorter: false,
      components: [],
    });

    onChange && onChange(newValue);
  }, [components, onChange]);
  const onChangeColumn = useCallback(
    (newColumnConfig: IntegrationTableColumnItemProps, idx: number) => {
      const newValue = updateArray(components, idx, newColumnConfig);
      onChange && onChange(newValue);
    },
    [onChange, components]
  );
  return (
    <>
      <Collapse>
        {components.map((config, idx) => (
          <Collapse.Panel
            key={config.uuid}
            header={`Column ${idx + 1}`}
            collapsible='header'
          >
            <SingleColumnConfig
              {...config}
              onChange={(newColumnConfig) =>
                onChangeColumn(newColumnConfig, idx)
              }
            />
          </Collapse.Panel>
        ))}
      </Collapse>

      <AddButton onAdd={onAdd} />
    </>
  );
}

export default function ColumnsConfigForm() {
  return (
    <>
      <UUIDInput />
      <Form.Item name='components' label='Components'>
        <ColumnConfig />
      </Form.Item>
    </>
  );
}
