// src/TermsModal.js
import React from 'react';
import Modal from 'react-modal';

const TermsModal = ({ isOpen, onRequestClose }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Términos y condiciones"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    maxWidth: '60%',
                    margin: 'auto',
                    background: 'black',
                    borderRadius: '2rem'
                },
            }}
        >
            <div className='bg-black rounded-lg flex flex-wrap'>
                <h2 className="font-bold">Términos y condiciones</h2>
                <p>Bienvenido/a a nuestro sitio web. Antes de utilizar este sitio, por favor lee detenidamente estos Términos y Condiciones. Al acceder y utilizar este sitio web, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con alguno de los términos establecidos aquí, te recomendamos que no utilices este sitio.</p>

                <h2>Uso y visualización de imágenes y datos:</h2>
                <p>1.1. Este sitio web es un escaparate en línea para mostrar imágenes y datos proporcionados por nuestros clientes. No nos hacemos responsables de la veracidad, legalidad o exactitud de las imágenes y datos proporcionados por los clientes.</p>

                <p>1.2. Los clientes son los únicos responsables de garantizar que tienen los derechos necesarios para utilizar y proporcionar las imágenes y datos que se muestran en este sitio web. ADN no asume ninguna responsabilidad por cualquier infracción de derechos de autor, derechos de propiedad intelectual o cualquier otro derecho legal relacionado con las imágenes y datos proporcionados por los clientes.</p>

                <p>1.3. ADN no verifica ni controla las imágenes y datos proporcionados por los clientes. Por lo tanto, no nos hacemos responsables de cualquier contenido ofensivo, inapropiado o ilegal proporcionado por los clientes.</p>

                <h2>Limitación de responsabilidad:</h2>
                <p>2.1. ADN no se hace responsable de cualquier daño directo, indirecto, incidental, consecuente o especial que pueda surgir del uso o la imposibilidad de utilizar este sitio web.</p>

                <p>2.2. ADN no garantiza la disponibilidad continua, ininterrumpida o segura de este sitio web. Nos reservamos el derecho de interrumpir, suspender o modificar el sitio web en cualquier momento y sin previo aviso.</p>

                <p>2.3. ADN no se hace responsable de cualquier pérdida de datos, interrupción comercial o cualquier otro daño resultante de problemas técnicos o fallas en el funcionamiento del sitio web.</p>

                <h2>Enlaces a sitios externos:</h2>
                <p>3.1. Este sitio web puede contener enlaces a sitios web externos que no están controlados ni operados por ADN. No nos hacemos responsables del contenido, las políticas de privacidad o las prácticas de los sitios web externos a los que puedas acceder a través de los enlaces proporcionados en este sitio.</p>

                <h2>Modificaciones de los Términos y Condiciones:</h2>
                <p>4.1. ADN se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Te recomendamos que revises regularmente esta sección para estar al tanto de cualquier cambio.</p>
                
            </div>
            <div className='inline'>
                <div className='flex justify-end'>
                    <button className='btn-primary p-2 rounded-lg ' onClick={onRequestClose}>Cerrar</button>
                </div>
            </div>
        </Modal>
    );
};

export default TermsModal;
