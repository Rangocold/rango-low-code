import Toolbar from './Toolbar';
import React, { useState, useCallback, useEffect } from 'react';
import { ComponentProps } from './types';
import { ComponentTypes } from './Toolbar/consts';
import { initialComponentValue } from './consts';
import { GlobalContext, useGlobalContextReducer } from './Stores';
import ComponentFormDrawer from './ComponentFormDrawer';
import { Layout } from 'antd';
import Preview from './Renders';
import style from './index.module.css';
import { GlobalContextActionEnum } from './Stores/types';
import IntegrationForm from './Renders/IntegrationForm';

function App() {
  const context = useGlobalContextReducer();
  useEffect(() => {
    context.dispatch({
      type: GlobalContextActionEnum.setRegistedComponentsMap,
      payload: {
        componentType: ComponentTypes.interationForm,
        componentConstructor: IntegrationForm,
      }
    })
  }, []);
  const onAddComponent = useCallback(
    (componentType: ComponentTypes) => {
      context.dispatch({
        type: GlobalContextActionEnum.setComponents,
        payload: [
          ...context.state.components,
          initialComponentValue[componentType],
        ]
      });
    },
    [context.state.components]
  );
  return (
    <GlobalContext.Provider value={context}>
      <div className={style['application']}>
        <Toolbar
          onAddComponent={onAddComponent}
        />
        <Layout.Content>
          <Preview />
        </Layout.Content>
        <ComponentFormDrawer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
