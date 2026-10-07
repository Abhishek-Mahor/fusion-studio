import React from 'react'

import img1 from '../assets/img/about.img/cinematic.jpeg'
import img2 from '../assets/img/about.img/commercial.jpeg'
import img3 from '../assets/img/about.img/wedding.jpeg'
import img4 from '../assets/img/about.img/portfolio.jpeg'


const About = () => {
  return (
    <div id="about" className='flex justify-center flex-col mt-28 w-full max-w-full overflow-x-hidden px-4 sm:px-6 md:px-12 lg:px-24 text-brand-highlight'>

      <div className="text-center mb-16">
        <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight text-brand-highlight relative inline-block after:content-[""] after:absolute after:-bottom-3 after:left-1/4 after:right-1/4 after:h-0.75 after:bg-zinc-500 after:rounded-full'>
          About the Studio
        </h1>
      </div>

      <div className='flex flex-col justify-center items-center gap-16 md:gap-24 w-full'>

        {/* Section 1: Our Creative Vision */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-28 w-full max-w-5xl">
          <div className="text flex-1 text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider text-brand-font uppercase">01 / Vision</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-highlight mt-1 mb-4">Cinematic </h2>
            <p className="text-brand-font leading-relaxed text-sm md:text-base max-w-lg mx-auto md:mx-0">
              We craft immersive digital experiences at the intersection of design, strategy, and technology. Our mission is to elevate brands and build meaningful, long-term connections through impactful visuals.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <img 
              src={img1} 
              alt="Creative workspace" 
              className='w-full max-w-[320px] md:w-80 h-56 md:h-64 border border-zinc-200 shadow-xl rounded-2xl object-cover hover:scale-[1.03] transition-transform duration-300' 
            />
          </div>
        </div>

        {/* Section 2: Innovative Craftsmanship */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-28 w-full max-w-5xl">
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <img 
              src={img3} 
              alt="Design concept sketching" 
              className='w-full max-w-[320px] md:w-80 h-56 md:h-64 border border-zinc-200 shadow-xl rounded-2xl object-cover hover:scale-[1.03] transition-transform duration-300' 
            />
          </div>
          <div className="text flex-1 text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider text-brand-font uppercase">02 / Craft</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-highlight mt-1 mb-4">Wedding </h2>
            <p className="text-brand-font leading-relaxed text-sm md:text-base max-w-lg mx-auto md:mx-0">
              Every detail is intentional. We combine artistic intuition with technical mastery to create bespoke websites, interactive applications, and digital layouts that resonate deeply with audiences.
            </p>
          </div>
        </div>

        {/* Section 3: Strategic Collaboration */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-28 w-full max-w-5xl">
          <div className="text flex-1 text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider text-brand-font uppercase">03 / Partners</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-highlight mt-1 mb-4">Commercial </h2>
            <p className="text-brand-font leading-relaxed text-sm md:text-base max-w-lg mx-auto md:mx-0">
              We work hand-in-hand with our clients as true creative partners. By aligning organizational goals, sharing key user insights, and iterating based on feedback, we deliver work that drives tangible value.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <img 
              src={img2} 
              alt="Collaborative meeting" 
              className='w-full max-w-[320px] md:w-80 h-56 md:h-64 border border-zinc-200 shadow-xl rounded-2xl object-cover hover:scale-[1.03] transition-transform duration-300' 
            />
          </div>
        </div>

        {/* Section 4: The Design Sanctuary */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 lg:gap-28 w-full max-w-5xl">
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <img 
              src={img4} 
              alt="Modern design studio desk" 
              className='w-full max-w-[320px] md:w-80 h-56 md:h-64 border border-zinc-200 shadow-xl rounded-2xl object-cover hover:scale-[1.03] transition-transform duration-300' 
            />
          </div>
          <div className="text flex-1 text-center md:text-left">
            <span className="text-xs font-semibold tracking-wider text-brand-font uppercase">04 / Space</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-highlight mt-1 mb-4">Portfolio</h2>
            <p className="text-brand-font leading-relaxed text-sm md:text-base max-w-lg mx-auto md:mx-0">
              Our studio is curated to inspire focus, foster exploration, and invite bold thinking. It is here that we shape the future of visual communication and build pixel-perfect digital artifacts.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About
