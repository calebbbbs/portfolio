import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <>
      <Router>
        <div className='mx-auto dark:bg-[#171717]'>
          <Header />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='contact' element={<ContactMe />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
