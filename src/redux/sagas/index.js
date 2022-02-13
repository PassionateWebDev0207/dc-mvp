import { all } from 'redux-saga/effects';
import { watchAuth } from './auth';
import { watchAdmin } from './admin';
import { watchAsset } from './asset';

export default function* rootSaga() {
  yield all([
    watchAuth(),
    watchAdmin(),
    watchAsset(),
  ])
}
