import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../reducers/admin'
import {
  getUsers, getHistory, createUser, updateUser
} from '../../service/admin'

function* adminGetUsersSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true })

  try {
    const { limit, page, sortQuery, sortDirection } = params.payload;
    const result = yield call(getUsers, { limit, page, sortQuery, sortDirection })
    if (result && result.type === 'SUCC') {
      const { list, count } = result.data
      yield put({ type: actionTypes.adminAccounts, list, count })
    }
  } catch (error) {
    yield put({ type: actionTypes.adminFail, error })
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false })
}

function* adminCreateUserSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true })

  try {
    const { data, limit } = params.payload;
    const result = yield call(createUser, { data })
    if (result && result.type === 'SUCC') {
      const getUsersRes = yield call(getUsers, { limit, page: 1 })
      if (getUsersRes && getUsersRes.type === 'SUCC') {
        const { list, count } = getUsersRes.data
        yield put({ type: actionTypes.adminAccounts, list, count })
      }
    }
  } catch (error) {
    yield put({ type: actionTypes.adminFail, error })
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false })
}

function* adminUpdateUserSaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true })

  try {
    const { userId, data, page, limit } = params.payload;
    const result = yield call(updateUser, { userId, data })
    if (result && result.type === 'SUCC') {
      const getUsersRes = yield call(getUsers, { limit, page, })
      if (getUsersRes && getUsersRes.type === 'SUCC') {
        const { list, count } = getUsersRes.data
        yield put({ type: actionTypes.adminAccounts, list, count })
      }
    }
  } catch (error) {
    yield put({ type: actionTypes.adminFail, error })
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false })
}

function* adminGetHistorySaga(params) {
  yield put({ type: actionTypes.setLoadingStatus, payload: true })

  try {
    const { limit, page, sortQuery, sortDirection } = params.payload;
    const result = yield call(getHistory, { limit, page, sortQuery, sortDirection })
    if (result && result.type === 'SUCC') {
      const { list, count } = result.data
      yield put({ type: actionTypes.adminHistory, list, count })
    }
  } catch (error) {
    yield put({ type: actionTypes.adminFail, error })
  }

  yield put({ type: actionTypes.setLoadingStatus, payload: false })
}

export function* watchAdmin() {
  yield takeLatest(actionTypes.adminGetUsersRequest, adminGetUsersSaga);
  yield takeLatest(actionTypes.adminCreateUserRequest, adminCreateUserSaga);
  yield takeLatest(actionTypes.adminUpdateUserRequest, adminUpdateUserSaga);
  yield takeLatest(actionTypes.adminGetHistoryRequest, adminGetHistorySaga);
}
