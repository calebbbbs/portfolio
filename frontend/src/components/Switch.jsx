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
      <div className='flex justify-center pr-8 relative'>
        <div className='flex flex-row dark:text-white text-slate-300 text-2xl'>
          <DarkModeToggle
            checked={darkMode}
            onChange={toggleDarkMode}
            size={64}
          />
        </div>
      </div>
    </>
  )
}

export default Switch
