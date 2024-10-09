import {useNavigation} from '@react-navigation/native';
import {screens} from '../../../routes/routeName.routes';
import {useLayoutEffect, useRef, useState} from 'react';
import AuthService from '../../../services/features/auth/Auth.service';
import Toast from 'react-native-toast-message';
import {messages} from '../../../assets/constants/messages.constants';

const useVerifyOtp = (email: string) => {
  const navigation = useNavigation<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resend, setResend] = useState<boolean>(false);
  const timerRef = useRef<any>(null);
  const handleOTP = async (params: string) => {
    if (params?.length === 6) {
      setIsLoading(true);
      try {
        const {status, message} = await AuthService.verifyOtp({
          email,
          otp: params,
        });
        setIsLoading(false);
        if (status) {
          navigation.replace(screens.profileSetupOnboarding as never);
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
      } finally {
        setResend(false);
        startTimer();
      }
    }
  };
  const startTimer = () => {
    let secondsRemaining = 120;
    let timerInterval: any;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timerRef.current?.setNativeProps({text: secondsRemaining});
      secondsRemaining--;

      if (secondsRemaining < 0) {
        clearInterval(timerInterval);
        setResend(true);
      }
    }, 1000);
  };
  useLayoutEffect(() => {
    startTimer();
  }, []);
  const resendOtp = async () => {
    setIsLoading(true);
    try {
      const {status, message} = await AuthService.resendOTp({
        email,
      });
      setIsLoading(false);
      if (!status) {
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
  return {resendOtp, resend, timerRef, isLoading, handleOTP};
};

export default useVerifyOtp;
