import {View, Text, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {getFilmRate} from '../src/utils/filmRating';
import {getFilmRate} from '@utils/filmRating';
import styles from './atoms.styles';
import getColor from '@theme/getColor';

type props = {
  rate: number;
  style?: ViewStyle;
};
const Star: FC<props> = ({rate, style}) => {
  const colors = getColor();
  const Styles = styles(colors);
  return (
    <View style={[Styles.starCont, style]}>
      <Text style={Styles.txt}>{rate}</Text>

      {new Array(5).fill(1).map((_, indx) => {
        return (
          <View key={indx}>
            {getFilmRate(rate) >= indx + 1 ? (
              <AntDesign name={'star'} size={20} color={'yellow'} />
            ) : (
              <AntDesign name={'staro'} size={20} />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default Star;
