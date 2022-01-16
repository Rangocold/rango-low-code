import React, { useEffect } from 'react';
import { useGlobalContext, GlobalContext } from '../../Stores';
import { useRenderPreviewNode } from './useRenderPreviewNode';
import { GlobalContextProps } from '../../Stores/types';
import style from './style.module.css';

export default function Renders({ context }: { context: GlobalContextProps }) {
  const { renderPreviewNode } = useRenderPreviewNode();
  useEffect(() => {
    console.log('context: ', context);
  }, [context]);
  return (
    <div className={style['preview__container']}>
      {(context?.state?.components ?? []).map((component) => renderPreviewNode(component))}
    </div>
  );
  /* return (
    <GlobalContext.Consumer>
      {({ state }) => {
        console.log('context state change: ', state);
        return (
          <div className={style['preview__container']}>
            {state.components.map((component) =>
              renderPreviewNode(component)
            )}
          </div>
        );
      }}
    </GlobalContext.Consumer>
  ); */
}
