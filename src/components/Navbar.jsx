import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

const Navbar = () => {

  var animate = useRef(null)
  var MenuRef = useRef(null)
  var menuTimeline = useRef(null)

  useGSAP(() => {
    // var tl = gsap.timeline()
    gsap.from('.nav-items', {
      delay: 0.5,
      opacity: 0,
      duration: 0.5,
      y: -30,
      stagger: 0.2,
      ease: 'power2.out'
    })
  }, { scope: animate }
  )

  // let Come = document.querySelector('#MenuCome')
  // let Go = document.querySelector('#revarse')
  
  useGSAP(() => {
    
    // var tl = gsap.timeline()
    gsap.set(MenuRef.current,{
      xPercent:100,
      autoAlpha:0
    })

    menuTimeline.current = gsap.timeline({paused: true})
    menuTimeline.current.to(MenuRef.current,{
      xPercent:0,
      autoAlpha:1,
      duration:1,
      ease: 'power3.out'
    })
    menuTimeline.current.from('.menu-link',{
      opacity:0,
      x:30,
      duration: 0.5,
      stagger: 0.15
    },'-=0.3')

  }, {scope: animate }
  )
  const openMenu = () => {
    menuTimeline.current.play()
  }
  const closeMenu = () => {
    menuTimeline.current.reverse()
  }


  return (
    <nav ref={animate} className='z-50 flex flex-wrap justify-between items-center bg-black/20 backdrop-blur text-white min-h-15 w-screen px-3 fixed'>
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
      <div className='flex flex-wrap justify-center items-center gap-5 mr-3 lg:gap-2 text-xs md:text-base font-sans font-medium bg-black/30 px-3 py-1 rounded-4xl'>
        <i className="ri-search-line text-lg cursor-pointer nav-items"></i>
        <button className='nav-items cursor-pointer hidden md:block  text-white px-3 py-1.5 md:py-2 text-sm'>Login</button>
        <h2 className='nav-items text-sm cursor-pointer  hidden md:block '>Sign Up</h2>
        <h2 id='MenuCome' onClick={openMenu}><i className="ri-menu-3-line text-2xl md:hidden block cursor-pointer nav-items"></i></h2>
      </div>

      <div ref={MenuRef} id="Menu" className='flex justify-start pt-30 items-center flex-col gap-10 text-2xl font-semibold bg-black h-screen w-40 right-0 top-0 p-4 fixed md:hidden '>
        <button><i onClick={closeMenu} id="revarse" className="ri-arrow-right-circle-line"></i></button>
        <h1 className='menu-link blur-none '>Menu</h1>
        <h1 className='menu-link'>Deals</h1>
        <h1 className='menu-link'>Location</h1>
        <h1 className='menu-link'>Contact</h1>
        <h1 className='menu-link'>Login</h1>
      </div>
    </nav>
  )
}

export default Navbar


