import React from 'react';
import { IntegrationTableProps } from '../../../types';
import Filter from './Filter';
import Table from './Table';

export default function IntegrationTable(props: IntegrationTableProps) {
  return (
    <>
      <Filter {...props.filters}></Filter>
      <Table columns={props.columns} />
    </>
  );
}
