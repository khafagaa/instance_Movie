import React, {useEffect, useState} from 'react';
import ProvidersWrapper from '@providers/ProvidersWrapper';
import Navigation from '@navigation/index';
import {Provider} from 'react-redux';
import {store} from '@redux/store';
import 'react-native-reanimated';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ProvidersWrapper>
        <Navigation />
      </ProvidersWrapper>
    </Provider>
  );
}

export default App;
