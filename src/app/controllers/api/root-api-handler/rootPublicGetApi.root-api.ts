import abortHandler from './abortHandler.root-api';
import {messages} from './const.root-api';
import errorHandler from './errorHandler.root-api';
import requestHeader from './requestHeader.root-api';
import responseFormatter from './responseFormatter.root-api';
import returnResponse from './returnResponse.root-api';

const rootPublicGetApi = async ({url, format}: any) => {
  const {signal, abortRequest} = abortHandler();
  const bodyParams: any = {
    signal,
    method: 'GET',
    headers: requestHeader(),
    referrerPolicy: 'origin',
  };

  return fetch(url, bodyParams)
    .then(response => response.json())
    .then(responseData => {
      if (abortRequest) {
        clearTimeout(abortRequest);
      }
      return format ? responseFormatter(responseData) : responseData;
    })
    .catch(error => {
      errorHandler(
        {
          url: url,
          bodyParams: bodyParams,
          method: 'GET',
        },
        error,
      );
      return returnResponse(null, false, messages.internalError);
    });
};

export default rootPublicGetApi;
