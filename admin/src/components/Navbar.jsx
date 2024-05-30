import React from 'react'
import logo from '../assets/logo.svg'
import profileImg from '../assets/profile.png'

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <img src={logo} alt='logoIcon' />
        </div>
        <div>Admin Panel</div>
        <div>
          <img src={profileImg} alt='' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar