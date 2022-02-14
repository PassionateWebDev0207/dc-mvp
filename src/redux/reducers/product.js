import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  productGetAllRequest: 'product/get_all_request',
  productSuccess: 'product/sucess',
  productFail: 'product/fail',
  productSetLoadingStatus: 'product/set_loading_status',
};

export const assetGetAll = createAction(actionTypes.productGetAllRequest)

const defaultState = {
  list: [],
  totalCount: 0,
  isLoading: false,
  error: '',
};

const productReducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.productSuccess:
      draft.list = action.list;
      draft.totalCount = action.count;
      break;
    case actionTypes.productSetLoadingStatus:
      draft.isLoading = action.payload;
      break;
    case actionTypes.productFail:
      draft.error = action.error;
      break;
    default:
      break;
  }
});

export default productReducer;
