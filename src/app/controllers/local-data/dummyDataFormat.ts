import {
  _apiResponse,
  _unformattedApiResponse,
} from '../../types/redux/commonState.types';

interface dummy extends _apiResponse {
  success?: boolean;
  data?: boolean;
}

export const dummyDataFormat = (response: _unformattedApiResponse) => {
  const formatRes: dummy = {
    ...response,
    body: response.data,
    status: response.success,
  };
  delete formatRes.data;
  delete formatRes.success;
  return formatRes;
};
