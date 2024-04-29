import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Dispatch, FC, SetStateAction, memo, useState} from 'react';
import {card, cardInfo} from 'src/types/card.type';
import styles from './Card.styles';
import getColor from '@theme/getColor';
import imagePath from '@constants/imagePath';
import Star from '@components/atoms/Star';
import {movieInfo} from 'src/types/movie.type';
import FastImage from 'react-native-fast-image';
import ProgressiveImage from 'rn-progressive-image';

const Card: FC<{
  results: card;
  pressMovie: (item: movieInfo) => void;
  swipMain: (item: movieInfo) => void;
  pageNumber: number;
  setPage: Dispatch<SetStateAction<number>>;
}> = ({results, pressMovie, swipMain, pageNumber, setPage}) => {
  let color = getColor();
  const style = styles(color);

  const RenderItem: ListRenderItem<movieInfo> = ({item}) => {
    return (
      <TouchableOpacity
        style={style.container}
        onPress={() => pressMovie(item)}>
        <TouchableOpacity onPress={() => swipMain(item)} style={style.btn}>
          <Text>{`  show in main  `}</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <ProgressiveImage
            style={style.img}
            source={{
              uri: `${imagePath}${item?.backdrop_path}`,
            }}
          />

          <View style={{alignSelf: 'center', justifyContent: 'space-between'}}>
            <Text numberOfLines={2} style={style.titleTxt}>
              {item?.title}
            </Text>
            {item?.adult && <Text>{`this film for ${item?.adult}`}</Text>}
            <Text numberOfLines={2} style={style.txt}>
              {`vote : ${item?.vote_count}`}
            </Text>
            <Text numberOfLines={2} style={style.txt2}>
              {`release : ${item?.release_date}`}
            </Text>
            <Star
              rate={item?.vote_average}
              style={{justifyContent: 'space-evenly'}}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1.4}}>
      <FlatList
        onEndReached={() => setPage(pageNumber + 1)}
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, indx) => String(indx)}
        renderItem={RenderItem}
        //* performance properities
        removeClippedSubviews={false}
        maxToRenderPerBatch={15}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={10}
      />
    </View>
  );
};

export default memo(Card);
