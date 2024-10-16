// app/components/MainLayout.tsx
'use client';

import { usePathname } from 'next/navigation';

import NavLayout from './Navigation/nav';

export const stylesPages = [
  { text: 'Grilla', url: '/components/grid', id: 1, imgSrc: '', description: 'Breve descripción del componente.' },
  {
    text: 'Paleta de colores',
    url: '/components/colors',
    id: 2,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Tipografía',
    url: '/components/typography',
    id: 3,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
];
export const formsPages = [
  {
    text: 'Buscador',
    url: '/components/form-search',
    id: 1,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Casillas de selección',
    url: '/components/form-selection',
    id: 2,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Formulario de Textos',
    url: '/components/form-text',
    id: 3,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
];

export const organismsPages = [
  // { text: "Accesos (organismo)", url: "/components/access", id: 1 },
  {
    text: 'Footer (pie de página)',
    url: '/components/footer',
    id: 2,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Header (encabezado)',
    url: '/components/header',
    id: 3,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Tablas (organismo)',
    url: '/components/table',
    id: 4,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
];
export const componentsPages = [
  { text: 'Accesos', url: '/components/access', id: 1, imgSrc: '', description: 'Breve descripción del componente.' },
  { text: 'Alertas', url: '/components/alert', id: 2, imgSrc: '', description: 'Breve descripción del componente.' },
  { text: 'Banner', url: '/components/banner', id: 3, imgSrc: '', description: 'Breve descripción del componente.' },
  // { text: "Barra de desplazamiento", url: "/components/scrollbar", id: 4 },
  // { text: "Barra de progreso", url: "/components/progress-bar", id: 5 },
  {
    text: 'Bloque de trámite',
    url: '/components/block',
    id: 6,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  { text: 'Botones', url: '/components/button', id: 7, imgSrc: '', description: 'Breve descripción del componente.' },
  {
    text: 'Calendario',
    url: '/components/calendar',
    id: 8,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Colapsables',
    url: '/components/collapse',
    id: 9,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Desplegable de navegación',
    url: '/components/dropdown-nav',
    id: 10,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Desplegable de selección',
    url: '/components/dropdown-sel',
    id: 11,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Destacado',
    url: '/components/highlighted',
    id: 12,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  { text: 'Enlace', url: '/components/link', id: 13, imgSrc: '', description: 'Breve descripción del componente.' },
  { text: 'Etiquetas', url: '/components/badge', id: 14, imgSrc: '', description: 'Breve descripción del componente.' },
  // { text: "Galería", url: "/components/gallery", id: 15 },
  {
    text: 'Lista de enlaces',
    url: '/components/list-link',
    id: 16,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Lista de pasos',
    url: '/components/list-step',
    id: 17,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Lista informativa',
    url: '/components/list-informative',
    id: 18,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  { text: 'Mapa', url: '/components/map', id: 19, imgSrc: '', description: 'Breve descripción del componente.' },
  {
    text: 'Mensaje de estado',
    url: '/components/status-message',
    id: 20,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Migas de pan',
    url: '/components/breadcrumb',
    id: 21,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  { text: 'Modal', url: '/components/modal', id: 22, imgSrc: '', description: 'Breve descripción del componente.' },
  {
    text: 'Navegación horizontal',
    url: '/components/nav-horizontal',
    id: 23,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Navegación vertical',
    url: '/components/nav-vertical',
    id: 24,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  {
    text: 'Paginado',
    url: '/components/pagination',
    id: 25,
    imgSrc: '',
    description: 'Breve descripción del componente.',
  },
  { text: 'Pestañas', url: '/components/tabs', id: 26, imgSrc: '', description: 'Breve descripción del componente.' },
  // { text: "Pasos de un formulario", url: "/components/steps-form", id: 27 },
  { text: 'Spinner', url: '/components/spinner', id: 28, imgSrc: '', description: 'Breve descripción del componente.' },
  { text: 'Switch', url: '/components/switch', id: 29, imgSrc: '', description: 'Breve descripción del componente.' },
  { text: 'Tarjetas', url: '/components/cards', id: 30, imgSrc: '', description: 'Breve descripción del componente.' },
  { text: 'Tooltip', url: '/components/tooltip', id: 31, imgSrc: '', description: 'Breve descripción del componente.' },
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
