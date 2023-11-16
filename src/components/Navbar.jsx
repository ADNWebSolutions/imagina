import React from 'react'

export default function Navbar() {
    return (
        <>
            <header className="navbar bg-sand text-white flex-col md:flex-row">
                <div className="flex-1">
                    <img src="./LogoSinBg.png" alt="Imagina's logo" className='h-[40px]' />
                    <p className="btn btn-ghost normal-case text-xl">Imagina</p>
                </div>
                <nav className="flex">
                    <ul className="flex justify-center gap-2 flex-wrap md:menu md:menu-horizontal px-1 ">
                        <li><a href='/'>Inicio</a></li>
                        <li><a href='#whatweoffer'>Nosotros</a></li>
                        <li><a href='#activities'>Actividades</a></li>
                        <li><a href='#contact'>Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}