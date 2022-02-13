import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  assetGetAllRequest: 'asset/get_all_request',
  assetSuccess: 'asset/sucess',
  assetFail: 'refinery/fail',
  assetSetLoadingStatus: 'asset/set_loading_status',
};

export const assetGetAll = createAction(actionTypes.assetGetAllRequest)

const defaultState = {
  list: [],
  totalCount: 0,
  isLoading: false,
  error: '',
};

const assetReducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.assetSuccess:
      draft.list = action.list;
      draft.totalCount = action.count;
      break;
    case actionTypes.assetSetLoadingStatus:
      draft.isLoading = action.payload;
      break;
    case actionTypes.assetFail:
      draft.error = action.error;
      break;
    default:
      break;
  }
});

export default assetReducer;
