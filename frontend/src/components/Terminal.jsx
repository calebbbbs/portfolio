import Greeting from "../Typewriter/Greeting"

function Terminal() {
  return (
    <>
      <div className='container mx-auto grid justify-end h-25 w-13 mt-10 border-3 bg-gray-700 bg-opacity-75'>
        <div className='top-right mt-1 mb-1  grid justify-end grid-cols-3'>
          <div className=''>
            <span className='ml-6 h-6 w-6 text-4xl'>
              <button className='ml-6 h-6 w-6 text-4xl'>
                <strong>-</strong>
              </button>
            </span>
          </div>
          <div className=''>
            <button className='ml-2 h-3 w-3'></button>
          </div>
          <div className=''>
            <span className=''>
              <button className='h-6 w-6 text-3xl'>
                <strong>x</strong>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className='container mx-auto h-25 w-15 p-3 bg-gray-700 shadow-2xl drop-shadow-2x mb-12'>
        <div className='container mx-auto flex justify-left h-25 w-15 text-3xl'>
          <p className='pt-4 text-green-700'>
            <strong>$CR{'>'}</strong>
          </p>
          <span className='box-content h-25 w-15 p-4 text-white'>
            <Greeting />
          </span>
        </div>
      </div>
    </>
  )
}

export default Terminal
