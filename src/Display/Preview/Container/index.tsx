import React, { useCallback } from 'react';
import { useGlobalContext } from '../../../Stores';
import { GlobalContextActionEnum } from '../../../Stores/types';
import { ContainerProps } from './types';

export default function Container(props: ContainerProps) {
  const { dispatch } = useGlobalContext();
  const onClick = useCallback((e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    dispatch({
      type: GlobalContextActionEnum.setEditingUuid,
      payload: props.uuid,
    });
  }, [dispatch, props.uuid]);
  return <div onClick={(e) => onClick(e)}>{props.children}</div>;
}
