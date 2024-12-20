/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-sync-scripts */

import Footer from '@/components/Layout/Footer/footer';
import './globals.scss';
import HeaderDesktop from '@/components/Layout/Headers/Desktop';
import MainLayout from '@/components/Layout/main-layout';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <title>Obelisco V2</title>
        <meta
          name="description"
          content="Obelisco v2 es un Sistema de diseño basado en componentes para productos digitales de la Ciudad de Buenos Aires."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,0"
        />
      </head>
      <body>
        <HeaderDesktop />
        <div className="layout">
          <main>
            <MainLayout>{children}</MainLayout>
          </main>
          <Footer />
        </div>

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
