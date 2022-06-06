export async function getUserById(auth0Id) {
  const response = await fetch('http://localhost:3000/api/users/getUserById', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ auth0Id }),
  })
  const data = await response.json()
  return data
}

export function registerUser() {}