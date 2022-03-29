import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import ContactBtn from "../components/ContactBtn"

function Header() {

  const [showButton, setShowButton] = useState(true)

  const navigate = useNavigate()

  useEffect(() =>{
    if(showButton === false){
      setShowButton(true)
    }
  }, [showButton, navigate])

  const onClick = () =>{
    setShowButton(false)
  }
  return (
    <>
      <section className='heading justify-center bg-slate-900'>
        <header className='container mx-auto flex flex-row'>
          <Link to='/' className='flex-none text-5xl font-bold text-cyan-900 py-6 font-poppins' onClick={onClick}>
            Caleb Roberts
          </Link>
          {showButton === true && <ContactBtn />}
        </header>
      </section>
    </>
  )
}

export default Header
