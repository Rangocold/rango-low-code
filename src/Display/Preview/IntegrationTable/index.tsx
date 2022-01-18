import React from 'react';
import { IntegrationTableProps } from '../../../types';
import Filter from './Filter';

export default function IntegrationTable(props: IntegrationTableProps) {
  return (
    <>
      <Filter {...props.filters}></Filter>
    </>
  );
}
