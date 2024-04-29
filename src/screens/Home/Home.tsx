import ThemeToggle from '@components/atoms/ThemeToggle';
import Card from '@components/molecules/Card/Card';
import MainMovie from '@components/molecules/MainMovie/MainMovie';
import imagePath from '@constants/imagePath';
import {addHistory} from '@redux/Historymovies/history.reducer';
import {accessLoading} from '@redux/Loading/loading.reducer';
import {useGetMovieQuery} from '@services/movieApis';
import getColor from '@theme/getColor';
import React, {FC, useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import ProgressiveImage from 'rn-progressive-image';
import {movieInfo} from 'src/types/movie.type';
import {HomeRouteProp} from 'src/types/navigation.type';
import styles from './Home.styles';
const Home: FC<HomeRouteProp> = ({navigation}) => {
  const dispatch = useDispatch();
  const colors = getColor();
  const style = styles(colors);
  const [pageNumber, setPage] = useState(1);
  const [movies, setMovies] = useState<movieInfo[]>([]);
  const {data, isFetching} = useGetMovieQuery(pageNumber);
  const [mainMovie, setMainMovie] = useState<movieInfo>();

  const pressMovie = (item: movieInfo) => {
    dispatch(addHistory(item));
    navigation.navigate('Details', {movie: item});
  };
  const swipMain = (item: movieInfo) => {
    dispatch(accessLoading(true));
    const timeOut = setTimeout(() => {
      if (data?.length) {
        setMainMovie(item);
        const filterMovies = data.filter(val => val.id !== item.id);
        setMovies(filterMovies);
        dispatch(accessLoading(false));
        clearTimeout(timeOut);
      }
    }, 500);
  };

  //* initialize the movies
  useEffect(() => {
    if (data?.length && !movies?.length) {
      const filterMovies = data.filter((val, indx) => indx !== 0);
      setMovies(filterMovies);
      setMainMovie(data[0]);
    }
  }, [data]);

  //* concat the data to movies by pages
  useEffect(() => {
    if (pageNumber > 1 && !isFetching) {
      let mockData: movieInfo[] = [];
      if (data) mockData = [...movies, ...data];
      setMovies(mockData);
    }
  }, [pageNumber, data]);

  return (
    <SafeAreaView style={style.container} testID="home-screen">
      <ProgressiveImage
        style={style.img}
        source={{
          uri: `${imagePath}${mainMovie?.poster_path}`,
        }}
      />

      <View style={style.history}>
        <ThemeToggle />
      </View>

      <View style={{flex: 1}}>
        <View style={{flex: 2}}>
          {mainMovie && (
            <MainMovie
              movie={mainMovie}
              pressMovie={() => pressMovie(mainMovie)}
            />
          )}
        </View>
        {movies?.length ? (
          <Card
            results={movies}
            swipMain={swipMain}
            pressMovie={pressMovie}
            pageNumber={pageNumber}
            setPage={setPage}
          />
        ) : (
          <View
            style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}
            testID="view">
            <Text style={style.txt}>refetch data</Text>
            <Ionicons
              name="reload-circle"
              size={50}
              color={getColor().white}
              style={{alignSelf: 'center'}}
            />
            <Button
              // testID="no-dataaa"
              color={getColor().txt}
              title="press me"
              onPress={() => {}}></Button>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
