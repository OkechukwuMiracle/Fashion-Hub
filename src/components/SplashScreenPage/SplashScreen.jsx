// import React from 'react'
// import HeroBg from '../../assets/hero-bg.jpg'
import Logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import WhatsappIcon from "../WhatsappLink/WhatsappIcon";

const SplashScreen = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/SignUp"); // navigate me to signin page
  };

  return (
    <div className="m-auto p-0 relative overflow-hidden">
      <div className="bg-[url('/assets/hero-bg.jpg')] bg-cover  bg-center md:bg-repeat bg-no-repeat h-screen w-full pt-40 ">
        {/* Logo image */}
        <div className="w-24 rounded-full border-2 border-primary-600 mx-auto">
          <img src={Logo} alt="" className="h-24 w-24 rounded-full  " />
        </div>
        <div className="m-auto mt-10 w-80 block items-center justify-center">
          <p className="text-neutral text-2xl font-bold  ">
            All sewing and accesories...
          </p>

          <button
            onClick={handleNavigation}
            className=" bg-red-300 border-2 border-primary-700 rounded-xl w-48 ml-16 py-3 px-10 mt-4 cursor-pointer text-secondary text-lg font-bold"
          >
            Get Started
          </button>
        </div>
        <WhatsappIcon /> {/* Whatsapp link */}
      </div>
    </div>
  );
};

export default SplashScreen;
