import { all } from 'redux-saga/effects';
import { watchProduct } from './product';

export default function* rootSaga() {
  yield all([
    watchProduct(),
  ])
}
