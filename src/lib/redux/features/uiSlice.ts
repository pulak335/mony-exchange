import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state
interface UiState {
  theme: 'light' | 'dark';
  mobileMenuOpen: boolean;
}

// Define the initial state using that type
const initialState: UiState = {
  theme: 'light',
  mobileMenuOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, toggleMobileMenu, setMobileMenuOpen } = uiSlice.actions;

// Other code could use the imported `RootState` type
export const selectTheme = (state: RootState) => state.ui.theme;
export const selectMobileMenuOpen = (state: RootState) => state.ui.mobileMenuOpen;

export default uiSlice.reducer;