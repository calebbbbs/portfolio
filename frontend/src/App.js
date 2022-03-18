import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import Resume from './pages/Resume'

function App() {
  return (
    <>
      <Router>
        <div className='mx-auto'>
          <Header />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='resume' element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
