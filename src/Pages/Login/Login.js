import React, { useRef } from 'react'
import './Login.css'

function Login(props) {

    const userRef = useRef('')
    const passwordRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = userRef.current.value;
        const passwordRe = passwordRef.current.value;

        console.log(username, passwordRe)
        props.setIsLogin(true)
    }

  return (
    <div className='Login_container'>
    <form onSubmit={handleSubmit}>
    <div className='labelValues'>
    <label  htmlFor='username'>
            Username
        </label>
    </div>
        <input type="email" ref={userRef} required className='inputValues'></input>
        <div className='labelValues'>
    <label  htmlFor='username'>
            Password
        </label>
    </div>
        <input type="password" ref={passwordRef} required className='inputValues'></input>
       <div>
       <button className='button_submit' type='submit'>Submit</button>
       </div>
    </form>
    </div>
  )
}

export default Login