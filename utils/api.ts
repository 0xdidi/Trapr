const API_BASE_URL = '/api'

export async function fetchApi(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`)
  }

  return response.json()
}

export const api = {
  signUp: (data: { username: string; email: string; password: string }) =>
    fetchApi('/auth/sign-up', { method: 'POST', body: JSON.stringify(data) }),

  signIn: (data: { email: string; password: string }) =>
    fetchApi('/auth/sign-in', { method: 'POST', body: JSON.stringify(data) }),

  // Add more API methods as needed
}

