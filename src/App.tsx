import Toolbar from './Toolbar';
import React, { useState, useCallback } from 'react';
import { ComponentProps } from './types';
import { ComponentTypes } from './Toolbar/consts';
import { initialComponentValue } from './consts';
import { GlobalContext, useGlobalContextReducer } from './Stores';

function App() {
  const context = useGlobalContextReducer();
  const [componentList, setComponentList] = useState<ComponentProps[]>([]);
  const onAddComponent = useCallback(
    (componentType: ComponentTypes) => {
      setComponentList([
        ...componentList,
        initialComponentValue[componentType],
      ]);
    },
    [componentList]
  );
  return (
    <GlobalContext.Provider value={context}>
      <Toolbar onAddComponent={onAddComponent} componentList={componentList} />
    </GlobalContext.Provider>
  );
}

export default App;
