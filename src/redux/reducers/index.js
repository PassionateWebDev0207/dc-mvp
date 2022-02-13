import { combineReducers } from 'redux';
import authReducer from './auth'
import adminReducer from './admin'
import assetReducer from './asset'

const rootReducer = combineReducers({
  auth: authReducer,
  admin: adminReducer,
  asset: assetReducer,
});

export default rootReducer;
