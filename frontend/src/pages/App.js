import './App.css'
import Welcome from '../components/Welcome'


function App() {
  return (
    <div className='flex justify-center m-10 border-b-4 border-red-300'>
      <Welcome />
      <h1 className='justify-center text-6xl font-bold p-10'>
        Hello world!
      </h1>
    </div>
  )
}

export default App
