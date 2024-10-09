import {_method} from '../../../types/common.types';
import rootFormDataPostApi from './FormDataPostApi.root-api';
import rootGetApi from './getApi.root-api';
import internetCheck from './internetCheck.root-api';
import rootPostApi from './postApi.root-api';
import rootDeleteApi from './rootDeleteApi.root-api';
import rootFormDataPUTApi from './rootFormDataPUTApi.root-pai';
import rootPublicGetApi from './rootPublicGetApi.root-api';
import rootPublicPostApi from './rootPublicPostApi.root-api';
import rootPublicPostCorsApi from './rootPublicPostCorsApi.root-api';
import rootPublicPutApi from './rootPublicPutApi.root-api';
import rootPutApi from './rootPutApi.root-api';

const rootApi = async (
  method: _method = 'GET',
  url: string,
  payload?: any,
  format: boolean = true,
) => {
  const types: any = {
    GET: () => internetCheck(rootGetApi, {url: url}, true),
    POST: () => internetCheck(rootPostApi, {url: url, payload: payload}, true),
    PUT: () => internetCheck(rootPutApi, {url: url, payload: payload}, true),
    DELETE: () =>
      internetCheck(rootDeleteApi, {url: url, payload: payload}, true),
    POST_FROM_DATA: () =>
      internetCheck(rootFormDataPostApi, {url: url, payload: payload}, true),
    POST_FROM_DATA_WITHOUT_AUTH: () =>
      internetCheck(rootFormDataPostApi, {url: url, payload: payload}),
    PUT_FROM_DATA: () =>
      internetCheck(rootFormDataPUTApi, {url: url, payload: payload}, true),
    GET_WITHOUT_AUTH: () =>
      internetCheck(rootPublicGetApi, {url: url}, false, format),
    POST_WITHOUT_AUTH: () =>
      internetCheck(rootPublicPostApi, {url: url, payload: payload}),
    PUT_WITHOUT_AUTH: () =>
      internetCheck(rootPublicPutApi, {url: url, payload: payload}),
    POST_CORS: () =>
      internetCheck(rootPublicPostCorsApi, {url: url, payload: payload}),
  };
  return types[method]();
};
export default rootApi;
