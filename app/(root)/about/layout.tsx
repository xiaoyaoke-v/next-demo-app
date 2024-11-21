import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>About</p>
      {children}
    </div>
  )
}

export default Layout
