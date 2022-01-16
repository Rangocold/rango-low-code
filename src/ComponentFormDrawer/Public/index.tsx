import React from 'react';
import UUIDInput from './UUIDInput';
import LabelInput from './LabelInput';
import LabelColInput from './LabelColInput';
import RequriedInput from './RequiredInput';
import DisabledInput from './DisabledInput';

export default function PublicPropsInput() {
  return (
    <>
      <UUIDInput />
      <LabelInput />
      <RequriedInput />
      <DisabledInput />
      <LabelColInput />
    </>
  )
}