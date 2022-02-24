import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
const [text, setText] = useState('')

const navigate = useNavigate()

const onSubmit = (e) => {
  e.preventDefault()

  navigate('/')
}

  return (
    <section className='form flex justify-center'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Your Name</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group justify-center px-10'>
          <button className='btn btn-block' type='submit'>
            Press Me
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login