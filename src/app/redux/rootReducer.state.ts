import {combineReducers} from '@reduxjs/toolkit';
import sliceName from './sliceName.state';
import authSliceM from './features/auth/auth.slice.m';
import collectionsSliceM from './features/collections/collections.slice.m';

const rootReducer = combineReducers({
  [sliceName.auth]: authSliceM,
  [sliceName.collections]: collectionsSliceM,
});
export default rootReducer;
