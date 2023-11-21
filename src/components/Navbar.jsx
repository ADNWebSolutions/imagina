export default function Navbar() {
    return (
        <>
            <header className="bg-sand text-white">
                <div className="wrapper">
                    <nav className="navbar flex flex-col sm:flex-row justify-between">
                        <div className="mx-8">
                            <a href="/"><img src="./LogoSinBg.png" alt="Imagina's logo" className='inline-flex h-10' /></a>
                            <span className="mx-2 font-bold text-3xl">Imagina.</span>
                        </div>
                        <div className="">
                            <ul className="flex justify-center flex-wrap menu menu-horizontal px-1 ">
                                <li><a href='/' className="font-semibold hover:text-pink-600 uppercase">Inicio</a></li>
                                <li><a href='#whatweoffer' className="font-semibold hover:text-pink-600 uppercase">Nosotros</a></li>
                                <li><a href='#activities' className="font-semibold hover:text-pink-600 uppercase">Actividades</a></li>
                                <li><a href='#contact' className="font-semibold hover:text-pink-600 uppercase">Contacto</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}