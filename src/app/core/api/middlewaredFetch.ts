import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { stringify } from 'qs';

export async function fetchData(url: string, params: AxiosRequestConfig): Promise<AxiosResponse> {
  const headers = {
    // authorization: localStorage.getItem('token'),
  };
  return axios({
    headers,
    url,
    ...params,
    timeout: 10000,
    paramsSerializer: params => {
      return stringify(params, { arrayFormat: 'repeat' });
    },
  });
}
