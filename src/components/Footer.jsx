import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center md:justify-around md:flex-row py-8'>
        <div>Made with love by <a href="https://github.com/ADNWebSolutions" className='italic hover:underline'>ADN Web Solutions!</a></div>
        <SocialMedia className="text-2xl" />
    </footer>
  )
}

export default Footer