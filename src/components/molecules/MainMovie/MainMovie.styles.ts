import {calcFont, calcWidth} from '@utils/responsive-helper.service';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';

const styles = (colors: colors) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
      justifyContent: 'flex-end',
      flex: 1,
    },
    txt1: {
      fontWeight: '800',
      fontSize: calcFont(30),
      color: colors.txt,
      maxWidth: '80%',
      backgroundColor: colors.primary,
      alignSelf: 'center',
      marginBottom: 5,
    },
    txt2: {
      fontWeight: '800',
      fontSize: calcFont(20),
      color: colors.blue,
      backgroundColor: colors.card,
    },
    btn: {
      padding: calcWidth(15),
      backgroundColor: colors.blue,
      justifyContent: 'space-between',
      borderRadius: 20,
      alignSelf: 'center',
      marginTop: 20,
    },
  });

export default styles;
