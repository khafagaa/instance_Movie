import {Platform} from 'react-native';

const Shadow = (color: string) => {
  return Platform.select({
    ios: {
      shadowColor: color,
      shadowRadius: 5,
      shadowOffset: {width: 0, height: 5},
    },
    android: {
      elevation: 4,
      shadowColor: color,
    },
  });
};

export default Shadow;
