// app/components/MainLayout.tsx
"use client"; // Indica que este componente debe ser renderizado en el cliente

import { usePathname } from "next/navigation";

import NavLayout from "./Navigation/nav";

export const componentsPages = [
  { text: "Alertas", url: "/components/alert", id: 1 },
  { text: "Banner", url: "/components/banner", id: 2 },
  // { text: "Bloque", url: "/components/block", id: 3 },
  { text: "Botones", url: "/components/button", id: 4 },
  // { text: "Colapsable", url: "/components/collapse", id: 5 },
  { text: "Colores", url: "/components/colors", id: 6 },
  { text: "Desplegable de navegacion", url: "/components/dropdown-nav", id: 7 },
  // { text: "Destacado", url: "/components/highlighted", id: 8 },
  { text: "Enlace", url: "/components/link", id: 9 },
  { text: "Espaciado", url: "/components/grid", id: 10 },
  { text: "Etiquetas", url: "/components/badge", id: 23 },
  { text: "Formulario de Textos", url: "/components/form-text", id: 11 },
  { text: "Formulario de seleccion", url: "/components/form-selection", id: 12 },
  // { text: "Footer", url: "/components/footer", id: 13 },
  { text: "Galería", url: "/components/gallery", id: 24 },
  { text: "Mapa", url: "/components/map", id: 14 },
  { text: "Mensaje de estado", url: "/components/status-message", id: 16 },
  { text: "Modal", url: "/components/modal", id: 15 },
  { text: "Navegacion horizontal", url: "/components/nav-horizontal", id: 17 },
  { text: "Navegacion vertical", url: "/components/nav-vertical", id: 18 },
  { text: "Paginado", url: "/components/pagination", id: 24 },
  { text: "Pestañas", url: "/components/tabs", id: 19 },
  { text: "ProgressBar", url: "/components/progress-bar", id: 20 },
  { text: "Spinner", url: "/components/spinner", id: 21 },
  { text: "Switch", url: "/components/switch", id: 22 },
  { text: "Tipografia", url: "/components/typography", id: 24 },
  { text: "Tooltip", url: "/components/tooltip", id: 23 },
  { text: "Calendario", url: "/components/calendar", id: 23 },
  { text: "Accesos", url: "/components/access", id: 25 },
  { text: "Tablas", url:"/components/table", id: 25}
];



export const gettingPages = [
  { text: "Instalacción", url: "/getting-started/installation", id: 2 },
  { text: "Importaciones", url: "/getting-started/imports", id: 3 },
];

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
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
  );
};

export default MainLayout;
