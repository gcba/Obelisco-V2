import Image from 'next/image';

const basePath = '/Obelisco-V2';

import CodeBox from '@/components/CodeBox';
// import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  HERO_COLORES,
  HERO_CON_CAMPO_BUSCADOR,
  HERO_CON_DESPLEGABLES,
  HERO_CON_ETIQUETAS,
  HERO_CON_GIF,
  HERO_CON_VIDEO,
  HERO_DARK,
  HERO_DINAMICO,
  HERO_INSTITUCIONAL,
  HERO_LIGHT,
} from './code-views';

const HeroHeaderDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Tipos de formas',
      firstTitle: true,
    },
    {
      subtitle: 'Institucional',
      content: (
        <>
          <CodeBox codeHTML={HERO_INSTITUCIONAL}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Dinámico',
      content: (
        <>
          <CodeBox codeHTML={HERO_DINAMICO}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero">
                    <div className="content wave">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con multimedia',
    },
    {
      subtitle: 'Con imagen',
      content: (
        <>
          <CodeBox codeHTML={HERO_DINAMICO}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero">
                    <div className="content wave">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside">
                      <Image src={`${basePath}/images/hero/multimedia-hero.jpg`} alt="Hero" fill />
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con video',
      content: (
        <>
          <CodeBox codeHTML={HERO_CON_VIDEO}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero">
                    <div className="content wave">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside">
                      <video src={`${basePath}/images/hero/video_hero_header.mp4`} autoPlay muted loop controls>
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con gif',
      content: (
        <>
          <CodeBox codeHTML={HERO_CON_GIF}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero">
                    <div className="content wave">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside">
                      <Image src={`${basePath}/images/hero/gif_hero_header.gif`} alt="Hero" fill />
                    </div>
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
                  <header className="hero">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
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
                  <header className="hero">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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

                        <div className="d-grid d-sm-grid d-md-flex flex-wrap column-gap-2 row-gap-4">
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
                                  <span className="material-symbols-outlined">search</span>
                                  Enlace predeterminado
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="list-link-result">
                                  <span className="material-symbols-outlined">search</span>
                                  Enlace predeterminado
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="list-link-result">
                                  <span className="material-symbols-outlined">search</span>
                                  Enlace predeterminado
                                </a>
                              </div>
                            </div>
                            {/* input buscador */}
                          </div>
                          {/* search wrapper */}
                        </div>
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
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
                  <header className="hero">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <span className="badge badge-default">Etiqueta</span>
                          <span className="badge badge-default">Etiqueta</span>
                          <span className="badge badge-default">Etiqueta</span>
                        </div>
                        {/* etiquetas */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
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
                  <header className="hero">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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

                    <div className="aside bg-aside-hero-dark"></div>
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
              <div className="hero-container-4">
                <div className="hero-box-sizing ">
                  {/* cyan */}
                  <header className="hero bg-content-hero-cyan">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
                  </header>
                  {/* cyan */}
                  <br />
                  {/* sky */}
                  <header className="hero bg-content-hero-sky">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
                  </header>
                  {/* sky */}
                  <br />
                  {/* yellow */}
                  <header className="hero bg-content-hero-yellow">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
                  </header>
                  {/* yellow */}
                  <br />
                  {/* purple */}
                  <header className="hero bg-content-hero-purple">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
                            Botón
                          </button>
                        </div>
                        {/* botones */}
                      </div>
                    </div>

                    <div className="aside bg-aside-hero-dark"></div>
                  </header>
                  {/* purple */}
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Light',
      _content: (
        <>
          <CodeBox codeHTML={HERO_LIGHT}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  {/* light */}
                  <header className="hero bg-content-hero-light">
                    <div className="content corner">
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                          <button type="button" className="btn btn-secondary">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-secondary">
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
      get content() {
        return this._content;
      },
      set content(value) {
        this._content = value;
      },
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
                      <div className="d-flex flex-column py-3 py-lg-5">
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
                  {/* dark */}
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
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

export default HeroHeaderDocs;
