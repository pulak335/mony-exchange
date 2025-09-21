import { createListenerMiddleware } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from './store';
import { 
  loginUser, 
  fetchUserProfile, 
  createTransaction, 
  fetchExchangeRates, 
  logoutUser
} from './thunks';
import { updateUser } from './features/authSlice';
import { clearTransactions } from './features/transactionSlice';
import { clearExchangeRequest } from './features/exchangeSlice';

// Create the middleware instance
export const listenerMiddleware = createListenerMiddleware<RootState, AppDispatch>();

// Start listening for actions
listenerMiddleware.startListening({
  actionCreator: loginUser.fulfilled,
  effect: async (action, listenerApi) => {
    // Update user balance in auth state when login is successful
    const user = action.payload;
    listenerApi.dispatch(updateUser({ balance: user.balance }));
  },
});

listenerMiddleware.startListening({
  actionCreator: fetchUserProfile.fulfilled,
  effect: async (action, listenerApi) => {
    // Update user balance in auth state when profile is fetched
    const user = action.payload;
    listenerApi.dispatch(updateUser({ balance: user.balance }));
  },
});

listenerMiddleware.startListening({
  actionCreator: createTransaction.fulfilled,
  effect: async (action, listenerApi) => {
    // Update user balance after successful transaction
    const transaction = action.payload;
    const currentUser = listenerApi.getState().auth.user;
    
    if (currentUser && transaction.status === 'completed') {
      // Calculate new balance based on transaction type
      let newBalance = currentUser.balance;
      
      if (transaction.type === 'deposit') {
        newBalance += transaction.toAmount;
      } else if (transaction.type === 'withdrawal') {
        newBalance -= transaction.fromAmount;
      } else if (transaction.type === 'exchange') {
        newBalance = newBalance - transaction.fromAmount + transaction.toAmount;
      }
      
      listenerApi.dispatch(updateUser({ balance: newBalance }));
    }
  },
});

// Error handling middleware
listenerMiddleware.startListening({
  predicate: (action) => {
    // Listen for any rejected async thunk
    return action.type.endsWith('/rejected');
  },
  effect: async (action, listenerApi) => {
    const errorMessage = action.payload || 'An error occurred';
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Redux Error:', errorMessage, action);
    }
    
    // You can add global error handling here, such as:
    // - Showing toast notifications
    // - Logging to error tracking service
    // - Redirecting to error page for critical errors
  },
});

// Auto-refresh exchange rates every 5 minutes
let exchangeRateInterval: NodeJS.Timeout | null = null;

listenerMiddleware.startListening({
  actionCreator: fetchExchangeRates.fulfilled,
  effect: async (action, listenerApi) => {
    // Clear existing interval
    if (exchangeRateInterval) {
      clearInterval(exchangeRateInterval);
    }
    
    // Set up new interval to refresh rates every 5 minutes
    exchangeRateInterval = setInterval(() => {
      listenerApi.dispatch(fetchExchangeRates());
    }, 5 * 60 * 1000); // 5 minutes
  },
});

listenerMiddleware.startListening({
  actionCreator: logoutUser.fulfilled,
  effect: async (action, listenerApi) => {
    // Clear exchange rate refresh interval on logout
    if (exchangeRateInterval) {
      clearInterval(exchangeRateInterval);
      exchangeRateInterval = null;
    }
    
    // Clear all sensitive data
    listenerApi.dispatch(clearTransactions());
    listenerApi.dispatch(clearExchangeRequest());
  },
});
