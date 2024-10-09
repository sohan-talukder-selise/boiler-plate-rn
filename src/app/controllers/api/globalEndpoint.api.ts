import {config} from '../../../config';

const baseURL = config.baseURL; //will get from config

const moduleName = {
  auth: '/auth',
  event: '/event',
  admin: '/admin',
  public: '/public',
};
export {moduleName, baseURL};
