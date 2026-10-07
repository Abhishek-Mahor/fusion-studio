import React from 'react'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className='flex flex-col justify-center items-center text-center pt-32 pb-20 md:pb-28 w-full max-w-full px-4 sm:px-6 md:px-8'>
      
      {/* Subtitle */}
      <span className="text-xs md:text-sm font-bold tracking-[0.25em] text-brand-font uppercase mb-4 animate-fade-in">
        Creative Digital Agency
      </span>

      {/* Main Heading */}
      <h1 className='text-4xl sm:text-6xl md:text-8xl font-black tracking-widest text-brand-highlight  uppercase select-none leading-none mb-6'>
        FUSION CLICKS<span className="text-brand-font font-light">STUDIO</span>
      </h1>

      {/* Tagline */}
      <p className="text-brand-font text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl leading-relaxed mb-10 font-normal">
        We conceptualize, design, and engineer bespoke digital products and brand identities that stand out in the modern web landscape.
      </p>

      {/* Social Icons Container */}
      <div className="flex justify-center items-center gap-6 mt-4">
        
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
          className="p-3 text-brand-highlight hover:bg-zinc-950  hover:text-brand-font border border-text-brand-font hover:border-zinc-950 shadow-md hover:shadow-xl rounded-full transition-all duration-300 transform hover:-translate-y-1"
        >
          <FaInstagram className='h-6 w-6'/>
        </a>

        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Whatsapp"
          className="p-3 text-brand-highlight hover:bg-zinc-950  hover:text-brand-font border border-text-brand-font hover:border-zinc-950 shadow-md hover:shadow-xl rounded-full transition-all duration-300 transform hover:-translate-y-1"
        >
          <FaWhatsapp className='h-6 w-6'/>
        </a>

      </div>

    </div>
  )
}

export default Hero