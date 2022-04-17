import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FormInput } from './FormInput'
import { loginUser } from '../../Utils/authentication'
import './authpage.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import { useAuth } from '../../Context/auth-provider'

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [loginError, setLoginError] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  const { setIsLoggedIn } = useAuth()

  const handleUserLogin = async (e) => {
    e.preventDefault()
    try {
      const { data, msg, errorData } = await loginUser(loginData)
      if (!errorData[0]) {
        setIsLoggedIn(data)
        localStorage.setItem("userToken", data)
        location.state ? navigate(location?.state?.from?.pathname) : navigate('/')
      }
      else {
        setLoginError(msg)
      }
    } catch (err) {
      setLoginError('Unexpected Error ocurred.')
    }
  }
  return (
    <div>
      <Navbar />
      <div className="auth-container">
        <div className="auth-card">
          <p className="md-title center-txt">Log In</p>
          <form>
            <FormInput onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
              props={{ labelFor: 'email', labelTitle: 'Email', placeholderText: "Enter test@email.com", objKey: 'email', inputType: 'email' }} />
            <FormInput onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
              props={{ labelFor: 'password', labelTitle: 'Password', placeholderText: "Enter test", objKey: 'password', inputType: 'password' }} />
            <div className="flex-between mg-t-20">
              <div className="check-container">
                <input type="checkbox" id="rememberme" htmlFor="rememberme" />
                <label htmlFor="rememberme">Remember me</label>
              </div>
              <p className="orange-txt forgot-pswd">Forgot Your Password?</p>
            </div>
            <button type="submit" onClick={handleUserLogin} className="btn primary-btn solid mg-t-20">
              Log In
            </button>
          </form>
          <Link to="/signup">
            <button className="btn warning-outlined-btn mg-t-10">
              New User? Sign Up
            </button>
          </Link>
        </div>
        {loginError && <p className='orange-txt bold sm-txt mg-t-20'>{loginError}</p>}
      </div>
    </div>
  )
}

export { LoginPage }