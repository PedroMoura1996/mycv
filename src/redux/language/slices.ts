import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageState } from './types';

const getInitialLanguage = (): 'en' | 'pt' => {
  const saved = localStorage.getItem('language');
  if (saved === 'en' || saved === 'pt') return saved;
  
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('pt') ? 'pt' : 'en';
};

const initialState: LanguageState = {
  current: getInitialLanguage(),
  available: ['en', 'pt'],
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'pt'>) => {
      state.current = action.payload;
      localStorage.setItem('language', action.payload);
    },
    toggleLanguage: (state) => {
      state.current = state.current === 'en' ? 'pt' : 'en';
      localStorage.setItem('language', state.current);
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;