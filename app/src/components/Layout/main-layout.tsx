// Hoja de rutas: app/src/components/Layout/main-layout.tsx
'use client';

import { usePathname } from 'next/navigation';

import NavLayout from './Navigation/nav';

export const stylesPages = [
  { text: 'Colores', url: '/components/colors' },
  { text: 'Grilla', url: '/components/grid' },
  { text: 'Tipografía', url: '/components/typography' },
  { text: 'Íconos', url: '/components/icons' },
];
export const formsPages = [
  { text: 'Botón de radio', url: '/components/form-radio' },
  { text: 'Campo de texto', url: '/components/form-text' },
  { text: 'Campo de búsqueda', url: '/components/form-search' },
  { text: 'Casilla de verificación', url: '/components/form-check' },
  { text: 'Campo de selección', url: '/components/form-select' },
  { text: 'Carga de archivo', url: '/components/form-file' },
  { text: 'Validación', url: '/components/form-validation' },
];
export const organismsPages = [
  { text: 'Accesos (organismo)', url: '/components/access-organism' },
  { text: 'Calendario', url: '/components/calendar' },
  { text: 'Encabezado (header)', url: '/components/header' },
  { text: 'Cabecera de Página', url: '/components/hero' },
  { text: 'Pasos de un formulario', url: '/components/steps-form' },
  { text: 'Pie de página (footer)', url: '/components/footer' },
  { text: 'Tablas', url: '/components/table' },
];
export const componentsPages = [
  { text: 'Accesos', url: '/components/access' },
  { text: 'Alertas', url: '/components/alert' },
  { text: 'Banner', url: '/components/banner' },
  { text: 'Barra de desplazamiento', url: '/components/scrollbar' },
  { text: 'Barra de progreso', url: '/components/progress-bar' },
  { text: 'Bloque de trámite', url: '/components/block' },
  { text: 'Botones', url: '/components/button' },
  { text: 'Carrusel', url: '/components/carousel' },
  { text: 'Colapsables', url: '/components/collapse' },
  { text: 'Desplegable de navegación', url: '/components/dropdown-nav' },
  { text: 'Desplegable de selección', url: '/components/dropdown-sel' },
  { text: 'Destacado', url: '/components/highlighted' },
  { text: 'Enlace', url: '/components/link' },
  { text: 'Etiquetas', url: '/components/badge' },
  { text: 'Galería', url: '/components/gallery' },
  { text: 'Lista de enlaces', url: '/components/list-link' },
  { text: 'Lista de pasos', url: '/components/list-step' },
  { text: 'Lista informativa', url: '/components/list-informative' },
  { text: 'Mapa', url: '/components/map' },
  { text: 'Mensaje de estado', url: '/components/status-message' },
  { text: 'Migas de pan', url: '/components/breadcrumb' },
  { text: 'Modal', url: '/components/modal' },
  { text: 'Navegación horizontal', url: '/components/nav-horizontal' },
  { text: 'Navegación vertical', url: '/components/nav-vertical' },
  { text: 'Paginado', url: '/components/pagination' },
  { text: 'Pestañas', url: '/components/tabs' },
  { text: 'Spinner', url: '/components/spinner' },
  { text: 'Switch', url: '/components/switch' },
  { text: 'Tarjetas', url: '/components/cards' },
  { text: 'Tooltip', url: '/components/tooltip' },
];

export const gettingPages = [
  { text: 'Sobre Obelisco', url: '/getting-started' },
  { text: 'Instalación', url: '/getting-started/installation' },
  { text: 'Importaciones', url: '/getting-started/imports' },
  { text: 'Accesibilidad', url: '/getting-started/accessibility' },
  { text: 'Editor de código', url: '/getting-started/editor' },
];

export const documentationPages = [
  { text: 'Cambios en componentes', url: '/documentation/update-component' },
  { text: 'Clases disponibles', url: '/documentation/class-documentation' },
  { text: 'Versionados', url: '/documentation/releases' },
];

export const contenidos = [
  { text: 'Comunicar con claridad', url: '/content/comunicar-con-claridad' },
  { text: 'Usos y convenciones de escritura', url: '/content/usos-y-convenciones' },
  { text: 'Pautas de escritura UX', url: '/content/pautas-de-escritura-ux' },
  { text: 'Redactar una noticia', url: '/content/como-redactar-una-noticia' },
  { text: 'Escribir para la accesibilidad', url: '/content/escribir-para-la-accesibilidad' },
];

export const templatesPages = [
  { text: 'Páginas de áreas ', url: '/templates/paginas-de-areas' },
  { text: 'Página de trámites', url: '/templates/pagina-tramites' },
  { text: 'Página simple', url: '/templates/pagina-simple' },
  { text: 'Página de libro', url: '/templates/pagina-de-libro' },
  { text: 'Noticias', url: '/templates/pagina-de-noticias' },
  { text: 'Formularios', url: '/templates/formularios' },
  { text: 'Perfil institucional', url: '/templates/perfil-institucional' },
];

export const patterns = [{ text: 'Construir un formulario', url: '/patterns' }];

export const versions = [
  { text: 'Obelisco v.2', url: '/documentation' },
  { text: 'Obelisco v.1 (deprecado)', url: 'https://gcba.github.io/obelisco-v1' },
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
          {pathname.includes('/patterns') && (
            <div className="nav-left sticky-nav h-auto">
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Patrones</p>
              </div>
              <NavLayout items={patterns} />
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

          {pathname.includes('/content') && (
            <div className="nav-left sticky-nav h-auto">
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Contenidos</p>
              </div>
              <NavLayout items={contenidos} />
            </div>
          )}

          {pathname.includes('/templates') && (
            <div className="nav-left sticky-nav h-auto">
              <div className="nav-left-box-title">
                <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Plantillas</p>
              </div>
              <NavLayout items={templatesPages} />
            </div>
          )}
        </div>
        <div className="col-12 col-xl-9 custom-col-9-desktop">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
