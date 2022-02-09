import { ComponentConfigs } from './../../ComponentFormDrawer/consts';

import { useEffect } from 'react';
import { useGlobalContext } from '../../Stores';
import { GlobalContextActionEnum } from '../../Stores/types';
import { ComponentTypes } from '../../Toolbar/consts';
import IntegrationForm from './IntegrationForm';
import IntegrationTable from './IntegrationTable';
import IntegrationTableFilter from './IntegrationTable/Filter';
import IntegrationTableColums from './IntegrationTable/Table';
import Input from './Input';
import Number from './Number';
import Textarea from './Textarea';
import Select from './Select';
import Date from './Date';

export const PreviewComponentList = [
  {
    componentType: ComponentTypes.interationForm,
    componentConstructor: IntegrationForm,
  },
  {
    componentType: ComponentTypes.integrationTable,
    componentConstructor: IntegrationTable,
  },
  /* {
    componentType: ComponentTypes.integrationTableFilter,
    componentConstructor: IntegrationTableFilter,
  },
  {
    componentType: ComponentTypes.integrationTableColumnList,
    componentConstructor: IntegrationTableColums,
  }, */
  {
    componentType: ComponentTypes.input,
    componentConstructor: Input,
  },
  {
    componentType: ComponentTypes.textarea,
    componentConstructor: Textarea,
  },
  {
    componentType: ComponentTypes.select,
    componentConstructor: Select,
  },
  {
    componentType: ComponentTypes.number,
    componentConstructor: Number,
  },
  {
    componentType: ComponentTypes.date,
    componentConstructor: Date,
  }
];

export function useRegisterPreviewComponents() {
  const context = useGlobalContext();
  useEffect(() => {
    for (const item of PreviewComponentList) {
      context.dispatch({
        type: GlobalContextActionEnum.setRegistedComponentsMap,
        payload: {
          componentType: item.componentType,
          componentConstructor: item.componentConstructor,
        },
      });
    }
  }, []);
}
