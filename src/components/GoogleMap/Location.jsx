// import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Location = () => {
    const navigate= useNavigate();

  return (
    <div className="">
      <div className="flex items-center md:w-3/5 m-auto pt-6 pb-6 px-2 gap-10 ">
        <IoIosArrowBack
          className="text-2xl cursor-pointer"
          onClick={() => navigate("/DashBoard")}
        />
        <p className="font-bold text-3xl text-secondary ">Location</p>
      </div>
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Lagos,%20Ojo+(Fashion%20Hub)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
    </div>
  );
};

export default Location;
