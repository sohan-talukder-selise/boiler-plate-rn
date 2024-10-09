import {useNavigation} from '@react-navigation/native';
import {useRef, useState} from 'react';
import Toast from 'react-native-toast-message';
import {messages} from '../../../assets/constants/messages.constants';
import {screens} from '../../../routes/routeName.routes';
import AuthService from '../../../services/features/auth/Auth.service';
import registrationValidator from '../../../controllers/validators/registration.validator';
import {useDispatch} from 'react-redux';
import {storeUserData} from '../../../redux/features/auth/auth.slice.m';
import ProfileSetup from '../../../controllers/models/ProfileSetup.model';

const useRegistrationEmail = () => {
  const values = useRef<{
    email: string;
    password: string;
    confirm_password: string;
  }>({
    email: '',
    password: '',
    confirm_password: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleSubmit = async () => {
    const registrationData = {
      ...values.current,
    };
    let validate =
      registrationValidator.registrationWithEmail(registrationData);
    if (validate !== '') {
      Toast.show({
        type: 'error',
        text2: validate || messages.fillUpLoginForm,
      });
      return;
    }
    setIsLoading(true);
    try {
      const requestData = {
        ...registrationData,
      };
      const {status, body, message} = await AuthService.registrationEmail(
        requestData,
      );
      setIsLoading(false);
      if (status) {
        dispatch(storeUserData(body));
        ProfileSetup.email = requestData.email;
        if (!body?.email_registered) {
          navigation.replace(screens.verifyOtp, {email: requestData.email});
        } else {
          navigation.replace(screens.profileSetupOnboarding as never);
        }
      } else {
        Toast.show({
          type: 'error',
          text2: message,
        });
      }
    } catch (_) {
      setIsLoading(false);
      Toast.show({
        type: 'error',
        text2: messages.somethingWrong,
      });
    }
  };
  const onChangeValue = (text: string, name: string | any) => {
    (values.current as any)[name] = text;
  };
  return {values, onChangeValue, handleSubmit, isLoading};
};
export default useRegistrationEmail;
