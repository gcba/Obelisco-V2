// import Image from 'next/image';

// const basePath = '/Obelisco-V2';

import CodeBox from '@/components/CodeBox';
// import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  HEADER_BANNER,
  // HEADER_LOGIN_ONE_LINE,
  // HEADER_LOGIN_ONE_LINE_SEARCH,
  // HEADER_LOGIN_TWO_LINES,
  // HEADER_LOGIN_TWO_LINES_SEARCH,
  // HEADER_NO_LOGIN,
  // HEADER_NO_LOGIN_SEARCH,
  // HEADER_ONE_LINE_SEARCH,
  // HEADER_ONLY_LOGIN,
  // HEADER_ONLY_LOGIN_SEARCH,
  // HEADER_ONLY_LOGO,
  // HEADER_ONLY_SEARCH,
  // HEADER_TWO_LINES,
  // HEADER_TWO_LINES_SEARCH,
} from './code-views';

// const logo = '/images/logo_ba.svg';
// const logo_mobile = '/images/logo_ba_mobile.svg';
// const logo_ba_logo_banner = '/images/header/logo_BA_banner.svg';

const HeaderDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Banner del GCBA',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={HEADER_BANNER}>
            <div className="container-fluid">
              <div className="header-box-sizing_hero-header ">
                <header className="hero">
                  <div className="content wave">
                    <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
                      <nav aria-label="Navegación secundaria">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <a href="#" style={{ color: '#101E37' }}>
                              Inicio
                            </a>
                          </li>
                        </ol>
                      </nav>

                      <div>
                        <h1 className="mb-3">Este es un encabezado de página que contiene hasta 2 líneas de texto.</h1>
                        <p className="lead m-0">
                          Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                          convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                        </p>
                      </div>

                      <div className="d-flex column-gap-2">
                        {/* <!-- Inicio Desplegable de navegación 1 --> */}
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-dropdown btn-dropdown-border btn-lg"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                            <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                              expand_more
                            </span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                          </div>
                        </div>
                        {/* <!-- Fin Desplegable de navegación 1 --> */}
                        {/* <!-- Inicio Desplegable de navegación 2 --> */}
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-dropdown btn-dropdown-border btn-lg"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                            <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                              expand_more
                            </span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                          </div>
                        </div>
                        {/* <!-- Fin Desplegable de navegación 2 --> */}
                        {/* <!-- Inicio Desplegable de navegación 3 --> */}
                        <div className="dropdown">
                          <button
                            type="button"
                            className="btn btn-dropdown btn-dropdown-border btn-lg"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                            <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                              expand_more
                            </span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">Opción de navegación</span>
                            </a>
                          </div>
                        </div>
                        {/* <!-- Fin Desplegable de navegación 3 --> */}
                      </div>
                    </div>
                  </div>

                  <div className="aside sky-900"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Deslogueado',
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Hero header"
        description={[
          'El header es una sección ubicada en la parte superior de la página que contiene elementos y componentes relacionados a la navegación. Su función es permitir que la persona usuaria pueda navegar y acceder intuitivamente a las diferentes secciones de un sitio.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default HeaderDocs;
