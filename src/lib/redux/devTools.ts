import { createDevTools } from '@reduxjs/toolkit';

// Redux DevTools configuration
export const devToolsConfig = {
  name: 'Money Exchange App',
  trace: true,
  traceLimit: 25,
  actionSanitizer: (action: any) => {
    // Sanitize sensitive data in actions
    if (action.type?.includes('auth') && action.payload) {
      const sanitized = { ...action.payload };
      if (sanitized.password) {
        sanitized.password = '[REDACTED]';
      }
      if (sanitized.token) {
        sanitized.token = '[REDACTED]';
      }
      return { ...action, payload: sanitized };
    }
    return action;
  },
  stateSanitizer: (state: any) => {
    // Sanitize sensitive data in state
    if (state.auth?.user) {
      const sanitizedUser = { ...state.auth.user };
      if (sanitizedUser.password) {
        sanitizedUser.password = '[REDACTED]';
      }
      return {
        ...state,
        auth: {
          ...state.auth,
          user: sanitizedUser,
        },
      };
    }
    return state;
  },
};

// Redux DevTools extension setup
export const setupDevTools = () => {
  if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
    return window.__REDUX_DEVTOOLS_EXTENSION__(devToolsConfig);
  }
  return undefined;
};

// Action logging middleware for development
export const actionLogger = (store: any) => (next: any) => (action: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.group(`Redux Action: ${action.type}`);
    console.log('Action:', action);
    console.log('Previous State:', store.getState());
    const result = next(action);
    console.log('Next State:', store.getState());
    console.groupEnd();
    return result;
  }
  return next(action);
};

// Performance monitoring middleware
export const performanceMonitor = (store: any) => (next: any) => (action: any) => {
  const start = performance.now();
  const result = next(action);
  const end = performance.now();
  
  if (process.env.NODE_ENV === 'development' && end - start > 10) {
    console.warn(`Slow action: ${action.type} took ${end - start}ms`);
  }
  
  return result;
};
