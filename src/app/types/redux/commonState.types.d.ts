import {PayloadAction} from '@reduxjs/toolkit';
import {_objectOfKey} from '../common.types';

export type _CustomPayload<T> = PayloadAction<T>;
export type _CustomAction<T> = PayloadAction<T>;

interface _apiResponse {
  body: any;
  message: string;
  status: boolean;
  responseCode: any;
  tokens?: any;
}
interface _unformattedApiResponse {
  data: any;
  extraData?: unknown;
  message: string;
  success: boolean;
  responseCode: string | number;
}

interface _commonStatesP {
  list: Array<any>;
  isLoading: boolean;
  page: number;
  perPage: number;
  hasMore: boolean;
  isLoadingMore: boolean;
  refreshing: boolean;
  order: 'asc' | 'desc';
  query: string;
  hasInfiniteScroll: boolean;
  itemAppendDirection: 'last' | 'first';
  firstRender: boolean;
  extraData: any;
}

interface _commonReducerP {
  isGetting?: Function;
  isGettingSuccess?: Function;
  isGettingError?: Function;
  isGettingMore?: Function;
  isRefresh?: Function;
  isStateUpdate?: Function;
  queryChange?: Function;
  addAction?: Function;
  deleteAction?: Function;
  updateAction?: Function;
  clearAction: Function;
}
interface _moduleReducers extends _commonReducerP {}
/* common reducer payload */
interface _isGetting {
  page?: number;
  perPage?: number;
  query?: string;
  advancedQuery?: _objectOfKey;
  direction?: 'asc' | 'desc';
  needPagination?: boolean;
}

export type {
  _apiResponse,
  _unformattedApiResponse,
  _commonStatesP,
  _commonReducerP,
  _moduleReducers,
  _isGetting,
};
