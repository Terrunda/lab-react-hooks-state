import React from 'react'

const DarkModeToggle = ({Mode, ToggleMode}) => {
  // TODO: Implement dark mode toggle logic
  return (
    <button onClick={ToggleMode}>Toggle {Mode} Mode</button>
  )
}

export default DarkModeToggle
