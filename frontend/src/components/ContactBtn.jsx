import { useState } from "react"
import { Link } from "react-router-dom"

function ContactBtn() {
  const [showButton, setShowButton] = useState(true)


  const onClick = () =>{
    setShowButton(false)
  }

  return (
    <>
      <div className='container'>
        {showButton === true && <Link to='contact' className='absolute top-0 right-20 text-2xl font-bold text-slate-400' onClick={onClick} >
          Contact Me
        </Link>}
      </div>
    </>
  )
}

export default ContactBtn