// app/components/MainLayout.tsx
'use client';

import { usePathname } from 'next/navigation';

import NavLayout from './Navigation/nav';

export const stylesPages = [
  { text: 'Grilla', url: '/components/grid', id: 1 },
  { text: 'Paleta de colores', url: '/components/colors', id: 2 },
  { text: 'Tipografía', url: '/components/typography', id: 3 },
];
export const formsPages = [
  { text: 'Buscador', url: '/components/form-search', id: 1 },
  { text: 'Casillas de selección', url: '/components/form-selection', id: 2 },
  { text: 'Formulario de Textos', url: '/components/form-text', id: 3 },
];

export const organismsPages = [
  // { text: "Accesos (organismo)", url: "/components/access", id: 1 },
  { text: 'Footer (pie de página)', url: '/components/footer', id: 2 },
  { text: 'Header (encabezado)', url: '/components/header', id: 3 },
  { text: 'Tablas (organismo)', url: '/components/table', id: 4 },
];
export const componentsPages = [
  { text: 'Accesos', url: '/components/access', id: 1 },
  { text: 'Alertas', url: '/components/alert', id: 2 },
  { text: 'Banner', url: '/components/banner', id: 3 },
  // { text: "Barra de desplazamiento", url: "/components/scrollbar", id: 4 },
  // { text: "Barra de progreso", url: "/components/progress-bar", id: 5 },
  { text: 'Bloque de trámite', url: '/components/block', id: 6 },
  { text: 'Botones', url: '/components/button', id: 7 },
  { text: 'Calendario', url: '/components/calendar', id: 8 },
  { text: 'Colapsables', url: '/components/collapse', id: 9 },
  { text: 'Desplegable de navegación', url: '/components/dropdown-nav', id: 10 },
  { text: 'Desplegable de selección', url: '/components/dropdown-sel', id: 11 },
  { text: 'Destacado', url: '/components/highlighted', id: 12 },
  { text: 'Enlace', url: '/components/link', id: 13 },
  { text: 'Etiquetas', url: '/components/badge', id: 14 },
  // { text: "Galería", url: "/components/gallery", id: 15 },
  { text: 'Lista de enlaces', url: '/components/list-link', id: 16 },
  { text: 'Lista de pasos', url: '/components/list-step', id: 17 },
  { text: 'Lista informativa', url: '/components/list-informative', id: 18 },
  { text: 'Mapa', url: '/components/map', id: 19 },
  { text: 'Mensaje de estado', url: '/components/status-message', id: 20 },
  { text: 'Migas de pan', url: '/components/breadcrumb', id: 21 },
  { text: 'Modal', url: '/components/modal', id: 22 },
  { text: 'Navegación horizontal', url: '/components/nav-horizontal', id: 23 },
  { text: 'Navegación vertical', url: '/components/nav-vertical', id: 24 },
  { text: 'Paginado', url: '/components/pagination', id: 25 },
  { text: 'Pestañas', url: '/components/tabs', id: 26 },
  // { text: "Pasos de un formulario", url: "/components/steps-form", id: 27 },
  { text: 'Spinner', url: '/components/spinner', id: 28 },
  { text: 'Switch', url: '/components/switch', id: 29 },
  { text: 'Tarjetas', url: '/components/cards', id: 30 },
  { text: 'Tooltip', url: '/components/tooltip', id: 31 },
];

export const gettingPages = [
  { text: 'Instalación', url: '/getting-started/installation', id: 2 },
  { text: 'Importaciones', url: '/getting-started/imports', id: 3 },
];

export const documentationPages = [{ text: 'Cambios en componentes', url: '/documentation/update-component', id: 2 }];

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="container">
      {isHome ? (
        children
      ) : (
        <div className="row v-height-100 pt-5">
          <div className="col-3 d-none d-lg-block ">
            {pathname.includes('/components') && (
              <div className="nav-left sticky-nav">
                <div className="nav-left-box-title">
                  <div className="pe-2">
                    <p className="headline-lg fw-bold mb-1">Estilos</p>
                    <hr className="my-2" />
                  </div>
                </div>
                <NavLayout items={stylesPages} />
                <div className="nav-left-box-title">
                  <div className="pe-2">
                    <p className="headline-lg fw-bold mb-1">Componentes</p>
                    <hr className="my-2" />
                  </div>
                </div>
                <NavLayout items={componentsPages} />
                <div className="nav-left-box-title">
                  <div className="pe-2">
                    <p className="headline-lg fw-bold mb-1">Formularios</p>
                    <hr className="my-2" />
                  </div>
                </div>
                <NavLayout items={formsPages} />
                <div className="nav-left-box-title">
                  <div className="pe-2">
                    <p className="headline-lg fw-bold mb-1">Organismos</p>
                    <hr className="my-2" />
                  </div>
                </div>
                <NavLayout items={organismsPages} />
              </div>
            )}

            {pathname.includes('/getting-started') && (
              <div className="nav-left sticky-nav h-auto">
                <div className="nav-left-box-title">
                  <p className="headline-lg fw-bold">Comenzando</p>
                </div>
                <hr />
                <NavLayout items={gettingPages} />
              </div>
            )}

            {pathname.includes('/documentation') && (
              <div className="nav-left sticky-nav h-auto">
                <div className="nav-left-box-title">
                  <p className="headline-lg fw-bold">Documentación</p>
                </div>
                <hr />
                <NavLayout items={documentationPages} />
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
