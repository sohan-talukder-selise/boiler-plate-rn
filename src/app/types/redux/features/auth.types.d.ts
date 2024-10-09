interface userInfoStates {
  userInfo: object | null;
}
interface _userReducers {
  clearAction: Function;
  storeUserData: Function;
}
export type {userInfoStates, _userReducers};
