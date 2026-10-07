import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-lg  bg-brand-highlight border-b border-none text-zinc-950 transition-all duration-300'>
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <span className="font-black tracking-widest  text-lg md:text-xl text-zinc-950">
            FUSION
            <span className="text-brand-font  text-shadow-lg font-light">STUDIO</span>
          </span>
        </div>

        {/* Nav Links */}
        <ul className='flex gap-2 lg:gap-6 md:gap-8 text-sm md:text-base font-semibold text-bg-body text-shadow-lg '>
          <li>
            <a href="#" className="hover:text-zinc-950 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-zinc-950 transition-colors duration-200">About</a>
          </li>
          <li>
            <a href="#work" className="hover:text-zinc-950 transition-colors duration-200">Work</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-zinc-950 transition-colors duration-200">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar