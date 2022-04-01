function ContactMe() {
  return (
    <div className='bg-white dark:bg-black'>
      <div className='container my-24 flex justify-between items-center mx-auto px-auto md:px-14 lg:px-24 bg-slate-500 dark:bg-black'>
        <section className='w-full'>
          <h2 className='text-5xl pt-8 text-white text-center'>
            Put me to work 👨‍💻
          </h2>
          <p className='text-input text-center dark:text-[#9a30cf]'>
            Contact me through any of the methods listed below.
          </p>

          <form className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 my-12' action='mailto:caleb.taylor.roberts@gmail.com' method='post' encType='text/plain'>
            <div className='space-y-8'>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Email
                </label>
                <input className='w-full border border-input-border bg-input dark:bg-[#758087] px-4 py-4 text-white dark:text-black' type='email' name='yourEmail'/>
              </div>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Subject
                </label>
                <input className='w-full border border-input-border bg-input dark:bg-[#758087] px-4 py-4 text-white dark:text-black' type='text' name='yourSubject'/>
              </div>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Message
                </label>
                <textarea className='w-full border border-input-border bg-input dark:bg-[#758087] text-white dark:text-black px-4 py-4 h-56 resize-none' name='yourMessage'></textarea>
              </div>
              <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-600 hover:brightness-100 duration-300 px-6 py-3 bg-input dark:bg-[#9a30cf] dark:hover:bg-[#9a30cf] dark:hover:shadow-[#9a30cf]/50 dark:shadow-[#9a30cf]/20 shadow-lg text-white font-bold' type='submit'>
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
        </section>
      </div>
    </div>
  )
}

export default ContactMe
