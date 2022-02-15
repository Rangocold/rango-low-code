import React, { useCallback } from 'react';
import UUIDInput from '../Public/UUIDInput';
import ComponentSelection from '../Public/ComponentSelection';
import { Form } from 'antd';
import { ComponentSelectionProps } from '../IntegrationForm/types';
import { ComponentProps, NumberProps } from '../../types';
import { isNil } from 'lodash';
import {
  BasicInputOptions,
  BasicInputTypes,
  ComponentTypes,
} from '../../Toolbar/consts';
const ComponentOptions = BasicInputOptions.filter(
  (option) => option.value !== ComponentTypes.textarea
);
function CustomComponentSelection(props: ComponentSelectionProps) {
  const onChange = useCallback(
    (newValue: ComponentProps[]) => {
      props.onChange &&
        props.onChange(
          newValue.map((component) => {
            if (BasicInputTypes.includes(component.type)) {
              // @ts-ignore
              if (isNil(component.fieldConfig)) {
                // @ts-ignore
                component.fieldConfig = {
                  isHideHint: true,
                  isHideLabelCol: true,
                  isHideInitialValue: true,
                  isHideRequired: true,
                  isHideDisabled: true,
                };
              }
            }

            return component;
          })
        );
    },
    [props.onChange]
  );
  return (
    <ComponentSelection
      value={props.value}
      onChange={onChange}
      options={ComponentOptions}
    />
  );
}

export default function FilterConfig() {
  return (
    <>
      <UUIDInput />
      <Form.Item name='components'>
        <CustomComponentSelection />
      </Form.Item>
    </>
  );
}
