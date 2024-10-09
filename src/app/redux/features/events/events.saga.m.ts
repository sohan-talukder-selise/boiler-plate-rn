import {all, call, put, select, takeEvery} from 'redux-saga/effects';
import sliceName from '../../sliceName.state';
import {
  _CustomPayload,
  _apiResponse,
} from '../../../types/redux/commonState.types';
import {isGettingError, isGettingSuccess} from './events.slice.m';
import {eventsStates} from '../../allSelector.state';
import EventsService from '../../../services/features/events/Events.service';

function* events() {
  yield takeEvery(`${sliceName.events}/isGetting`, isGettingSaga);
  yield takeEvery(`${sliceName.events}/queryChange`, isGettingSaga);
  yield takeEvery(`${sliceName.events}/isRefresh`, isGettingSaga);
  yield takeEvery(`${sliceName.events}/pageChange`, isGettingSaga);
}
function* isGettingSaga({}: _CustomPayload<any>): Generator {
  const {page, perPage}: any = yield select(eventsStates);
  const _payload = {
    page: page,
    perPage: perPage,
    needPagination: true,
  };
  console.log(_payload);
  const result = yield call(EventsService.list);
  if (!result) {
    yield put(isGettingError());
    return;
  }
  const {body, status} = result as _apiResponse;
  if (status) {
    yield put(isGettingSuccess({body}));
  } else {
    yield put(isGettingError());
  }
}
// function* getMoreSaga()

export default function* eventsSaga() {
  yield all([events()]);
}
