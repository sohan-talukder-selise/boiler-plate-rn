import {createSlice} from '@reduxjs/toolkit';
import {
  _userReducers,
  userInfoStates,
} from '../../../types/redux/features/auth.types';
import sliceName from '../../sliceName.state';
import {_CustomPayload} from '../../../types/redux/commonState.types';

const authStates: userInfoStates = {
  userInfo: null,
};

const authSlice = createSlice({
  name: sliceName.auth,
  initialState: authStates,
  reducers: {
    storeUserData: (
      state: userInfoStates,
      payload: _CustomPayload<{payload: object | null}>,
    ) => {
      state.userInfo = payload.payload;
    },
    clearAction: (state: userInfoStates) => {
      state.userInfo = authStates.userInfo;
    },
  },
});
export const {storeUserData, clearAction}: _userReducers = authSlice.actions;
export default authSlice.reducer;
