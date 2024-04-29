import React, {useEffect} from 'react';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {Details, Home, Splash, History} from '@screens/index';
import {useSelector} from 'react-redux';
import LoadingPage from '@screens/LoadingPage/LoadingPage';
import {
  AppStackRoutesType,
  RootStackParamList,
} from 'src/types/navigation.type';
import {addEventListener} from '@react-native-community/netinfo';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import NetInfo from '@react-native-community/netinfo';
import {changeConnection} from '@redux/Loading/loading.reducer';

export default function Navigation() {
  const {networkConnection, loading} = useAppSelector(state => state.loading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(changeConnection(state?.isInternetReachable));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // strictly typed array of app stack routes
  const appStackRoutes: Array<AppStackRoutesType> = [
    {
      name: 'Splash',
      component: Splash,
    },
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'Details',
      component: Details,
    },
  ];

  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        {appStackRoutes.map(stackRoute => (
          <Stack.Screen key={stackRoute.name} {...stackRoute} />
        ))}
      </Stack.Navigator>

      {(!networkConnection || loading) && <LoadingPage />}
    </>
  );
}
