'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux';
import { 
  loginUser, 
  logoutUser, 
  fetchUserProfile,
  selectUser,
  selectIsAuthenticated,
  selectAuthLoading,
  selectAuthError,
  clearError as clearAuthError
} from '@/lib/redux';
import { useState } from 'react';

export default function ReduxExample() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isLoading = useAppSelector(selectAuthLoading);
  const error = useAppSelector(selectAuthError);
  
  const [credentials, setCredentials] = useState({
    emailOrUsername: 'john.doe@example.com',
    password: 'TestPass123!'
  });

  const handleLogin = async () => {
    try {
      await dispatch(loginUser(credentials)).unwrap();
      console.log('Login successful!');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      console.log('Logout successful!');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const handleFetchProfile = async () => {
    try {
      await dispatch(fetchUserProfile()).unwrap();
      console.log('Profile fetched successfully!');
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    }
  };

  const handleClearError = () => {
    dispatch(clearAuthError());
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Redux Example</h2>
      
      {/* Error Display */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>{error}</p>
          <button 
            onClick={handleClearError}
            className="mt-2 text-sm underline hover:no-underline"
          >
            Clear Error
          </button>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="mb-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded">
          <p>Loading...</p>
        </div>
      )}

      {/* Authentication Status */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Authentication Status</h3>
        <p className="text-sm text-gray-600">
          {isAuthenticated ? '✅ Authenticated' : '❌ Not Authenticated'}
        </p>
        {user && (
          <div className="mt-2 p-3 bg-green-50 rounded">
            <p><strong>User:</strong> {user.firstName} {user.lastName}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Balance:</strong> ${user.balance}</p>
            <p><strong>Verified:</strong> {user.isVerified ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>

      {/* Login Form */}
      {!isAuthenticated ? (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Login</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email or Username
            </label>
            <input
              type="text"
              value={credentials.emailOrUsername}
              onChange={(e) => setCredentials({ ...credentials, emailOrUsername: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter email or username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="Enter password"
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">User Actions</h3>
          <div className="space-y-2">
            <button
              onClick={handleFetchProfile}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              {isLoading ? 'Loading...' : 'Fetch Profile'}
            </button>
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              {isLoading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      )}

      {/* Redux State Debug */}
      <div className="mt-6 p-3 bg-gray-100 rounded">
        <h4 className="text-sm font-semibold mb-2">Redux State Debug</h4>
        <pre className="text-xs text-gray-600 overflow-auto">
          {JSON.stringify({ isAuthenticated, isLoading, user: user ? { id: user.id, email: user.email, username: user.username } : null }, null, 2)}
        </pre>
      </div>
    </div>
  );
}
