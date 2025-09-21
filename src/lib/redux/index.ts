// Store
export { store } from './store';
export type { RootState, AppDispatch } from './store';

// Hooks
export { useAppDispatch, useAppSelector } from './hooks';

// Provider
export { ReduxProvider } from './provider';

// Auth Slice
export {
  updateUser,
  clearError as clearAuthError,
  setAuthenticated,
  selectUser,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
} from './features/authSlice';
export type { User, Transaction, ExchangeRate } from './features/authSlice';

// Transaction Slice
export {
  addTransaction,
  updateTransaction,
  setFilters,
  setPagination,
  clearTransactions,
  clearError as clearTransactionError,
  selectTransactions,
  selectTransactionLoading,
  selectTransactionError,
  selectTransactionFilters,
  selectTransactionPagination,
  selectFilteredTransactions,
  selectTransactionStats,
} from './features/transactionSlice';

// Exchange Slice
export {
  setExchangeRequest,
  clearExchangeRequest,
  clearError as clearExchangeError,
  selectExchangeRates,
  selectExchangeLoading,
  selectExchangeError,
  selectLastUpdated,
  selectExchangeRequest,
  selectIsExchanging,
  selectExchangeOperationError,
  selectTopRates,
  selectRateByPair,
  selectRatesByCurrency,
  selectExchangeStats,
} from './features/exchangeSlice';
export type { ExchangeRequest } from './features/exchangeSlice';

// UI Slice
export {
  toggleTheme,
  setTheme,
  toggleMobileMenu,
  setMobileMenuOpen,
  selectTheme,
  selectMobileMenuOpen,
} from './features/uiSlice';

// Thunks
export {
  loginUser,
  registerUser,
  fetchUserProfile,
  logoutUser,
  fetchTransactions,
  createTransaction,
  fetchExchangeRates,
  performExchange,
} from './thunks';