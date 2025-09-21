import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import uiReducer from './features/uiSlice';
import authReducer from './features/authSlice';
import transactionReducer from './features/transactionSlice';
import exchangeReducer from './features/exchangeSlice';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['ui', 'auth'], // Only persist UI and auth state
  blacklist: ['transactions', 'exchange'], // Don't persist sensitive data
};

// Create persisted reducers
const persistedUiReducer = persistReducer(
  { key: 'ui', storage },
  uiReducer
);

const persistedAuthReducer = persistReducer(
  { key: 'auth', storage },
  authReducer
);

export const store = configureStore({
  reducer: {
    ui: persistedUiReducer,
    auth: persistedAuthReducer,
    transactions: transactionReducer,
    exchange: exchangeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
