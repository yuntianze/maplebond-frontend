export const maxDuration = 30
export const dynamic = 'force-dynamic'

import { submitUserMessage } from '@/lib/chat/actions'

export function GET(request: Request) {
  return new Response('Vercel', {
    status: 200
  })
}

export function POST(request: Request) {
  return new Response('Vercel', {
    status: 200
  })
}
