import {_functionalElementReturn} from './element.types';

type _uid = number | string;
type _status = number | string;
interface _objectOfKey {
  [key: number | string]: any;
}
interface _localStoreIndex {
  [key: number | string]: number;
}

/* routes */
interface _routeProps {
  name: string;
  component: _functionalElementReturn;
  title?: string;
  isLazy?: boolean;
  isHide: boolean;
  accessLabel: number | string;
}
type _method =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'POST_FROM_DATA'
  | 'POST_FROM_DATA_WITHOUT_AUTH'
  | 'PUT_FROM_DATA'
  | 'GET_WITHOUT_AUTH'
  | 'POST_WITHOUT_AUTH'
  | 'PUT_WITHOUT_AUTH'
  | 'POST_CORS';
export type {
  _routeProps,
  _uid,
  _method,
  _status,
  _objectOfKey,
  _localStoreIndex,
};
