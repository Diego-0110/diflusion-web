import { useState } from 'react'

export default function useToggle (initialValue) {
  const [isToggled, setIsToggled] = useState(initialValue)
  const handleClick = () => {
    setIsToggled(!isToggled)
  }
  return {
    isToggled, handleClick
  }
}
