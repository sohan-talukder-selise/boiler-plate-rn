import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {config} from '../../../../config';

const googleConfig = () =>
  GoogleSignin.configure({
    iosClientId: config.googleClientId,
  });

export {googleConfig};
