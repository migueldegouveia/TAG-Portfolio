import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Barlow:400,500,700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}