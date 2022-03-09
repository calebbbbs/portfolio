import { SocialIcon } from 'react-social-icons'
import Greeting from '../components/Greeting'
// import Enjoy from '../components/Enjoy'
import Bio from '../components/Bio'

function Landing() {
  return (
    <>
      <section className='heading justify-center'>
        <header className='container mx-auto'>
          <p className='text-5xl font-bold text-cyan-900/75 overline mb-4'>
            Caleb Roberts
            {/* <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>

            </span> */}
          </p>
        </header>
      </section>

      <div className='container mx-auto grid justify-end box-content h-35 w-45 p-3 border-4 bg-green-700 '>
        <div className='top-right mb-2 grid justify-end content- grid-cols-3'>
          <div className='hover:bg-slate-500'>
            <span className='ml-6 h-6 w-6 text-4xl'>
              <button classname='ml-6 h-6 w-6 text-4xl'>
                <strong>-</strong>
              </button>
            </span>
          </div>
          <div className=''>
            <button className='ml-2 h-3 w-3'></button>
          </div>
          <div className='hover:bg-red-700'>
            <span className=''>
              <button className='h-6 w-6 text-3xl hover:bg-red-700'>
                <strong>x</strong>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className='container mx-auto box-content h-35 w-45 p-3 bg-gray-700 shadow-2xl drop-shadow-2x mb-10'>
        <div className='container mx-auto flex justify-left h-45 w-45 text-5xl'>
          <p className='pt-4 text-green-700'>
            <strong>$CR{'>'}</strong>
          </p>
          <span className='box-content h-45 w-45 p-4 text-white'>
            <Greeting />
          </span>
        </div>
      </div>

      {/* <div className='flex justify-center'>
          <p>
            I enjoy solving problems,
            <br /> I enjoy being creative
            <br />I enjoy coding
          </p>
        </div> */}
      <Bio />
      <footer className='bg-slate-500'>
        <div className='button-group flex justify-center gap-4 pt-5'>
         <SocialIcon url="https://github.com/calebbbbs" />
          <SocialIcon url="https://www.linkedin.com/in/calebbbbs/"/>
          <SocialIcon url="https://www.twitter.com/calebbbbs_io" />
          {/* <a href="" className="btn btn-rounded bg-yellow-500"></a> */}
        </div>
      </footer>
    </>
  )
}
export default Landing
