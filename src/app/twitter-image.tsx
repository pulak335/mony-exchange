import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Money Exchange';
export const size = { width: 1200, height: 675 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: 'linear-gradient(to right, #1da1f2, #1a8cd8)',
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
        <span style={{ fontSize: 140 }}>💸</span>
        Money Exchange
        <span style={{ fontSize: 40, marginTop: 20 }}>Your Global Money Transfer Partner</span>
      </div>
    ),
    {
      ...size,
    },
  );
}