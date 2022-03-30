import { ContextNameSpace, LogicNameSpace as LogicNameSpaceKey, QueryStringNameSpace } from './consts';
import LogicNameSpace from './Logic';
import { useMemo } from 'react';
import { useContextNameSpace } from './Context';
import { useQueryStringNameSpace } from './QueryString';

export function useExpressionNameSpace() {
  const contextNameSpace = useContextNameSpace();
  const queryStringNameSpace = useQueryStringNameSpace();
  const nameSpace = useMemo(() => {
    return {
      [LogicNameSpaceKey]: LogicNameSpace,
      [ContextNameSpace]: contextNameSpace,
      [QueryStringNameSpace]: queryStringNameSpace,
    };
  }, []);
  return { nameSpace };
}