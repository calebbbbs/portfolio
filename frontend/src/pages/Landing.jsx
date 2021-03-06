import Bio from '../components/Bio'
import Portfolio from '../components/Portfolio'
// import { useState } from 'react'
// import LittleRock from '../assets/untitled-1-2.jpg';
// import Terminal from '../components/Terminal'
// import ContactMe from './ContactMe'
// import {useState} from 'react'

function Landing() {
  // const [theme, setTheme] = useState(localStorage.theme);
  // const [email, setEmai]

  return (
    <>
      {/* <Terminal /> */}
      <div className='bg-little-rock bg-center bg-cover dark:bg-bw_lr box py-24 brightness-95'>
        <div className='min-w-min mx-auto'>
          <Bio />
        </div>
      </div>
      <Portfolio />
      <hr className='dark:border-[#9a30cf] border-[#758087]' />
      <div className='box flex justify-between items-center md:px-14 lg:px-24 w-auto bg-nav dark:bg-[#171717]'>
        <section className='w-full'>
          <h2 className='text-5xl pt-8 text-white text-center'>
            Put me to work 👨‍💻
          </h2>
          <p className='text-secondary text-center dark:text-[#9a30cf]'>
            Contact me through any of the methods listed below.
          </p>
          <div className='container mx-auto xs:justify-items-center'>
            <form
              className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 my-12 justify-center'
              action='mailto:caleb.taylor.roberts@gmail.com'
              method='post'
              encType='text/plain'
            >
              <div className='space-y-8'>
                <div>
                  <label className='text-white block mb-6 text-xl font-bold'>
                    Email
                  </label>
                  <input
                    className='w-full border border-input-border bg-input dark:bg-gray-600 px-4 py-4 text-white'
                    type='email'
                    name='Email Address '
                  />
                </div>
                <div>
                  <label className='text-white block mb-6 text-xl font-bold'>
                    Subject
                  </label>
                  <input
                    className='w-full border border-input-border bg-input dark:bg-gray-600 px-4 py-4 text-white'
                    type='text'
                    name='Your Subject '
                  />
                </div>
                <div>
                  <label className='text-white block mb-6 text-xl font-bold'>
                    Message
                  </label>
                  <textarea
                    className='w-full border border-input-border bg-input dark:bg-gray-600 text-white px-4 py-4 h-56 resize-none'
                    name='Your Message '
                  ></textarea>
                </div>
                <button
                  className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-600 hover:shadow-emerald-600/20 hover:brightness-100 duration-300 px-6 py-3 bg-input dark:bg-[#9a30cf] dark:hover:bg-[#9a30cf] dark:hover:shadow-[#9a30cf]/40 dark:shadow-[#9a30cf]/20 shadow-lg shadow-input/40 text-white font-bold'
                  type='submit'
                >
                  Send it!
                </button>
              </div>

              <div className=''>
                <p className='text-white'>Cell: 504-430-4655</p>
                <a
                  href='mailto:caleb.taylor.roberts@gmail.com'
                  className='text-white hover:underline mt-3 block'
                >
                  <p>Email: caleb.taylor.roberts@gmail.com</p>
                </a>
                <a
                  href='https://docs.google.com/document/d/14yzQ-Obb0IHtBgjTSkaN8LNYYmDLKQnU8ZbbvYE2uBg/edit?usp=sharing'
                  className='text-white hover:underline mt-3 block'
                >
                  Resume
                </a>
              </div>
            </form>
          </div>
        </section>
      </div>
      {/* <ContactMe /> */}
    </>
  )
}
export default Landing
