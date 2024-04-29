import getColor from '@theme/getColor';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';
import {
  calcFont,
  calcHeight,
  calcWidth,
  screenWidth,
} from '@utils/responsive-helper.service';
const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.dimmed,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.9,
      position: 'absolute',
      zIndex: 1000,
      gap: calcWidth(20),
    },
    noConn: {
      color: color.white,
      fontSize: calcFont(20),
      fontWeight: 'bold',
    },
    continue: {
      backgroundColor: color.white,
      borderRadius: 20,
      padding: 10,
    },
    txt: {
      color: color.green,
      fontSize: calcFont(20),
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  });

export default styles;
