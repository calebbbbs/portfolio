import { SocialIcon } from 'react-social-icons'
function Footer() {
  return (
    <>
      <footer className='footer mx-auto relative left-0 bottom-0 right-0'>
        <ul className='py-10 button-group flex justify-center gap-4 bg-body dark:bg-[#171717]'>
          <li><SocialIcon url='https://www.twitter.com/calebbbbs_io' bgColor='#1D9BF0'/></li>
          <li><SocialIcon url='https://github.com/calebbbbs' bgColor='#F0F6FC'/></li>
          <li><SocialIcon url='https://www.linkedin.com/in/calebbbbs/' bgColor='#0A66C2'/></li>
          {/* <a href="" className="btn btn-rounded bg-yellow-500"></a> */}
        </ul>
      </footer>
    </>
  )
}

export default Footer
