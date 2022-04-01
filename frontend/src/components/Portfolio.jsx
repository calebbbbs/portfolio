import screenshot from '../assets/Screenshot (2).png'

function Portfolio() {
  return (
    <>
      <div className='bg-secondary box flex justify-between items-center w-auto dark:bg-black pt-8'>
        <section className='w-full'>
          <h1 className='dark:text-[#9a30cf] text-input text-center text-5xl underline-offset-4'>
            Portfolio
          </h1>
          <hr className='border-black dark:border-[#9a30cf]' />

          <div className='flex flex-col justify-center py-16'>
            <div className='flex justify-center'>
              <div className='rounded-lg shadow-lg bg-white dark:bg-black max-w-sm'>
                <a
                  href='https://github.com/Wave-Pool/wavepool'
                  onClick={(() =>{

                  })}
                >
                  <img
                    className='rounded-t-lg '
                    src={screenshot}
                    alt=''
                  />
                </a>
                <div className='p-6'>
                  <h5 className='text-gray-900 dark:text-white text-2xl font-medium mb-2'>
                    <strong>Wavepool</strong>
                  </h5>
                  <p className='text-gray-700 dark:text-white text-base mb-4'>
                   <strong>Share music with your friends.</strong> <br /> <em>Know when they listen.</em> <br /><br />
                    Wavepool is a spotify companion web application designed to
                    bring the native social aspect back to your spotify
                    experience. Get a suggestion from a friend, drop it in your
                    queue, and let them know if you liked it!
                  </p>
                  <button
                    type='button'
                    className=' inline-block px-6 py-3 bg-[#30B043] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#30B043] hover:shadow-lg focus:bg-[#30B043] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#29973a] active:shadow-lg transition duration-150 ease-in-out'
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Portfolio
