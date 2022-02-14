import { call, put, takeLatest } from 'redux-saga/effects'
import { actionTypes } from '../reducers/product'
import { getProducts } from '../../service/product'

function* proudctGetAllSaga(params) {
  yield put({ type: actionTypes.productSetLoadingStatus, payload: true })

  try {
    const { limit, page, sortBy, reverse } = params.payload;
    const result = yield call(getProducts, { limit, page, sortBy, reverse })
    if (result && result.type === 'SUC') {
      const list= result.data
      const count = 100
      yield put({ type: actionTypes.productSuccess, list, count })    }
  } catch (error) {
    yield put({ type: actionTypes.productFail, error })
  }

  yield put({ type: actionTypes.productSetLoadingStatus, payload: false })
}

export function* watchProduct() {
  yield takeLatest(actionTypes.productGetAllRequest, proudctGetAllSaga);
}
