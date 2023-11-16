import HeroButton from "./microComponents/HeroButton"
import SocialMedia from "./SocialMedia"

const Hero = () => {
  return (
  <section className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-white">
      <div
        className="absolute left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url(./heroImg.png)' }}
      ></div>
      <div className="flex justify-between items-center w-[80%] md:w-2/3">
        <div className="glassmorphic-box border p-4 rounded-lg text-center shadou ">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-2">Imagina</h1>
          <p className="text-2xl md:text-2xl mb-8">Escuela de Verano </p>
          <HeroButton />
          <SocialMedia className="mt-4 flex justify-center items-center text-4xl" />
        </div>
      </div>

    </section>)
}

export default Hero