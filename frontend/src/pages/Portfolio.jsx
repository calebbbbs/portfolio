import Greeting from '../components/Greeting'
import Enjoy from '../components/Enjoy'

function Portfolio() {
  return (
    <>
      <section className='heading justify-center'>
        <header className='container mx-auto'>
          <div className='text-5xl font-extrabold'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
            My Portfolio
            </span>
          </div>
          {/* <h1 className='flex justify-center text-3xl'></h1> */}
        </header>
      </section>
      <section>
        <div className="container mx-auto box-content h-45 w-45 p-4 border-4 bg-green-700">
        </div>
        <div className="container mx-auto box-content h-45 w-45 p-4 border-4 bg-gray-700">
        <div className='container mx-auto flex justify-left h-45 w-45 text-5xl'>
          <span className='box-content h-45 w-45 p-4'>
            <Greeting />
            <br />
            <Enjoy />
          </span>
          </div>
        </div>
      </section>
      {/* <div className='flex justify-center'>
          <p>
            I enjoy solving problems,
            <br /> I enjoy being creative
            <br />I enjoy coding
          </p>
        </div> */}
    </>
  )
}
export default Portfolio
