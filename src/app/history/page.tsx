'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Transaction {
  _id: string;
  senderId: string;
  recipientId: string;
  amount: number;
  currency: string;
  type: 'SENT' | 'RECEIVED';
  createdAt: string;
}

export default function TransactionHistoryPage() {
  const { status } = useSession();
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'authenticated') {
      const fetchTransactions = async () => {
        try {
          const res = await fetch('/api/transactions');
          const data = await res.json();

          if (res.ok) {
            setTransactions(data.transactions);
          } else {
            setError(data.error || 'Failed to fetch transactions.');
          }
        } catch (err) {
          console.error('Fetch transactions error:', err);
          setError('An unexpected error occurred while fetching transactions.');
        } finally {
          setLoading(false);
        }
      };
      fetchTransactions();
    } else if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading' || loading) {
    return <p>Loading transaction history...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Transaction History</h1>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction._id}>
              <p>Amount: {transaction.amount} {transaction.currency}</p>
              <p>Type: {transaction.type}</p>
              <p>Date: {new Date(transaction.createdAt).toLocaleString()}</p>
              {/* You might want to fetch sender/recipient details based on IDs */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}