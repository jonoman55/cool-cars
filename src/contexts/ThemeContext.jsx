import React from 'react';

const ThemeContext = React.createContext({
  darkMode: false,
  changeThemeMode: (mode) => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  const changeThemeMode = (checked) => {
    console.log('toggling theme mode:', checked);
    setDarkMode(checked);
  };

  const values = {
    darkMode,
    changeThemeMode,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => React.useContext(ThemeContext);
