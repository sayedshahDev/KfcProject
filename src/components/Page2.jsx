import Products from './products.json'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useRef } from 'react'
import scrollTriger from 'gsap/ScrollTrigger'


gsap.registerPlugin(scrollTriger);

const Page2 = () => {

  let foodsAnimate = useRef();

  useGSAP(() => {

    gsap.from('#images',{
      opacity: 0,
      duration: 2,
      x: -300,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#images',
        scroller: 'body',
        start: 'top 100%',
        end: 'bottom 100%',
        // scrub: 1,
        // markers: true,
      }
    })
  })

  return (
    <div className=' h-[100vh] w-100% flex flex-col justify-start items-start flex-nowrap'>
      <div className="mt-10 ml-5 md:ml-10 lg:ml-10">
        <h2 className='p-2 rounded-4xl text-4xl font-bold font-kfc text-red-700'>MENU</h2>
      </div>
      <div id='images' className="h-[90%] w-[100%] px-4 py-3 flex justify-around items-start flex-wrap gap-7">
      {
        Products.map((items) => {
          return <div key={items.id} className="bg-black/10 backdrop:blur-2xl w-fit p-2 flex flex-col justify-center items-center gap-2 rounded-2xl text-white/90 border-white/90 border-2 shrink-0 hover:scale-110 transition-all ">

              <div className="">
                <h3 className=' text-xs text-white w-fit rounded-2xl p-1 absolute mt-1 ml-2 font-bold z-9'>{items.name}</h3>
                <img className="h-[15vh] lg:h-[30vh] md:h-[22vh] rounded-2xl hover:scale-105 transition-all" src={items.src} alt={items.name} />
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <h4 className='text-black'>{items.price } $</h4>
                <button className="bg-red-500 px-2 py-1 rounded-4xl active:bg-transparent active:text-black active:text-2xl transition-all">ORDER NOW</button>
              </div>
            </div>
        })
      }
      </div>

    </div>
  )
}

export default Page2
