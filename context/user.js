import { useUser } from '@auth0/nextjs-auth0'
import { createContext, useContext, useState } from 'react'

const UserDataContext = createContext()

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)
  // const { user, error, isLoading } = useUser()
  // console.log(user.registered)

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  )
}

export const useUserData = () => useContext(UserDataContext)
