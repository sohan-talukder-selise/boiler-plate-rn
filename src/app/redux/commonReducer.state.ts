import isEmpty from '../helper/utilities/isEmpty.utility';
import {_CustomAction, _commonStatesP} from '../types/redux/commonState.types';

const commonReducers = {
  isGetting: (state: _commonStatesP) => {
    state.isLoading = true;
    state.firstRender = true;
  },
  isGettingSuccess: (
    state: _commonStatesP,
    {payload}: _CustomAction<{body: any; extraData?: any}>,
  ) => {
    const {body} = payload;
    let list = [];
    if (state.page > 1) {
      list = (state.list || []).concat(
        Array.isArray(body.data) ? body.data : [],
      );
    } else {
      list = Array.isArray(body.data) ? body.data : [];
    }
    state.isLoadingMore = false;
    state.refreshing = false;
    state.firstRender = true;
    state.extraData = {...body.metadata};
    state.isLoading = false;
    state.list = [...list];
    state.page = state.page + 1;
    state.hasMore = body?.length >= state.perPage ? true : false;
  },
  addAction: (state: _commonStatesP, {payload}: _CustomAction<any>) => {
    if (!isEmpty(payload)) {
      state.list.unshift(payload);
    }
  },
  updateAction: (state: _commonStatesP, {payload}: _CustomAction<any>) => {
    const {index, id, item} = payload;

    if (index !== undefined) {
      state.list[index] = item;
    } else {
      state.list = state.list.map((_i: any) => (_i.uid === id ? item : _i));
    }
  },
  deleteAction: (state: _commonStatesP, {payload}: _CustomAction<any>) => {
    const {index, id} = payload;
    if (index || index === 0) {
      state.list.splice(index, 1);
      return;
    } else {
      state.list = state.list.filter((_i: any) => _i?._id !== id);
    }
  },
  isGettingError: (state: _commonStatesP) => {
    state.isLoadingMore = false;
    state.refreshing = false;
    state.isLoading = false;
  },
  isGettingMore: (state: _commonStatesP) => {
    state.isLoadingMore = true;
  },
  isRefresh: (state: _commonStatesP) => {
    state.refreshing = true;
    state.isLoadingMore = false;
    state.hasMore = false;
    state.page = 1;
    state.perPage = 10;
  },
  isStateUpdate: (state: _commonStatesP, {payload}: _CustomAction<any>) => {
    state = {...state, ...payload};
  },
  queryChange: (state: _commonStatesP, {payload}: _CustomAction<any>) => {
    const {page, perPage, query} = payload || {
      page: 1,
      perPage: 10,
      query: null,
    };
    state.isLoading = true;
    state.hasMore = false;
    state.page = page;
    state.perPage = perPage;
    state.query = query;
    state.list = [];
  },
};

export default commonReducers;
