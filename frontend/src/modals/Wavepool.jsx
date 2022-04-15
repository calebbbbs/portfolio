import { useState } from 'react'
import screenshot from "../assets/Screenshot (2).png";


function Wavepool() {
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
      <div className='flex flex-col justify-center py-16 gap-14'>
        <div className='flex justify-center'>
          <div className='rounded-lg shadow-lg bg-white dark:bg-[#758087] max-w-2xl'>
            <a href='https://github.com/Wave-Pool/wavepool' onClick={() => {}}>
              <img className='rounded-t-lg' src={screenshot} alt='' />
            </a>
            <div className='p-6'>
              <h5 className='text-[#30B043] dark:brightness-125 dark:contrast-125 text-2xl font-medium mb-2'>
                <strong>Wavepool</strong>
              </h5>
              <p className='text-gray-700 dark:text-white text-base mb-6'>
                <strong>Share music with your friends.</strong> <br />{' '}
                <em>Know when they listen.</em> <br />
                <br />
                Wavepool is a spotify companion web application designed to
                bring the native social aspect back to your spotify experience.
                Get a suggestion from a friend, drop it in your queue, and let
                them know if you liked it!
              </p>
              <button
                type='button'
                className=' inline-block px-6 py-3 bg-[#30B043] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#30B043] hover:shadow-lg focus:bg-[#30B043] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#29973a] active:shadow-lg transition duration-150 ease-in-out hover:animate-bounce'
                onClick={() => Toggle()}
                onChange={() => Toggle()}
              >
                Learn More
              </button>
            </div>
            {/* {<Wavepool show={modal} />} */}
          </div>
        </div>
        {modal === true && (
          <div className='flex justify-center'>
            <div className='rounded-lg shadow-lg bg-white dark:bg-[#758087] max-w-2xl'>
              {/* <a href='https://github.com/Wave-Pool/wavepool' onClick={() => {}}>
            <img className='rounded-t-lg' src={screenshot} alt='' />
          </a> */}
              <div className='p-6'>
                <h5 className='text-[#30B043] dark:brightness-125 dark:contrast-125 text-2xl font-medium mb-2'>
                  <strong>Wavepool</strong>
                </h5>
                <p className='text-gray-700 dark:text-white text-base mb-6'>
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
                  className=' inline-block px-6 py-3 bg-[#30B043] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#30B043] hover:shadow-lg focus:bg-[#30B043] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#29973a] active:shadow-lg transition duration-150 ease-in-out'
                  onClick={() => Toggle()}
                >
                  Close me!
                </button>
              </div>
              {/* {<Wavepool show={modal} />} */}
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

export default Wavepool
