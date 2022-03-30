import { useState } from "react"
import { Link } from "react-router-dom"

function ContactBtn() {
  const [showButton, setShowButton] = useState(true)


  const onClick = () =>{
    setShowButton(false)
  }

  return (
    <>
      <div className='flex flex-col top-right'>
        {showButton === true && <Link to='contact' className=' top-0 right-5 text-2xl font-bold text-slate-400' onClick={onClick} >
          Contact Me
        </Link>}
      </div>
    </>
  )
}

export default ContactBtn