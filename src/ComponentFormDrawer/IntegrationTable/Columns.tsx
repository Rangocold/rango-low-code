import React, { useCallback, useMemo } from 'react';
import { ColumnConfigProps } from './types';
import AddButton from '../../BaseComponents/AddButton';
import SingleColumnConfig from './SingleColumn';
import { IntegrationTableColumnItemProps, IntegrationTableColumnListProps } from '../../types';
import { updateArray } from '../../Utils';
import { v4 as genUUID } from 'uuid';
import { ComponentTypes } from '../../Toolbar/consts';
import UUIDInput from '../Public/UUIDInput';
import { getInitialComponentValueByType } from '../../consts';

export default function ColumnConfig({ value, onChange }: ColumnConfigProps) {
  const components = useMemo(() => {
    const components = value?.components;
    return Array.isArray(components) ? components : [];
  }, [value]);
  const onChangeComponents = useCallback((newValue: IntegrationTableColumnListProps['components']) => {
    const defaultValue = getInitialComponentValueByType(ComponentTypes.integrationTableColumnList) as IntegrationTableColumnListProps;
    onChange && onChange({
      ...defaultValue,
      components: newValue,
    })
  }, [components, onChange]);
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

    onChangeComponents(newValue);
  }, [components, onChange]);
  const onChangeColumn = useCallback(
    (newColumnConfig: IntegrationTableColumnItemProps, idx: number) => {
      const newValue = updateArray(components, idx, newColumnConfig);
      onChangeComponents(newValue);
    },
    [onChange, components]
  );
  return (
    <>
      <UUIDInput />
      {components.map((config, idx) => (
        <SingleColumnConfig
          {...config}
          onChange={(newColumnConfig) => onChangeColumn(newColumnConfig, idx)}
        />
      ))}

      <AddButton onAdd={onAdd} />
    </>
  );
}
