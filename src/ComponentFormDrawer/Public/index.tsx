import React from 'react';
import UUIDInput from './UUIDInput';
import LabelInput from './LabelInput';
import LabelColInput from './LabelColInput';
import RequriedInput from './RequiredInput';
import DisabledInput from './DisabledInput';
import { BaseInputConfigProps } from '../../types';
import FieldConfigInput from './FieldConfigInput';

export default function PublicPropsInput(config: BaseInputConfigProps) {
  return (
    <>
      <UUIDInput />
      <LabelInput />
      {!config.isHideRequired ? <RequriedInput /> : null}
      {!config.isHideDisabled ? <DisabledInput /> : null}
      {!config.isHideLabelCol ? <LabelColInput /> : null}
      <FieldConfigInput />
    </>
  )
}