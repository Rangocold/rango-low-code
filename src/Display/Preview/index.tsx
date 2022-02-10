import React from 'react';
import { useRenderPreviewNode } from './useRenderPreviewNode';
import { GlobalContextProps } from '../../Stores/types';
import style from './style.module.css';

export default function Renders({ context }: { context: GlobalContextProps }) {
  const { renderPreviewNode } = useRenderPreviewNode();
  return (
    <div className={style['preview__container']}>
      {(context?.state?.components ?? []).map((component) => {
        return renderPreviewNode(component);
      })}
    </div>
  );
}
