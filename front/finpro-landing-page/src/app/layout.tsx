import './globals.css'; // Style global
import Header from '../components/VPlantilla/Header'; // Header
import Footer from '../components/VPlantilla/Footer'; // Footer

export const metadata = {
  title: 'FinPro Landing Page',
  description: 'Landing page para FinPro.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />  {/* Header */}
        {children} {/* El contenido cada página */}
        <Footer /> {/* Footer */}
      </body>
    </html>
  );
}
