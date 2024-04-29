import {NavigationContainer} from '@react-navigation/native';
import React, {FC, ReactNode} from 'react';
import {ThemeProvider} from '@providers/Theme.provider';
import {store} from '../redux/store';
import {Provider} from 'react-redux';

const ProvidersWrapper: FC<{children: ReactNode}> = ({children}) => (
  <ThemeProvider>
    <NavigationContainer>{children}</NavigationContainer>
  </ThemeProvider>
);

export default ProvidersWrapper;
