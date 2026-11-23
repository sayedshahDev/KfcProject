import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'

const Navbar = () => {

  var animate = useRef()
  useGSAP(() => {
    var tl = gsap.timeline()
    tl.from('.nav-items',{
      delay: 0.5,
      opacity: 0,
      duration: 0.5,
      y: -30,
      stagger: 0.2,
      ease: 'power2.out'
    })
  }, {scope: animate}
)
  
  return (
    <nav ref={animate} className='z-50 flex flex-wrap justify-between items-center bg-black/20 backdrop-blur text-white min-h-15 w-full px-3 md:px-2 sm:px-2 fixed'>
      <div className='font-Poppins flex items-center gap-25 cursor-pointer'>
        <div className='nav-items flex justify-center items-center'>
          <img className='h-8 sm:h-10 md:h-10' src='https://logos-world.net/wp-content/uploads/2020/04/KFC-Logo.png' alt="" />
          <h2 className='font-kfc text-2xl h-10 mt-2'>KFC</h2>
        </div>
        <div className='flex justify-between gap-7 text-sm'>
          <h2 className='nav-items hidden md:block cursor-pointer'>Menu</h2>
          <h2 className='nav-items hidden md:block cursor-pointer'>Deals</h2>
          <h2 className='nav-items hidden md:block cursor-pointer'>Locations</h2>
          <h2 className='nav-items hidden md:block cursor-pointer'>Contact</h2>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center gap-2 mr-3 sm:gap-6 lg:gap-2 text-xs md:text-base font-sans font-medium'>
        <i className="ri-search-line text-lg cursor-pointer nav-items"></i>
        <button className='nav-items cursor-pointer hidden md:block  text-white px-3 py-1.5 md:py-2 text-sm'>Login</button>
        <h2 className='nav-items text-sm cursor-pointer  hidden md:block '>Sign Up</h2>
        <h2><i className="ri-menu-3-line text-2xl md:hidden block cursor-pointer nav-items"></i></h2>
      </div>
    </nav>
  )
}

export default Navbar
