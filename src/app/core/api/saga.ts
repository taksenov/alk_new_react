import {
  // takeEvery, all,
  call,
  // put
} from 'redux-saga/effects';
// import { API } from './api';
import { fetchData } from './middlewaredFetch';

export function* callAPI(url: any, params?: any) {
  try {
    return yield call(fetchData, url, params);
  } catch (error) {
    // if (error.response) {
    //   if (error.response.status === 401 || error.response.status === 403) {
    //     const authUrl = error.response.headers['www-authenticate'];

    //     yield toastr.infoWithoutIcon('Вы не авторизованы', `Попробуйте Войти в систему.`, {
    //       timeOut: 7000,
    //     });
    //   }
    // }
    // if (error.code === 'ECONNABORTED') {
    //   yield toastr.errorWithoutIcon('Ошибка', `Похоже сервер упал, попробуйте позже`, {
    //     timeOut: 0,
    //   });
    // }
    // if (error.code === 'ECONNREFUSED') {
    //   yield toastr.errorWithoutIcon('Ошибка', `Нет связи с сервером.`, {
    //     timeOut: 0,
    //   });
    // }
    console.log('API_ERROR:', error.response);
    return yield error.response;
  }
}
