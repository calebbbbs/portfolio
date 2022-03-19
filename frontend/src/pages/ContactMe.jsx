function ContactMe() {
  return (
    <>
      <div className='container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full'>
        <section className='w-full'>
          <h2 className='secondary-title bg-white'>
            Hire me
          </h2>
          <p className='section-paragraph bg-white'>
            Feel free to to contact me any time, through any method below.
          </p>

          <div className='w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24'>
            <div className='space-y-12'>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Email
                </label>
                <input className='w-full border border-input-border bg-input px-4 py-4' />
              </div>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Subject
                </label>
                <input
                  className='w-full border border-input-border bg-input px-4 py-4'
                />
              </div>
              <div>
                <label className='text-white block mb-6 text-xl font-bold'>
                  Message
                </label>
                <textarea
                  className='w-full border border-input-border bg-input px-4 py-4 h-56 resize-none'
                ></textarea>
              </div>
              <button className='px-6 py-2 bg-theme text-white font-bold'>
                Send it!
              </button>
            </div>

            <div className='mt-12'>
              <p className='text-secondary'>504-430-4655</p>
              <a
                href='mailto:caleb.taylor.roberts@gmail.com'
                className='text-secondary underline mt-3 block'
              >
                caleb.taylor.roberts@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ContactMe
