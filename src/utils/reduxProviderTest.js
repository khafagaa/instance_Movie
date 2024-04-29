import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store as storee} from '@redux/store';
import {setupListeners} from '@reduxjs/toolkit/query';
// import {setupListeners} from '@reduxjs/toolkit/dist/query';

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = storee,
    ...renderOptions
  } = {},
) {
  setupListeners(store.dispatch);

  function Wrapper({children}) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
