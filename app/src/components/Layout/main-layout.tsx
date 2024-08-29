// app/components/MainLayout.tsx
"use client"; // Indica que este componente debe ser renderizado en el cliente

import { usePathname } from "next/navigation";

import NavLayout from "./Navigation/nav";

export const componentsPages = [
  { text: "Accesos", url: "/components/access", id: 1 },
  // { text: "Accesos (organismo)", url: "/components/access", id: 2 },
  { text: "Alertas", url: "/components/alert", id: 3 },
  // { text: "Banner", url: "/components/banner", id: 4 },
  // { text: "Barra de desplazamiento", url: "/components/scrollbar", id: 5 },
  // { text: "Barra de progreso", url: "/components/progress-bar", id: 6 },
  // { text: "Bloque de trámite", url: "/components/block", id: 7 },
  { text: "Botones", url: "/components/button", id: 8 },
  // { text: "Calendario", url: "/components/calendar", id: 9 },
  // { text: "Colapsable", url: "/components/collapse", id: 10 },
  { text: "Colores", url: "/components/colors", id: 11 },
  { text: "Desplegable de navegación", url: "/components/dropdown-nav", id: 12 },
  { text: "Desplegable de selección", url: "/components/dropdown-sel", id: 13 },
  // { text: "Destacado", url: "/components/highlighted", id: 14 },
  { text: "Enlace", url: "/components/link", id: 15 },
  { text: "Espaciado", url: "/components/grid", id: 16 },
  { text: "Etiquetas", url: "/components/badge", id: 17 },
  /* { text: "Formulario Buscador", url: "/components/form-text", id: 18 }, */
  /* { text: "Formulario de Textos", url: "/components/form-text", id: 19 }, */
  { text: "Formulario de seleccion", url: "/components/form-selection", id: 20 },
  // { text: "Footer (organismo)", url: "/components/footer", id: 21 },
  // { text: "Galería", url: "/components/gallery", id: 22 },
  // { text: "Header (organismo)", url: "/components/header", id: 23 },
  // { text: "Lista de enlaces", url: "/components/list-link", id: 24 },
  // { text: "Lista de pasos", url: "/components/list-step", id: 25 },
  // { text: "Lista informativa ", url: "/components/list-informative", id: 26 },
  // { text: "Mapa", url: "/components/map", id: 27 },
  { text: "Mensaje de estado", url: "/components/status-message", id: 28 },
  { text: "Migas de pan", url: "/components/breadcrumb", id: 29 },
  { text: "Modal", url: "/components/modal", id: 30 },
  { text: "Navegacion horizontal", url: "/components/nav-horizontal", id: 31 },
  { text: "Navegacion vertical", url: "/components/nav-vertical", id: 32 },
  // { text: "Paginado", url: "/components/pagination", id: 33 },
  { text: "Pestañas", url: "/components/tabs", id: 34 },
  // { text: "Pasos de un formulario", url: "/components/steps-form", id: 35 },
  { text: "Spinner", url: "/components/spinner", id: 36 },
  { text: "Switch", url: "/components/switch", id: 37 },
  // { text: "Tablas (organismo)", url:"/components/table", id: 38 },
  // { text: "Tarjetas", url: "/components/cards", id: 39 },
  { text: "Tipografia", url: "/components/typography", id: 40 },
  { text: "Tooltip", url: "/components/tooltip", id: 41 },
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
