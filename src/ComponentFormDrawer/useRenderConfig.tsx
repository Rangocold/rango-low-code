import React, { useCallback } from 'react';
import { ComponentTypes } from '../Toolbar/consts';
import InputConfig from './Input';
import IntegrationForm from './IntegrationForm';
import Select from './Select';
import Textarea from './Textarea';
import Number from './Number';

export function useRenderConfig() {
  const renderConfig = useCallback((componentType: ComponentTypes) => {
    switch (componentType) {
      case ComponentTypes.interationForm: {
        return React.createElement(IntegrationForm);
      }
      case ComponentTypes.select: {
        return React.createElement(Select);
      }
      case ComponentTypes.textarea: {
        return React.createElement(Textarea);
      }
      case ComponentTypes.input: {
        return React.createElement(InputConfig);
      }
      case ComponentTypes.number: {
        return React.createElement(Number);
      }
    }
  }, []);
  return {
    renderConfig,
  }
}