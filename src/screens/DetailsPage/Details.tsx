import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {DetailsRouteProp} from 'src/types/navigation.type';
import imagePath from '@constants/imagePath';
import getColor from '@theme/getColor';
import styles from './Details.styles';
import Star from '@components/atoms/Star';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';
import ProgressiveImage from 'rn-progressive-image';

const Details: FC<DetailsRouteProp> = ({navigation, route}) => {
  const color = getColor();
  const style = styles(color);
  const {movie} = route?.params;
  return (
    <ScrollView style={style.container} testID="details-screen">
      <SafeAreaView>
        <FastImage
          style={styles(color).imgContainer}
          resizeMode="stretch"
          source={{
            uri: `${imagePath}${movie?.poster_path}`,
          }}>
          <Ionicons
            name="caret-back"
            size={35}
            color={getColor().darkBlue}
            onPress={() => navigation.goBack()}
            style={style.icn}
          />
          <ProgressiveImage
            style={style.img}
            source={{
              uri: `${imagePath}${movie?.backdrop_path}`,
            }}
          />
        </FastImage>
      </SafeAreaView>
      <Text style={style.titleTxt}>
        {`${movie?.original_title}  (${movie?.release_date?.split('-')?.[0]})`}
      </Text>
      <Star style={style.star} rate={movie?.vote_average} />
      <Text style={style.overTxt}>{`Overview`}</Text>
      <Text style={style.titleoverView}>{`${movie?.overview} `}</Text>
    </ScrollView>
  );
};

export default Details;
