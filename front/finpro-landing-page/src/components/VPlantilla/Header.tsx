'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/logo.png'; // Logo

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white shadow-md fixed w-full top-0 left-0 z-50">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <Link href="/" passHref>
                    <Image src={logo} alt="FinPro Logo" width={120} height={48} className="cursor-pointer" />
                </Link>
                <ul className="flex space-x-8 font-semibold text-lg">
                    <li>
                        <Link href="#home" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 ease-in-out">Inicio</Link>
                    </li>
                    <li>
                        <Link href="#services" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 ease-in-out">Servicios</Link>
                    </li>
                    <li>
                        <Link href="#testimonials" className="text-gray-300 hover:text-teal-400 transition-colors duration-300 ease-in-out">Testimonios</Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <span className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer text-lg">
                                Contacto
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
