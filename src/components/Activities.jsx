import { useEffect, useRef } from 'react'
// import fogataPic from '/fogonImagina1.jpg'
import fueguito from '/fueguito.mp4'
import jumper from '/jumper.jpg'
import tobogan from '/tobogan.mp4'


function Activities() {

    const lazyVideo = useRef(null)
    const lazyVideo2 = useRef(null)

    useEffect(() => {
        lazyVideo.current.load();
        lazyVideo2.current.load();
    }, []);

    return (
        <section className=" bg-ocean1" id='activities'>
            <div className="min-h-screen flex flex-col items-center wrapper px-4 md:px-8">
                <h2 className="my-8 font-semibold text-white w-full">Nuestras actividades</h2>
                <div className="grid 
                            grid-cols-1 grid-flow-row
                            md:grid-cols-3 md:grid-rows-3 gap-4
                            [&>div]:md:h-auto [&_div]:rounded-lg
                            [&_div]:overflow-hidden
                            ">
                    <div className="bg-yellow-400 md:row-span-1 p-8
                                flex flex-col items-center justify-center
                                text-white text-center">
                        <h2 className="mb-4 font-medium">Vida en la naturaleza</h2>
                        <p className=''>La diversión no termina con el sol, ya que las noches se transforman en una experiencia mágica de carpas y fogatas, entre cuentos fascinantes y canciones bajo las estrellas.</p>
                    </div>
                    <div className="bg-red-100 col-span-1 md:col-span-2">
                        {/* <img src={fogataPic} alt="activity picture of a firecamp" className='h-full w-full object-cover' /> */}
                        <video ref={lazyVideo2} autoPlay controls muted loop playsInline
                            className='w-full aspect-video object-cover'>
                            <source src={fueguito} type="video/mp4" />
                            {/* <img src="/images/video-ph.png" width="1080" height="768" alt="Your browser does not support the videos" /> */}
                        </video>
                    </div>
                    <div className=" md:row-span-2">
                        {/* Prueba de video o imagen */}
                        {/* <img src={tenis} alt="activity picture of a firecamp" className='h-full w-full object-cover' /> */}
                        <video ref={lazyVideo} autoPlay controls muted loop playsInline
                            className='md:h-full max-h-[612px] w-full object-cover'>
                            <source src={tobogan} type="video/mp4" />
                            {/* <img src="/images/video-ph.png" width="1080" height="768" alt="Your browser does not support the videos" /> */}
                        </video>
                    </div>
                    <div className="bg-pink-400 md:row-span-2 
                                text-white text-center 
                                flex flex-col items-center justify-center
                                p-8 max-h-[612px]">
                        <h2 className="mb-4 font-medium">Diversion y pile</h2>
                        <p className=''>El deslizador acuático que despierta el espíritu aventurero de los niños. y los tiburones se sumergen en el mundo acuático de la pileta, donde aprenden no solo a disfrutar del agua, sino importantes lecciones de seguridad</p>
                    </div>
                    <div className="md:row-span-2 items-center">
                        <img src={jumper} alt="activity picture of a firecamp" className='w-full h-full object-cover max-h-[612px] rounded-lg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities