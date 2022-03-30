import image1 from '../assets/caleb.jpg'

function Bio() {
  return (
    <>
      <div className='bg-gray-300 dark:bg-slate-900 box'>
        <div className='box-border mx-auto max-w-2xl rounded overflow-hidden shadow-lg bg-white dark:bg-slate-900 opacity-90'>
          <div className='px-2 py-4'>
            <img src={image1} alt="TwitterProPic" className='float-left rounded-full scale-75'/>
            <p className='text-lg text-slate-700 dark:text-slate-400 text-left break-words'>
              I am a full-stack JavaScript software engineer making a career
              change from the hospitality industry. I am passionate about creating
              dynamic user experiences and learning new technologies. I want to
              merge my passions together to create powerful applications
              designed with the user in mind every step of the way. I have
              experience leading a team, with the AGILE/Scrum dynamic lending
              itself to my natural disposition. My training has been with
              NodeJs, React, JavaScript, TypeScript, Python and AWS.<br/>
              In my personal time I love to travel, people watch, hang with friends, and most of all, photography. That's my jam. <br/>This page was built with React and styled with TailwindCSS.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio
