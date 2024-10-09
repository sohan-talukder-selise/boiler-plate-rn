import {combineReducers} from '@reduxjs/toolkit';
import sliceName from './sliceName.state';
import authSliceM from './features/auth/auth.slice.m';

const rootReducer = combineReducers({
  [sliceName.auth]: authSliceM,
});
export default rootReducer;
