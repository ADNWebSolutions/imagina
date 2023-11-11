import React from 'react'

export default function Navbar() {
    return (
        <>
        <div className="navbar bg-sand text-white">
            <div className="flex-1">
                
                <p className="btn btn-ghost normal-case text-xl">Imagina</p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a>Inicio</a></li>
                <li><a>Nosotros</a></li>
                <li><a>Actividades</a></li>
                <li><a>Conntacto</a></li>
                </ul>
            </div>
            </div>
        </>
    )
}
