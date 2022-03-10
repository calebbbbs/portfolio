import Bio from '../components/Bio'
import Header from '../components/Header'
import Terminal from '../components/Terminal'
import Footer from '../components/Footer'

function Landing() {
  return (
    <>
      <body className='font-poppins'>
        <Header />
        <Terminal />
        <Bio />
        <Footer />
      </body>
    </>
  )
}
export default Landing
