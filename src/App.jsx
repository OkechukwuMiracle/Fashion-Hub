// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashScreen from "./components/SplashScreenPage/SplashScreen"
import SignIn from './components/SignInPage/SignIn'
import WhatsappIcon from './components/WhatsappLink/WhatsappIcon'
import SignUp from './components/SinupPage/SignUp'
import ForgotPassword from './components/ForgotPasswordPage/ForgotPassword'
import { ToastContainer } from 'react-toastify'
import Profile from './components/ProfilePage/profile'
import DashBoard from './components/DashBoard/DashBoard'
import Card from './components/Card/Card'
import Cart from "./components/CartPage/Cart"
import { useState } from 'react'
import Checkout from './components/CheckoutPage/Checkout'
import Payment from './components/PaymentPage/Payment'
import Location  from './components/GoogleMap/Location'
// import Setting from './components/SettingPage/Setting'
// import ChangePassword from './components/ChangePasswordPage/ChangePassword'




const App = () => {

  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

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
      <Route path="/dashBoard" element={<DashBoard cart={cart} setCart={setCart} />} />
      <Route path="/card" element={<Card/>} />
      <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      <Route path='/Checkout' element={<Checkout cart={cart} removeFromCart={removeFromCart}/>} />
      <Route path='/Payment' element={<Payment />} />
      <Route path='/Location' element={<Location />} />
      {/* <Route path='/Setting' element={<Setting />} /> */}
      {/* <Route path="/ChangePassword" element={<ChangePassword />} /> */}
    </Routes>
    <ToastContainer/>
    </div>
  </div>
  )
}

export default App

