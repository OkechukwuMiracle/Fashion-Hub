// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashScreen from "./components/SplashScreenPage/SplashScreen"
import SignIn from './components/SignInPage/SignIn'
import WhatsappIcon from './components/WhatsappLink/WhatsappIcon'
import SignUp from './components/SinupPage/SignUp'
import ForgotPassword from './components/ForgotPasswordPage/ForgotPassword'
import { ToastContainer } from 'react-toastify'
import Profile from './components/ProfilePage/profile'
// import ChangePassword from './components/ChangePasswordPage/ChangePassword'




const App = () => {
  return (
  <div className='auth-wrapper'>
      <div className='auth-inner'>
      <Routes>
      <Route  path="/" element={<SplashScreen />} />
      <Route  path="/SignIn" element={<SignIn />} />
      <Route  path="/SignUp" element={<SignUp />} />
      <Route  path="/whatsapp" element={<WhatsappIcon />} />
      <Route  path="/forgotPassword" element={<ForgotPassword />} />
      <Route  path="/Profile" element={<Profile />} />
      {/* <Route path="/ChangePassword" element={<ChangePassword />} /> */}
    </Routes>
    <ToastContainer/>
    </div>
  </div>
  )
}

export default App

