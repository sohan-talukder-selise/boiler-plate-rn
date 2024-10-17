import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {
  _CustomAction,
  _commonStatesP,
  _isGetting,
  _moduleReducers,
} from '../../../types/redux/commonState.types';
import commonStates from '../../commonState.state';
import sliceName from '../../sliceName.state';
import commonReducers from '../../commonReducer.state';
import CollectionsServices from '../../../services/features/collections/Collections.service';

const initialState: _commonStatesP = {
  ...commonStates,
};
export const getCollectionsList = createAsyncThunk(
  `${sliceName.collections}/list`,
  async (obj: _isGetting) => {
    return CollectionsServices.getList(obj);
  },
);

const collectionsSlice = createSlice({
  name: sliceName.collections,
  initialState: initialState,
  extraReducers: builder => {
    builder.addCase(getCollectionsList.pending, state => {
      commonReducers.isGetting(state);
    });
    builder.addCase(
      getCollectionsList.fulfilled,
      (state, {payload}: _CustomAction<{body: any; extraData?: any}>) => {
        const {body} = payload;
        let list = [];
        if (state.page > 1) {
          list = (state.list || []).concat(Array.isArray(body) ? body : []);
        } else {
          list = Array.isArray(body) ? body : [];
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
    );
    builder.addCase(getCollectionsList.rejected, state => {
      commonReducers.isGettingError(state);
    });
  },
  reducers: {
    clearAction: (state: _commonStatesP) => {
      for (const property in initialState) {
        (state as any)[property] = (initialState as any)[property];
      }
    },
  },
});

export const {clearAction}: _moduleReducers = collectionsSlice.actions;

export default collectionsSlice.reducer;
