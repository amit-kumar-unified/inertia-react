import React from 'react'
import TopNavBar from './Partials/TopNavBar'

const Layout = ({children}) => {
  return (
    <>

        <header>
            <TopNavBar />
        </header>
        <main>
            <div className="container mx-auto my-5">
                {children}
            </div>
        </main>
        <footer>

        </footer>
    </>
  )
}

export default Layout
