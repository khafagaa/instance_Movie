import {View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import styles from './Circles.styles';
import getColor from '@theme/getColor';

type props = {style: ViewStyle; count: number};
const Circles: FC<props> = ({style, count}) => {
  return (
    <View style={style}>
      {new Array(count).fill(1).map((_, index) => (
        <View
          key={index}
          style={[
            styles(getColor()).circle,
            {
              width: 100 * (index + 1),
              height: 100 * (index + 1),
            },
          ]}
        />
      ))}
    </View>
  );
};

export default Circles;
