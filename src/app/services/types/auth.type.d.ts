interface _auth {
  email: string;
  password: string;
}
interface _changePassword {
  old_password: string;
  new_password: string;
}
interface _verifyOtp {
  email: string;
  otp: string;
}
interface _resendOTP {
  email: string;
}
export type {_auth, _resendOTP, _verifyOtp, _changePassword};
