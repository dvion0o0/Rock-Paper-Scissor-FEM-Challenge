import React, { useState } from 'react'
import Paper from '../images/icon-paper.svg'
import Scissor from '../images/icon-scissors.svg'
import Rock from '../images/icon-rock.svg'
const Game = ({ handleSelect }) => {
  return (
    <div className='game-container'>
      <button
        className='btn paper'
        onClick={(e) => handleSelect(e)}
        name='Paper'
      >
        <img src={Paper} alt='paper' />
      </button>
      <button className='btn scissor' onClick={handleSelect} name='Scissor'>
        <img src={Scissor} alt='scissor' />
      </button>
      <button className='btn rock' onClick={handleSelect} name='Rock'>
        <img src={Rock} alt='rock' />
      </button>
    </div>
  )
}

export default Game
