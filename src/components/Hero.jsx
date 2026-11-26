import gsap from 'gsap'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';


const Hero = () => {

  const container = useRef()
  const textAnimate = useRef()

  useGSAP(() => {
    var tl2 = gsap.timeline()
    tl2.from('#text01', {
      y: 100,
      duration: 0.8,
      opacity: 0,
      ease: 'power2.out',
      stagger: 0.3,
    })
    tl2.from('#text0', {
      duration: 0.6,
      opacity: 0,
      ease: 'power2.out',
    })

    tl2.from('#text02', {
      x: -50,
      duration: 0.8,
      opacity: 0,
      ease: 'power2.out',
    })
    tl2.from('#button', {
      duration: 0.8,
      opacity: 0,
      ease: 'power2.out',
    })
  })
  useGSAP(() => {
    var tl = gsap.timeline({ repeat: -1 })
    var images = ['#img01', '#img02', '#img03']
    gsap.set(images, { opacity: 0, x: 200, scale: 0.9 });
    images.forEach((img) => {
      tl.to(img, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      })
      tl.to(img, {
        x: -250,
        scale: 0.9,
        opacity: 0,
        delay: 2,
        duration: 0.6,
        ease: 'power2.in'
      })
    })
  },
    { scope: container }
  )


  return (
    <div className=''>
      <div className='bg-linear-to-tl from-red-500 to-red-950 h-screen flex flex-col-reverse md:flex-row lg:flex-row justify-center md:justify-around md:p-10 lg:justify-around items-center gap-10 '>
        
        <div ref={textAnimate} className='flex flex-col items-start '>
          <h2 id='text01' className='flex flex-col md:flex-col lg:flex-col text-3xl sm:text-2xl  md:text-4xl lg:text-7xl font-bold text-white z-50'><span>CRISPY.</span><span>JUICY.</span><span>IRRESISTIBLE.</span></h2>

          <h2 id='text0' className='flex flex-col md:flex-col lg:flex-col text-3xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-black absolute mt-0.5 ml-1 sm:mt-0.5 md:mt-1 md:ml-2 lg:mt-0.5 lg:ml-2'><span>CRISPY.</span><span>JUICY.</span><span>IRRESISTIBLE.</span></h2>

          <h4 id='text02' className='font-normal text-white mt-1 text-xs sm:mt-1 sm:text-xs md:mt-3 lg:mt-3 md:text-sm lg:text-sm '>100% REAL CHICKEN. MADE FRESH. ALWAYS</h4>

          <div className='flex justify-center items-center gap-4'>
            <button id='button' className='bg-red-600 text-white p-2 rounded-4xl mt-4 cursor-pointer italic active:scale-95'>ODER NOW <i className="ri-arrow-right-up-line bg-white text-black p-2 rounded-4xl ml-2 "></i></button>
            <button id='button' className='bg-transparent border-2 border-red-500 text-white p-2 rounded-4xl mt-4 w-40 cursor-pointer italic active:scale-95'>SEE MENU </button>
          </div>

        </div>

        <div ref={container} className='relative flex justify-center items-center gap-6 h-[30vh] w-full md:h-[50vh] md:w-[40vw] lg:h-[60vh] lg:w-[50vw] overflow-hidden'>

          <img id='img01' className='h-[30vh] md:h-[50vh] lg:h-[50vh] w-auto shrink-0 object-contain absolute' src='https://pngimg.com/uploads/kfc_food/kfc_food_PNG11.png ' alt="" />
          <img id='img02' className='absolute h-[30vh] md:h-[50vh] lg:[50vh] w-auto shrink-0 object-contain' src="https://images.ctfassets.net/a2mgcrjjefyo/7LFLSbwlVo6XkEgsRzITfG/38e4b4a37269cb09187faeac73e470f1/KFC_CA-1600-x1600_Double_Sliders_Box_Meal.png?h=600&w=800&fm=webp&fit=fill" alt="" />
          <img id='img03' className='absolute h-[50vh] md:[50vh] lg:[50vh] w-auto shrink-0 object-contain' src="https://pngimg.com/uploads/kfc_food/kfc_food_PNG38.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
