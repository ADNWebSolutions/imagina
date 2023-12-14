import React, { useState } from 'react'
import SocialMedia from './SocialMedia'
import TermsModal from './TermsModal';
import Services from './Services';

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <footer id='contact' className='flex flex-col items-center md:justify-around md:flex-row py-8'>
      <div className='text-sm'>
        <p>Made with love by
          <a href="https://github.com/ADNWebSolutions" className='italic hover:underline'> ADN Web Solutions!</a></p>
        <p>
          <button onClick={openModal} className='hover:underline' style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            Términos y condiciones
          </button>
        </p>
      </div>
      <TermsModal isOpen={isModalOpen} onRequestClose={closeModal} />
      <Services />
      <SocialMedia className="text-2xl" />
    </footer>
  )
}

export default Footer