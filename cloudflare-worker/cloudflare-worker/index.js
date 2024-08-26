addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method === 'POST') {
    const formData = await request.formData();
    // Process form data here
    // Example: const name = formData.get('name');

    // Return a response
    return new Response('Thank you for contacting us.', {
      headers: { 'content-type': 'text/plain' },
    });
  }

  return new Response('Method not allowed', { status: 405 });
}
