import Typewriter from 'typewriter-effect'

function Enjoy() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.changeCursor(' ').pauseFor(5000).start().typeString('CR$ I hope you enjoy!').start()
      }}
    />
  )
}

export default Enjoy
