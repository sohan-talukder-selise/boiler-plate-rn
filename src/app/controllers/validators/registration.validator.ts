import {messages} from '../../assets/constants/messages.constants';
import {isEmailValid} from '../../helper/utilities/emailValidation.utility';
import isEmpty from '../../helper/utilities/isEmpty.utility';

class registrationValidator {
  registrationWithEmail({
    email,
    password,
    confirm_password,
  }: {
    email: string;
    password: string;
    confirm_password: string;
  }) {
    if (isEmpty(email) || isEmpty(password) || isEmpty(confirm_password)) {
      return messages.fillUpLoginForm;
    }
    if (email) {
      if (!isEmailValid(email)) {
        return messages.typeValidEmail;
      }
    }
    if (password.length < 6 || confirm_password.length < 6) {
      return messages.passwordLength;
    }
    if (password !== confirm_password) {
      return messages.passwordNotMatch;
    }
    return '';
  }
}

export default new registrationValidator();
