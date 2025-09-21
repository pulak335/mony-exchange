import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReduxProvider } from "@/lib/redux";
import { AuthProvider } from "@/lib/auth/AuthContext";
import AuthSessionProvider from "@/components/AuthSessionProvider";
import MainLayout from "@/components/layout/MainLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Money Exchange | Fast and Secure Currency Exchange",
  description: "Exchange money quickly and securely with our reliable service. Competitive rates and instant transfers available worldwide.",
  keywords: "money exchange, currency exchange, foreign exchange, forex, money transfer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <AuthSessionProvider>
            <ReduxProvider>
              <MainLayout>
                {children}
              </MainLayout>
            </ReduxProvider>
          </AuthSessionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
