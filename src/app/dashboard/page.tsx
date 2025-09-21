"use client";

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p style={styles.loading}>Loading...</p>;
  }

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <h1 style={styles.logo}>Money Exchange</h1>
        <div style={styles.navLinks}>
          <Link href="/dashboard" style={styles.navLink}>Dashboard</Link>
          <Link href="/payment-methods" style={styles.navLink}>Payment Methods</Link>
          <Link href="/history" style={styles.navLink}>History</Link>
          <button onClick={() => signOut()} style={styles.signOutButton}>Sign out</button>
        </div>
      </nav>
      <main style={styles.mainContent}>
        <h2 style={styles.welcomeHeading}>Welcome, {session?.user?.email}</h2>
        <p style={styles.dashboardText}>This is your personal dashboard. Here you can manage your finances, exchange currencies, and track your transactions.</p>

        <section style={styles.section}>
          <h3 style={styles.sectionHeading}>Quick Actions</h3>
          <div style={styles.actionButtons}>
            <Link href="/exchange" style={styles.actionButton}>Exchange Currency</Link>
            <Link href="/transfer" style={styles.actionButton}>Transfer Money</Link>
            <Link href="/payment-methods" style={styles.actionButton}>Manage Payment Methods</Link>
          </div>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sectionHeading}>Account Summary</h3>
          <div style={styles.summaryCards}>
            <div style={styles.summaryCard}>
              <h4>Current Balance</h4>
              <p>$ 1,234.56</p>
            </div>
            <div style={styles.summaryCard}>
              <h4>Recent Transactions</h4>
              <p>View all</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
  },
  loading: {
    textAlign: 'center',
    padding: '50px',
    fontSize: '1.2rem',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    backgroundColor: '#0070f3',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    margin: 0,
    fontSize: '1.8rem',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#e0e0e0',
    },
  },
  signOutButton: {
    padding: '8px 15px',
    borderRadius: '4px',
    border: '1px solid #fff',
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#0070f3',
    },
  },
  mainContent: {
    flexGrow: 1,
    padding: '30px',
    maxWidth: '1200px',
    margin: '20px auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  welcomeHeading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  },
  dashboardText: {
    fontSize: '1.1rem',
    color: '#555',
    textAlign: 'center',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  sectionHeading: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #0070f3',
    paddingBottom: '10px',
  },
  actionButtons: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  actionButton: {
    display: 'inline-block',
    padding: '15px 25px',
    borderRadius: '8px',
    backgroundColor: '#0070f3',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
      backgroundColor: '#005bb5',
      transform: 'translateY(-2px)',
    },
  },
  summaryCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  summaryCard: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    borderLeft: '5px solid #0070f3',
  },
};