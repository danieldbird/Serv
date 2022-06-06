import { useUser } from '@auth0/nextjs-auth0'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Loading from './Loading'

import SidebarNavigation from './SidebarNavigation'
function Layout({ children }) {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <Loading />
  if (error) return <div>{error.message}</div>
  return (
    <>
      <Header />
      <div className="container mx-auto bg-gray-100 flex flex-grow">
        {user && <SidebarNavigation />}
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
