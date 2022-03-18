import { useCallback } from 'react';
import axios from 'axios';
import { ResponseProps } from '../types';
import { SuccessCode } from '../consts';
import request from '../Utils/request';

export function useLogin() {
  const login = useCallback(() => {
    // todo
    /* request('/developer/get').then(() => {

    }); */
  }, [])

  return {
    login,
  }
}