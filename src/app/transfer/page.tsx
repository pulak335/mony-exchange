"use client";

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function TransferPage() {
  const { status } = useSession();
  const router = useRouter();

  const [recipientEmail, setRecipientEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD'); // Default currency
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!recipientEmail || !amount || !currency) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch('/api/transfer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipientEmail, amount: parseFloat(amount), currency }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        setRecipientEmail('');
        setAmount('');
        setCurrency('USD');
      } else {
        setError(data.error || 'Transfer failed.');
      }
    } catch (err) {
      console.error('Transfer error:', err);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div>
      <h1>Send Money</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="recipientEmail">Recipient Email:</label>
          <input
            type="email"
            id="recipientEmail"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0.01"
            step="0.01"
          />
        </div>
        <div>
          <label htmlFor="currency">Currency:</label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currency options as needed */}
          </select>
        </div>
        <button type="submit">Send</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}