import {
  View,
  Text,
  Switch,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useState, useContext} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import getColor from '@theme/getColor';
import {ThemeContext} from '@hooks/useThemeContext';
import styles from './atoms.styles';

const ThemeToggle: FC = () => {
  const [toggleValue, setToggle] = useState(true);
  const {theme, changeTheme} = useContext(ThemeContext);
  const colors = getColor();
  const style = styles(colors);
  const changeThem = () => {
    setToggle(!toggleValue);
    changeTheme();
  };
  const currentTheme = theme == 'light' ? true : false;
  return (
    <TouchableOpacity onPress={changeThem} style={style.container}>
      <Entypo
        name={`${currentTheme ? 'light-up' : 'moon'}`}
        size={40}
        color={theme == 'light' ? colors.blue : colors.dimmed}
      />
    </TouchableOpacity>
  );
};

export default ThemeToggle;
