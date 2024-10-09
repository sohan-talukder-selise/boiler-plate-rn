import apiToken from './apiToken.root-api';
import {messages} from './const.root-api';
import returnResponse from './returnResponse.root-api';

const internetCheck = async (
  next: any,
  data: any,
  hasToken = false,
  format?: boolean,
) => {
  // const interNetFlag = await hasInternetConnection();
  const interNetFlag = true;
  if (!interNetFlag) {
    return returnResponse(null, false, messages.internet);
  }
  if (hasToken) {
    return apiToken(next, data);
  }
  return next({...data, format});
};
export default internetCheck;
