import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import data from './Deals.json'

gsap.registerPlugin(ScrollTrigger);

const Deals = () => {
    let scrollbar = useRef(null)
    let scrollbar2 = useRef(null)

    useGSAP(() => {
        var tl = gsap.timeline({ repeat: -1 })

        scrollbar2.current = tl.to('.track', {
            xPercent: -100,
            duration: 15,
            repeat: -1,
            ease: "none",
            scrollTrigger: {
                trigger: '#Cards',
                start: 'top 100%',
                end: 'bottom 100%',
                toggleActions: "play",

            }
        })
        let img = document.querySelector('img')
        img.addEventListener('mouseenter', () => {
            tl.pause()
        })
        img.addEventListener('mouseleave', () => {
            tl.play();
        });

    }, { scope: scrollbar }
    )

    return (
        <div ref={scrollbar} className='flex flex-col justify-start items-start w-full relative'>
            <div className='mt-10 ml-10 text-4xl font-kfc font-bold '>
                <h2 className='text-red-700'>Deals</h2>
            </div>

            <div id="Cards" className='relative mt-5 w-full flex justify-around items-center gap-5 overflow-hidden flex-nowrap cursor-pointer'
                onMouseEnter={() => scrollbar2.current?.pause()}
                onMouseLeave={() => scrollbar2.current?.play()}
            >
                <div id='scroll01' className='track flex gap-5'>
                    {
                        data.map((info) => {
                            return <div key={info.id} className='bg-red-600 h-[50vh] w-[15vw] m-2 rounded-2xl flex justify-center items-center hover:scale-105 transition-all'>

                                <button className='bg-black/50 absolute cursor-pointer text-white rounded-4xl p-2 mt-60 active:bg-black/70 font-semibold active:text-white active:text-lg active:border-none active:font-semibold'>ORDER NOW</button>

                                <img
                                    className='object-cover h-[50vh] rounded-2xl' src={info.src} alt="" />
                            </div>
                        })
                    }
                </div>

                <div id='scroll01' className='track flex gap-5'>
                    {
                        data.map((info) => {
                            return <div key={info.id} className='bg-red-600 h-[50vh] w-[15vw] m-2 rounded-2xl flex justify-center items-center hover:scale-105 transition-all'>
                                <button className='bg-black/50 absolute cursor-pointer  text-white rounded-4xl p-2 mt-60 active:bg-black/70 font-semibold active:text-white active:text-lg active:border-none active:font-semibold'>ORDER NOW</button>
                                <img className='object-cover h-[50vh] rounded-2xl' src={info.src} alt="" />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Deals
