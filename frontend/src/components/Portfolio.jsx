import Wavepool from '../modals/Wavepool.jsx'
import Hash51 from '../modals/Hash51'

function Portfolio() {
  return (
    <>
      <div className='bg-secondary box flex justify-between items-center w-auto dark:bg-[#171717] pt-3'>
        <section className='w-full'>
          <h1 className='dark:text-[#9a30cf] text-input text-center text-5xl underline-offset-4'>
            Portfolio
          </h1>
          <hr className='border-black dark:border-[#9a30cf]' />
          <Wavepool />
          <Hash51 />
        </section>
      </div>
    </>
  )
}

export default Portfolio
