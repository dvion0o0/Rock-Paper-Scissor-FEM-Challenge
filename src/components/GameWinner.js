import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Paper from '../images/icon-paper.svg'
import Scissor from '../images/icon-scissors.svg'
import Rock from '../images/icon-rock.svg'
const GameWinner = ({
  setScore,
  score,
  select,
  setSelect,
  random,
  setRandom,
}) => {
  let history = useHistory()
  const [housePicked, setHousePicked] = useState('')
  const [winner, setWinner] = useState({ win: '', winnerText: '' })
  const selector = [Paper, Scissor, Rock]
  // const random = Math.floor(Math.random() * selector.length)
  const newSelector = ['Paper', 'Scissor', 'Rock']

  useEffect(() => {
    const timer = setTimeout(() => {
      setHousePicked(selector[random])
    }, 500)
  }, [random])

  const resetGame = () => {
    history.push('/')
    setSelect('')
    setRandom('')
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (select === newSelector[random]) {
        setScore(score)
        setWinner({ win: true, winnerText: 'Draw' })
      }
      if (select === 'Paper' && newSelector[random] === 'Rock') {
        setScore(score + 1)
        setWinner({ win: true, winnerText: 'You win' })
      }
      if (select === 'Paper' && newSelector[random] === 'Scissor') {
        setScore(score - 1)
        setWinner({ win: true, winnerText: 'You Lose' })
      }
      if (select === 'Scissor' && newSelector[random] === 'Paper') {
        setScore(score + 1)
        setWinner({ win: true, winnerText: 'You win' })
      }
      if (select === 'Scissor' && newSelector[random] === 'Rock') {
        setScore(score - 1)
        setWinner({ win: true, winnerText: 'You Lose' })
      }
      if (select === 'Rock' && newSelector[random] === 'Scissor') {
        setScore(score + 1)
        setWinner({ win: true, winnerText: 'You win' })
      }
      if (select === 'Rock' && newSelector[random] === 'Paper') {
        setScore(score - 1)
        setWinner({ win: true, winnerText: 'You Lose' })
      }
    }, 500)
  }, [select, random])

  const YourPickedClasses = () => {
    if (winner.winnerText === 'Draw') {
      if (select === 'Paper') {
        return 'win-btn paper-win winner-animate-btn'
      }
      if (select === 'Scissor') {
        return 'win-btn scissor-win winner-animate-btn'
      }
      if (select === 'Rock') {
        return 'win-btn rock-win winner-animate-btn'
      }
    }
    if (winner.winnerText === 'You win') {
      if (select === 'Paper') {
        return 'win-btn paper-win winner-animate-btn'
      }
      if (select === 'Scissor') {
        return 'win-btn scissor-win winner-animate-btn'
      }
      if (select === 'Rock') {
        return 'win-btn rock-win winner-animate-btn'
      }
    }
    if (winner.winnerText === 'You Lose') {
      if (select === 'Paper') {
        return 'win-btn paper-win '
      }
      if (select === 'Scissor') {
        return 'win-btn scissor-win '
      }
      if (select === 'Rock') {
        return 'win-btn rock-win'
      }
    }
  }

  const housePickedClasses = () => {
    if (winner.winnerText === 'Draw') {
      if (newSelector[random] === 'Paper') {
        return 'win-btn paper-win winner-animate-btn'
      }
      if (newSelector[random] === 'Scissor') {
        return 'win-btn scissor-win winner-animate-btn'
      }
      if (newSelector[random] === 'Rock') {
        return 'win-btn rock-win winner-animate-btn'
      }
    }
    if (winner.winnerText === 'You win') {
      if (newSelector[random] === 'Paper') {
        return 'win-btn paper-win'
      }
      if (newSelector[random] === 'Scissor') {
        return 'win-btn scissor-win'
      }
      if (newSelector[random] === 'Rock') {
        return 'win-btn rock-win'
      }
    }
    if (winner.winnerText === 'You Lose') {
      if (newSelector[random] === 'Paper') {
        return 'win-btn paper-win winner-animate-btn'
      }
      if (newSelector[random] === 'Scissor') {
        return 'win-btn scissor-win winner-animate-btn'
      }
      if (newSelector[random] === 'Rock') {
        return 'win-btn rock-win winner-animate-btn'
      }
    }
  }

  // win-btn paper-win winner-animate-btn
  // {`${
  //         newSelector[random] === 'Paper'
  //           ? 'win-btn paper-win'
  //           : newSelector[random] === 'Scissor'
  //           ? 'win-btn scissor-win'
  //           : newSelector[random] === 'Rock'
  //           ? 'win-btn rock-win'
  //           : null
  //       }`}
  return (
    <section className='game-winner-container'>
      <button className={YourPickedClasses()}>
        <img
          src={`${
            select === 'Paper'
              ? Paper
              : select === 'Scissor'
              ? Scissor
              : select === 'Rock'
              ? Rock
              : null
          }`}
          alt='paper'
        />
        <h2>YOU PICKED</h2>
      </button>
      <button className={housePickedClasses()}>
        <img src={housePicked} alt='scissor' />
        <h2>HOUSE PICKED</h2>
      </button>
      {winner.win && (
        <div className='winner-info'>
          <h1>{winner.winnerText}</h1>
          <button className='reset-game' onClick={resetGame}>
            PLAY AGAIN
          </button>
        </div>
      )}
    </section>
  )
}

export default GameWinner
