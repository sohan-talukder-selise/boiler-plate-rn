import abortHandler from './abortHandler.root-api';
import {messages} from './const.root-api';
import errorHandler from './errorHandler.root-api';
import jsonToFormData from './jsonToFormData.root-api';
import requestAuthMultiPartHeader from './requestAuthMultiPartHeader.root-api';
import responseFormatter from './responseFormatter.root-api';
import returnResponse from './returnResponse.root-api';

const rootFormDataPostApi = async ({url, payload, token}: any) => {
  const {signal, abortRequest} = abortHandler();
  console.log('from rootFormDataPostApi', signal, abortRequest);
  const bodyParams: any = {
    // signal,
    method: 'POST',
    referrerPolicy: 'origin',
    body: jsonToFormData(payload),
  };
  if (token) {
    bodyParams.headers = requestAuthMultiPartHeader(token);
  }
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
      return returnResponse(null, false, messages.internalError);
    });
};
export default rootFormDataPostApi;
