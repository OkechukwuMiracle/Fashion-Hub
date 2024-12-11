// import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  const whatsappLink = "https://wa.me/message/KLETFAPCU54UG1";

  return (
    <div className="relative group ">
      <div className="absolute top-20 bg-slate-800 rounded-full">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 text-4xl"
        >
          <FaWhatsapp size={60} />
        </a>

        {/* Tooltip */}
        <div className="absolute left-10 -top-7 bg-gray-800 text-neutral font-bold text-sm rounded-md py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap">
          Hello Dear, I am Cyburg! <br /> Welcome to Fashion Hub. <br /> Kindly send a message for
          more verifications.
        </div>
      </div>
    </div>
  );
};

export default WhatsappIcon;
