import produce from 'immer';
import { createAction } from 'redux-actions';

export const actionTypes = {
  authSignInRequest: 'auth/sign_in_request',
  authFail: 'auth/fail',
  setLoadingStatus: 'auth/set_loading_status',
};

export const authSignIn = createAction(actionTypes.authSignInRequest);

const defaultState = {
  isLoading: false,
  error: '',
};

const authReducer = (state = defaultState, action) => produce(state, (draft) => {
  switch (action.type) {
    case actionTypes.setLoadingStatus:
      draft.isLoading = action.payload;
      break;
    case actionTypes.authFail:
      draft.error = action.error;
      break;
    default:
      break;
  }
});

export default authReducer;
