import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ContactBtn from '../components/ContactBtn'
import Switch from './Switch'

function Header() {
  const [showButton, setShowButton] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    if (showButton === false) {
      setShowButton(true)
    }
  }, [showButton, navigate])

  const onClick = () => {
    setShowButton(false)
  }
  return (
    <>
      <section className='header bg-body dark:bg-[#171717]'>
        <header className='mx-auto flex flex-row px-6'>
          <Link
            to='/'
            className='flex-row text-5xl font-bold text-slate-300 dark:text-[#9a30cf] py-6 font-poppins dark:brightness-125'
            onClick={onClick}
          >
            Caleb Roberts
          </Link>
          <div className='container object-right'>
            <div className='flex flex-col items-end p-3'>
              {showButton === true && <ContactBtn />}
              <p className='dark:text-white text-slate-300 text-2xl pt-4 relative'>Dark Mode{' '}</p>
              <Switch />
            </div>
          </div>
        </header>
      </section>
    </>
  )
}

export default Header
