"use client";
import { usePathname } from "next/navigation";
import "../../../dist/styles.css";
import "./globals.scss";
import HeaderDesktop from "@/components/Layout/Headers/Desktop";
import NavLayout from "@/components/Layout/Navigation/nav";
// import 'obelisco-v2/dist/styles.css';

export const componentsPages = [
  { text: "Tipografía", url: "/components/typography", id: 0 },
  { text: "Colores", url: "/components/colors", id: 1 },
  { text: "Enlace", url: "/components/link", id: 2 },
  { text: "Alertas", url: "/components/alert", id: 3 },
  /* { text: "Banner", url: "/components/banner", id: 2 },
  { text: "Bloque de trámite", url: "/components/block", id: 3 },
  { text: "Colapsable", url: "/components/collapse", id: 4 },
  { text: "Botón", url: "/components/button", id: 5 },
  { text: "Navegacion vertical", url: "/components/nav-vertical", id: 6 },
  {
    text: "Navegacion Horizontal",
    url: "/components/nav-horizontal",
    id: 7,
  },
  { text: "Tarjetas", url: "/components/cards", id: 8 },
  { text: "Pestañas", url: "/components/tabs", id: 9 }, */
];

const gettingPages = [
  { text: "Instalacción", url: "/getting-started/installation", id: 2 },
  { text: "Importaciones", url: "/getting-started/imports", id: 3 },
];

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link href="../../../dist/styles.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        {/* Material Symbols Round */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet" />
      </head>
      <body>
        <HeaderDesktop />

        <div className="layout">
          <main>
            <div className="box">
              {pathname.includes("/components") && (
                <div className="nav-left">
                  <div className="nav-left-box-title">
                    <h3 className="pl-2">Componentes</h3>
                  </div>
                  <hr />
                  <NavLayout items={componentsPages} />
                </div>
              )}
              {pathname.includes("/getting-started") && (
                <div className="nav-left">
                  <div className="nav-left-box-title">
                    <h3 className="pl-2 ">Comenzando</h3>
                  </div>
                  <hr />
                  <NavLayout items={gettingPages} />
                </div>
              )}

              <div className="">{children}</div>
            </div>
          </main>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
