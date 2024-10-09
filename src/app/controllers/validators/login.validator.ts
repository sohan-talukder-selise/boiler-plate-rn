import {messages} from '../../assets/constants/messages.constants';
import {isEmailValid} from '../../helper/utilities/emailValidation.utility';
import isEmpty from '../../helper/utilities/isEmpty.utility';

class loginValidator {
  isValidForLogin({email, password}: any) {
    if (isEmpty(email) || isEmpty(password)) {
      return messages.fillUpLoginForm;
    }
    if (email) {
      if (!isEmailValid(email)) {
        return messages.typeValidEmail;
      }
    }
    if (password.length < 6) {
      return messages.passwordLength;
    }
    return '';
  }
  isValidForForgetPassword({email}: any) {
    if (isEmpty(email)) {
      return messages.fillUpForgotForm;
    }
    if (email) {
      if (!isEmailValid(email)) {
        return messages.typeValidEmail;
      }
    }
    return '';
  }
}

export default new loginValidator();
