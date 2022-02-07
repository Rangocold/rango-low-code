import React, { useCallback, useMemo } from 'react';
import { ColumnConfigProps } from './types';
import AddButton from '../../BaseComponents/AddButton';
import SingleColumnConfig from './SingleColumn';
import { IntegrationTableColumnProps } from '../../types';
import { updateArray } from '../../Utils';

export default function ColumnConfig({ value, onChange }: ColumnConfigProps) {
  const valueArray = useMemo(() => {
    return Array.isArray(value) ? value : [];
  }, [value]);
  const onAdd = useCallback(() => {
    const newValue = [...valueArray];
    newValue.push({
      fieldKey: '',
      fieldName: '',
      convertRuleMap: [],
      sorter: false,
    });
    onChange && onChange(newValue);
  }, [valueArray, onChange]);
  const onChangeColumn = useCallback(
    (newColumnConfig: IntegrationTableColumnProps, idx: number) => {
      const newValue = updateArray(valueArray, idx, newColumnConfig);
      onChange && onChange(newValue);
    },
    [onChange, valueArray]
  );
  return (
    <div>
      {valueArray.map((config, idx) => (
        <SingleColumnConfig
          {...config}
          onChange={(newColumnConfig) => onChangeColumn(newColumnConfig, idx)}
        />
      ))}

      <AddButton onAdd={onAdd} />
    </div>
  );
}
