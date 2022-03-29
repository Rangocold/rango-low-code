import { useCallback, useMemo } from 'react';
import { ResponseProps } from '../types';
import { SuccessCode } from '../consts';
import request, { authUrl } from '../Utils/request';
import { useGlobalContextReducer } from '../Stores';
import { isNil } from 'lodash';

export function useLogin() {
  const { state, dispatch } = useGlobalContextReducer();
  const isAuth = useMemo(() => {
    return !isNil(state.currentDeveloper);
  }, [state]);

  const logout = useCallback(() => {
    request('/rango-low-code-server/developer/logout').then(() => {
      window.location.href = authUrl;
    });
  }, []);

  const login = useCallback(() => {
    window.location.href = authUrl;
  }, []);

  return {
    isAuth,
    logout,
    login,
  }
}