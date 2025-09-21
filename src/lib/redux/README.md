# Redux Setup for Money Exchange Website

This document explains the Redux setup and how to use it in your money exchange application.

## 🏗️ **Architecture Overview**

The Redux store is organized into the following slices:

- **`ui`** - UI state (theme, mobile menu, etc.)
- **`auth`** - Authentication state (user, login status, etc.)
- **`transactions`** - Transaction management (history, filters, pagination)
- **`exchange`** - Exchange rates and operations

## 📁 **File Structure**

```
src/lib/redux/
├── store.ts                 # Main store configuration
├── storeWithPersistence.ts  # Store with persistence
├── hooks.ts                 # Typed Redux hooks
├── provider.tsx             # Redux Provider component
├── middleware.ts            # Custom middleware
├── devTools.ts              # DevTools configuration
├── thunks.ts                # Async thunks
├── index.ts                 # Main exports
└── features/
    ├── uiSlice.ts           # UI state management
    ├── authSlice.ts         # Authentication state
    ├── transactionSlice.ts  # Transaction management
    └── exchangeSlice.ts     # Exchange rates
```

## 🚀 **Getting Started**

### 1. **Basic Usage**

```tsx
import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { loginUser, selectUser, selectIsAuthenticated } from '@/lib/redux';

function LoginComponent() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const handleLogin = async (credentials) => {
    try {
      await dispatch(loginUser(credentials)).unwrap();
      // Login successful
    } catch (error) {
      // Handle error
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <p>Welcome, {user?.firstName}!</p>
      ) : (
        <button onClick={() => handleLogin({ email: 'test@example.com', password: 'password' })}>
          Login
        </button>
      )}
    </div>
  );
}
```

### 2. **Authentication**

```tsx
import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { 
  loginUser, 
  registerUser, 
  logoutUser, 
  fetchUserProfile,
  selectUser,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError
} from '@/lib/redux';

function AuthComponent() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isLoading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);

  // Login
  const handleLogin = async (emailOrUsername, password) => {
    await dispatch(loginUser({ emailOrUsername, password }));
  };

  // Register
  const handleRegister = async (userData) => {
    await dispatch(registerUser(userData));
  };

  // Logout
  const handleLogout = async () => {
    await dispatch(logoutUser());
  };

  // Fetch user profile
  const handleFetchProfile = async () => {
    await dispatch(fetchUserProfile());
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.firstName}!</p>
          <p>Balance: ${user?.balance}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => handleLogin('test@example.com', 'password')}>
            Login
          </button>
        </div>
      )}
    </div>
  );
}
```

### 3. **Transaction Management**

```tsx
import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { 
  fetchTransactions,
  createTransaction,
  selectTransactions,
  selectTransactionLoading,
  selectTransactionStats,
  setFilters,
  setPagination
} from '@/lib/redux';

function TransactionComponent() {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactions);
  const isLoading = useAppSelector(selectTransactionLoading);
  const stats = useAppSelector(selectTransactionStats);

  // Fetch transactions
  const handleFetchTransactions = async (page = 1, limit = 10) => {
    await dispatch(fetchTransactions({ page, limit }));
  };

  // Create transaction
  const handleCreateTransaction = async (transactionData) => {
    await dispatch(createTransaction(transactionData));
  };

  // Filter transactions
  const handleFilterTransactions = (filters) => {
    dispatch(setFilters(filters));
  };

  // Pagination
  const handlePageChange = (page) => {
    dispatch(setPagination({ page }));
  };

  return (
    <div>
      <div>
        <h3>Transaction Stats</h3>
        <p>Total Transactions: {stats.totalTransactions}</p>
        <p>Total Volume: ${stats.totalVolume}</p>
        <p>Total Fees: ${stats.totalFees}</p>
      </div>
      
      <div>
        <h3>Transactions</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {transactions.map(transaction => (
              <li key={transaction.id}>
                {transaction.type}: {transaction.fromAmount} {transaction.fromCurrency} → {transaction.toAmount} {transaction.toCurrency}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
```

### 4. **Exchange Rates**

```tsx
import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { 
  fetchExchangeRates,
  performExchange,
  selectExchangeRates,
  selectTopRates,
  selectExchangeLoading,
  selectIsExchanging
} from '@/lib/redux';

function ExchangeComponent() {
  const dispatch = useAppDispatch();
  const rates = useAppSelector(selectExchangeRates);
  const topRates = useAppSelector(selectTopRates);
  const isLoading = useAppSelector(selectExchangeLoading);
  const isExchanging = useAppSelector(selectIsExchanging);

  // Fetch exchange rates
  const handleFetchRates = async () => {
    await dispatch(fetchExchangeRates());
  };

  // Perform exchange
  const handleExchange = async (exchangeData) => {
    await dispatch(performExchange(exchangeData));
  };

  return (
    <div>
      <div>
        <h3>Top Exchange Rates</h3>
        {isLoading ? (
          <p>Loading rates...</p>
        ) : (
          <ul>
            {topRates.map(rate => (
              <li key={`${rate.from}-${rate.to}`}>
                {rate.from}/{rate.to}: {rate.rate} ({rate.changeType})
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <button onClick={handleFetchRates} disabled={isLoading}>
        Refresh Rates
      </button>
      
      <button onClick={() => handleExchange({ fromCurrency: 'USD', toCurrency: 'EUR', amount: 100, rate: 0.85, fee: 2.5 })} disabled={isExchanging}>
        {isExchanging ? 'Exchanging...' : 'Exchange'}
      </button>
    </div>
  );
}
```

### 5. **UI State Management**

```tsx
import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { 
  toggleTheme,
  setTheme,
  toggleMobileMenu,
  selectTheme,
  selectMobileMenuOpen
} from '@/lib/redux';

function UIComponent() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const mobileMenuOpen = useAppSelector(selectMobileMenuOpen);

  return (
    <div>
      <button onClick={() => dispatch(toggleTheme())}>
        Current theme: {theme}
      </button>
      
      <button onClick={() => dispatch(setTheme('dark'))}>
        Set Dark Theme
      </button>
      
      <button onClick={() => dispatch(toggleMobileMenu())}>
        Mobile Menu: {mobileMenuOpen ? 'Open' : 'Closed'}
      </button>
    </div>
  );
}
```

## 🔧 **Advanced Features**

### 1. **Error Handling**

```tsx
import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { selectAuthError, clearError } from '@/lib/redux';

function ErrorComponent() {
  const dispatch = useAppDispatch();
  const error = useAppSelector(selectAuthError);

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <div>
      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={handleClearError}>Clear Error</button>
        </div>
      )}
    </div>
  );
}
```

### 2. **Optimistic Updates**

```tsx
import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { addTransaction, updateTransaction } from '@/lib/redux';

function OptimisticComponent() {
  const dispatch = useAppDispatch();

  const handleOptimisticTransaction = async (transactionData) => {
    // Add transaction optimistically
    const tempId = `temp-${Date.now()}`;
    dispatch(addTransaction({ ...transactionData, id: tempId, status: 'pending' }));
    
    try {
      // Perform actual API call
      const result = await dispatch(createTransaction(transactionData)).unwrap();
      
      // Update with real data
      dispatch(updateTransaction({ id: tempId, updates: result }));
    } catch (error) {
      // Remove optimistic update on error
      dispatch(updateTransaction({ id: tempId, updates: { status: 'failed' } }));
    }
  };

  return (
    <button onClick={() => handleOptimisticTransaction({ type: 'exchange', fromCurrency: 'USD', toCurrency: 'EUR', fromAmount: 100, toAmount: 85, exchangeRate: 0.85, fee: 2.5 })}>
      Exchange (Optimistic)
    </button>
  );
}
```

## 🛠️ **Development Tools**

### 1. **Redux DevTools**

The store is configured with Redux DevTools for development. You can:
- Inspect state changes
- Time-travel debug
- Monitor performance
- View action history

### 2. **Middleware**

Custom middleware includes:
- **Error handling** - Global error logging
- **Performance monitoring** - Slow action detection
- **Auto-refresh** - Exchange rates refresh every 5 minutes
- **Balance updates** - Automatic balance updates after transactions

### 3. **Persistence**

Use `storeWithPersistence.ts` for production to persist:
- UI preferences (theme, etc.)
- Authentication state
- User preferences

## 📝 **Best Practices**

1. **Use typed hooks** - Always use `useAppDispatch` and `useAppSelector`
2. **Handle loading states** - Check loading states before showing data
3. **Error handling** - Always handle rejected thunks
4. **Selectors** - Use selectors for computed state
5. **Optimistic updates** - Use for better UX where appropriate
6. **Cleanup** - Clear sensitive data on logout

## 🔒 **Security Notes**

- Sensitive data is sanitized in DevTools
- Passwords are never stored in Redux
- Authentication tokens are handled via HTTP-only cookies
- Sensitive state is not persisted

## 🚀 **Next Steps**

1. **Add more slices** as needed (notifications, settings, etc.)
2. **Implement persistence** for production
3. **Add more middleware** for specific needs
4. **Create custom hooks** for complex state logic
5. **Add unit tests** for reducers and thunks
