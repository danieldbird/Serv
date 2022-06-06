export async function fetchUserById(auth0Id) {
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

export async function fetchAllJobsByUserId(auth0Id) {
  const response = await fetch('http://localhost:3000/api/jobs/getAllJobsByUserId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ auth0Id }),
  })
  const data = await response.json()
  return data
}
