import getColor from '@theme/getColor';
import {calcFont, calcWidth} from '@utils/responsive-helper.service';
import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {movieInfo} from 'src/types/movie.type';
import styles from './MainMovie.styles';

type movieProps = {
  movie: movieInfo | undefined;
  pressMovie: () => void;
};
const MainMovie: FC<movieProps> = ({movie, pressMovie}) => {
  const colors = getColor();
  const style = styles(colors);
  return (
    <View style={style.container}>
      <Text style={style.txt1}>{movie?.original_title}</Text>
      <Text style={style.txt2}>{`${movie?.release_date} • ${
        movie?.original_language
      } • ${movie?.adult ? 'for adult' : 'not for adult'}`}</Text>

      <TouchableOpacity onPress={pressMovie} style={style.btn}>
        <Text> show details </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainMovie;
