import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ContactBtn() {
  const [showButton, setShowButton] = useState(true)

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (showButton === false){

  //   }
  // })

 useEffect(() =>{

 })

  const onClick = () =>{
    setShowButton(false)
    navigate('contact')
  }

  return (
    <>
      <div className='relative'>
        {showButton === true && <button className='fixed top-0 right-20 text-2xl font-bold text-cyan-300' onClick={onClick} >
          Contact Me
        </button>}
      </div>
    </>
  )
}

export default ContactBtn