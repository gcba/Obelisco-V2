import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
// import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const basePath = '/Obelisco-V2';
import {
  HERO_COLORES,
  HERO_CON_CAMPO_BUSCADOR,
  HERO_CON_DESPLEGABLES,
  HERO_CON_ETIQUETAS,
  HERO_DARK,
  HERO_INSTITUCIONAL,
  HERO_LIGHT,
  HERO_ACCESIBILITY,
  HERO_REDES_SOCIALES,
  // HERO_MULTIMEDIA,
} from './code-views';

// const ZoomContainer = ({ children }: React.PropsWithChildren) => <div style={{ zoom: 0.5 }}>{children}</div>;
// const logo_ba_white = '/images/logo_ba_white.svg';

const HeroHeaderDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Institucional',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={HERO_INSTITUCIONAL}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero bg-content-hero-light">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-primary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-primary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-light"></div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Accionables',
    },
    {
      subtitle: 'Con botones',

      content: (
        <>
          <CodeBox codeHTML={HERO_INSTITUCIONAL}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero bg-content-hero-dark">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-light">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-light">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-light"></div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con campo buscador',
      content: (
        <>
          <CodeBox codeHTML={HERO_CON_CAMPO_BUSCADOR}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero bg-content-hero-light">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* accionable campo buscador */}
                        <div className="d-grid d-sm-grid d-md-flex flex-wrap search-container">
                          {/* search wrapper */}
                          <div className="search-wrapper">
                            <label htmlFor="search-home" className="sr-only">
                              Buscar
                            </label>

                            <input
                              type="text"
                              id="search-home"
                              name="search-home"
                              maxLength={100}
                              autoComplete="off"
                              className="form-control"
                              placeholder="¿En qué te podemos ayudar?"
                            />

                            <div className="search-btn-container">
                              <button className="btn btn-lg btn-primary btn-search">
                                <p>Buscar</p>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                                    fill="white"
                                  ></path>
                                </svg>
                              </button>
                            </div>

                            {/* input buscador */}
                            <div className="search-results bg-light">
                              <div>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="list-link-result">
                                  <span className="material-symbols-rounded">search</span>
                                  Enlace predeterminado
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="list-link-result">
                                  <span className="material-symbols-rounded">search</span>
                                  Enlace predeterminado
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="list-link-result">
                                  <span className="material-symbols-rounded">search</span>
                                  Enlace predeterminado
                                </a>
                              </div>
                            </div>
                            {/* input buscador */}
                          </div>
                          {/* search wrapper */}
                        </div>
                        {/* accionable campo buscador */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-light"></div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con etiquetas',
      content: (
        <>
          <CodeBox codeHTML={HERO_CON_ETIQUETAS}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero bg-content-hero-dark">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* etiquetas */}
                        <div className="d-flex flex-wrap column-gap-2 row-gap-4">
                          <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
                          <span className="badge badge-s-default">Etiqueta</span>
                          <span className="badge badge-s-default">Etiqueta</span>
                          <span className="badge badge-s-default">Etiqueta</span>
                        </div>
                        {/* etiquetas */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-light"></div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con desplegables',
      content: (
        <>
          <CodeBox codeHTML={HERO_CON_DESPLEGABLES}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero bg-content-hero-light">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* desplegables */}
                        <div className="d-grid d-sm-flex flex-wrap column-gap-2 row-gap-4">
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
                        {/* desplegables */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-light"></div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con redes sociales',
      content: (
        <>
          <CodeBox codeHTML={HERO_REDES_SOCIALES}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero bg-content-hero-light">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* redes sociales */}
                        <div className="d-flex flex-wrap align-items-center column-gap-2 row-gap-4">
                          <span className="text-body-primary me-2">Compartir en redes</span>
                          <a href="#" className="shadow-none" target="_blank">
                            <i className="bxl bx-facebook-circle o-icon text-primary"></i>
                          </a>
                          <a href="#" className="shadow-none" target="_blank">
                            <i className="bxl bx-instagram o-icon text-primary"></i>
                          </a>
                          <a href="#" className="shadow-none" target="_blank">
                            <i className="bxl bx-twitter-x o-icon text-primary"></i>
                          </a>
                          <a href="#" className="shadow-none" target="_blank">
                            <i className="bxl bx-linkedin-square o-icon text-primary"></i>
                          </a>
                        </div>
                        {/* redes sociales */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-light"></div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Modos de color',
    },
    {
      subtitle: 'Color',
      content: (
        <>
          <CodeBox codeHTML={HERO_COLORES}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  {/* blue */}
                  <header className="hero bg-content-hero-blue">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-light">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-light">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-neutral"></div>
                  </header>
                  {/* cyan */}
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Light',
      content: (
        <>
          <CodeBox codeHTML={HERO_LIGHT}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  {/* light */}
                  <header className="hero bg-content-hero-light">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-primary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-primary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-light"></div>
                  </header>
                  {/* light */}
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Dark',
      content: (
        <>
          <CodeBox codeHTML={HERO_DARK}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  {/* dark */}
                  <header className="hero bg-content-hero-dark">
                    <div className="content corner">
                      <div className="d-flex flex-column">
                        <nav aria-label="Navegación secundaria">
                          <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="#">Seccion</a>
                            </li>
                          </ol>
                        </nav>

                        <div>
                          <h1 className="mb-3">Encabezado de la página</h1>
                          <p className="lead m-0">
                            Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                            convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                          </p>
                        </div>

                        {/* botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-light">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-light">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-light"></div>
                  </header>
                  {/* dark */}
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  const SECTION_UX = [
    {
      title: 'Uso',
      firstTitle: true,
      content: (
        <>
          <div className="list-informative">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Debe estar presente en todas las páginas que requieran de una sección principal que funcione como
                introducción al contenido de la misma.
              </li>
              <li>
                Para captar la atención de la persona usuaria en páginas de contenido cultural, de turismo, de eventos u
                otro.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p className="text-md" style={{ marginTop: '32px' }}>
            Se ubica siempre en la parte superior del sitio, inmediatamente debajo del Encabezado (header) principal,
            actuando como punto de inicio y orientación del contenido de la página.
          </p>
        </>
      ),
    },
    {
      subtitle: (
        <>
          En dispositivos <i>desktop</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            El contenedor de la cabecera ocupa el 100% del ancho de la pantalla, manteniendo el orden de lectura de
            izquierda a derecha en sentido horizontal de los elementos.
          </p>
          <Image
            src={`${basePath}/images/hero/hero_disposicion.svg`}
            alt="Cabecera de página disposición desktop"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginBottom: '32px' }}
          />

          <p className="text-md fw-bold mb-4">Responsive en tamaños de pantalla grandes</p>

          <p className="text-md">
            <strong>Entre 1200 a 1400px</strong>: Hasta pantallas de 1400px. las alineaciones de texto y forma de la
            cabecera van a estar en sincronía con las alineaciones del encabezado <i>(header)</i> para compensar los
            pesos visuales del componente en la interfaz.
          </p>

          <Image
            src={`${basePath}/images/hero/hero_disposicion_1.svg`}
            alt="Cabecera de página disposición desktop"
            width="800"
            height="200"
            className="img-fluid mb-4"
          />

          <p className="text-md">
            <strong>Entre 1400 a 1920px</strong>: Entre estas resoluciones el margen de la cabecera va a ser ligeramente
            mayor al del Encabezado <i>(header)</i> para mantener las proporciones en tamaños de pantalla mayores.
          </p>

          <Image
            src={`${basePath}/images/hero/hero_disposicion_2.svg`}
            alt="Cabecera de página disposición desktop"
            width="800"
            height="200"
            className="img-fluid mb-4"
          />

          <p className="text-md">
            <strong>Mayor a 1920px</strong>: Para pantallas con resoluciones mayores a 1920 px., la página mantiene un
            ancho fijo y se extienden márgenes en blanco para ocupar el espacio disponible de la pantalla.
          </p>

          <Image
            src={`${basePath}/images/hero/hero_disposicion_3.svg`}
            alt="Cabecera de página disposición desktop"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          En dispositivos <i>tablet</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            La cabecera ocupa el 100% del ancho de la pantalla, incluyendo los márgenes, manteniendo una disposición
            vertical de la estructura. Esto quiere decir que, en el orden de lectura, el contenido textual, tanto migas
            de pan, título, como descripción, se van a ubicar primeros y luego, los accionables.
          </p>
          <Image
            src={`${basePath}/images/hero/hero_disposicion_4.svg`}
            alt="Cabecera de página disposición tablet"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: (
        <>
          En dispositivos <i>Mobile</i>
        </>
      ),
      content: (
        <>
          <p className="text-md mb-4">
            Al igual que en dispositivos <i>tablet</i>, la cabecera ocupa el 100% del ancho de la pantalla, incluyendo
            los márgenes, manteniendo una disposición vertical de la estructura y los accionables deben ocupar el 100%
            del ancho de la pantalla. El desplegable va a tener el texto centrado y la flecha de despliegue a la derecha
            del accionable.
          </p>
          <Image
            src={`${basePath}/images/hero/hero_disposicion_5.svg`}
            alt="Cabecera de página disposición mobile"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: <>Contexto de uso</>,
      content: (
        <>
          <p className="text-md">
            La cabecera de página (hero) se utiliza de manera consistente según el tipo de página, con el objetivo de
            brindar jerarquía, orientación y contexto al contenido principal.
          </p>
          <p className="text-md fw-semibold">Variante Dark:</p>
          <ul className="list-informative-bullet mb-3">
            <li>
              El color tiene demasiado peso visual. Puede funcionar para las páginas que requieran un impacto a primer
              vista.
            </li>
            <li>El usuario ingresa al sitio y el header oscuro se presenta como el principal foco e impacto visual.</li>
            <li>El color es demasiado expresivo.</li>
            <li>Visualmente atractivo y dominante.</li>
            <li>Se usaría únicamente para secciones de alta jerarquía.</li>
          </ul>

          <p className="text-md fw-semibold">Variante Light:</p>
          <ul className="list-informative-bullet">
            <li>
              Color con un leve componente azul que genera personalidad sin convertirse en un color protagonista, esto
              permite conseguir neutralidad más identidad.
            </li>
            <li>No compite con el contenido sino que lo destaca por su contraste.</li>
            <li>
              Cumple con el objetivo de la sobriedad, personalidad y neutralidad (revisar concepto de sobriedad respecto
              de los requisitos).
            </li>
            <li>Respeta la jerarquía del contenido (bajo riesgo de competir con el mismo).</li>
            <li>Tiene un contraste correcto entre fondo y frente.</li>
          </ul>

          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Tipo de página
                  </th>
                  <th scope="col" className="tb-text">
                    Consideraciones principales
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Página de inicio</td>
                  <td>Variante Dark o Multimedia</td>
                </tr>
                <tr>
                  <td>Página de área</td>
                  <td>Variante Dark</td>
                </tr>
                <tr>
                  <td>Página simple</td>
                  <td>Variante Light</td>
                </tr>
                <tr>
                  <td>Página turnos e inscripciones</td>
                  <td>Variante Light</td>
                </tr>
                <tr>
                  <td>Página trámites</td>
                  <td>Variante Light</td>
                </tr>
                <tr>
                  <td>Perfil institucional</td>
                  <td>Variante Light</td>
                </tr>
                <tr>
                  <td>Perfil noticias</td>
                  <td>Variante Light</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      firstTitle: true,
      content: (
        <>
          <Image
            src={`${basePath}/images/hero/hero_anatomia.svg`}
            alt="Anatomia de la Cabecera de página"
            width="800"
            height="280"
            className="img-fluid"
          />

          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Elemento
                  </th>
                  <th scope="col" className="tb-text">
                    Carácter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Migas de pan</td>
                  <td>Opcional en páginas de inicio. Obligatorio en páginas internas forman una ruta de navegación.</td>
                </tr>
                <tr>
                  <td>2. Titulo de la cabecera</td>
                  <td>Obligatorio, todas las páginas deben contener un título.</td>
                </tr>
                <tr>
                  <td>3. Subtitulo de la cabecera</td>
                  <td>Opcional, puede ser un texto de apoyo al título principal.</td>
                </tr>
                <tr>
                  <td>4. Acciones </td>
                  <td>Opcional, pueden incluir botones, desplegables, etiquetas, campos de búsqueda o ninguno.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Variantes',
    },
    {
      subtitle: 'Institucional',
      content: (
        <>
          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Variante Dark{' '}
          </p>
          <Image
            src={`${basePath}/images/hero/hero_institucional_dark.svg`}
            alt="hero institucional dark"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Variante Light{' '}
          </p>
          <Image
            src={`${basePath}/images/hero/hero_institucional_light.svg`}
            alt="hero institucional light"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />
        </>
      ),
    },

    {
      subtitle: 'Accionables',
      content: (
        <>
          <p className="text-md mb-4">
            Permite incluir uno o más enlaces accionables ubicados por fuera del texto principal de la alerta. Su
            función es ofrecer al usuario caminos directos para resolver la situación comunicada, sin interrumpir la
            lectura del mensaje.
          </p>

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con botones
          </p>
          <Image
            src={`${basePath}/images/hero/hero_accionables_con_botones.svg`}
            alt="Accionables con botones del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con campo de búsqueda
          </p>
          <Image
            src={`${basePath}/images/hero/hero_accionables_con_campo_de_busqueda.svg`}
            alt="Accionables con campo de búsqueda del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con desplegables de selección
          </p>
          <Image
            src={`${basePath}/images/hero/hero_accionables_con_desplegables_de_seleccion.svg`}
            alt="Accionables con desplegables de selección del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con desplegables de selección y botón
          </p>
          <Image
            src={`${basePath}/images/hero/hero_accionables_con_desplegables_de_seleccion_y_boton.svg`}
            alt="Accionables con desplegables de selección del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con etiquetas
          </p>
          <Image
            src={`${basePath}/images/hero/hero_accionables_con_etiquetas.svg`}
            alt="Accionables con etiquetas"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-xl fw-semibold">Modos de color</p>

          <p className="text-">
            El componente ofrece 2 modos de color que definen la combinación de colores de la cabecera:
          </p>

          <ul className="list-informative-bullet mb-3">
            <li>
              <p className="text-md fw-bold d-inline">Dark</p>: Para fondos oscuros y alto contraste.
            </li>
            <li>
              <p className="text-md fw-bold d-inline">Light</p>: para fondos claros y lectura sutil.
            </li>
          </ul>

          <Image
            src={`${basePath}/images/hero/hero_modos_de_color_dark.svg`}
            alt="Ejemplos de modos de color, hero dark"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />
          <Image
            src={`${basePath}/images/hero/hero_modos_de_color_light.svg`}
            alt="Ejemplos de modos de color, hero light"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />
        </>
      ),
    },
    {
      title: 'Página de Noticias',
      content: (
        <>
          <p className="text-md mb-2">
            Para el template de Noticias se definió la variante Light. La misma prioriza la legibilidad y jerarquía de
            elementos, evitando así, distracciones visuales. Esta decisión busca mantener coherencia en el texto,
            accesibilidad y foco en el contenido.
            <br />
            <br />
            Esta variante está compuesta por los siguientes elementos:
          </p>

          <Image
            src={`${basePath}/images/hero/pagina_de_noticias.svg`}
            alt="Modo de color dark"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />

          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Elemento
                  </th>
                  <th scope="col" className="tb-text">
                    Carácter{' '}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Migas de pan</td>
                  <td>Obligatorio, en página noticia al ser una página interna. Forman una ruta de navegación.</td>
                </tr>
                <tr>
                  <td>2. Etiqueta</td>
                  <td>Obligatorio, todas las páginas deben contener al menos una etiqueta.</td>
                </tr>
                <tr>
                  <td>3. Fecha de publicación</td>
                  <td>Obligatorio, todas las páginas deben contener fecha de publicación.</td>
                </tr>
                <tr>
                  <td>4. Titulo de la cabecera</td>
                  <td>Obligatorio, todas las páginas deben contener un título.</td>
                </tr>
                <tr>
                  <td>5. Subtitulo de la cabecera</td>
                  <td>Opcional, puede ser un texto de apoyo al título principal.</td>
                </tr>
                <tr>
                  <td>6. Accionables </td>
                  <td>Compartir en redes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-md mt-3">
            Para más detalles sobre estructura, jerarquía de contenido y variantes, consultar la documentación del{' '}
            <a href="https://gcba.github.io/obelisco-demo/noticias/index.html">Template de Noticias</a>, donde se
            describe el comportamiento completo de este tipo de página.
          </p>
        </>
      ),
    },
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      firstTitle: true,
      content: (
        <>
          <p className="text-md">
            El componente Cabecera de página está construido para ser accesible mediante navegación por teclado y
            reconocible por lectores de pantalla.{' '}
          </p>
          <span className="badge badge-s-default ms-1">TAB</span>
          <span className="badge badge-s-default">ENTER</span>
          <p className="text-md">
            Acciones como accionar botones botones o abrir desplegables se pueden realizar con las teclas <i>Enter</i> o{' '}
            <i>space</i>, y controlar con las flechas del teclado.
          </p>

          <Image
            src={`${basePath}/images/hero/hero_accesibilidad.svg`}
            alt="Navegacion alternativa de la Cabecera de página"
            width="738"
            height="400"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Etiquetado descriptivo',
      content: (
        <>
          <p className="text-md">
            La etiqueta de texto {'<h1>'} representa el título con más jerarquía de la página y aparece al inicio del
            bloque del componente para garantizar orientación, SEO y accesibilidad. Cada página debe tener un único{' '}
            {'<h1>'} y no debe repetirse en otras secciones o encabezados internos, para evitar confusión y mantener una
            estructura semántica clara.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {HERO_ACCESIBILITY}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      title: 'Criterios WCAG aplicados',
      content: (
        <>
          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.3.1 Info and Relationships (Level A){' '}
          </a>
          <p>
            La información, la estructura y las relaciones transmitidas a través de la presentación pueden determinarse
            mediante programación o están disponibles en el texto.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.11 Non-Text Contrast (Level AA){' '}
          </a>
          <p>
            La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
            relación de contraste de 3:1 con respecto a los colores adyacentes.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.3 Contrast (Minimum) (Level AA){' '}
          </a>
          <p>
            La presentación visual de texto y de imágenes de texto tiene una relación de contraste de por lo menos
            4.5:1, excepto textos grandes e imágenes de texto grande que tienen un contraste de por lo menos 3:1, textos
            o imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o
            logotipos.{' '}
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.4 Resize Text (Level AA){' '}
          </a>
          <p>
            Excepto por los subtítulos e imágenes de texto, el texto puede redimensionarse hasta un 200 % sin tecnología
            de asistencia, sin pérdida de contenido ni funcionalidad.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 1.4.10 Reflow (Level AA){' '}
          </a>

          <p>
            El contenido puede presentarse sin pérdida de información o funcionalidad y sin necesidad de desplazarse en
            dos dimensiones, siempre que el desplazamiento vertical se ajuste a un ancho equivalente a 320 píxeles CSS y
            el desplazamiento horizontal a una altura equivalente a 256 píxeles CSS, excepto en aquellas partes del
            contenido que requieran un diseño bidimensional para su uso o significado.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.1 Keyboard (Level A){' '}
          </a>
          <p>Todas las funcionalidades del contenido se puede operar a través de una interfaz de teclado.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.1.2 No Keyboard Trap (Level A){' '}
          </a>
          <p>
            Si el foco del teclado puede moverse a un componente de la página utilizando una interfaz de teclado,
            también debe ser posible mover el foco fuera de ese componente usando únicamente la misma interfaz de
            teclado. Si se requiere algo más que las teclas de flecha, tabulador u otros métodos estándar para salir, se
            debe informar al usuario sobre el método necesario para mover el foco.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html#dfn-link-purpose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.4 Link Purpose (In Context) (Level A){' '}
          </a>
          <p>
            El propósito de cada enlace debe ser determinado solo con el texto del enlace o con el texto del enlace
            junto con su contexto determinado de forma programática, excepto en los casos en los que el propósito del
            enlace sea ambiguo para los usuarios en general.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html#dfn-link-purpose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.4 Link Purpose (In Context) (Level A)
          </a>
          <p>
            El propósito de cada enlace debe ser determinado solo con el texto del enlace o con el texto del enlace
            junto con su contexto determinado de forma programática, excepto en los casos en los que el propósito del
            enlace sea ambiguo para los usuarios en general.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.7 Focus Visible (Level AA){' '}
          </a>
          <p>
            Cualquier interfaz de usuario operable por teclado tiene un modo de operación donde el indicador de enfoque
            del teclado es visible. Cuando utiliza un teclado para navegar por los componentes, los enlaces tienen un
            subrayado visible y un recuadro <i>outline</i> que indica que los enlaces son interactivos.
          </p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/location.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 2.4.8. Location (Level AAA){' '}
          </a>
          <p>La información sobre la ubicación del usuario dentro de un conjunto de páginas web está disponible.</p>

          <a
            className="external"
            href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Success Criterion 3.2.3 Consistent Navigation (Level AA){' '}
          </a>
          <p>
            Los mecanismos de navegación que se repiten en varias páginas web dentro de un conjunto de páginas aparecen
            en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio.{' '}
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Cabecera de página institucional"
        description={[
          'La Cabecera de página institucional es el área principal de una página que brinda información introductoria para orientar a la persona usuaria en el propósito de la misma. Puede contener accionables como botones, campos de búsqueda y otros.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'section-accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
      />
    </>
  );
};

export default HeroHeaderDocs;
