import createSagaMiddleware from 'redux-saga';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer.state';
import rootSaga from './rootSaga.state';

const sagaMiddleware = createSagaMiddleware();

const configStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
export default configStore;
