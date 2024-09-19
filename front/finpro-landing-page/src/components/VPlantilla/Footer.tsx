'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                            <img src="/logo.png" alt="Logo" className="h-12" />
                        </div>
                        <p className="text-sm mb-4">© 2024 Todos los derechos reservados.</p>
                        <p className="text-sm">Tu socio en soluciones innovadoras.</p>
                    </div>

                 
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
                        <div className="flex space-x-6 mb-4">
                            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                                <FontAwesomeIcon icon={faFacebookF} size="2x" />
                            </a>
                            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                            </a>
                            <a href="#" className="text-white hover:text-blue-300 transition-colors duration-300">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                        </div>
                    </div>

                    {/* Sección de Suscripción */}
                    <div className="mb-8 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Suscríbete</h4>
                        <p className="text-sm mb-4">Recibe nuestras noticias, perspectivas e invitaciones a eventos.</p>
                        <form className="flex flex-col">
                            <input
                                type="email"
                                placeholder="Ingrese su ID de correo electrónico"
                                className="p-2 mb-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-700"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
                            >
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm">
                    <a href="#" className="text-gray-400 hover:text-gray-300 mr-4">Política de Privacidad</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300 mr-4">Términos del servicio</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300 mr-4">Site Map</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300 mr-4">Política de Cookies</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300">Preferencias de cookies</a>
                    <a href="#" className="text-gray-400 hover:text-gray-300 ml-4">Política de Vulnerabilidad</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
