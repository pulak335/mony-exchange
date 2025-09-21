import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { ExchangeRate } from './authSlice';
import { fetchExchangeRates, performExchange } from '../thunks';

// Define types for exchange operations
export interface ExchangeRequest {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  rate: number;
  fee: number;
}

// Define the initial state
interface ExchangeState {
  rates: ExchangeRate[];
  isLoading: boolean;
  error: string | null;
  lastUpdated: string | null;
  exchangeRequest: ExchangeRequest | null;
  isExchanging: boolean;
  exchangeError: string | null;
}

const initialExchangeState: ExchangeState = {
  rates: [],
  isLoading: false,
  error: null,
  lastUpdated: null,
  exchangeRequest: null,
  isExchanging: false,
  exchangeError: null,
};

export const exchangeSlice = createSlice({
  name: 'exchange',
  initialState: initialExchangeState,
  reducers: {
    setExchangeRequest: (state, action: PayloadAction<ExchangeRequest>) => {
      state.exchangeRequest = action.payload;
    },
    clearExchangeRequest: (state) => {
      state.exchangeRequest = null;
    },
    clearError: (state) => {
      state.error = null;
      state.exchangeError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch exchange rates
      .addCase(fetchExchangeRates.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchExchangeRates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rates = action.payload;
        state.lastUpdated = new Date().toISOString();
        state.error = null;
      })
      .addCase(fetchExchangeRates.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch exchange rates';
      })
      // Perform exchange
      .addCase(performExchange.pending, (state) => {
        state.isExchanging = true;
        state.exchangeError = null;
      })
      .addCase(performExchange.fulfilled, (state) => {
        state.isExchanging = false;
        state.exchangeRequest = null;
        state.exchangeError = null;
      })
      .addCase(performExchange.rejected, (state, action) => {
        state.isExchanging = false;
        state.exchangeError = action.payload || 'Exchange failed';
      });
  },
});

export const {
  setExchangeRequest,
  clearExchangeRequest,
  clearError,
} = exchangeSlice.actions;

// Selectors
export const selectExchangeRates = (state: RootState) => state.exchange.rates;
export const selectExchangeLoading = (state: RootState) => state.exchange.isLoading;
export const selectExchangeError = (state: RootState) => state.exchange.error;
export const selectLastUpdated = (state: RootState) => state.exchange.lastUpdated;
export const selectExchangeRequest = (state: RootState) => state.exchange.exchangeRequest;
export const selectIsExchanging = (state: RootState) => state.exchange.isExchanging;
export const selectExchangeOperationError = (state: RootState) => state.exchange.exchangeError;

// Computed selectors
export const selectTopRates = (state: RootState) => {
  return state.exchange.rates.slice(0, 5);
};

export const selectRateByPair = (from: string, to: string) => (state: RootState) => {
  return state.exchange.rates.find(rate => 
    rate.from === from && rate.to === to
  );
};

export const selectRatesByCurrency = (currency: string) => (state: RootState) => {
  return state.exchange.rates.filter(rate => 
    rate.from === currency || rate.to === currency
  );
};

export const selectExchangeStats = (state: RootState) => {
  const rates = state.exchange.rates;
  const positiveChanges = rates.filter(r => r.changeType === 'positive').length;
  const negativeChanges = rates.filter(r => r.changeType === 'negative').length;
  const neutralChanges = rates.filter(r => r.changeType === 'neutral').length;
  
  return {
    totalRates: rates.length,
    positiveChanges,
    negativeChanges,
    neutralChanges,
  };
};

export default exchangeSlice.reducer;
