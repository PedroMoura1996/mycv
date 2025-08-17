import React from 'react';
import { Globe } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { toggleLanguage } from '../redux/language/slices';
import { selectCurrentLanguage } from '../redux/language/selectors';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export const LanguageToggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector(selectCurrentLanguage);
  const { t } = useTranslation();

  const handleToggle = () => {
    dispatch(toggleLanguage());
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleToggle}
      aria-label={t('language.toggle')}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {currentLanguage.toUpperCase()}
      </span>
    </Button>
  );
};