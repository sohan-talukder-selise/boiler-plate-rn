import abortHandler from './abortHandler.root-api';
import {messages} from './const.root-api';
import errorHandler from './errorHandler.root-api';
import requestAuthHeader from './requestAuthHeader.root-api';
import responseFormatter from './responseFormatter.root-api';
import returnResponse from './returnResponse.root-api';

const rootDeleteApi = async ({url, token}: any) => {
  const {signal, abortRequest} = abortHandler();
  console.log('from rootDeleteApi', {signal, abortRequest});
  const bodyParams: any = {
    // signal,
    method: 'DELETE',
    headers: requestAuthHeader(token),
    referrerPolicy: 'origin',
  };

  return fetch(url, bodyParams)
    .then(response => response.json())
    .then(responseData => {
      // if (abortRequest) {
      //   clearTimeout(abortRequest);
      // }
      return responseFormatter(responseData);
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

export default rootDeleteApi;
