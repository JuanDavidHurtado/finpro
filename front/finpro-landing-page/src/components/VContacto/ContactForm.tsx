'use client';

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [alert, setAlert] = useState<{ type: 'success' | 'danger' | null, message: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '' };
        let valid = true;

        if (!formData.name) {
            newErrors.name = 'Nombre completo es requerido';
            valid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Correo electrónico es requerido';
            valid = false;
        }
        if (!formData.message) {
            newErrors.message = 'Mensaje es requerido';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);

            try {
                const response = await fetch('http://127.0.0.1:8000/contact/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                const data = await response.json();
                console.log(data);

                if (data.status == 200) {
                    setFormData({ name: '', email: '', message: '' });
                    setErrors({ name: '', email: '', message: '' });
                    setAlert({ type: 'success', message: data.msg || 'Formulario enviado con éxito' });
                } else {
                    setAlert({ type: 'danger', message: data.msg || 'Error al enviar el formulario' });
                }
            } catch (error) {
                console.error(error);
                setAlert({ type: 'danger', message: 'Error al enviar el formulario. Inténtalo nuevamente.' });
            }
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md border border-gray-200">
            {alert && (
                <div
                    className={`mb-4 p-4 rounded-md ${alert.type === 'success'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                        } alert-dismissible flex justify-between items-center`}
                >
                    <p className="m-0">{alert.message}</p>
                    <button
                        type="button"
                        className="ml-4 text-lg font-bold text-gray-600 hover:text-gray-800 focus:outline-none"
                        onClick={() => setAlert(null)}
                    >
                        x
                    </button>
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre completo</label>
                    <input
                        autoComplete="off"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                    <input
                        autoComplete="off"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                        rows={4}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
