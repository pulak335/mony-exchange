import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import uiReducer from './features/uiSlice';
import authReducer from './features/authSlice';
import transactionReducer from './features/transactionSlice';
import exchangeReducer from './features/exchangeSlice';
import { listenerMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    transactions: transactionReducer,
    exchange: exchangeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).prepend(listenerMiddleware.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;