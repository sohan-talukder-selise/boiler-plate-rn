import abortHandler from './abortHandler.root-api';
import {messages} from './const.root-api';
import errorHandler from './errorHandler.root-api';
import jsonToFormData from './jsonToFormData.root-api';
import requestAuthMultiPartHeader from './requestAuthMultiPartHeader.root-api';
import responseFormatter from './responseFormatter.root-api';
import returnResponse from './returnResponse.root-api';

const rootFormDataPUTApi = async ({url, payload, token}: any) => {
  const {signal, abortRequest} = abortHandler();
  console.log('from rootFormDataPUTApi', {signal, abortRequest});

  const bodyParams: any = {
    // signal,
    method: 'PUT',
    headers: requestAuthMultiPartHeader(token),
    referrerPolicy: 'origin',
    body: jsonToFormData(payload),
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
          method: 'PUT',
        },
        error,
      );
      return returnResponse(null, false, messages.internalError);
    });
};

export default rootFormDataPUTApi;
