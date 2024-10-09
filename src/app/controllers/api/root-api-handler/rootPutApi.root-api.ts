import abortHandler from './abortHandler.root-api';
import {apiStatus, messages} from './const.root-api';
import errorHandler from './errorHandler.root-api';
import requestAuthHeader from './requestAuthHeader.root-api';
import requestBody from './requestBody.root-api';
import responseFormatter from './responseFormatter.root-api';
import returnResponse from './returnResponse.root-api';

const rootPutApi = async ({url, payload, token}: any) => {
  const {signal, abortRequest} = abortHandler();
  console.log('from rootPutApi', {signal, abortRequest});
  const bodyParams: any = {
    // signal,
    method: 'PUT',
    headers: requestAuthHeader(token),
    referrerPolicy: 'origin',
    body: requestBody(payload),
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
          method: 'POST',
        },
        error,
      );
      return returnResponse(
        null,
        apiStatus.internalError,
        messages.internalError,
      );
    });
};

export default rootPutApi;
