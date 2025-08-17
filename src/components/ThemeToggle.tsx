import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { toggleTheme } from '../redux/theme/slices';
import { selectThemeMode } from '../redux/theme/selectors';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export const ThemeToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const themeMode = useAppSelector(selectThemeMode);
  const { t } = useTranslation();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      aria-label={t('theme.toggle')}
      className="relative overflow-hidden"
    >
      <Sun 
        className={`h-4 w-4 transition-all duration-300 ${
          themeMode === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
        }`} 
      />
      <Moon 
        className={`absolute h-4 w-4 transition-all duration-300 ${
          themeMode === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        }`} 
      />
    </Button>
  );
};