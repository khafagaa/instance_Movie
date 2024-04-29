import getColor from '@theme/getColor';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';
const styles = (color: colors) =>
  StyleSheet.create({
    circle: {
      borderRadius: 200,
      borderColor: color.primary,
      borderWidth: 1.5,
      position: 'absolute',
      alignSelf: 'center',
    },
  });

export default styles;
