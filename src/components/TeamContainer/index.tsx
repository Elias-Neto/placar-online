import { HiMiniMinusSmall, HiMiniPlusSmall } from 'react-icons/hi2'

import Button from '../Button'

import './styles.css'

interface TeamContainerProps {
  teamName: string
  points: number
  setPoints: (points: number) => void
  teamWins: number
}

const TeamContainer: React.FC<TeamContainerProps> = ({ teamName, points, setPoints, teamWins }) => {
  const addPoint = () => {
    setPoints(points + 1)
  }

  const removePoint = () => {
    if (points === 0) {
      setPoints(0)
    } else {
      setPoints(points - 1)
    }
  }

  return (
    <div className="container">
      <div className="text-wrapper">
        <h3>{teamName}</h3>
        <span>{teamWins.toString().padStart(2, '0')}</span>
      </div>

      <div className="count-wrapper">
        {points.toString().padStart(2, '0')}
      </div>

      <div className="buttons-wrapper">
        <Button icon={HiMiniPlusSmall} isGreen isRounded onClick={addPoint} />
        <Button icon={HiMiniMinusSmall} isRed isRounded onClick={removePoint} />
      </div>
    </div>
  )
}

export default TeamContainer