import { IconType } from 'react-icons'

import './styles.css'

interface ButtonProps {
  icon?: IconType
  isRed?: boolean
  isGreen?: boolean
  isRounded?: boolean
  text?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, isRed, isGreen, isRounded, text, onClick }) => {
  return (
    <button
      className={`
        button 
          ${isRed && 'bg-red'} 
          ${isGreen && 'bg-green'}
          ${isRounded && 'rounded'}
      `}
      onClick={onClick}
    >
      {Icon && <Icon className='button-icon' />}
      {text}
    </button>
  )
}

export default Button