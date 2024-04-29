import assets from '@assets/images/assets';
import Circles from '@components/molecules/Circles/Circles';
import {StackActions, useNavigation} from '@react-navigation/native';
import React, {FC, useCallback, useEffect, useMemo} from 'react';
import {Animated, Easing, ImageBackground} from 'react-native';
import styles from './Splash.styles';
const Splash: FC = () => {
  const navigation = useNavigation();
  const bounceValue = useMemo(() => new Animated.Value(0), []);

  const startBounceAnimation = useCallback(() => {
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
      Animated.timing(bounceValue, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease),
      }),
    ]).start();
  }, [bounceValue]);
  useEffect(() => {
    startBounceAnimation();
  }, [startBounceAnimation]);
  useEffect(() => {
    const id = setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 2000);

    return () => {
      clearTimeout(id);
    };
  }, [navigation]);
  return (
    <ImageBackground source={assets.gradient} style={styles.splashContainer}>
      <Circles style={styles.circles} count={3} />
      <Animated.Image
        source={{
          uri: 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
        }}
        style={[
          styles.logo,
          {
            transform: [{scale: bounceValue}],
          },
        ]}
      />
    </ImageBackground>
  );
};

export default Splash;
