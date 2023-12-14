/* eslint-disable react/prop-types */

function Carousel({ carousel, imgArray, handleNext, handlePrev }) {
    return (
        <div key={carousel} className="img-carousel m-[auto] relative">
            <div className="absolute w-full z-50 inset-y-1/2 flex justify-between items-center">
                <button className="px-4 py-2 mx-1 rounded-full text-3xl text-white bg-white bg-opacity-25 backdrop-blur-[1px] drop-shadow-[0_0_12px_rgb(0,0,0)]" onClick={() => handlePrev(carousel)}>❮</button>
                <button className="px-4 py-2 mx-1 rounded-full text-3xl text-white bg-white bg-opacity-25 backdrop-blur-[1px] drop-shadow-[0_0_12px_rgb(0,0,0)]" onClick={() => handleNext(carousel)}>❯</button>
            </div>
            <div className="stack">
                <img src={imgArray[carousel][0]} className="rounded-lg h-[45vh] w-[45vh] object-cover object-top " />
            </div>
        </div>
    )
}

export default Carousel