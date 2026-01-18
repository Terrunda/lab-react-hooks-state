import React from 'react'

const DarkModeToggle = ({Mode, ToggleMode}) => {
  return (
    <button onClick={ToggleMode}>Toggle {Mode} Mode</button>
  )
}

export default DarkModeToggle
