import { createAsyncThunk } from '@reduxjs/toolkit';
import type { User, Transaction, ExchangeRate } from './features/authSlice';

// Auth thunks
export const loginUser = createAsyncThunk<
  User,
  { emailOrUsername: string; password: string },
  { rejectValue: string }
>(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Login failed');
      }

      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error('Network error:', error);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);

export const registerUser = createAsyncThunk<
  User,
  {
    email: string;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    phone?: string;
  },
  { rejectValue: string }
>(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Registration failed');
      }

      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error('Network error:', error);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);

export const fetchUserProfile = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>(
  'auth/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/me', {
        credentials: 'include',
      });

      if (!response.ok) {
        return rejectWithValue('Failed to fetch user profile');
      }

      const data = await response.json();
      return data.user;
    } catch (error) {
      console.error('Network error:', error);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);

export const logoutUser = createAsyncThunk<
  void,
  void,
  { rejectValue: string }
>(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        return rejectWithValue('Logout failed');
      }
    } catch (error) {
      console.error('Network error:', error);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);

// Transaction thunks
export const fetchTransactions = createAsyncThunk<
  { transactions: Transaction[]; total: number },
  { page?: number; limit?: number; filters?: Record<string, unknown> },
  { rejectValue: string }
>(
  'transactions/fetchTransactions',
  async ({ page = 1, limit = 10, filters = {} }, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        ...filters,
      });

      const response = await fetch(`/api/transactions?${queryParams}`, {
        credentials: 'include',
      });

      if (!response.ok) {
        return rejectWithValue('Failed to fetch transactions');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Network error:', error);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);

export const createTransaction = createAsyncThunk<
  Transaction,
  {
    type: 'exchange' | 'transfer' | 'deposit' | 'withdrawal';
    fromCurrency: string;
    toCurrency: string;
    fromAmount: number;
    toAmount: number;
    exchangeRate: number;
    fee: number;
    description?: string;
  },
  { rejectValue: string }
>(
  'transactions/createTransaction',
  async (transactionData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(transactionData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Transaction failed');
      }

      const data = await response.json();
      return data.transaction;
    } catch (error) {
      console.error('Network error:', error);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);

// Exchange rate thunks
export const fetchExchangeRates = createAsyncThunk<
  ExchangeRate[],
  void,
  { rejectValue: string }
>(
  'exchange/fetchExchangeRates',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/exchange-rates', {
        credentials: 'include',
      });

      if (!response.ok) {
        return rejectWithValue('Failed to fetch exchange rates');
      }

      const data = await response.json();
      return data.rates;
    } catch (error) {
      console.error('Network error:', error);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);

export const performExchange = createAsyncThunk<
  Transaction,
  {
    fromCurrency: string;
    toCurrency: string;
    amount: number;
    rate: number;
    fee: number;
  },
  { rejectValue: string }
>(
  'exchange/performExchange',
  async (exchangeData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(exchangeData),
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error.message || 'Exchange failed');
      }

      const data = await response.json();
      return data.transaction;
    } catch (error) {
      console.error('Network error:', error);
      return rejectWithValue('Network error. Please try again.');
    }
  }
);
