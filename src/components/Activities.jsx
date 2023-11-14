import { useEffect, useRef } from 'react'
import fogataPic from '/fogonImagina1.jpg'
import jumper from '/jumper.jpg'
import tobogan from '/tobogan.mp4'


function Activities() {

    const lazyVideo = useRef(null)

    useEffect(() => {
        lazyVideo.current.load();
    }, []);

    return (
        <section className="min-h-screen md:h-screen flex justify-center" id='activities'>
            <div className="grid 
                            grid-cols-1 grid-flow-row
                            md:grid-cols-3 md:grid-rows-3 gap-4 
                            h-full w-4/5
                            [&>div>h2]:text-xl [&>div>h2]:sm:text-3xl
                            [&>div>p]:text-xs [&>div>p]:sm:text-base
                            [&>div]:md:h-auto [&_div]:rounded-2xl
                            [&_div]:overflow-hidden
                            ">
                <div className="bg-yellow-400 md:row-span-1 h-[10rem] px-5
                                flex flex-col items-center justify-center gap-4 
                                md:justify-around md:gap-0 md:p-0
                                text-white text-center">
                    <h2 >Vida en la naturaleza</h2>
                    <p className='text-xs lg:text-base'>Cuidado del medio ambiente, juegos en contacto con el medio natural, acantonamientos, etc.</p>
                </div>
                <div className="bg-red-100 col-span-1 md:col-span-2">
                    <img src={fogataPic} alt="activity picture of a firecamp" className='h-full w-full object-cover' />
                </div>
                <div className=" md:row-span-2  max-h-screen">
                    {/* Prueba de video o imagen */}
                    {/* <img src={tenis} alt="activity picture of a firecamp" className='h-full w-full object-cover' /> */}
                    <video ref={lazyVideo} poster='/imaginaLogo.png' controls muted loop playsInline
                        className='md:h-full w-full object-cover'>
                        <source src={tobogan} type="video/mp4" />
                        {/* <img src="/images/video-ph.png" width="1080" height="768" alt="Your browser does not support the videos" /> */}
                    </video>
                </div>
                <div className="bg-pink-400 md:row-span-2 h-[10rem] 
                                text-white text-center 
                                flex flex-col items-center justify-center gap-5">
                    <h2 >Vida en la naturaleza</h2>
                    <p className='text-xs lg:text-base'>Cuidado del medio ambiente, juegos en contacto con el medio natural, acantonamientos, etc.</p>
                </div>
                <div className="md:row-span-2">
                    <img src={jumper} alt="activity picture of a firecamp" className='h-full w-full object-cover' />
                </div>
            </div>
        </section>
    )
}

export default Activities