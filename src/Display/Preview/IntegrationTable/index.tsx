import React, { useCallback, useState, useEffect } from 'react';
import { IntegrationTableProps } from '../../../types';
import Filter from './Filter';
import Table from './Table';
import type { IntegrationTableColumsProps, DataSourceProps } from './types';
import axios from 'axios';

export default function IntegrationTable(props: IntegrationTableProps) {
  const [dataSource, setDataSource] = useState([]);
  const requestData = useCallback(() => {
    axios.post(props.url);
  }, [props.url]);
  return (
    <>
      <Filter {...props.filters}></Filter>
      <Table columns={props.columns} />
    </>
  );
}
