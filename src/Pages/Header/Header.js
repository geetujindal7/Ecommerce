import React from 'react'
import Icons from '../../Component/Icons/Icons'
import './Header.css'

function Header() {
  return (
    <>
    <div className='headerMain'>
      <div className='header_flex'>
        <h2>SSS</h2>
        <div className='login_icons'>
          <h4>Home</h4>
          <h4>Support</h4>
        </div>
      </div>
    </div>
    <Icons />
    </>
  )
}

export default Header