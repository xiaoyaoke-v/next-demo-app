import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>DashBoard</p>
      {children}
    </div>
  )
}

export default Layout
