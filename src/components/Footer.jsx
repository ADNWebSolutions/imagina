import React from 'react'
import SocialMedia from './SocialMedia'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center md:justify-around md:flex-row mt-5'>
        <div>Made with love by <a href="https://github.com/ADNWebSolutions" className='hover:underline'>ADN Web Solutions!</a></div>
        <SocialMedia className="text-2xl" />
    </footer>
  )
}

export default Footer