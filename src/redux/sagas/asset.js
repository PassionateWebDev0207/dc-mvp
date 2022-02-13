import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../reducers/asset'
import { getAssets } from '../../service/asset'

function* assetGetAllSaga(params) {
  yield put({ type: actionTypes.assetSetLoadingStatus, payload: true })

  try {
    const { limit, page, sortBy, reverse } = params.payload;
    const result = yield call(getAssets, { limit, page, sortBy, reverse })
    if (result && result.type === 'SUC') {
      const list= result.data
      const count = 100
      yield put({ type: actionTypes.assetSuccess, list, count })    }
  } catch (error) {
    yield put({ type: actionTypes.assetFail, error })
  }

  yield put({ type: actionTypes.assetSetLoadingStatus, payload: false })
}

export function* watchAsset() {
  yield takeLatest(actionTypes.assetGetAllRequest, assetGetAllSaga);
}
