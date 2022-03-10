import { SocialIcon } from "react-social-icons"
function Footer() {
  return (
    <footer className='relative'>
        <div className='absolute inset-x-0 bottom-0 button-group flex justify-center gap-4 pt-5'>
          <SocialIcon url='https://github.com/calebbbbs' />
          <SocialIcon url='https://www.linkedin.com/in/calebbbbs/' />
          <SocialIcon url='https://www.twitter.com/calebbbbs_io' />
          <a href='https://docs.google.com/document/d/14yzQ-Obb0IHtBgjTSkaN8LNYYmDLKQnU8ZbbvYE2uBg/edit?usp=sharing'>
            Resume
          </a>
          {/* <a href="" className="btn btn-rounded bg-yellow-500"></a> */}
        </div>
      </footer>
  )
}

export default Footer