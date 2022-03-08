import Greeting from '../components/Greeting'
// import Enjoy from '../components/Enjoy'

function Landing() {
  return (
    <>
      <section className='heading justify-center'>
        <header className='container mx-auto'>
          <p className='text-5xl font-extrabold'>
            Caleb Roberts
            {/* <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>

            </span> */}
          </p>
          {/* <h1 className='flex justify-center text-3xl'></h1> */}
        </header>
      </section>
      <section>
        <div className='container mx-auto grid justify-end box-content h-35 w-45 p-3 border-4 bg-green-700'>
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
                  <strong>{' '}x</strong>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className='container mx-auto box-content h-35 w-45 p-3 border-4 bg-gray-700 shadow-2xl'>
          {/* <div class="top mb-2 flex">
          <div class="h-3 w-3 bg-red-500 rounded-full"></div>
          <div class="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
          <div class="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
      </div> */}
          <div className='container mx-auto flex justify-left h-45 w-45 text-5xl'>
            <p className='pt-4'>
              <strong>$CR</strong>
            </p>
            <span className='box-content h-45 w-45 p-4 '>
              <Greeting />
              <br />
              {/* <Enjoy /> */}
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
export default Landing
