import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  CancelToken,
} from 'axios';
import { SuccessCode, UnauthorizedCode } from '../consts';
import { ResponseProps } from '../types';
const authUrl = '/rango-low-code-server/passport/github';
const defaultHeaders = {
  'Content-Type': 'application/json',
};

interface RespProps<S> {
  code: number;
  message: string;
  data: S;
}

export default function request<T, S>(
  url: string,
  data?: T,
  headers?: AxiosRequestConfig
) {
  return axios
    .post(url, data, {
      ...defaultHeaders,
      ...headers,
    })
    .then(({ data: resp }: AxiosResponse<ResponseProps<S>>) => {
      if (resp.code === SuccessCode) {
        return resp.data;
      } else if (resp.code === UnauthorizedCode) {
        window.location.href = authUrl;
      }
    })
    .catch((e) => {
      console.log('request error: ', e);
    });
}
