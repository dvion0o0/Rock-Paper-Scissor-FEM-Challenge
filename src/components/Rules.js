import React from 'react'
import RulesImage from '../images/image-rules.svg'

const Rules = ({ modal, closeModal }) => {
  return (
    <section
      className={`${modal ? 'rules-container active' : 'rules-container'}`}
    >
      <h1>RULES</h1>
      <img src={RulesImage} alt='rules' />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        className='close-btn'
        onClick={closeModal}
      >
        <path
          fill='#3B4262'
          fillRule='evenodd'
          d='M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z'
          opacity='.25'
        />
      </svg>
    </section>
  )
}

export default Rules
