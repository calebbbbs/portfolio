import { useState } from "react"
import { Link } from "react-router-dom"

function ContactBtn() {
  const [showButton, setShowButton] = useState(true)


  const onClick = () =>{
    setShowButton(false)
  }

  return (
    <>
      <div className='relative'>
        {showButton === true && <Link to='contact' className='fixed top-0 right-20 text-2xl font-bold text-cyan-300' onClick={onClick} >
          Contact Me
        </Link>}
      </div>
    </>
  )
}

export default ContactBtn