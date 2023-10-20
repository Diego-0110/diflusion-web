import { useState } from 'react'

export default function useToggle (initialValue) {
  // Custom Hook to manage a boolean switcher.
  const [isToggled, setIsToggled] = useState(initialValue)
  const handleClick = () => {
    setIsToggled(!isToggled)
  }
  return {
    isToggled, handleClick
  }
}
