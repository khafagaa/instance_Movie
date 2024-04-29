import getColor from '@theme/getColor';
import {
  calcFont,
  calcWidth,
  screenHeigh,
  screenWidth,
} from '@utils/responsive-helper.service';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';

const styles = (color: colors) =>
  StyleSheet.create({
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      backgroundColor: color.darkBlue,
      flex: 1,
    },
    line: {
      margin: 5,
      alignSelf: 'center',
      width: '95%',
      borderWidth: 1,
      elevation: 4,
      shadowColor: 'white',
      backgroundColor: color.primary,
    },
    txt: {
      color: color.white,
      fontWeight: 'bold',
      fontSize: calcFont(25),
      margin: calcWidth(25),
    },
    history: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      marginTop: 10,
      zIndex: 999,
    },
    img: {
      position: 'absolute',
      width: screenWidth,
      height: screenHeigh,
      bottom: 20,
      top: 0,
    },
  });

export default styles;
