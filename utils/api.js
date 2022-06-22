export async function fetchUserById(auth0Id) {
  const response = await fetch(`${process.env.HOST_URL}/api/users/getUserById`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ auth0Id }),
  })
  const data = await response.json()
  return data
}

export async function fetchAllJobs() {
  const response = await fetch(`${process.env.HOST_URL}/api/jobs/getAllJobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}

export async function fetchAllJobsByUserId(auth0Id) {
  const response = await fetch(`${process.env.HOST_URL}/api/jobs/getAllJobsByUserId`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ auth0Id }),
  })
  const data = await response.json()
  return data
}
