import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { Transaction } from './authSlice';
import { fetchTransactions, createTransaction } from '../thunks';

// Define the initial state
interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  error: string | null;
  filters: {
    type?: string;
    status?: string;
    dateRange?: {
      start: string;
      end: string;
    };
  };
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}

const initialTransactionState: TransactionState = {
  transactions: [],
  isLoading: false,
  error: null,
  filters: {},
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
  },
};

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState: initialTransactionState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.unshift(action.payload);
      state.pagination.total += 1;
    },
    updateTransaction: (state, action: PayloadAction<{ id: string; updates: Partial<Transaction> }>) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.transactions[index] = { ...state.transactions[index], ...action.payload.updates };
      }
    },
    setFilters: (state, action: PayloadAction<TransactionState['filters']>) => {
      state.filters = action.payload;
      state.pagination.page = 1; // Reset to first page when filters change
    },
    setPagination: (state, action: PayloadAction<Partial<TransactionState['pagination']>>) => {
      state.pagination = { ...state.pagination, ...action.payload };
    },
    clearTransactions: (state) => {
      state.transactions = [];
      state.pagination.total = 0;
      state.pagination.page = 1;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch transactions
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload.transactions;
        state.pagination.total = action.payload.total;
        state.error = null;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch transactions';
      })
      // Create transaction
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.unshift(action.payload);
        state.pagination.total += 1;
        state.error = null;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to create transaction';
      });
  },
});

export const {
  addTransaction,
  updateTransaction,
  setFilters,
  setPagination,
  clearTransactions,
  clearError,
} = transactionSlice.actions;

// Selectors
export const selectTransactions = (state: RootState) => state.transactions.transactions;
export const selectTransactionLoading = (state: RootState) => state.transactions.isLoading;
export const selectTransactionError = (state: RootState) => state.transactions.error;
export const selectTransactionFilters = (state: RootState) => state.transactions.filters;
export const selectTransactionPagination = (state: RootState) => state.transactions.pagination;

// Computed selectors
export const selectFilteredTransactions = (state: RootState) => {
  const { transactions, filters } = state.transactions;
  let filtered = transactions;

  if (filters.type) {
    filtered = filtered.filter((t: Transaction) => t.type === filters.type);
  }

  if (filters.status) {
    filtered = filtered.filter((t: Transaction) => t.status === filters.status);
  }

  if (filters.dateRange) {
    filtered = filtered.filter((t: Transaction) => {
      const transactionDate = new Date(t.createdAt);
      const startDate = new Date(filters.dateRange!.start);
      const endDate = new Date(filters.dateRange!.end);
      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }

  return filtered;
};

export const selectTransactionStats = (state: RootState) => {
  const transactions = state.transactions.transactions;
  const completedTransactions = transactions.filter((t: Transaction) => t.status === 'completed');
  
  const totalVolume = completedTransactions.reduce((sum: number, t: Transaction) => sum + t.fromAmount, 0);
  const totalFees = completedTransactions.reduce((sum: number, t: Transaction) => sum + t.fee, 0);
  
  const exchangeCount = completedTransactions.filter((t: Transaction) => t.type === 'exchange').length;
  const transferCount = completedTransactions.filter((t: Transaction) => t.type === 'transfer').length;
  
  return {
    totalTransactions: completedTransactions.length,
    totalVolume,
    totalFees,
    exchangeCount,
    transferCount,
  };
};

export default transactionSlice.reducer;
