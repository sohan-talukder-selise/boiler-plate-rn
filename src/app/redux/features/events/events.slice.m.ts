import {createSlice} from '@reduxjs/toolkit';

import {
  _commonStatesP,
  _moduleReducers,
} from '../../../types/redux/commonState.types';
import commonStates from '../../commonState.state';
import sliceName from '../../sliceName.state';
import commonReducers from '../../commonReducer.state';

const initialState: _commonStatesP = {
  ...commonStates,
};

const eventsSlice = createSlice({
  name: sliceName.events,
  initialState: initialState,
  reducers: {
    ...commonReducers,
    clearAction: (state: _commonStatesP) => {
      for (const property in initialState) {
        (state as any)[property] = (initialState as any)[property];
      }
    },
  },
});

export const {
  isGettingSuccess,
  isGettingError,
  isGetting,
  queryChange,
  clearAction,
  isGettingMore,
  isRefresh,
}: _moduleReducers = eventsSlice.actions;

export default eventsSlice.reducer;
