import React from 'react'

function Footer() {
  return (
    <footer className="text-sm container mx-auto py-6 px-10 bg-green-700 text-white text-center">
      Copyright - {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
