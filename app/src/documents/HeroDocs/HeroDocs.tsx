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
  HERO_CON_GIF,
  HERO_CON_IMAGEN,
  HERO_CON_VIDEO,
  HERO_DARK,
  HERO_DINAMICO,
  HERO_INSTITUCIONAL,
  HERO_LIGHT,
  HERO_ACCESIBILITY,
  HERO_ACCESIBILITY_2,
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
          <CodeBox codeHTML={HERO_CON_IMAGEN}>
            <div className="container">
              <div className="hero-container">
                <div className="hero-box-sizing ">
                  <header className="hero">
                    <div className="content wave">
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
                  <br />
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
                  {/* blue */}
                  <br />
                  {/* red */}
                  <header className="hero bg-content-hero-red">
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
                  {/* red */}
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
                Para mensajes de alta prioridad que informen sobre el estado en funcionamiento de una acción o del
                sistema.
              </li>
              <li>
                Para proporcionar información complementaria dentro del contexto del contenido de la página y guiar a
                los usuarios a tomar decisiones informadas.
              </li>
            </ul>
          </div>
          <div className="list-informative" style={{ marginTop: '32px' }}>
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Cuando la información no es crítica ni afecta el flujo de la tarea del usuario. En esos casos, es
                preferible usar texto informativo dentro del contenido.
              </li>
              <li>
                Para notificar sobre situaciones externas al contexto de la página o del sistema, por ejemplo, alertas
                meteorológicas o estado del transporte público. En estos casos recomendamos usar el componente Banner
              </li>
              <li>Para mensajes de retroalimentación efímeros, como “copiado al portapapeles”.</li>
              <li>
                Cuando se utiliza la navegación horizontal en combinación con la navegación principal, puede resultar
                redundante incluir migas de pan.
              </li>
              <li>En las páginas de inicio omita incluir el componente migas de pan.</li>
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
            Se ubican en la parte superior izquierda de la página, generalmente, dentro del encabezado de página, por
            encima del título H1.
          </p>
          <Image
            src={`${basePath}/images/migas_de_pan/migas_de_pan_disposicion.svg`}
            alt="Migas de pan disposición"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenido',
    },
    {
      subtitle: 'Basado en el ancho',
      content: (
        <>
          <p className="text-md mb-4">
            Cuando el nombre de un enlace de ancla excede los 32 caracteres (incluyendo espacios), el texto se trunca y
            agrega tres puntos (…) al final para visualizar que hay más texto en ese nivel.
          </p>
          <Image
            src={`${basePath}/images/migas_de_pan/migas_de_pan_contenido.svg`}
            alt="Migas de pan basado en el ancho"
            width="800"
            height="200"
            className="img-fluid"
          />
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
                  <td>Migas de pan</td>
                  <td>Opcional en páginas de inicio. Obligatorio en páginas internas forman una ruta de navegación.</td>
                </tr>
                <tr>
                  <td>Titulo de la cabecera</td>
                  <td>Obligatorio, todas las páginas deben contener un título.</td>
                </tr>
                <tr>
                  <td>Subtitulo de la cabecera</td>
                  <td>Opcional, puede ser un texto de apoyo al título principal.</td>
                </tr>
                <tr>
                  <td>Acciones </td>
                  <td>Opcional, pueden incluir botones, desplegables, etiquetas, campos de búsqueda o ninguno.</td>
                </tr>
                <tr>
                  <td>Multimedia</td>
                  <td>Opcional, puede incluir una imagen, video, audio o ninguno.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: 'Especificaciones sobre la multimedia',
    },
    {
      subtitle: 'Multimedia con imagen',
      content: (
        <>
          <p className="text-lg fw-semibold mb-2">Formatos recomendados </p>

          <ul className="list-informative-bullet" style={{ marginBottom: '12px' }}>
            <li>
              <p className="text-md fw-bold d-inline">JPEG</p>: Es la opción más conocida, y ofrece buena
              compatibilidad, y relación tamaño/peso. Los archivos suelen tener las extensiones .jpg, .jpeg
            </li>
            <li>
              <p className="text-md fw-bold d-inline">WebP</p>: Es poco conocido, pero ofrece buena calidad con
              compresión eficiente. Los archivos tienen la extensión &quot;.WEBP&quot;.
            </li>
            <li>
              <p className="text-md fw-bold d-inline">AVIF</p>: Mayor compresión que formatos JPG/JPEG y alta calidad de
              imagen. Es compatible en la mayoría de los principales navegadores como Chrome, Firefox y Safari.
            </li>
          </ul>

          <p className="text-lg fw-semibold mb-2">Tamaños recomendados </p>
          <p className="text-lg">Resolución base de 1600x900 (16:9) con peso menor a 400 KB</p>

          <ul className="list-informative-bullet">
            <li>
              <p className="text-md fw-bold d-inline">Mobile</p>: 640x480px. (proporción 4:3). Peso máximo sugerido:{' '}
              {'<100 KB'}
            </li>
            <li>
              <p className="text-md fw-bold d-inline">Tablet</p>: 1024x768 (proporción 4:3). Peso máximo sugerido:{' '}
              {'<150 KB'}
            </li>
            <li>
              <p className="text-md fw-bold d-inline">Desktop</p>: 1600x900px. resolución máxima recomendada (proporción
              16:9). Peso sugerido {'<250 KB'}
            </li>
          </ul>
        </>
      ),
    },
    {
      subtitle: 'Multimedia con video',
      content: (
        <>
          <p className="text-lg fw-semibold mb-2 mt-4">Formatos recomendados </p>

          <ul className="list-informative-bullet" style={{ marginBottom: '12px' }}>
            <li>
              <p className="text-md fw-bold d-inline">MP4</p>: Formato de video ampliamente soportado. Adecuado para
              videos cortos, fondos animados o clips promocionales. No soporta transparencia; requiere fallback estático
              si el autoplay falla.
            </li>
            <li>
              <p className="text-md fw-bold d-inline">WebM</p>: Formato de video optimizado para la web, alternativa
              libre a MP4. Soporte limitado en navegadores antiguos o entornos legacy.
            </li>
          </ul>

          <p className="text-lg fw-semibold mb-2">Tamaños recomendados </p>
          <p className="text-lg">Resolución base de 1600x900 (16:9) con peso menor a 400 KB</p>

          <li>
            <p className="text-md fw-bold d-inline">Mobile</p>: 720x480 px. (proporción 4:3). Peso máximo sugerido:{' '}
            {'<2 MB'}
          </li>
          <li>
            <p className="text-md fw-bold d-inline">Tablet</p>: 1280x720 px (proporción 4:3). Peso máximo sugerido:{' '}
            {'<2 MB'}
          </li>
          <li>
            <p className="text-md fw-bold d-inline">Desktop</p>: 1920x1080 px. resolución máxima recomendada (proporción
            16:9). Peso sugerido {'<2 MB'}
          </li>
        </>
      ),
    },
    {
      subtitle: 'Multimedia con GIF',
      content: (
        <>
          <p className="text-lg fw-semibold mb-2">Formatos recomendados </p>

          <ul className="list-informative-bullet" style={{ marginBottom: '12px' }}>
            <li>
              <p className="text-md fw-bold d-inline">GIF</p>: Formato de animación simple basado en imágenes de 8 bits.
              Evitar fondos complejos o loops largos.
            </li>
          </ul>

          <p className="text-lg fw-semibold mb-2">Tamaños recomendados </p>
          <li>
            <p className="text-md fw-bold d-inline">Mobile</p>: 360×240 px (proporción 4:3). Peso máximo sugerido:{' '}
            {'<100 KB'}
          </li>
          <li>
            <p className="text-md fw-bold d-inline">Tablet</p>: 728×400 px (proporción 4:3). Peso máximo sugerido:{' '}
            {'<150 KB'}
          </li>
          <li>
            <p className="text-md fw-bold d-inline">Desktop</p>: 1366×600 px resolución máxima recomendada (proporción
            16:9). Peso sugerido {'<250 KB'}
          </li>
        </>
      ),
    },
    {
      title: 'Variantes',
    },
    {
      subtitle: 'Tipos de formas',
      content: (
        <>
          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Forma dinámica
          </p>
          <Image
            src={`${basePath}/images/hero/hero_forma_dinamica.svg`}
            alt="Forma dinámica del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Forma institucional
          </p>
          <Image
            src={`${basePath}/images/hero/hero_forma_institucional.svg`}
            alt="Forma institucional del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />
        </>
      ),
    },
    {
      subtitle: 'Con multimedia',
      content: (
        <>
          <p className="text-md mb-4">
            Los enlaces dentro de una alerta se utilizan para una llamada a la acción. Todos los enlaces a la
            documentación o información deben abrirse en una nueva pestaña.
          </p>

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con imagen
          </p>
          <Image
            src={`${basePath}/images/hero/hero_forma_con_imagen.svg`}
            alt="Forma con imagen del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con video
          </p>
          <Image
            src={`${basePath}/images/hero/hero_forma_con_video.svg`}
            alt="Forma con video del hero"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />

          <p className="text-md fw-semibold" style={{ marginBottom: '12px' }}>
            Con gif
          </p>
          <Image
            src={`${basePath}/images/hero/hero_forma_con_gif.svg`}
            alt="Forma con gif del hero"
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
            Con etiquetas
          </p>
          <Image
            src={`${basePath}/images/hero/hero_accionables_con_etiquetas.svg`}
            alt="Accionables con etiquetas"
            width="738"
            height="400"
            className="img-fluid mb-4"
          />
        </>
      ),
    },
    {
      subtitle: 'Modos de color',
      content: (
        <>
          <p className="text-md mb-2">El componente ofrece 3 modos de color que definen el fondo del Hero:</p>
          <ul className="list-informative-bullet mb-3">
            <li>
              <p className="text-md fw-bold d-inline">Dark</p>: Para fondos oscuros y alto contraste.
            </li>
            <li>
              <p className="text-md fw-bold d-inline">Light</p>: Para fondos claros y lectura sutil.
            </li>
            <li>
              <p className="text-md fw-bold d-inline">Dark</p>: Para fondos con identidad visual.
            </li>
          </ul>{' '}
          <p className="text-md">
            El modo Color incluye 6 opciones intercambiables desde las propiedades del componente:
          </p>
          <Image
            src={`${basePath}/images/hero/hero_color_bg_dark.svg`}
            alt="Modo de color dark"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />
          <Image
            src={`${basePath}/images/hero/hero_color_bg_light.svg`}
            alt="Modo de color light"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />
          <Image
            src={`${basePath}/images/hero/hero_color_cyan.svg`}
            alt="Modo de color cyan"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />
          <Image
            src={`${basePath}/images/hero/hero_color_sky.svg`}
            alt="Modo de color sky"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />
          <Image
            src={`${basePath}/images/hero/hero_color_red.svg`}
            alt="Modo de color red"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />
          <Image
            src={`${basePath}/images/hero/hero_color_yellow.svg`}
            alt="Modo de color yellow"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />
          <Image
            src={`${basePath}/images/hero/hero_color_purple.svg`}
            alt="Modo de color purple"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />
          <Image
            src={`${basePath}/images/hero/hero_color_blue.svg`}
            alt="Modo de color blue"
            width="800"
            height="200"
            className="img-fluid"
            style={{ marginTop: '24px' }}
          />
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
          <span className="badge badge-default ms-1">TAB</span>
          <span className="badge badge-default">ENTER</span>
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
          <p className="text-md mt-4">
            Para las variantes con multimedia, el atributo <i>alt</i> es el texto alternativo que reemplaza lo visual y
            describe el propósito del contenido sin necesidad de verlo.
            <br />
            <br />
            Si la multimedia es sólo decorativa, es decir que no aporta información clave, el atributo <i>alt</i> puede
            estar vacío para que el lector de pantalla lo ignore, por ejemplo:{' '}
            <code>{'<img alt="" aria-hidden="true">'}</code>
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {HERO_ACCESIBILITY_2}
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
        title="Cabecera de Página"
        description={[
          'La cabecera de página es el área destacada y principal de una página, pensada para captar la atención inmediata de la persona usuaria. Puede contener accionables como botones o campos de búsqueda.',
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
      />{' '}
    </>
  );
};

export default HeroHeaderDocs;
