import {useEffect, useRef, useState} from 'react';
import {
  getLocalData,
  storeLocalData,
} from '../../../packages/asyncStorage/storageHandle';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {config} from '../../../../config';
import {screens} from '../../../routes/routeName.routes';
import loginValidator from '../../../controllers/validators/login.validator';
import Toast from 'react-native-toast-message';
import {messages} from '../../../assets/constants/messages.constants';
import AuthService from '../../../services/features/auth/Auth.service';
import {storeUserData} from '../../../redux/features/auth/auth.slice.m';

const useLogin = () => {
  const values = useRef<{email: string; password: string}>({
    email: '',
    password: '',
  });
  const rememberMe = useRef(false);
  const [defaultValues, setDefaultValues] = useState<{
    email: string;
    password: string;
    check: boolean;
  }>({
    email: '',
    password: '',
    check: false,
  });
  const navigation = useNavigation<any>();
  const emailInputRef = useRef<any>(null);
  const passwordInputRef = useRef<any>(null);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogin = async () => {
    const loginData = {
      email: values.current.email,
      password: values.current.password,
    };
    let validate = loginValidator.isValidForLogin(loginData);
    if (validate !== '') {
      Toast.show({
        type: 'error',
        text2: validate || messages.fillUpLoginForm,
      });
      return;
    }
    setIsLoading(true);
    try {
      /* need to change */
      const requestData = {
        ...loginData,
      };
      const {status, body, message, tokens} = await AuthService.login(
        requestData,
      );
      setIsLoading(false);
      if (status) {
        dispatch(storeUserData(body));
        storeLocalData.loggedInFlag(true);
        rememberMe.current &&
          storeLocalData.userCredential({
            ...loginData,
            check: rememberMe.current,
          });
        storeLocalData.apiToken(tokens?.access?.token);
        config.token = tokens?.access?.token?.toString();
        navigation.navigate(screens.home, {replace: true});
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
  useEffect(() => {
    const checkStore = async () => {
      const storeInfo = await getLocalData.userCredential();
      try {
        values.current.email = storeInfo.email;
        values.current.password = storeInfo.password;
        rememberMe.current = storeInfo?.check || false;
        emailInputRef.current?.setNativeProps({text: storeInfo.email});
        passwordInputRef.current?.setNativeProps({text: storeInfo.password});
        setDefaultValues({
          email: storeInfo.email,
          password: storeInfo.password,
          check: storeInfo.check,
        });
      } catch (_) {}
    };
    checkStore();
  }, []);
  return {
    emailInputRef,
    passwordInputRef,
    handleLogin,
    isLoading,
    onChangeValue,
    navigation,
    defaultValues,
    rememberMe,
  };
};

export default useLogin;
