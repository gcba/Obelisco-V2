// app/components/MainLayout.tsx
"use client"; // Indica que este componente debe ser renderizado en el cliente

import { usePathname } from "next/navigation";

import NavLayout from "./Navigation/nav";

export const componentsPages = [
  { text: "Tipografía", url: "/components/typography", id: 0 },
  { text: "Colores", url: "/components/colors", id: 1 },
  { text: "Grilla", url: "/components/grid", id: 1 },
  { text: "Enlace", url: "/components/link", id: 2 },
  { text: "Alertas", url: "/components/alert", id: 3 },
  { text: "Navegacion Horizontal", url: "/components/nav-horizontal", id: 4 },
  { text: "Navegacion Vertical", url: "/components/nav-vertical", id: 5 },
  { text: "Pestañas", url: "/components/tabs", id: 6 },
  { text: "Switch", url: "/components/switch", id: 7 },
  { text: "Tooltip", url: "/components/tooltip", id: 8 },
  { text: "Modal", url: "/components/modal", id: 9 },
  { text: "Mensaje de estado", url: "/components/status-message", id: 10 },
  { text: "Desplagable de Navegación", url: "/components/dropdown-nav", id: 11 },
  { text: "Etiquetas", url: "/components/badge", id: 12 },
  { text: "Banner", url: "/components/banner", id: 13 },
  { text: "Spinner", url: "/components/spinner", id: 14 },
  { text: "Botones", url: "/components/button", id: 15 },
  { text: "Miga de pan", url: "/components/breadcrumb", id: 16 },
  { text: "Formulario de textos", url: "/components/form-text", id: 17 },
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
