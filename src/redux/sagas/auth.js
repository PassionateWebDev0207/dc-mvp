/* eslint-disable camelcase */
import { call, put, takeLatest } from 'redux-saga/effects'
import cookie from 'js-cookie'
import { actionTypes } from '../reducers/auth'
import {
  login, account, authKeys,
} from '../../service/auth'

function* authSignInSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true })

  try {
    const { email, password } = params.payload;
    const result = yield call(login, { email, password })
    if (result && result.type === 'SUC') {
      const { token } = result.data
      const userData = yield call(account, { token })
      if (userData.type === 'SUCC') {
        cookie.set(authKeys.token, token, { expires: 365 })
        cookie.set(authKeys.account, userData.data, { expires: 365 })
        window.location.pathname = '/app';
      }
    }
  } catch (error) {
    yield put({ type: actionTypes.authFail, error })
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false })
}

export function* watchAuth() {
  yield takeLatest(actionTypes.authSignInRequest, authSignInSaga);
}
