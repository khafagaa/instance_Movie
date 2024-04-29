import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import getColor from '@theme/getColor';
import styles from './LoadingPage.styles';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {changeConnection} from '@redux/Loading/loading.reducer';

export default function LoadingPage() {
  const colors = getColor();
  const dispatch = useAppDispatch();
  const style = styles(colors);
  const continueInCache = () => dispatch(changeConnection(true));
  const {networkConnection} = useAppSelector(state => state.loading);

  return (
    <View style={style.container} testID="loading-screen">
      {<ActivityIndicator size="large" color={getColor().blue} />}
      {networkConnection === false && (
        <>
          <Text style={style.noConn}>there is no internet Connection</Text>
          <TouchableOpacity style={style.continue} onPress={continueInCache}>
            <Text style={style.txt}>continue without internet</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
