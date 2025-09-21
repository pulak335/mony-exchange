'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface SavedCard {
  _id: string;
  last4: string;
  brand: string;
  expirationMonth: number;
  expirationYear: number;
  isDefault: boolean;
}

interface BankAccount {
  _id: string;
  bankName: string;
  accountHolderName: string;
  accountNumber: string;
  routingNumber: string;
  isDefault: boolean;
}

export default function PaymentMethodsPage() {
  const { status } = useSession();
  const router = useRouter();
  const [savedCards, setSavedCards] = useState<SavedCard[]>([]);
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newCard, setNewCard] = useState({
    last4: '',
    brand: '',
    expirationMonth: 1,
    expirationYear: new Date().getFullYear(),
    cardToken: '',
    isDefault: false,
  });

  const [newBankAccount, setNewBankAccount] = useState({
    bankName: '',
    accountHolderName: '',
    accountNumber: '',
    routingNumber: '',
    isDefault: false,
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }

    if (status === 'authenticated') {
      fetchPaymentMethods();
    }
  }, [status, router]);

  const fetchPaymentMethods = async () => {
    try {
      const [cardsRes, accountsRes] = await Promise.all([
        fetch('/api/saved-cards'),
        fetch('/api/bank-accounts'),
      ]);

      if (!cardsRes.ok) {
        throw new Error(`Error fetching cards: ${cardsRes.statusText}`);
      }
      if (!accountsRes.ok) {
        throw new Error(`Error fetching accounts: ${accountsRes.statusText}`);
      }

      const cardsData = await cardsRes.json();
      const accountsData = await accountsRes.json();

      setSavedCards(cardsData);
      setBankAccounts(accountsData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    if (confirm('Are you sure you want to delete this card?')) {
      try {
        const res = await fetch(`/api/saved-cards?id=${cardId}`, {
          method: 'DELETE',
        });

        if (!res.ok) {
          throw new Error(`Error deleting card: ${res.statusText}`);
        }

        fetchPaymentMethods(); // Refresh the list
      } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  const handleDeleteAccount = async (accountId: string) => {
    if (confirm('Are you sure you want to delete this bank account?')) {
      try {
        const res = await fetch(`/api/bank-accounts?id=${accountId}`, {
          method: 'DELETE',
        });

        if (!res.ok) {
          throw new Error(`Error deleting account: ${res.statusText}`);
        }

        fetchPaymentMethods(); // Refresh the list
      } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  if (loading) {
    return <div className="container mx-auto p-4">Loading payment methods...</div>;
  }



  if (error) {
    return <div className="container mx-auto p-4 text-red-500">Error: {error}</div>;
  }

  const handleAddCard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch('/api/saved-cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });

      if (!res.ok) {
        throw new Error(`Error adding card: ${res.statusText}`);
      }

      setNewCard({
        last4: '',
        brand: '',
        expirationMonth: 1,
        expirationYear: new Date().getFullYear(),
        cardToken: '',
        isDefault: false,
      });
      fetchPaymentMethods();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  const handleAddBankAccount = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await fetch('/api/bank-accounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBankAccount),
      });

      if (!res.ok) {
        throw new Error(`Error adding bank account: ${res.statusText}`);
      }

      setNewBankAccount({
        bankName: '',
        accountHolderName: '',
        accountNumber: '',
        routingNumber: '',
        isDefault: false,
      });
      fetchPaymentMethods();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Payment Methods</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Saved Cards</h2>
        {savedCards.length === 0 ? (
          <p>No saved cards found.</p>
        ) : (
          <ul className="space-y-2">
            {savedCards.map((card) => (
              <li key={card._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                  <p className="font-medium">{card.brand} **** {card.last4}</p>
                  <p className="text-sm text-gray-600">Expires: {card.expirationMonth}/{card.expirationYear}</p>
                  {card.isDefault && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Default</span>}
                </div>
                <button
                  onClick={() => handleDeleteCard(card._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Add New Card</h3>
          <form onSubmit={handleAddCard} className="bg-white p-4 rounded shadow">
            <div className="mb-2">
              <label htmlFor="cardLast4" className="block text-sm font-medium text-gray-700">Last 4 Digits:</label>
              <input type="text" id="cardLast4" value={newCard.last4} onChange={(e) => setNewCard({ ...newCard, last4: e.target.value })} maxLength={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-2">
              <label htmlFor="cardBrand" className="block text-sm font-medium text-gray-700">Brand:</label>
              <select id="cardBrand" value={newCard.brand} onChange={(e) => setNewCard({ ...newCard, brand: e.target.value })} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option value="">Select Brand</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="American Express">American Express</option>
                <option value="Discover">Discover</option>
              </select>
            </div>
            <div className="mb-2 flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="cardExpMonth" className="block text-sm font-medium text-gray-700">Exp. Month:</label>
                <input type="number" id="cardExpMonth" value={newCard.expirationMonth} onChange={(e) => setNewCard({ ...newCard, expirationMonth: parseInt(e.target.value) })} min="1" max="12" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
              <div className="w-1/2">
                <label htmlFor="cardExpYear" className="block text-sm font-medium text-gray-700">Exp. Year:</label>
                <input type="number" id="cardExpYear" value={newCard.expirationYear} onChange={(e) => setNewCard({ ...newCard, expirationYear: parseInt(e.target.value) })} min={new Date().getFullYear()} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="cardToken" className="block text-sm font-medium text-gray-700">Card Token (simulated):</label>
              <input type="text" id="cardToken" value={newCard.cardToken} onChange={(e) => setNewCard({ ...newCard, cardToken: e.target.value })} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="cardIsDefault" checked={newCard.isDefault} onChange={(e) => setNewCard({ ...newCard, isDefault: e.target.checked })} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="cardIsDefault" className="ml-2 block text-sm text-gray-900">Set as Default</label>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Add Card</button>
          </form>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Bank Accounts</h2>
        {bankAccounts.length === 0 ? (
          <p>No saved bank accounts found.</p>
        ) : (
          <ul className="space-y-2">
            {bankAccounts.map((account) => (
              <li key={account._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                  <p className="font-medium">{account.bankName} - {account.accountHolderName}</p>
                  <p className="text-sm text-gray-600">Account: ****{account.accountNumber.slice(-4)}</p>
                  <p className="text-sm text-gray-600">Routing: {account.routingNumber}</p>
                  {account.isDefault && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Default</span>}
                </div>
                <button
                  onClick={() => handleDeleteAccount(account._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Add New Bank Account</h3>
          <form onSubmit={handleAddBankAccount} className="bg-white p-4 rounded shadow">
            <div className="mb-2">
              <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">Bank Name:</label>
              <input type="text" id="bankName" value={newBankAccount.bankName} onChange={(e) => setNewBankAccount({ ...newBankAccount, bankName: e.target.value })} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-2">
              <label htmlFor="accountHolderName" className="block text-sm font-medium text-gray-700">Account Holder Name:</label>
              <input type="text" id="accountHolderName" value={newBankAccount.accountHolderName} onChange={(e) => setNewBankAccount({ ...newBankAccount, accountHolderName: e.target.value })} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-2">
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">Account Number:</label>
              <input type="text" id="accountNumber" value={newBankAccount.accountNumber} onChange={(e) => setNewBankAccount({ ...newBankAccount, accountNumber: e.target.value })} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-2">
              <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-700">Routing Number:</label>
              <input type="text" id="routingNumber" value={newBankAccount.routingNumber} onChange={(e) => setNewBankAccount({ ...newBankAccount, routingNumber: e.target.value })} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div className="mb-4 flex items-center">
              <input type="checkbox" id="bankIsDefault" checked={newBankAccount.isDefault} onChange={(e) => setNewBankAccount({ ...newBankAccount, isDefault: e.target.checked })} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="bankIsDefault" className="ml-2 block text-sm text-gray-900">Set as Default</label>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Add Bank Account</button>
          </form>
        </div>
      </section>
    </div>
  );
}
