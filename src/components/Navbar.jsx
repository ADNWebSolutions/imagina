import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleMenu = () => {
      setOpen((prev) => !prev)
    };
    return (
        <>
    <header className='bg-sand text-white'>
        <nav className="flex justify-between items-center mx-4 py-1">
            {/* icono de la nav*/}
            <div className="flex items-center justify-between">
                <a href="/"><img src="./LogoSinBg.png" alt="Imagina's logo" className='inline-flex h-14' /></a>
                <span className="font-bold text-3xl ml-2">Imagina</span>
            </div>
            {/* links en horizontal, estan ocultos hasta alcanzar el breakpoint MD */}
            <div className="hidden md:block">
                <ul className="flex justify-center space-x-8">
                    <li><a href='/' className="font-semibold hover:text-pink-600 uppercase">Inicio</a></li>
                    <li><a href='#whatweoffer' className="font-semibold hover:text-pink-600 uppercase">Nosotros</a></li>
                    <li><a href='#activities' className="font-semibold hover:text-pink-600 uppercase">Actividades</a></li>
                    <li><a href='#contact' className="font-semibold hover:text-pink-600 uppercase">Contacto</a></li>
                </ul>
            </div>
             {/* boton que intercambia entre los iconos de las barras y la X */}
            <div className='md:hidden focus:hidden'>
                <button type="button" onClick={handleMenu} className='inline-flex items-center justify-center rounded-md text-ocean1 border border-ocean1'>
                 {
                 open == true ?
                 <FontAwesomeIcon icon={faTimes}  className='h-10 w-10'/> 
                 :
                 <FontAwesomeIcon icon={faBars} className="h-10 w-10" />
                 }
                </button>
            </div>
        </nav>
        {/* div de los links en resoluciones menores a md, abre al clickear */}
        <div className={`overflow-hidden transition-all duration-150 ${open ? 'h-auto max-h-96' : ' max-h-0'}`}>
            <ul className='flex flex-col items-center pt-2 pb-3 space-y-2 text-light'>
                <li><a href='/' className="font-semibold hover:text-pink-600 uppercase">Inicio</a></li>
                <li><a href='#whatweoffer' className="font-semibold hover:text-pink-600 uppercase">Nosotros</a></li>
                <li><a href='#activities' className="font-semibold hover:text-pink-600 uppercase">Actividades</a></li>
                <li><a href='#contact' className="font-semibold hover:text-pink-600 uppercase">Contacto</a></li>
            </ul>
        </div>   
    </header>
        </>
    )
}