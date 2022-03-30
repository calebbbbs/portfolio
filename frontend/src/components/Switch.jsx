import { useState } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'
import DarkMode from './DarkMode'

function Switch() {
  const [colorTheme, setTheme] = DarkMode()
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }

  return (
    <>
      <div className='pt-12 top-0 right-0'>
        <DarkModeToggle
          checked={darkMode}
          onChange={toggleDarkMode}
          size={32}
        />
      </div>
    </>
  )
}

export default Switch
