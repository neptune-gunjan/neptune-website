import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Neptune Consulting Services'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: -200,
            width: 800,
            height: 800,
            background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -200,
            width: 800,
            height: 800,
            background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />
        
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: 30,
            background: 'linear-gradient(135deg, #06b6d4, #3b82f6, #a855f7)',
            marginBottom: 40,
            boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
          }}
        >
          <div
            style={{
              width: 114,
              height: 114,
              borderRadius: 27,
              background: '#09090b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: 64,
                fontWeight: 900,
                color: '#fff',
                fontFamily: 'sans-serif',
              }}
            >
              N
            </span>
          </div>
        </div>

        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: 'white',
            letterSpacing: '-0.02em',
            marginBottom: 20,
            textAlign: 'center',
            fontFamily: 'sans-serif',
          }}
        >
          Neptune Consulting Services
        </h1>
        <p
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.4,
            fontFamily: 'sans-serif',
          }}
        >
          Technology Consulting + Product Engineering. Understand → Design → Build → Deploy → Scale.
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}

