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
      <div className='flex flex-col'>
        <div className='flex flex-col pt-12 top-5 -right-20'>
          <DarkModeToggle
            checked={darkMode}
            onChange={toggleDarkMode}
            size={56}
          />
        </div>
      </div>
    </>
  )
}

export default Switch
