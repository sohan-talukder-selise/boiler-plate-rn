import {all} from 'redux-saga/effects';
import eventsSaga from './features/events/events.saga.m';

export default function* rootSaga() {
  yield all([eventsSaga()]);
}
