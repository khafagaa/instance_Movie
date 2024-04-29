const {default: UseThemeContext} = require('@hooks/useThemeContext');

export const ThemeProvider = ({children}) => (
  <UseThemeContext>{children}</UseThemeContext>
);
