import rootApi from '../../../controllers/api/root-api-handler/rootApi.api';
import authEndPoint from '../../api-end-point/authEndPoint';
import {
  _auth,
  _changePassword,
  _resendOTP,
  _verifyOtp,
} from '../../types/auth.type';

class AuthServiceClass {
  async login(payload: _auth) {
    return rootApi('POST_WITHOUT_AUTH', authEndPoint.login, payload);
  }
  async registrationEmail(payload: _auth) {
    return rootApi('POST_WITHOUT_AUTH', authEndPoint.registration, payload);
  }
  async changePassword(payload: _changePassword) {
    return rootApi('POST', authEndPoint.login, payload);
  }
  async profile() {
    return rootApi('GET', authEndPoint.profile);
  }
  async verifyOtp(payload: _verifyOtp) {
    return rootApi(
      'POST_WITHOUT_AUTH',
      authEndPoint.registrationVerifyOtp,
      payload,
    );
  }
  async resendOTp(payload: _resendOTP) {
    return rootApi(
      'POST_WITHOUT_AUTH',
      authEndPoint.registrationResendOtp,
      payload,
    );
  }
  async registrationUpdate(payload: any) {
    return rootApi(
      'POST_FROM_DATA_WITHOUT_AUTH',
      authEndPoint.registrationUpdate,
      payload,
    );
  }
  async verify(payload: any) {
    return rootApi('POST', authEndPoint.verify, payload);
  }
}

const AuthService = new AuthServiceClass();
export default AuthService;
