"use client";
import { usePathname } from "next/navigation";
import "./globals.scss";
import HeaderDesktop from "@/components/Layout/Headers/Desktop";
import NavLayout from "@/components/Layout/Navigation/nav";

export const componentsPages = [
  { text: "Tipografía", url: "/components/typography", id: 0 },
  { text: "Colores", url: "/components/colors", id: 1 },
  { text: "Grilla", url: "/components/grid", id: 1 },
  { text: "Enlace", url: "/components/link", id: 2 },
  { text: "Alertas", url: "/components/alert", id: 3 },
  {
    text: "Navegacion Horizontal",
    url: "/components/nav-horizontal",
    id: 4,
  },
  {
    text: "Navegacion Vertical",
    url: "/components/nav-vertical",
    id: 5,
  },
  {
    text: "Pestañas",
    url: "/components/tabs",
    id: 6,
  },
  { text: "Switch", url: "/components/switch", id: 7 },
  { text: "Tooltip", url: "/components/tooltip", id: 8 },
  { text: "Modal", url: "/components/modal", id: 9 },
  { text: "Mensaje de estado", url: "/components/status-message", id: 10 },
  {
    text: "Desplagable de Navegación",
    url: "/components/dropdown-nav",
    id: 11,
  },
  { text: "Etiquetas", url: "/components/badge", id: 12 },
  { text: "Banner", url: "/components/banner", id: 13 },
  { text: "Spinner", url: "/components/spinner", id: 14 },
  { text: "Botones", url: "/components/button", id: 15 },
  { text: "Accesos", url: "/components/access", id: 16 },

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
  const isHome = pathname === "/";
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* Material Symbols Round */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded"
          rel="stylesheet"
        />
      </head>
      <body>
        <HeaderDesktop />

        <div className="layout">
          <main>
            <div className="container">
              {isHome ? (
                children
              ) : (
                <div className="row pt-5">
                  <div className="col-3 d-none d-lg-block ">
                    {pathname.includes("/components") && (
                      <div className="nav-left sticky-nav">
                        <div className="nav-left-box-title">
                          <p className="headline-lg fw-bold">Componentes</p>
                        </div>
                        <hr />
                        <NavLayout items={componentsPages} />
                      </div>
                    )}

                    {pathname.includes("/getting-started") && (
                      <div className="nav-left position-sticky">
                        <div className="nav-left-box-title">
                          <p className="headline-lg fw-bold">Comenzando</p>
                        </div>
                        <hr />
                        <NavLayout items={gettingPages} />
                      </div>
                    )}
                  </div>

                  <div className="col-12 col-lg-9">{children}</div>
                </div>
              )}
            </div>
          </main>
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
