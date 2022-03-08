import Typewriter from 'typewriter-effect'

function Enjoy() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.changeCursor('_').pauseFor(5000).start().typeString('I hope you enjoy!').start()
      }}
    />
  )
}

export default Enjoy
