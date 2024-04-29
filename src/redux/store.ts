import {configureStore} from '@reduxjs/toolkit';
import history from '@redux/Historymovies/history.reducer';
import loading from '@redux/Loading/loading.reducer';
import {movieAPI} from '@services/movieApis';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    history: history,
    loading: loading,
    [movieAPI.reducerPath]: movieAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(movieAPI?.middleware),
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
