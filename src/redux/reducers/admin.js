import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  adminGetUsersRequest: 'admin/get_users_request',
  adminCreateUserRequest: 'admin/create_user_request',
  adminUpdateUserRequest: 'admin/update_user_request',
  adminGetHistoryRequest: 'admin/get_history_request',
  adminAccounts: 'admin/accounts',
  adminHistory: 'admin/history',
  adminFail: 'admin/fail',
  setLoadingStatus: 'admin/set_loading_status',
};

export const adminGetUsers = createAction(actionTypes.adminGetUsersRequest)
export const adminCreateUser = createAction(actionTypes.adminCreateUserRequest)
export const adminUpdateUser = createAction(actionTypes.adminUpdateUserRequest)
export const adminGetHistory = createAction(actionTypes.adminGetHistoryRequest)

const defaultState = {
  accounts: [],
  accountsTotalCount: 0,
  history: [],
  historyTotalCount: 0,
  isLoading: false,
  error: '',
};

const adminReducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.adminAccounts:
      draft.accounts = action.list;
      draft.accountsTotalCount = action.count;
      break;
    case actionTypes.adminHistory:
      draft.history = action.list;
      draft.historyTotalCount = action.count;
      break;
    case actionTypes.setLoadingStatus:
      draft.isLoading = action.payload;
      break;
    case actionTypes.adminFail:
      draft.error = action.error;
      break;
    default:
      break;
  }
});

export default adminReducer;
