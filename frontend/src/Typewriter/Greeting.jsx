import Typewriter from 'typewriter-effect'

function Greeting() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Check out the links below to find my github and socials!')
          .start()
      }}
    />
  )
}

export default Greeting
