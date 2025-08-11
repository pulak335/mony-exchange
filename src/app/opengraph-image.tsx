import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Money Exchange';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to right, #541388, #3b82f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '0 50px',
        }}
      >
        <span style={{ fontSize: 160 }}>💰</span>
        Money Exchange
        <span style={{ fontSize: 48, marginTop: 20 }}>Fast, Secure, Reliable Money Transfers</span>
      </div>
    ),
    {
      ...size,
    },
  );
}