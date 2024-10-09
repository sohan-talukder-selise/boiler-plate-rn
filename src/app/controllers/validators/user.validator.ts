import {_userLoginForms} from '../../types/validators/user.validator.interface';

const userLoginValidator = (formData: _userLoginForms): boolean => {
  console.log('formData', formData);
  return true;
};
export {userLoginValidator};
