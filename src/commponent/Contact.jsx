import React from 'react'

import ownerimg from '../assets/img/owner.img/owner.jpeg'


import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className='mt-28 mb-20 flex justify-center items-center flex-col w-full max-w-full px-4 sm:px-6 md:px-12 text-brand-highlight'>
      
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-highlight relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/4 after:right-1/4 after:h-0.75 after:bg-zinc-500 after:rounded-full">
          Get in Touch
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 w-full max-w-4xl mb-12">
        {/* Social / Direct Contacts List */}
        <div className="flex flex-col justify-center items-center gap-4 w-full md:w-auto">
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 border border-zinc-200 text-brand-highlight hover:bg-zinc-950 px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[320px]  hover:text-white font-semibold group"
          >
            <FaInstagram className='h-6 w-6 text-brand-font group-hover:text-white transition-colors duration-300'/> 
            <span>Instagram</span>
          </a>

          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-3 border border-zinc-200 text-brand-highlight hover:bg-zinc-950 px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[320px] text-brand- hover:text-white font-semibold group"
          >
            <FaWhatsapp className='h-6 w-6 text-brand-font group-hover:text-white transition-colors duration-300'/> 
            <span>Whatsapp</span>
          </a>

          <a 
            href="mailto:contact@fusionstudio.com" 
            className="flex items-center gap-3 border border-zinc-200 text-brand-highlight hover:bg-zinc-950 px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[320px]  hover:text-white font-semibold group"
          >
            <FaEnvelope className='h-6 w-6 text-brand-font group-hover:text-white transition-colors duration-300'/> 
            <span>Mail Us</span>
          </a>

          <a 
            href="tel:+91xxxxxxxx" 
            className="flex items-center gap-3 border border-zinc-200 text-brand-highlight hover:bg-zinc-950 px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-[320px]  hover:text-white font-semibold group"
          >
            <FaPhone className='h-6 w-6 text-brand-font group-hover:text-white transition-colors duration-300'/> 
            <span>+91 xxxxxxxx</span>
          </a>

        </div>

        {/* Beautiful Side Image */}
        <div className="shrink-0 w-full md:w-auto flex justify-center">
          <img 
            src={ownerimg} 
            alt="Contact Fusion Studio" 
            className='w-full max-w-[320px] md:w-80 h-56 md:h-64 object-cover border-none rounded-2xl shadow-xl hover:scale-[1.03] transition-transform duration-300' 
          />
        </div>
      </div>

      {/* Address Section */}
      <div className="address mt-4 text-center text-brand-highlight px-8 py-6 rounded-2xl border border-zinc-200 shadow-xl max-w-[320px] sm:max-w-md w-full flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-brand-highlight font-bold text-lg">
          <FaMapMarkerAlt className="text-brand-font" />
          <span>Our Location</span>
        </div>
        <p className="text-brand-font leading-relaxed">
          Coimbatore, Tamil Nadu, India
        </p>
      </div>

    </div>
  )
}

export default Contact