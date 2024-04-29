import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  circles: {
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    opacity: 0.35,
  },
  logo: {
    position: 'absolute',
    zIndex: 2,
    width: 100,
    height: 100,
  },
});
