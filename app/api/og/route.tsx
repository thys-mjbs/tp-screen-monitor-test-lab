import { ImageResponse } from 'next/og'
import { type NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') ?? 'Screen Test Lab'
  const desc = searchParams.get('desc') ?? 'Free browser-based monitor tests. No sign-up required.'
  const truncDesc = desc.length > 110 ? desc.substring(0, 110) + '…' : desc
  const titleSize = title.length > 45 ? 46 : 54

  return new ImageResponse(
    (
      <div
        style={{
          background: '#3A0013',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '64px 72px',
          position: 'relative',
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '10px',
            background: '#FF608C',
          }}
        />

        {/* Site label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '52px',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              background: '#FF608C',
            }}
          />
          <span
            style={{
              color: '#FFAEBC',
              fontSize: '18px',
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            SCREEN TEST LAB
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: titleSize,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '28px',
            flex: 1,
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            color: '#FFAEBC',
            fontSize: '22px',
            lineHeight: 1.45,
            marginBottom: '52px',
          }}
        >
          {truncDesc}
        </div>

        {/* Footer pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              background: '#71002D',
              borderRadius: '6px',
              padding: '6px 14px',
              color: '#FF608C',
              fontSize: '16px',
              fontWeight: 600,
              display: 'flex',
            }}
          >
            Free
          </div>
          <div
            style={{
              background: '#71002D',
              borderRadius: '6px',
              padding: '6px 14px',
              color: '#FFAEBC',
              fontSize: '16px',
              display: 'flex',
            }}
          >
            No sign-up
          </div>
          <div
            style={{
              background: '#71002D',
              borderRadius: '6px',
              padding: '6px 14px',
              color: '#FFAEBC',
              fontSize: '16px',
              display: 'flex',
            }}
          >
            Works in any browser
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
