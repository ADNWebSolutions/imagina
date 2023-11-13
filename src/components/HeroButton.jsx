import React from 'react'

const HeroButton = () => {
  return (
    <button className='border border-amber-800 rounded-md hover:bg-[#FFBF00] p-1'>
        <a href="/about">
          {/* /about = createBrowserRouter */}
            Sobre nosotros!
        </a>
    </button>
  )
}

export default HeroButton