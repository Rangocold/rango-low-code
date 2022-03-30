import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export function useQueryStringNameSpace() {
  const { search } = useLocation();

  const queryString = useMemo(() => new URLSearchParams(search), [search]);
  return {
    queryString,
  };
}