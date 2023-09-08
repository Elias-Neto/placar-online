import { useState } from 'react'

import { VscDebugRestart } from 'react-icons/vsc'

import Button from './components/Button'
import TeamContainer from './components/TeamContainer'

import './styles/App.css'

const App = () => {
  const [teamOnePoints, setTeamOnePoints] = useState(0)
  const [teamTwoPoints, setTeamTwoPoints] = useState(0)
  const [teamOneWins, setTeamOneWins] = useState(0)
  const [teamTwoWins, setTeamTwoWins] = useState(0)

  const finishMatch = () => {
    if (teamOnePoints === 0 && teamTwoPoints === 0) {
      alert('Não há nenhum placar.')
      return
    }

    if (teamOnePoints === teamTwoPoints) {
      alert('Faça um Desempate.')
      return
    }

    if (confirm('Tem certeza que deseja finalizar a partida?')) {
      if (teamOnePoints > teamTwoPoints) {
        setTeamOneWins(teamOneWins + 1)
      } else {
        setTeamTwoWins(teamTwoWins + 1)
      }

      setTeamOnePoints(0)
      setTeamTwoPoints(0)
    }
  }

  const resetDatas = () => {
    if (teamOnePoints === 0 && teamTwoPoints === 0 && teamOneWins === 0 && teamTwoWins === 0) {
      alert('Não há nenhum placar.')
      return
    }

    if (confirm('Tem certeza que deseja zerar tudo?')) {
      setTeamOnePoints(0)
      setTeamTwoPoints(0)
      setTeamOneWins(0)
      setTeamTwoWins(0)
    }
  }

  return (
    <div className="App">
      <h1>Placar Online</h1>

      <TeamContainer teamName='Time 01' points={teamOnePoints} setPoints={setTeamOnePoints} teamWins={teamOneWins} />

      <hr />

      <TeamContainer teamName='Time 02' points={teamTwoPoints} setPoints={setTeamTwoPoints} teamWins={teamTwoWins} />

      <div className="buttons-wrapper">
        <Button text='Finalizar Partida' onClick={finishMatch} />
        <Button icon={VscDebugRestart} onClick={resetDatas} />
      </div>
    </div>
  )
}

export default App
