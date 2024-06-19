export const maxDuration = 30 // seconds
export const dynamic = 'force-dynamic'

export function GET(request: Request) {
  return new Response('Vercel', {
    status: 200
  })
}

// For POST request
export async function POST(request: Request): Promise<Response> {
  try {
    const requestBody = await request.json()
    // Handle the POST request here, for example, process the requestBody
    console.log('POST request body:', requestBody)

    // Example response
    return new Response(
      JSON.stringify({ message: 'POST request processed successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error processing POST request:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process POST request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}

// For PUT request
export async function PUT(request: Request): Promise<Response> {
  try {
    const requestBody = await request.json()
    // Handle the PUT request here, for example, process the requestBody
    console.log('PUT request body:', requestBody)

    // Example response
    return new Response(
      JSON.stringify({ message: 'PUT request processed successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error processing PUT request:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process PUT request' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
