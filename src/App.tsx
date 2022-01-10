import Toolbar from './Toolbar';
import React, { useState, useCallback } from 'react';
import { ComponentProps } from './types';
import { ComponentTypes } from './Toolbar/consts';
import { initialComponentValue } from './consts';

function App() {
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
    <Toolbar onAddComponent={onAddComponent} componentList={componentList} />
  );
}

export default App;
