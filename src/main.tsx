import ReactDOM from 'react-dom'
import './index.module.css'
import Toolbar from './Toolbar';
import React, { useState, useCallback, useEffect } from 'react';
import { ComponentProps } from './types';
import { ComponentTypes } from './Toolbar/consts';
import { getInitialComponentValue } from './consts';
import { GlobalContext, useGlobalContextReducer } from './Stores';
import ComponentFormDrawer from './ComponentFormDrawer';
import { Layout } from 'antd';
import Preview from './Display/Preview';
import style from './index.module.css';
import { GlobalContextActionEnum } from './Stores/types';
import IntegrationForm from './Display/Preview/IntegrationForm';
import 'antd/dist/antd.css';

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
      const initialComponentValue = getInitialComponentValue();
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
  useEffect(() => {
    console.log(context.state.components);
  }, [context.state.components]);
  return (
    <GlobalContext.Provider value={context}>
      <Layout style={{ minHeight: '100vh' }}>
        <Toolbar
          onAddComponent={onAddComponent}
        />
        <Layout.Content>
          <Preview />
        </Layout.Content>
        <ComponentFormDrawer />
      </Layout>
    </GlobalContext.Provider>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
