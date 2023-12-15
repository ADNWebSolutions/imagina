import React from 'react';

export default function Services() {
    return (
        <div className="flex flex-col items-center justify-center h-32 my-9 sm:my-0">
            {/* Bloque con enlace a página externa */}
            <a
                href="https://www.facebook.com/p/SEM-R%C3%ADo-II-Pilar-100064755112161/?locale=es_LA&paipv=0&eav=AfZWbdXGTZT4fKiVi-pin2tg7wI_7Rn3CdRCU53bqBbP9WZFV9lGg6EcWZO89d_0Irg&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6"
            >
                <img
                    src="/sem.jpg"
                    alt="SEM"
                    className="w-24 h-24 object-cover rounded-full shadow-md"
                />
            </a>

            {/* Bloque de párrafo con estilo de negritas y sombreado */}
            <p className="text-lg font-bold text-white shadow-md bg-green-600 p-3 rounded-md">
                Dr. Gustavo Jacquet
            </p>
        </div>
    );
}
