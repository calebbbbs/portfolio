import { SocialIcon } from 'react-social-icons'
function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className='inset-x-0 button-group flex justify-center gap-4 py-5 bg-slate-900'>
          <SocialIcon url='https://www.twitter.com/calebbbbs_io' bgColor='#1D9BF0'/>
          <SocialIcon url='https://github.com/calebbbbs' bgColor='#F0F6FC'/>
          <SocialIcon url='https://www.linkedin.com/in/calebbbbs/' bgColor='#0A66C2'/>
          {/* <a href="" className="btn btn-rounded bg-yellow-500"></a> */}
        </div>
      </footer>
    </>
  )
}

export default Footer
