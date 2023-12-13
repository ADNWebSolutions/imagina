import { useState } from 'react'
import act1 from '/act1.jpg'
import act2 from '/act2.jpg'
import act3 from '/act3.jpg'
import ro_t from '/ro_t.jpg'
import sere_j from '/sere_j.jpg'
import Carousel from './microComponents/WhatWeOfferCarousel'

const WhatWeOffer = () => {
    const [imgArray, setImgArray] = useState({
        first: [ro_t],
        second: [sere_j],
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
                <h2 className="my-8 font-semibold">Quienes somos y que te ofrecemos</h2>
                <div className="content">
                    {/* Pasamos por props el indice , el estado, y las funciones para ir cambiando las imagenes */}
                    <Carousel carousel={"first"} imgArray={imgArray} handleNext={handleNext} handlePrev={handlePrev} />
                    <div className="p-acts-1 flex justify-center items-center text-xl px-4 sm:px-12">
                        <p>Nuestra historia, una hermosa travesía, comenzó hace 34 años bajo la inspiradora dirección de la señora Roxanna Taborda. Desde entonces, estamos comprometidos en ofrecer una muchas actividades que perduran como base de nuestra identidad. Entre las actividades incluimos la enseñanza de natación, momentos recreativos, experiencias en contacto con la naturaleza y mucho más.</p>
                    </div>
                    <div className="p-acts-2 flex justify-center items-center text-xl px-4 sm:px-12">
                        <p>A lo largo de años de dedicación y éxito, tuvimos la fortuna de sumar a muchos profesionales a nuestro equipo. Entre ellos, destacamos a la profe Serena Jacquet, quien se une a nosotros, el legado de Roxanna. No es solo una profesional más; Serena es nada menos que la hija de Roxanna, sumando a la pasión y el compromiso que caracterizan a nuestra institución</p>
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
                        <p>En Imagina, cada día es una nueva aventura llena de risas y aprendizaje. los pequeños tiburones se sumergen en el mundo acuático de la pileta, donde aprenden no solo a disfrutar del agua, sino también importantes lecciones de seguridad. Las risas, emocionantes saltos y acrobacias en la cama elástica, diversión sana y la coordinación física. Pero la diversión no termina con el sol, las noches se transforman en una experiencia mágica de carpas y fogatas.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer
