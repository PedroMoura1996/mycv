import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectLanguageState = (state: RootState) => state.language;

export const selectCurrentLanguage = createSelector(
  selectLanguageState,
  (language) => language.current
);

export const selectAvailableLanguages = createSelector(
  selectLanguageState,
  (language) => language.available
);