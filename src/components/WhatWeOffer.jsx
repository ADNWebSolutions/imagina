import { useState } from 'react'
import act1 from '/act1.jpg'
import act2 from '/act2.jpg'
import act3 from '/act3.jpg'



const WhatWeOffer = () => {
    const [imgArray, setImgArray] = useState([act1, act2, act3])
    const handlePrev = () => {
        setImgArray((prevArray) => [...prevArray.slice(1), prevArray[0]]);
    }
    const handleNext = () => {
        setImgArray((prevArray) => [prevArray[prevArray.length - 1], ...prevArray.slice(0, -1)])
    }

    return (
        <div className="p-8" id="whatweoffer">
            <h2 className="text-4xl my-8">¿Qué ofrecemos?</h2>
            <div className="content">
                <div className="img-acts-1 m-[auto] relative">
                    {/* <img className="rounded-2xl" src="/act1.jpg" alt="" /> */}
                    <div className="absolute w-full z-50 top-1/2 flex justify-between">
                        <button className="btn btn-circle" onClick={handlePrev} >❮</button>
                        <button className="btn btn-circle" onClick={handleNext} >❯</button>
                    </div>
                    <div className="stack">
                        <img src={imgArray[0]} className="rounded-2xl" />
                    </div>
                </div>
                <div className="p-acts-1 flex justify-center items-center text-xl px-12">
                    <p>Hemos innovado con una nueva propuesta pedagógica en la escuela de verano, llevada a cabo y coordinada por docentes del Colegio Jockey Club Córdoba y por profesores de los distintos deportes del club.</p>
                </div>
                <div className="p-acts-2 flex justify-center items-center text-xl px-12">
                    <p>Hemos innovado con una nueva propuesta pedagógica en la escuela de verano, llevada a cabo y coordinada por docentes del Colegio Jockey Club Córdoba y por profesores de los distintos deportes del club.</p>
                </div>
                <div className="img-act-2 m-[auto]">
                    <img className="rounded-2xl" src="/act2.jpg" alt="" />
                </div>
                <div className="img-acts-3 m-[auto]">
                    <img className="rounded-2xl" src="/act3.jpg" alt="" />
                </div>
                <div className="p-acts-3 flex justify-center items-center text-xl px-12">
                    <p>Hemos innovado con una nueva propuesta pedagógica en la escuela de verano, llevada a cabo y coordinada por docentes del Colegio Jockey Club Córdoba y por profesores de los distintos deportes del club.</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer
