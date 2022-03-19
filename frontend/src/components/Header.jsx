import { useNavigate } from "react-router-dom"
import ContactBtn from "../components/ContactBtn"

function Header() {
  const naviagte = useNavigate()


  const onClick = () =>{
    naviagte('/')
  }
  return (
    <>
      <section className='heading justify-center bg-slate-900'>
        <header className='container mx-auto flex flex-row'>
          <button className='flex-none text-5xl font-bold text-cyan-900/75 py-6 font-poppins' onClick={onClick}>
            Caleb Roberts
          </button>
          <ContactBtn />
        </header>
      </section>
    </>
  )
}

export default Header
