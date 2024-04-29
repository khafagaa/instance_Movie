import {useContext} from 'react';
import {dark, light} from '@constants/colors';
import {ThemeContext} from '@hooks/useThemeContext';
import {colors} from 'src/types/color.type';

const getColor = (): colors => {
  const {theme} = useContext(ThemeContext);
  return theme == 'dark' ? dark : light;
};
export default getColor;
