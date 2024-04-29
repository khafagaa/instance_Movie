import getColor from '@theme/getColor';
import {StyleSheet} from 'react-native';
import {colors} from 'src/types/color.type';
import Shadow from '@constants/Shadow';
import {
  calcFont,
  calcHeight,
  calcWidth,
  screenWidth,
} from '@utils/responsive-helper.service';
const styles = (color: colors) =>
  StyleSheet.create({
    container: {
      marginHorizontal: calcWidth(5),
      ...Shadow(color.shadow),
      backgroundColor: color.card,
      borderRadius: 20,
      alignSelf: 'flex-end',
    },
    img: {
      width: calcWidth(130),
      height: calcHeight(160),
      borderRadius: calcWidth(10),
      bottom: calcHeight(60),
      marginHorizontal: calcWidth(18),
    },
    titleTxt: {
      width: calcWidth(150),
      color: color.primary,
      fontWeight: 'bold',
      fontSize: calcFont(17),
    },
    txt: {
      marginTop: calcHeight(12),
      fontSize: calcFont(14),
      color: color.txt,
    },
    txt2: {
      marginBottom: calcHeight(15),
      fontSize: calcFont(14),
      color: color.txt,
    },
    btn: {
      padding: calcWidth(1),
      backgroundColor: color.blue,
      // justifyContent: 'space-between',
      borderRadius: 20,
      alignSelf: 'flex-end',
      margin: calcWidth(10),
    },
  });

export default styles;
