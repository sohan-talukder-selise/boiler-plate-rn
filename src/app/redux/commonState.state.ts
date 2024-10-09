import {_commonStatesP} from '../types/redux/commonState.types';

const commonStates: _commonStatesP = {
  list: [],
  isLoading: true,
  page: 1,
  perPage: 20,
  hasMore: false,
  isLoadingMore: false,
  refreshing: false,
  order: 'asc',
  query: '',
  hasInfiniteScroll: false,
  itemAppendDirection: 'last',
  firstRender: false,
  extraData: null,
};

export default commonStates;
