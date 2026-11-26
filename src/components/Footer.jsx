import gsap from 'gsap'
import footerImg from '../assets/footerImg.png'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

    const imgref = useRef(null)

    useGSAP(() => {

        gsap.from('.footer-item', {
            opacity: 0,
            duration: 1.2,
            x: 100,
            ease: 'power3.out',
            force3D: true,
            clearProps: 'transform',
            scrollTrigger: {
                trigger: '.footer-item',
                start: 'top 85%',
                toggleActions: 'play none none none',
                once: true
            }
        })

        gsap.from('.bottomFooter', {
            opacity: 0,
            duration: 1.2,
            y: 50,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.bottomFooter',
                start: 'top 85%',
                once: true,
            }
        })

    }, { scope: imgref })

    return (
        <div ref={imgref} className='flex flex-col justify-between items-center gap-40'>
            <div
                className='w-full flex flex-col items-center gap-10 md:gap-16 overflow-x-clip'>

                <div className='footer-item min-h-[30vh] md:h-[30vh] lg:min-h-[45vh] h-[40vh] flex flex-col md:flex-row md:justify-between lg:justify-around items-center w-[80%] mt-20 md:mt-32 lg:mt-40 rounded-2xl bg-red-800 text-white p-4 sm:p-6 md:p-8 md:gap-20'>

                    <div className='w-full md:w-[45%] h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[90vh] flex justify-center items-center shrink-0'>
                        <img className='h-[45vh] md:h-[50vh] lg:w-[60vw] lg:h-[80vh] mb-60 sm:mb-60 md:mb-30 lg:mb-30 object-contain absolute'
                            src={footerImg} alt="KFC food" />
                    </div>

                    <div className='flex flex-col justify-center items-start w-[70vw] md:w-[55%] lg:w-full gap-2 mt-48 md:mt-0 lg:mt-0 md:mb-0 lg:mb-0 absolute md:relative lg:relative'>
                        <h2 className='font-kfc text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
                            K <span className='text-yellow-500'>F</span> C
                        </h2>
                        <p className='font-light text-sm sm:text-base w-full md:max-w-[90%] lg:max-w-[80%]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Esse error mollitia laborum vero dicta quae illum deleniti
                            et eligendi tenetur.
                        </p>
                        <button className='bg-black/20 transition-all p-2 cursor-pointer active:text-2xl active:bg-black/40 active:rounded-3xl rounded-2xl w-full sm:w-auto md:w-[20vw] lg:w-[15vw] mt-2'>
                            View
                        </button>
                    </div>
                </div>
            </div>

            <div>

                <div
                className='bottomFooter bg-red-800 min-h-[350px] h-auto w-[100vw] rounded-tl-full flex flex-col justify-around items-center gap-8 px-4 sm:px-6 md:px-10 lg:px-16'>

                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mt-12 md:mt-16 lg:mt-20 md:ml-80 lg:ml-40'>

                        <div className='hidden sm:hidden md:block lg:block flex-col justify-center items-start w-full gap-2'>
                            <h2 className='font-kfc text-white text-2xl md:text-3xl lg:text-4xl'>K <span className='text-yellow-400'>F </span>C</h2>
                            <p className='text-[10px] sm:text-xs md:text-sm font-light text-white'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Deserunt quos error hic deleniti sit excepturi, dolorum ex libero dolor eaque?
                            </p>
                        </div>

                        <div className='flex sm:hidden md:block lg:block flex-col justify-center items-start w-full gap-2 ml-40 md:ml-0 lg:ml-0'>
                            <h2 className='font-sans text-white text-lg md:text-xl lg:text-2xl font-bold '>Categories</h2>
                            <h2 className='text-xs md:text-sm text-white'>About</h2>
                            <h2 className='text-xs md:text-sm text-white'>Contact US</h2>
                            <h2 className='text-xs md:text-sm text-white'>Menu</h2>
                            <h2 className='text-xs md:text-sm text-white'>Drinks</h2>
                        </div>

                        <div className='hidden sm:hidden md:block lg:block flex-col justify-center items-start w-full gap-2'>
                            <h2 className='font-sans text-white text-lg md:text-xl lg:text-2xl font-bold'>Delivery</h2>
                            <h2 className='text-xs md:text-sm text-white'>Tracker</h2>
                            <h2 className='text-xs md:text-sm text-white'>Menu</h2>
                            <h2 className='text-xs md:text-sm text-white'>Ice cream</h2>
                            <h2 className='text-xs md:text-sm text-white'>Drinks</h2>
                        </div>

                        <div className='flex sm:hidden md:block lg:block flex-col justify-center items-start w-full gap-2 ml-20 md:ml-0 lg:ml-0'>
                            <h2 className='font-sans text-white text-lg md:text-xl lg:text-2xl font-bold'>Links</h2>
                            <h2 className='text-xs md:text-sm text-white'>Contact US</h2>
                            <h2 className='text-xs md:text-sm text-white'>Terms & Conditions</h2>
                            <h2 className='text-xs md:text-sm text-white'>Site map</h2>
                            <h2 className='text-xs md:text-sm text-white'>Cookie Policy</h2>
                        </div>

                    </div>

                    <div className='flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-white/30 w-full sm:w-[90%] text-white pt-4 pb-3 text-xs md:text-sm ml-20'>
                        <h2>@CopyRight</h2>
                        <h2>www.kfc@gmail.com</h2>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer


