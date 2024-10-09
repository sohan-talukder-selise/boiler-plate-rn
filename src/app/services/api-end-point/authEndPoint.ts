import {baseURL, moduleName} from '../../controllers/api/globalEndpoint.api';

const authEndPoint = {
  login: baseURL + moduleName.auth + '/login',
  profile: baseURL + moduleName.auth + '/profile',
  updateProfile: baseURL + moduleName.auth + '/update/profile',
  updateProfileImage: baseURL + moduleName.auth + '/profile-image/update',
  updateProfileImages: baseURL + moduleName.auth + '/user-images/update',
  resetPassword: baseURL + moduleName.auth + '/reset/password',
  forgotSendOtp: baseURL + moduleName.auth + '/forget/password/otp/send',
  forgotVerifyOtp: baseURL + moduleName.auth + '/forget/password/otp/verify',
  logout: baseURL + moduleName.auth + '/logout',
  verify: baseURL + moduleName.auth + '/profile/verify',
  registration: baseURL + moduleName.auth + '/register',
  registrationVerifyOtp: baseURL + moduleName.auth + '/verify/otp',
  registrationUpdate: baseURL + moduleName.auth + '/registered/user/update',
  registrationResendOtp: baseURL + moduleName.auth + '/resend/otp',
};

export default authEndPoint;
