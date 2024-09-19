import ContactForm from '../components/VContacto/ContactForm';

const HomePage: React.FC = () => {
  return (
    <main className="relative overflow-hidden">
     
      <section
        id="home"
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img_hero.png')" }} 
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div> 
        <div className="relative flex flex-col justify-center items-center h-full px-6 py-16 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-slideInDown">
            Bienvenido a FinPro
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-slideInUp">
            Descubre nuestros servicios financieros diseñados para ti.
          </p>
          <a
            href="#services"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 animate-fadeIn"
          >
            Descubre más
          </a>
        </div>
      </section>
     
      <section id="services" className="py-16 animate-fadeIn bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          <div className="relative p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <img
              src="/prestamo_personal.jpg" 
              alt="Préstamos Personales"
              className="w-full h-40 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-xl font-bold mb-2">Préstamos Personales</h3>
            <p className="text-gray-600">Financiamiento adaptado a tus necesidades.</p>
          </div>
          <div className="relative p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <img
              src="/tarjeta_credito.png"
              alt="Tarjetas de Crédito"
              className="w-full h-40 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-xl font-bold mb-2">Tarjetas de Crédito</h3>
            <p className="text-gray-600">Flexibilidad y beneficios exclusivos.</p>
          </div>
          <div className="relative p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <img
              src="/cuanta de ahorro.jpeg" 
              alt="Cuentas de Ahorro"
              className="w-full h-40 object-cover mb-4 rounded-t-lg"
            />
            <h3 className="text-xl font-bold mb-2">Cuentas de Ahorro</h3>
            <p className="text-gray-600">Ahorra con las mejores tasas de interés.</p>
          </div>
        </div>
      </section>
     
      <section id="testimonials" className="py-16 bg-gray-50 animate-fadeIn">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Lo que dicen nuestros clientes
        </h2>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Gracias a FinPro pude acceder a un préstamo rápido y con excelentes condiciones."
              </p>
              <p className="font-semibold mt-4 text-gray-800">- Juan Pérez</p>
            </div>
            <div className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "FinPro me ofreció una tarjeta de crédito con beneficios que ninguna otra financiera tenía."
              </p>
              <p className="font-semibold mt-4 text-gray-800">- María Gómez</p>
            </div>
            <div className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "El servicio al cliente de FinPro es excepcional. Siempre están dispuestos a ayudar y responder a todas mis preguntas."
              </p>
              <p className="font-semibold mt-4 text-gray-800">- Luis Martínez</p>
            </div>
            <div className="p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Elegí FinPro para mi cuenta de ahorro y estoy encantado con las tasas de interés y el servicio que ofrecen."
              </p>
              <p className="font-semibold mt-4 text-gray-800">- Ana Rodríguez</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-16 bg-gray-50 animate-fadeIn">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Contáctanos
        </h2>
        <ContactForm />
      </section>

    </main>
  );
};

export default HomePage;
