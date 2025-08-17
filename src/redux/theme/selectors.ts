import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectThemeState = (state: RootState) => state.theme;

export const selectThemeMode = createSelector(
  selectThemeState,
  (theme) => theme.mode
);

export const selectIsSystemPreference = createSelector(
  selectThemeState,
  (theme) => theme.systemPreference
);

export const selectIsDarkMode = createSelector(
  selectThemeMode,
  (mode) => mode === 'dark'
);