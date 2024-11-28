// app/components/MainLayout.tsx
'use client';

import { usePathname } from 'next/navigation';

import NavLayout from './Navigation/nav';

export const stylesPages = [
  { text: 'Colores', url: '/components/colors', id: 1 },
  { text: 'Grilla', url: '/components/grid', id: 2 },
  { text: 'Tipografía', url: '/components/typography', id: 3 },
];
export const formsPages = [
  { text: 'Buscador', url: '/components/form-search', id: 1 },
  { text: 'Casillas de selección', url: '/components/form-selection', id: 2 },
  { text: 'Formularios de texto', url: '/components/form-text', id: 3 },
];
export const organismsPages = [
  { text: 'Accesos (organismo)', url: '/components/access-organism', id: 1 },
  { text: 'Calendario', url: '/components/calendar', id: 2 },
  { text: 'Encabezado (header)', url: '/components/header', id: 3 },
  { text: 'Pasos de un formulario', url: '/components/steps-form', id: 4 },
  { text: 'Pie de página (footer)', url: '/components/footer', id: 5 },
  { text: 'Tablas', url: '/components/table', id: 6 },
];
export const componentsPages = [
  { text: 'Accesos', url: '/components/access', id: 1 },
  { text: 'Alertas', url: '/components/alert', id: 2 },
  { text: 'Banner', url: '/components/banner', id: 3 },
  { text: 'Barra de desplazamiento', url: '/components/scrollbar', id: 4 },
  { text: 'Barra de progreso', url: '/components/progress-bar', id: 5 },
  { text: 'Bloque de trámite', url: '/components/block', id: 6 },
  { text: 'Botones', url: '/components/button', id: 7 },
  { text: 'Colapsables', url: '/components/collapse', id: 8 },
  { text: 'Desplegable de navegación', url: '/components/dropdown-nav', id: 9 },
  { text: 'Desplegable de selección', url: '/components/dropdown-sel', id: 10 },
  { text: 'Destacado', url: '/components/highlighted', id: 11 },
  { text: 'Enlace', url: '/components/link', id: 12 },
  { text: 'Etiquetas', url: '/components/badge', id: 13 },
  // { text: "Galería", url: "/components/gallery", id: 14 },
  { text: 'Lista de enlaces', url: '/components/list-link', id: 15 },
  { text: 'Lista de pasos', url: '/components/list-step', id: 16 },
  { text: 'Lista informativa', url: '/components/list-informative', id: 17 },
  { text: 'Mapa', url: '/components/map', id: 18 },
  { text: 'Mensaje de estado', url: '/components/status-message', id: 19 },
  { text: 'Migas de pan', url: '/components/breadcrumb', id: 20 },
  { text: 'Modal', url: '/components/modal', id: 21 },
  { text: 'Navegación horizontal', url: '/components/nav-horizontal', id: 22 },
  { text: 'Navegación vertical', url: '/components/nav-vertical', id: 23 },
  { text: 'Paginado', url: '/components/pagination', id: 24 },
  { text: 'Pestañas', url: '/components/tabs', id: 25 },
  { text: 'Spinner', url: '/components/spinner', id: 26 },
  { text: 'Switch', url: '/components/switch', id: 27 },
  { text: 'Tarjetas', url: '/components/cards', id: 28 },
  { text: 'Tooltip', url: '/components/tooltip', id: 29 },
];

export const gettingPages = [
  { text: 'Sobre Obelisco', url: '/getting-started', id: 1 },
  { text: 'Instalación', url: '/getting-started/installation', id: 2 },
  { text: 'Importaciones', url: '/getting-started/imports', id: 3 },
  { text: 'Editor de código', url: '/getting-started/editor', id: 4 },
];

export const documentationPages = [
  { text: 'Cambios en componentes', url: '/documentation/update-component', id: 1 },
  { text: 'Clases disponibles', url: '/documentation/class-documentation', id: 2 },
];

export const templates = [{ text: 'Plantillas', url: 'https://gcba.github.io/obelisco-demo/index.html', id: 1 }];

export const versions = [
  { text: 'Obelisco v.2', url: '/documentation', id: 1 },
  { text: 'Obelisco v.1 (deprecado)', url: 'https://gcba.github.io/obelisco-v1', id: 2 },
];

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return isHome ? (
    children
  ) : (
    <div className="container custom-layout-container">
      <div className="row v-height-100" style={{ paddingTop: '32px' }}>
        <div className="col-3 d-none d-xl-block pe-0">
          {pathname.includes('/components') && (
            <div className="nav-left sticky-nav pb-1">
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Estilos</p>
              </div>
              <NavLayout items={stylesPages} />
              <hr className="nav-divider" />
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Componentes</p>
              </div>
              <NavLayout items={componentsPages} />
              <hr className="nav-divider" />
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Formularios</p>
              </div>
              <NavLayout items={formsPages} />
              <hr className="nav-divider" />
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Organismos</p>
              </div>
              <NavLayout items={organismsPages} />
            </div>
          )}

          {pathname.includes('/getting-started') && (
            <div className="nav-left sticky-nav h-auto">
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Empezar con Obelisco</p>
              </div>
              <NavLayout items={gettingPages} />
            </div>
          )}

          {pathname.includes('/documentation') && (
            <div className="nav-left sticky-nav h-auto">
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Documentación</p>
              </div>
              <NavLayout items={documentationPages} />
            </div>
          )}
        </div>
        <div className="col-12 col-xl-9 custom-col-9-desktop">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
