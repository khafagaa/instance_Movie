import {RouteConfig, StackNavigationState} from '@react-navigation/native';
import {movieInfo} from './movie.type';
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Details: {movie: movieInfo};
};

export type AppStackRoutesType = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
};

export type HomeRouteProp = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type DetailsRouteProp = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;
