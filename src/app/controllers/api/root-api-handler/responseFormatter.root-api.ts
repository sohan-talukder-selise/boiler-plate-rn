import {apiStatus, messages} from './const.root-api';
import returnResponse from './returnResponse.root-api';

const responseFormatter = (response: any) => {
  if (response.status) {
    return returnResponse(
      response.data,
      true,
      response.message,
      false,
      response.tokens,
    );
  } else {
    if (response.responseCode === apiStatus.appUnauthorized) {
      // window.globalLogout();
      return returnResponse(response.data, false, response.message, true);
    }
    if (response.responseCode === apiStatus.unauthorized) {
      return returnResponse(response.data, false, response.message, true);
    }
    if (response.responseCode === apiStatus.invalidCredential) {
      return returnResponse(response.data, false, response.message);
    }
    if (response.responseCode === apiStatus.validation) {
      return returnResponse(response.data, false, response.message);
    }
    if (response.responseCode === apiStatus.tokenInvalid) {
      return returnResponse(response.data, false, messages.noToken, true);
    }
    if (response.responseCode === apiStatus.tokenExpired) {
      return returnResponse(response.data, false, messages.noToken, true);
    }
    if (response.responseCode === apiStatus.timeoutError) {
      return returnResponse(response.data, false, messages.noToken, true);
    } else {
      return returnResponse(
        null,
        false,
        response.message,
        false,
        response.tokens,
      );
    }
  }
};

export default responseFormatter;
