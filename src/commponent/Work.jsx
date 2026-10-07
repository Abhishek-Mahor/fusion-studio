import React from 'react'
import { motion } from 'framer-motion'

import wimg1 from '../assets/img/work.img/img1.jpeg'
import wimg2 from '../assets/img/work.img/img2.jpeg'
import wimg3 from '../assets/img/work.img/img3.jpeg'
import wimg4 from '../assets/img/work.img/img4.jpeg'
import wimg5 from '../assets/img/work.img/img5.jpeg'
import wimg6 from '../assets/img/work.img/img6.jpeg'
import wimg7 from '../assets/img/work.img/img7.jpeg'


const Work = () => {

  const items = [
    {
      image: wimg1,
      title: 'E-Commerce Platform',
    },
    {
      image: wimg2,
      title: 'Interactive Brand Site',
    },
    {
      image: wimg3,
      title: 'SaaS Dashboard Design',
    },
    {
      image: wimg4,
      title: 'Fintech Web Application',
    },
    {
      image: wimg5,
      title: 'Creative Agency Portfolio',
    },
    {
      image: wimg6,
      title: 'Creative Agency Portfolio',
    },
    {
      image: wimg7,
      title: 'Creative Agency Portfolio',
    },
  ];  

  return (
    <div id="work" className='w-full overflow-x-hidden pt-12 pb-8 text-zinc-950'>
      
      <div className="text-center mb-10">
        <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight text-brand-highlight relative inline-block after:content-[""] after:absolute after:-bottom-3 after:left-1/4 after:right-1/4 after:h-0.75 after:bg-zinc-500 after:rounded-full'>
          Selected Work
        </h1>
      </div>

      {/* Row 1: Sliding Left */}
      <motion.div className="flex gap-5 overflow-hidden w-full mt-6 py-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="w-80 shrink-0 h-52 shadow-xl border border-zinc-200 bg-white rounded-2xl overflow-hidden cursor-pointer"
            animate={{ x: [0, -items.length * 120] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="relative w-full h-full group">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-lg">{item.title}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Row 2: Sliding Right */}
      <motion.div className="flex gap-5 overflow-hidden w-full mt-6 py-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="w-80 shrink-0 h-52 shadow-xl border border-zinc-200 bg-white rounded-2xl overflow-hidden cursor-pointer"
            animate={{ x: [-items.length * 120, 0] }}
            transition={{ duration: 35, ease: 'linear', repeat: Infinity }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="relative w-full h-full group">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold text-lg">{item.title}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  )
}

export default Work