import { useState } from 'react'
import screenshot2 from '../assets/Screenshot (3).png'

function Hash51() {
  const [modal, setModal] = useState(false)
  const Toggle = () => {
    if (modal === true) {
      setModal(false)
    } else {
      setModal(true)
    }
  }
  return (
    <>
      <div className='flex flex-col justify-center pb-16 gap-14'>
        <div className='flex justify-center'>
          <div className='rounded-lg shadow-lg bg-white dark:bg-[#758087] max-w-2xl min-w-240px'>
            <a href='https://github.com/SpaceExecs/Hash51' onClick={() => {}}>
              <img className='rounded-t-lg' src={screenshot2} alt='' />
            </a>
            <div className='p-6'>
              <h5 className='text-[#30B043] dark:brightness-125 dark:contrast-125 text-2xl font-medium mb-2'>
                <strong>Hash</strong>
                <span className='text-[#6a4eac] font-semibold'>#51</span>
              </h5>
              <p className='text-gray-700 dark:text-white text-base mb-6'>
                We want to{' '}
                <strong>
                  <em>believe...</em>
                </strong>{' '}
                Hash#51 is an app for the free exchange of ideas for connecting
                the dots.
              </p>
              {!modal && <button
                type='button'
                className=' inline-block px-6 py-3 bg-[#6a4eac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#6a4eac] hover:shadow-lg focus:bg-[#6a4eac] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3a2a5e] active:shadow-lg transition duration-150 ease-in-out hover:animate-bounce'
                onClick={() => Toggle()}
              >
                Learn More
              </button>}
            </div>
          </div>
        </div>
        {modal && (
          <div className='flex justify-center'>
            <div className='rounded-lg shadow-lg bg-white dark:bg-[#758087] max-w-2xl '>
              {/* <a
                  href="https://github.com/SpaceExecs/Hash51"
                  onClick={() => {}}
                >
                  <img className="rounded-t-lg" src={screenshot2} alt="" />
                </a> */}
              <div className='p-6 '>
                <h5 className='text-[#30B043] dark:brightness-125 dark:contrast-125 text-2xl font-medium mb-2'>
                  <strong>Hash</strong>
                  <span className='text-[#6a4eac] font-semibold'>#51</span>
                </h5>
                <p className='text-gray-700 dark:text-white text-base mb-6'>
                  We want to{' '}
                  <strong>
                    <em>believe...</em>
                  </strong>{' '}
                  Hash#51 is an app for the free exchange of ideas for
                  connecting the dots.
                </p>
                <button
                  type='button'
                  className=' inline-block px-6 py-3 bg-[#6a4eac] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#6a4eac] hover:shadow-lg focus:bg-[#6a4eac] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#3a2a5e] active:shadow-lg transition duration-150 ease-in-out backdrop-blur-md'
                  onClick={() => Toggle()}
                >
                  Close Me
                </button>
              </div>
            </div>
          </div>
        )}
        {/* <div className="box w-full h-full gb-gray-900 bg-opacity-80 bg-white mx-auto">
          <div className="container mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
            <p>Wavepool</p>
          </div>
          <button type="submit" className="close" onClick={!show}>
            Close me
          </button>
        </div> */}
      </div>
    </>
  )
}

export default Hash51
