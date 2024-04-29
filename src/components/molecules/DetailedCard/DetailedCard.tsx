import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {detailedCardTypes} from 'src/types/card.type';

const DetailedCard: FC<detailedCardTypes> = ({
  id,
  original_language,
  original_title,
  overview,
  poster_path,
  adult,
}) => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

export default DetailedCard;
