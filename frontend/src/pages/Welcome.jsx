import Login from '../components/Login'

function welcome() {
  return (
    <>
      <div className='flex justify-center  border-b-4 border-red-300'>
        <h1 className='justify-center text-1xl font-bold p-10'>
          welcome to my portfolio
        </h1>
      </div>
      <Login />
    </>
  )
}

export default welcome
