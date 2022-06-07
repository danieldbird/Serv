import Link from 'next/link'
import { forwardRef } from 'react'
import { useUser } from '@auth0/nextjs-auth0'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
function Header() {
  const { user, error, isLoading } = useUser()
  return (
    <header className="container mx-auto py-2 px-10 bg-green-700 text-white">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold" role="button">
            Serv.
          </h1>
        </Link>
        <ul className="flex justify-center items-center">
          {!user ? (
            <>
              <li className="py-2 px-4">
                <Link
                  href={{ pathname: '/api/auth/login', query: { method: 'login' } }}
                  className="py-2 px-4"
                >
                  Login
                </Link>
              </li>
              <li className="py-2 px-4">
                <Link
                  href={{ pathname: '/api/auth/login', query: { method: 'signup' } }}
                  className="py-2 px-4"
                >
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="py-2 px-4 text-sm">
                <Link href="/preferences" className="py-2 px-4">
                  {user.email}
                </Link>
              </li>
              <li className="py-2 px-4 cursor-pointer">
                <Link href="/api/auth/logout" className="py-2 px-4">
                  <a>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
