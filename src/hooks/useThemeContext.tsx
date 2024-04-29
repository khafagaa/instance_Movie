import {useColorScheme} from 'react-native';
import {themeType} from 'src/types/color.type';
import React, {PureComponent, createContext, useState} from 'react';

export const ThemeContext = createContext<themeType>({
  theme: '',
  changeTheme: () => {},
});
const UseThemeContext = (props: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [theme, setTheme] = useState(isDarkMode ? 'dark' : 'light');

  const changeTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// hosting
// ssl piling

export default UseThemeContext;
