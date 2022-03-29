function ContactMe() {
  return (
    <>
      <div className='container my-10 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full bg-slate-500'>
        <section className='w-full'>
          <h2 className='text-5xl pt-8'>Put me to work</h2>
          <p className='section-paragraph'>
            Feel free to to contact me any time, through any method below.
          </p>

          <div className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 my-12'>
            <div className='space-y-8'>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Email
                </label>
                <input className='w-full border border-input-border bg-input px-4 py-4 text-white' />
              </div>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Subject
                </label>
                <input className='w-full border border-input-border bg-input px-4 py-4 text-white' />
              </div>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Message
                </label>
                <textarea className='w-full border border-input-border bg-input text-white px-4 py-4 h-56 resize-none'></textarea>
              </div>
              <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-600 hover:brightness-100 duration-300 px-6 py-3 bg-input text-white font-bold'>
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
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactMe
