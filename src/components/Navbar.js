import { useState, useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../database/firebase-config'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  }, [])

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img
          className='logo'
          src={require('../assets/logo.png')}
          alt='Burger Builder'
        />
      </div>
      <div className='links'>
        <Link to='/'>Burger Builder</Link>
        {user ? (
          <>
            <Link to='/orders'>Orders</Link>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className='text-white' onClick={logout}>
              <Link to='/auth'>Logout</Link>
            </a>
          </>
        ) : (
          <Link to='/auth'>Login</Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
