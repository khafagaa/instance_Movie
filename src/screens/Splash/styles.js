import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    zIndex: 10000,
  },
  offlineContainer: {
    backgroundColor: '#bd1010',
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notiContainer: {
    backgroundColor: '#f1f2f6',
    width: '90%',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 50,
    borderRadius: 16,
    paddingHorizontal: 20,
    // paddingVertical: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
  },
  row: {
    justifyContent: 'flex-start',
    width: '100%',
    marginLeft: 16,
  },
  body: {},
});

export default styles;
