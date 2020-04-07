import { useState, useEffect, useCallback } from 'react';
import { getDarkMode, setDarkMode } from '../utils';

export const useTheme = () => {
  const [darkMode, setDark] = useState(getDarkMode() || false);
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleThemeChange = useCallback(
    () => {
      setDark(!darkMode);
      setDarkMode(!darkMode);
    },
    [darkMode, setDark],
  );

  return { handleThemeChange };
};