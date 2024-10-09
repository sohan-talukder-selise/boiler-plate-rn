import {Platform} from 'react-native';
import {_config} from './app/types/config.types';
export const config: _config = {
  development: true,
  activityHeight: 0,
  apiTimeout: 60 * 1000,
  token: '',
  baseURL: '',
  googleClientId: Platform.OS === 'android' ? '' : '',
};

export const features = {};
