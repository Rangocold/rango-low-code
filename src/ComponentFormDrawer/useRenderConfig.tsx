import React, { useCallback } from 'react';
import { ComponentTypes } from '../Toolbar/consts';
import InputConfig from './Input';
import IntegrationForm from './IntegrationForm';
import Select from './Select';
import Textarea from './Textarea';
import Number from './Number';
import Date from './Date';
import IntegrationTable from './IntegrationTable';
import IntegrationTableFilters from './IntegrationTable/Filter';
import IntegrationTableColumns from './IntegrationTable/Columns';
import { message } from 'antd';
import { BaseInputConfigProps, ComponentProps } from '../types';

export function useRenderConfig() {
  const renderConfig = useCallback((componentType?: ComponentTypes, fieldConfig?: BaseInputConfigProps) => {
    switch (componentType) {
      case ComponentTypes.interationForm: {
        return React.createElement(IntegrationForm);
      }
      case ComponentTypes.select: {
        return React.createElement(Select, fieldConfig);
      }
      case ComponentTypes.textarea: {
        return React.createElement(Textarea, fieldConfig);
      }
      case ComponentTypes.input: {
        return React.createElement(InputConfig, fieldConfig);
      }
      case ComponentTypes.number: {
        return React.createElement(Number, fieldConfig);
      }
      case ComponentTypes.integrationTable: {
        return React.createElement(IntegrationTable);
      }
      case ComponentTypes.integrationTableColumnList: {
        return React.createElement(IntegrationTableColumns);
      }
      case ComponentTypes.integrationTableFilter: {
        return React.createElement(IntegrationTableFilters);
      }
      case ComponentTypes.date: {
        return React.createElement(Date, fieldConfig);
      }
      default: {
        debugger;
        message.error(`Component Type ${componentType} is not valid`)
        return <></>;
      }
    }
  }, []);
  return {
    renderConfig,
  }
}