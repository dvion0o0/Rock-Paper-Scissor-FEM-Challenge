import React from 'react'

const Footer = ({ openModal }) => {
  return (
    <footer>
      <button className='rule-btn' onClick={openModal}>
        Rules
      </button>
    </footer>
  )
}

export default Footer
