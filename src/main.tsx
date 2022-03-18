import ReactDOM from 'react-dom';
import './index.module.css';
import Toolbar from './Toolbar';
import React, { useState, useCallback, useEffect } from 'react';
import { ComponentProps, ResponseProps } from './types';
import { ComponentTypes } from './Toolbar/consts';
import { getInitialComponentValue, SuccessCode } from './consts';
import { GlobalContext, useGlobalContextReducer } from './Stores';
import ComponentFormDrawer from './ComponentFormDrawer';
import { Layout } from 'antd';
import Preview from './Display/Preview';
import style from './index.module.css';
import { GlobalContextActionEnum } from './Stores/types';
import 'antd/dist/antd.css';
import axios from 'axios';
import { PreviewComponentList } from './Display/Preview/useRegisterPreviewComponents';
import { useLogin } from './Hooks/useLogin';

function App() {
  const context = useGlobalContextReducer();
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
  const onAddComponent = useCallback(
    (componentType: ComponentTypes) => {
      const initialComponentValue = getInitialComponentValue();
      context.dispatch({
        type: GlobalContextActionEnum.setComponents,
        payload: [
          ...context.state.components,
          initialComponentValue[componentType],
        ],
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
        <Toolbar onAddComponent={onAddComponent} />
        <Layout.Content>
          <GlobalContext.Consumer>
            {(context) => {
              return <Preview context={context} />;
            }}
          </GlobalContext.Consumer>
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
);
