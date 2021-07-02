import React from 'react'
import Logo from '../images/logo.svg'

const Header = ({ score }) => {
  return (
    <header>
      <img src={Logo} alt='' />
      <div className='score-container'>
        <h6>SCORE</h6>
        <h1>{score}</h1>
      </div>
    </header>
  )
}

export default Header
