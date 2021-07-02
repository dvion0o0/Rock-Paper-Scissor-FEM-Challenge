import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Game from './components/Game'
import Footer from './components/Footer'
import Rules from './components/Rules'
import GameWinner from './components/GameWinner'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

const getScoreLocalStorage = () => {
  if (localStorage.getItem('Score')) {
    return Number(localStorage.getItem('Score'))
  } else {
    return 0
  }
}

function App() {
  const [modal, setModal] = useState(false)
  const [score, setScore] = useState(getScoreLocalStorage())
  const [select, setSelect] = useState('')
  const [random, setRandom] = useState('')
  const [startGame, setStartGame] = useState(false)

  let history = useHistory()
  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  const handleSelect = (e) => {
    setSelect(e.currentTarget.name)
    setRandom(Math.floor(Math.random() * 3))
    setStartGame(true)
    history.push('/game')
  }

  useEffect(() => {
    localStorage.setItem('Score', score)
  }, [score])

  return (
    <main>
      <Rules closeModal={closeModal} modal={modal} />
      <div className='main-center'>
        <Header score={score} />
        <Switch>
          <Route exact path='/'>
            <Game handleSelect={handleSelect} />
          </Route>
          {startGame ? (
            <Route exact path='/game'>
              <GameWinner
                select={select}
                setSelect={setSelect}
                setScore={setScore}
                score={score}
                random={random}
                setRandom={setRandom}
                setStartGame={setStartGame}
                startGame={startGame}
              />
            </Route>
          ) : (
            <Redirect to='/' />
          )}
        </Switch>
      </div>
      <Footer openModal={openModal} />
    </main>
  )
}

export default App
