import { basePath } from '@/utils';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
// import LinkClient from '@/components/LinkClient';
import CriteriosWCAG from '@/components/CriteriosWCAG';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

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
            Se ubica siempre en la parte superior del sitio, inmediatamente debajo del Encabezado <i>(header)</i>{' '}
            principal, actuando como punto de inicio y orientación del contenido de la página.
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
            izquierda a derecha en sentido horizontal de los elementos como formas y multimedia.
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
            vertical de la estructura. Esto quiere decir que, en el orden de lectura, el contenido textual, tanto título
            como descripción, se van a ubicar primeros, y por debajo la multimedia.
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
            Al igual que en dispositivos <i>tablet</i> , la cabecera ocupa el 100% del ancho de la pantalla, incluyendo
            los márgenes, manteniendo una disposición vertical de la estructura.
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
      title: 'Personalización',
      content: (
        <>
          <Image
            src={`${basePath}/images/hero/hero_disposicion_6.svg`}
            alt="Personalización"
            width="800"
            height="200"
            className="img-fluid mt-2"
            style={{ marginBottom: '32px' }}
          />

          <p className="d-flex text-md fw-semibold mt-4">
            <span className="pe-1 material-symbols-rounded" aria-hidden="true">
              info
            </span>
            Uso del componente en Figma
          </p>

          <p className="text-md">
            Para los diseñadores en Figma, el componente tiene la posibilidad de intercambiar el color de fondo por
            alguno de los seis colores definidos que pertenecen a la paleta de colores de Obelisco. Para hacerlo deben
            seguir los siguientes pasos:
          </p>

          <ol>
            <li>
              Seleccionar el tema denominado &quot;Color&quot; desde las propiedades del componente. Por defecto, les
              aparecerá el color cyan.{' '}
            </li>
            <li>
              Con el componente seleccionado, dirigirse a las propiedades de color del componente donde van a encontrar
              la variables d colores asignados al texto, al fondo y otros. Entre ellas van a encontrar una variable
              funcional llamada &quot;hero/bg-cyan&quot;.
            </li>
            <li>
              Intercambiá el <i>slot</i>, utilizando la propiedad de <i>instance swap</i> del encabezado <i>(header)</i>
              , por el logo de la marca o el activo digital.
            </li>
          </ol>
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
          <p className="text-md mb-2">
            El modo Color incluye 6 opciones intercambiables desde las propiedades del componente:
          </p>
          <div className="d-flex gap-2">
            <span className="badge text-bg-light py-1 px-2 text-lowercase">$hero/bg-blue</span>
            <span className="badge text-bg-light py-1 px-2 text-lowercase">$hero/bg-sky</span>
            <span className="badge text-bg-light py-1 px-2 text-lowercase">$hero/bg-cyan</span>
          </div>
          <div className="d-flex mt-2  gap-2">
            <span className="badge text-bg-light py-1 px-2 text-lowercase">$hero/bg-yellow</span>
            <span className="badge text-bg-light py-1 px-2 text-lowercase">$hero/bg-red</span>
            <span className="badge text-bg-light py-1 px-2 text-lowercase">$hero/bg-purple</span>
          </div>
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
          <CriteriosWCAG
            list={['1.3.1', '1.4.11', '1.4.3', '1.4.4', '1.4.10', '2.1.1', '2.1.2', '2.4.4', '2.4.7', '2.4.8', '3.2.3']}
            customItem={[
              {
                customId: '2.4.8',
                customDescripcion:
                  'La información sobre la ubicación del usuario dentro de un conjunto de páginas web está disponible.',
              },
              {
                customId: '3.2.3',
                customDescripcion:
                  'Los mecanismos de navegación que se repiten en varias páginas web dentro de un conjunto de páginas aparecen en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio.',
              },
            ]}
          />
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
            id: 'specs',
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
