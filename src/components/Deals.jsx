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
        var tl = gsap.timeline()

        scrollbar2.current = tl.to('.track', {
            xPercent: -100,
            duration: 15,
            ease: "none",
            repeat: -1,
        })
        ScrollTrigger.create({
                trigger: '#Cards',
                start: 'top 100%',
                end: 'bottom 100%',
                onEnter: () => tl.play(),
                onEnterBack: () => tl.play(),
            })
    }, { scope: scrollbar }
    )

    return (
        <div ref={scrollbar} className=' h-100 flex flex-col justify-start items-start w-full mt-170 md:mt-110 lg:mt-20 '>
            <div className='mt-10 ml-10 text-4xl font-kfc font-bold '>
                <h2 className='text-red-700'>Deals</h2>
            </div>

            <div id="Cards" className='relative mt-5 w-full flex justify-around items-center gap-5 overflow-hidden flex-nowrap cursor-pointer'
                onMouseEnter={() => scrollbar2.current?.pause()}
                onMouseLeave={() => scrollbar2.current?.play()}>

                <div id='scroll01' className='track flex gap-5'>
                    {
                        data.map((info) => {
                            return <div key={info.id} className='bg-red-600 h-[20vh] md:h-[30vh] lg:h-[50vh] w-[30vw] sm:w-[30vw] md:w-[30vw] lg:w-[40vh] m-2 rounded-2xl flex justify-center items-center hover:scale-110 transition-all rounded-2xl'>

                                <button className='bg-black/50 absolute cursor-pointer text-white rounded-4xl p-2 mt-35 active:bg-black/70 font-semibold active:text-white active:text-lg active:border-none active:font-semibold md:mt-60'>ORDER NOW</button>

                                <img className='object-cover h-[100%] w-[100%] sm:w-[30vw] sm:h-[30vw] md:w-[40vw] md:h-[30vh] lg:w-[fit] lg:h-[50vh] rounded-2xl' src={info.src} alt="" />
                            </div>
                        })
                    }
                </div>
                
                <div id='scroll01' className='track flex gap-5'>
                    {
                        data.map((info) => {
                            return <div key={info.id} className='bg-red-600 h-[20vh] md:h-[30vh] lg:h-[50vh] w-[30vw] sm:w-[30vw] md:w-[30vw] lg:w-[40vh] m-2 rounded-2xl flex justify-center items-center hover:scale-110 transition-all rounded-2xl'>

                                <button className='bg-black/50 absolute cursor-pointer text-white rounded-4xl p-2 mt-35 active:bg-black/70 font-semibold active:text-white active:text-lg active:border-none active:font-semibold md:mt-60'>ORDER NOW</button>

                                <img className='object-cover h-[100%] w-[100%] sm:w-[30vw] sm:h-[30vw] md:w-[40vw] md:h-[30vh] lg:w-[fit] lg:h-[50vh] rounded-2xl' src={info.src} alt="" />
                            </div>
                        })
                    }
                </div>

                
            </div>
        </div>
    )
}

export default Deals
