import image1 from '../assets/caleb.jpg'
// import untitled from '../assets/untitled-1-2.jpg'

function Bio() {
  return (
    <>
      <div className='box dark:grayscale-0'>
        <div className='box-border xs:w-12 mx-auto max-w-3xl rounded overflow-hidden shadow-lg bg-white dark:bg-black opacity-80'>
          <div className='px-4 py-4 flex flex-wrap'>
            <p className='text-xl text-slate-700 dark:text-slate-400 text-right'>
            <img src={image1} alt="TwitterProPic" className='float-left rounded-full text-wrap h-40 w-40 m-6'/>
              Hello, I am a full-stack JavaScript software engineer making a career
              change from the hospitality industry. I am passionate about creating
              comfortable, yet dynamic user experiences and learning new technologies. I want to
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
