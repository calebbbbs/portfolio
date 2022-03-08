import Typewriter from 'typewriter-effect'

function Greeting() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Hello welcome to my portfolio.')
          .start()
      }}
    />
  )
}

export default Greeting
