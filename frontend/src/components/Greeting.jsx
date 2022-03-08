import Typewriter from 'typewriter-effect'

function Greeting() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Hello welcome to my portfolio. \n Check out my links below to find my github, socials and contact information!')
          .start()
      }}
    />
  )
}

export default Greeting
