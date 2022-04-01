import screenshot from '../assets/Screenshot (2).png'
import screenshot2 from '../assets/Screenshot (3).png'

function Portfolio() {
  return (
    <>
      <div className='bg-secondary box flex justify-between items-center w-auto dark:bg-[#171717] pt-3'>
        <section className='w-full'>
          <h1 className='dark:text-[#9a30cf] text-input text-center text-5xl underline-offset-4'>
            Portfolio
          </h1>
          <hr className='border-black dark:border-[#9a30cf]' />

          <div className='flex flex-col justify-center py-16 gap-14'>
            <div className='flex justify-center'>
              <div className='rounded-lg shadow-lg bg-white dark:bg-[#758087] max-w-2xl'>
                <a
                  href='https://github.com/Wave-Pool/wavepool'
                  onClick={() => {}}
                >
                  <img className='rounded-t-lg' src={screenshot} alt='' />
                </a>
                <div className='p-6'>
                  <h5 className='text-[#30B043] dark:brightness-125 dark:contrast-125 text-2xl font-medium mb-2'>
                    <strong>Wavepool</strong>
                  </h5>
                  <p className='text-gray-700 dark:text-white text-base mb-4'>
                    <strong>Share music with your friends.</strong> <br />{' '}
                    <em>Know when they listen.</em> <br />
                    <br />
                    Wavepool is a spotify companion web application designed to
                    bring the native social aspect back to your spotify
                    experience. Get a suggestion from a friend, drop it in your
                    queue, and let them know if you liked it!
                  </p>
                  <button
                    type='button'
                    className=' inline-block px-6 py-3 bg-[#30B043] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#30B043] hover:shadow-lg focus:bg-[#30B043] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#29973a] active:shadow-lg transition duration-150 ease-in-out hover:animate-bounce'
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='rounded-lg shadow-lg bg-white dark:bg-[#758087] max-w-2xl'>
                <a
                  href='https://github.com/SpaceExecs/Hash51'
                  onClick={() => {}}
                >
                  <img className='rounded-t-lg' src={screenshot2} alt='' />
                </a>
                <div className='p-6'>
                  <h5 className='text-[#30B043] dark:brightness-125 dark:contrast-125 text-2xl font-medium mb-2'>
                    <strong>Hash</strong><span className='text-[#6a4eac] font-semibold'>#51</span>
                  </h5>
                  <p className='text-gray-700 dark:text-white text-base mb-4'>
                    We want to <strong><em>believe...</em></strong> Hash#51 is an app for the free exchange
                    of ideas for connecting the dots.
                  </p>
                  <button
                    type='button'
                    className=' inline-block px-6 py-3 bg-[#6a4eac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#6a4eac] hover:shadow-lg focus:bg-[#6a4eac] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3a2a5e] active:shadow-lg transition duration-150 ease-in-out hover:animate-bounce'
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
