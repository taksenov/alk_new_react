import { fork, all } from 'redux-saga/effects';

import { mySitesSaga } from '../../states/mysites/saga';

export default function*() {
  yield all([fork(mySitesSaga)]);
}
