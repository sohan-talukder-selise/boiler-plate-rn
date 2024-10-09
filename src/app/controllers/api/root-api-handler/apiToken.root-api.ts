import {config} from '../../../../config';
import isEmpty from '../../../helper/utilities/isEmpty.utility';
import {messages} from './const.root-api';
import errorHandler from './errorHandler.root-api';
import returnResponse from './returnResponse.root-api';

const apiToken = async (next: any, data: any) => {
  const token = config.token;
  if (isEmpty(token)) {
    errorHandler({...data}, messages.noToken);
    return returnResponse(null, false, messages.noToken, true);
  }
  return next({...data, token});
};

export default apiToken;
