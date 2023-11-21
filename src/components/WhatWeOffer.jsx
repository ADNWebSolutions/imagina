import { useState } from 'react'
import act1 from '/act1.jpg'
import act2 from '/act2.jpg'
import act3 from '/act3.jpg'
import Carousel from './microComponents/WhatWeOfferCarousel'



const WhatWeOffer = () => {
    const [imgArray, setImgArray] = useState({
        first: [act1, act2, act3],
        second: [act2, act3, act1],
        third: [act3, act1, act2]
    })
    const handlePrev = (carousel) => {
        setImgArray((prevArrays) => {
            const newArray = [...prevArrays[carousel].slice(1), prevArrays[carousel][0]];
            return { ...prevArrays, [carousel]: newArray };
        });
    };

    const handleNext = (carousel) => {
        setImgArray((prevArrays) => {
            const newArray = [
                prevArrays[carousel][prevArrays[carousel].length - 1],
                ...prevArrays[carousel].slice(0, -1)
            ];
            return { ...prevArrays, [carousel]: newArray };
        });
    };

    return (
        <div className="bg-ocean1 text-white" id="whatweoffer">
            <div className="p-8 wrapper">
                <h2 className="my-8 font-semibold">¿Qué ofrecemos?</h2>
                <div className="content">
                    {/* Pasamos por props el indice , el estado, y las funciones para ir cambiando las imagenes */}
                    <Carousel carousel={"first"} imgArray={imgArray} handleNext={handleNext} handlePrev={handlePrev} />
                    <div className="p-acts-1 flex justify-center items-center text-xl px-4 sm:px-12">
                        <p>Hemos innovado con una nueva propuesta pedagógica en la escuela de verano, llevada a cabo y coordinada por docentes del Colegio Jockey Club Córdoba y por profesores de los distintos deportes del club.</p>
                    </div>
                    <div className="p-acts-2 flex justify-center items-center text-xl px-4 sm:px-12">
                        <p>Hemos innovado con una nueva propuesta pedagógica en la escuela de verano, llevada a cabo y coordinada por docentes del Colegio Jockey Club Córdoba y por profesores de los distintos deportes del club.</p>
                    </div>
                    <div className="img-act-2 m-[auto]">
                        {/* Pasamos por props el indice , el estado, y las funciones para ir cambiando las imagenes */}
                        <Carousel carousel={"second"} imgArray={imgArray} handleNext={handleNext} handlePrev={handlePrev} />
                    </div>
                    <div className="img-acts-3 m-[auto]">
                        {/* Pasamos por props el indice , el estado, y las funciones para ir cambiando las imagenes */}
                        <Carousel carousel={"third"} imgArray={imgArray} handleNext={handleNext} handlePrev={handlePrev} />
                    </div>
                    <div className="p-acts-3 flex justify-center items-center text-xl px-4 sm:px-12">
                        <p>Hemos innovado con una nueva propuesta pedagógica en la escuela de verano, llevada a cabo y coordinada por docentes del Colegio Jockey Club Córdoba y por profesores de los distintos deportes del club.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer
