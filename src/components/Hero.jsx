import HeroButton from "./microComponents/HeroButton"
import SocialMedia from "./SocialMedia"

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center md:items-center bg-cover bg-center text-white">
      <div
        className="absolute left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(./floating.jpg)' }}
      ></div>
        <div className="flex justify-between items-center w-[80%] md:w-2/3 ml-2 sm:ml-8">
          <div className="border p-8 rounded-lg text-center bg-white bg-opacity-10 backdrop-blur-[7px] shadow-lg ">
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-wide mb-2">Imagina</h1>
            <p className="mb-6">Escuela de Verano </p>
            <div className="mx-auto mb-2">
              <HeroButton />
            </div>
            <SocialMedia className="mt-4 flex justify-center items-center text-4xl" />
          </div>
        </div>
    </section>)
}

export default Hero