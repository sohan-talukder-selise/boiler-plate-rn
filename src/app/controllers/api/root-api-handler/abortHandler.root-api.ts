import {messages} from './const.root-api';
import returnResponse from './returnResponse.root-api';

const abortHandler = () => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const abortRequest = setTimeout(() => {
    if (abortController) {
      abortController.abort();
    }
    clearTimeout(abortRequest);
    returnResponse(null, false, messages.timeout);
  }, 60000);
  return {
    signal: signal,
    abortRequest: abortRequest,
  };
};

export default abortHandler;
