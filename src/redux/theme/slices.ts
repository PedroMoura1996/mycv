import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeState } from './types';

const getInitialTheme = (): 'light' | 'dark' => {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initialState: ThemeState = {
  mode: getInitialTheme(),
  systemPreference: !localStorage.getItem('theme'),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      state.systemPreference = false;
      localStorage.setItem('theme', state.mode);
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      state.systemPreference = false;
      localStorage.setItem('theme', action.payload);
    },
    useSystemPreference: (state) => {
      const systemPrefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      state.mode = systemPrefers;
      state.systemPreference = true;
      localStorage.removeItem('theme');
    },
  },
});

export const { toggleTheme, setTheme, useSystemPreference } = themeSlice.actions;
export default themeSlice.reducer;