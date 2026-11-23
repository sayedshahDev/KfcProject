import gsap from 'gsap'
import footerImg from '../assets/footerImg.png'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

    var imgref = useRef();

    useGSAP(() => {
        gsap.from('.footer-item', {
            opacity: 0,
            duration: 2,
            x: 200,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.footer-item',
                start: 'top 85%',
                toggleActions: 'play '
            }
        })
        gsap.from('.bottomFooter', {
            opacity: 0,
            duration: 2,
            y: 100,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.bottomFooter',
                start: 'top 85%',
                toggleActions: 'play '
            }
        })
    }, { scope: imgref }
    )

    return (
        <div ref={imgref} className='h-[180vh] w-auto flex flex-col justify-between items-center gap-20 overflow-x-hidden'>

            <div className='footer-item relative flex justify-start items-center border-2 w-[80vw] mt-50 m-10 h-70 rounded-2xl bg-red-800 text-white '>
                <img className='h-[80vh] mb-40' src={footerImg} alt="" />
                <div className='flex flex-col justify-start items-start'>
                    <h2 className='font-kfc text-9xl '>K <span className='text-yellow-500 '>F</span> C</h2>

                    <p className='font-light text-xs w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis dolore nam, ex magni doloribus officia repudiandae inventore consectetur reprehenderit! Facere repudiandae sit id accusantium ducimus! Expedita cum commodi minus?</p>

                    <button className='bg-black/20 transition-all p-1 cursor-pointer active:text-2xl active:bg-black/40 active:rounded-3xl rounded-2xl w-100 mt-5'>View</button>
                </div>
            </div>

            <div className='bottomFooter bg-red-800 h-70 w-full rounded-tl-full flex flex-col justify-start items-center gap-5'>
                <div className='flex justify-between items-center gap-5 w-full mt-20'>
                    <div className='flex flex-col ml-30 justify-center items-start w-60 gap-2'>
                        <h2 className='font-kfc text-white text-4xl '>KFC</h2>
                        <p className='text-xs font-light text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quos error hic deleniti sit excepturi, dolorum ex libero dolor eaque?</p>
                    </div>

                    <div className='flex flex-col ml-30 justify-center items-start w-60 gap-2'>
                        <h2 className='font-sans text-white text-2xl '>Categories</h2>
                        <h2 className='text-xs text-white'>About</h2>
                        <h2 className='text-xs text-white'>Contact US</h2>
                        <h2 className='text-xs text-white'>Menu</h2>
                        <h2 className='text-xs text-white'>Drinks</h2>
                    </div>

                    <div className='flex flex-col ml-30 justify-center items-start w-60 gap-2'>
                        <h2 className='font-sans text-white text-2xl '>Delivery</h2>
                        <h2 className='text-xs text-white'>Tracker</h2>
                        <h2 className='text-xs text-white'>Menu</h2>
                        <h2 className='text-xs text-white'>Ice cream</h2>
                        <h2 className='text-xs text-white'>Drinks</h2>
                    </div>

                    <div className='flex flex-col ml-30 justify-center items-start w-60 gap-2'>
                        <h2 className='font-sans text-white text-2xl '>Links</h2>
                        <h2 className='text-xs text-white'>Contact US</h2>
                        <h2 className='text-xs text-white'>Terms & Conditions</h2>
                        <h2 className='text-xs text-white'>Slide map</h2>
                        <h2 className='text-xs text-white'>Cookie Policy</h2>
                    </div>
                </div>
                <div className='flex justify-between items-center ml-30 border-t-1 w-[80vw] text-white '>
                    <h2 >@CopyRight</h2>
                    <h2>www.kfc@gmail.com</h2>
                </div>
            </div>

        </div>
    )
}

export default Footer
