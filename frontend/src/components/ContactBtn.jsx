import { useNavigate } from "react-router-dom"

function ContactBtn() {

  const navigate = useNavigate()


  const onClick = () =>{
    navigate('contact')
  }

  return (
    <>
      <div className='relative'>
        <button className='fixed top-0 right-20 text-2xl font-bold text-cyan-300' onClick={onClick}>
          Contact Me
        </button>
      </div>
    </>
  )
}

export default ContactBtn