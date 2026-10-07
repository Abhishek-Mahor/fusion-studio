
import './App.css'
import Navbar from './commponent/Navbar.jsx'
import Hero from './commponent/Hero.jsx'
import Work from './commponent/Work.jsx'
import About from './commponent/About.jsx'  
import Contact from './commponent/Contact.jsx'
import Lenis from 'lenis'

function App() {

const lenis = new Lenis({
  duration: 1.5,
  smooth: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


  return (
    <>
    <Navbar/>
    <Hero/>
    <Work/>
    <About/>
    <Contact/>
      
    </>
  )
}

export default App
