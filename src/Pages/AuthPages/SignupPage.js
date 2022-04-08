import React, { useState } from 'react'
import './authpage.css'
import { Link, useNavigate } from 'react-router-dom'
import { FormInput } from './FormInput'
import { Navbar } from '../../Components/Navbar/Navbar'
import { signupUser } from '../../Utils/authentication'
import { useAuth } from '../../Context/auth-provider'

const SignupPage = () => {
    const navigate = useNavigate()
    const [signupError, setSignupError] = useState(false);
    const [tnc, setTnc] = useState(false)
    const [signupData, setSignupData] = useState({
        firstName: '', lastName: '', email: '', password: '',
    });
    const { setIsLoggedIn } = useAuth()

    const handleUserSignup = async (e) => {
        e.preventDefault()
        try {
            const { errorData, data, msg } = await signupUser(signupData)
            if (!errorData[0]) {
                setIsLoggedIn(data)
                localStorage.setItem("userToken", data);
                navigate("/")
            } else {
                setSignupError(msg)
            }
        } catch (error) {
            setSignupError('Unexpected error. please try again later.')
        }
    }


    return (
        <div>
            <Navbar />
            <div className="auth-container">
                <div className="auth-card">
                    <p className="md-title center-txt">Sign Up</p>
                    <form>
                        <div className="input-flex-row mg-t-10">
                            <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))}
                                props={{ labelFor: 'firstName', labelTitle: 'First Name', placeholderText: 'Enter First Name', objKey: 'firstName', inputTypr: 'text', inputVal: signupData.firstName }} />

                            <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                                props={{ labelFor: 'lastName', labelTitle: 'Last Name', placeholderText: 'Enter Last Name', objKey: 'lastName', inputType: 'text', inputVal: signupData.lastName }} />
                        </div>
                        <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                            props={{ labelFor: 'email', labelTitle: 'Email', placeholderText: 'Enter email address', objKey: 'email', inputType: 'email', inputVal: signupData.email }} />

                        <FormInput onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                            props={{ labelFor: 'password', labelTitle: 'Password', placeholderText: "6+ characters", objKey: 'password', inputType: 'password', inputVal: signupData.password }} />

                        <div className="flex-between">
                            <div className="flex-between mg-t-20">
                                <div className="check-container">
                                    <input onClick={(e) => setTnc(e.target.checked)} type="checkbox" id="tnc-chk" htmlFor="tnc-chk" />
                                    <label htmlFor="tnc-chk">Accept all the T&C</label>
                                </div>
                            </div>
                            <Link to='/login'>
                                <p className='violet-txt bold mg-t-20'>
                                    Existing User? Login
                                </p>
                            </Link>
                        </div>
                        <button type="submit" onClick={(e) => {
                            tnc ? handleUserSignup(e) : setSignupError('Accept T&C')
                        }}
                            className="btn primary-btn solid mg-t-20">
                            Sign Up
                        </button>
                    </form>
                    {signupError && <p className='orange-txt bold center-txt sm-txt mg-t-10'>{signupError}</p>}
                </div>

            </div>
        </div>
    )
}

export { SignupPage }