import { put, takeLatest, call } from 'redux-saga/effects';
import * as duck from '../duck';
import { API, callAPI } from '../../../core/api';
import { environment } from '../../../../environment';

// Load Mysites data
export function* loadMySites(action: any) {
  const { userID, userToken: token } = action.payload;
  const url = `${environment.LK_API_HOST}${API.mysites}${userID}`;
  const params = { token };

  try {
    const { status, data } = yield call(callAPI, url, { params });

    if (status === 200) {
      console.log(`Данные получены:`, status, data);
      // TODO: Put data to the reducers: isFetching, mySites
      // yield put({
      //   type: duck.getUserProfileSuccess.toString(),
      //   payload: data,
      // });
    } else {
      console.error(`ОШИБКА:`, status, data);
    }
  } catch (e) {
    console.error(`При запросе данных профиля. Сообщи это разработчикам:`, e);
  }
}

export default function* rootSaga() {
  yield takeLatest(duck.getMySitesRequest, loadMySites);
}
