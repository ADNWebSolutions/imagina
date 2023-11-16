import React from 'react'

function Carousel({ carousel, imgArray, handleNext, handlePrev }) {
    return (
        <div key={carousel} className="img-carousel m-[auto] relative">
            <div className="absolute w-full z-50 top-1/2 flex justify-between">
                <button className="btn btn-circle" onClick={() => handlePrev(carousel)}>❮</button>
                <button className="btn btn-circle" onClick={() => handleNext(carousel)}>❯</button>
            </div>
            <div className="stack">
                <img src={imgArray[carousel][0]} className="rounded" />
            </div>
        </div>
    )
}

export default Carousel