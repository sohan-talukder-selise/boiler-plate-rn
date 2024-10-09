import abortHandler from './abortHandler.root-api';
import {messages} from './const.root-api';
import errorHandler from './errorHandler.root-api';
import requestBody from './requestBody.root-api';
import requestCorsHeader from './requestCorsHeader.root-api';
import responseFormatter from './responseFormatter.root-api';
import returnResponse from './returnResponse.root-api';

const rootPublicPostCorsApi = async ({url, payload}: any) => {
  const {signal, abortRequest} = abortHandler();
  console.log('rootPublicPostCorsApi', {signal, abortRequest});
  const bodyParams: any = {
    // signal,
    method: 'POST',
    headers: requestCorsHeader(),
    // referrerPolicy: 'origin-when-cross-origin',
    body: requestBody(payload),
    // mode: 'no-cors',
  };

  return fetch(url, bodyParams)
    .then(response => response.json())
    .then(responseData => {
      console.log('responseData', responseData);
      // if (abortRequest) {
      //     clearTimeout(abortRequest);
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
      return returnResponse(null, false, messages.internalError);
    });
};

export default rootPublicPostCorsApi;
