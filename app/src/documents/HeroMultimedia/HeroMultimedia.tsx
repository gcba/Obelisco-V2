import Image from 'next/image';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const basePath = '/Obelisco-V2';
import {
  HERO_MULTIMEDIA,
  HERO_MULTIMEDIA_BOTONES,
  HERO_MULTIMEDIA_CAMPO_BUSCADOR,
  HERO_MULTIMEDIA_DESPLEGABLES,
  // HERO_MULTIMEDIA_ETIQUETAS,
  HERO_MULTIMEDIA_IMAGEN,
} from './code-views';

const ZoomContainer = ({ children }: React.PropsWithChildren) => <div style={{ zoom: 0.5 }}>{children}</div>;

const HeroMultimediaDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Con imagen',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA_IMAGEN}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  {/* <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video> */}
                  <img src={`${basePath}/images/hero/hero_multimedia.jpg`} alt="Imagen de fondo" />

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        {/* accionable botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-light">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-light">
                            Botón
                          </button>
                        </div>
                        {/* accionable botones */}
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con vídeo',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video>
                  {/* <img src={`${basePath}/images/hero/hero_multimedia.jpg`} /> */}

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        <div className="container-dropdowns">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
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
          <CodeBox codeHTML={HERO_MULTIMEDIA_BOTONES}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video>
                  {/* <img src={`${basePath}/images/hero/hero_multimedia.jpg`} /> */}

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        {/* accionable botones */}
                        <div className="btn-hero">
                          <button type="button" className="btn btn-light">
                            Botón
                          </button>
                          <button type="button" className="btn btn-outline-light">
                            Botón
                          </button>
                        </div>
                        {/* accionable botones */}
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Con campo buscador',
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA_CAMPO_BUSCADOR}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video>
                  {/* <img src={`${basePath}/images/hero/hero_multimedia.jpg`} /> */}

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>
                  {/* capa gradiente */}

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

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
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
          </CodeBox>
        </>
      ),
    },
    // {
    //   subtitle: 'Con etiquetas',
    //   content: (
    //     <>
    //       <CodeBox codeHTML={HERO_MULTIMEDIA_ETIQUETAS}>
    //         <ZoomContainer>
    //           <div className="container-headers">
    //             {/* Header logo y navegación ⬇ */}
    //             <header className="o-header hero-navbar navbar" role="banner">
    //               <LinkClient href="#main" className="skip-to-main-content-link">
    //                 Saltar al contenido principal
    //               </LinkClient>
    //               <div className="container header-container">
    //                 <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
    //                   <img
    //                     className="d-none d-xl-block"
    //                     src={`${basePath}${logo_ba_white}`}
    //                     alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
    //                   />
    //                   <img
    //                     className="d-xl-none"
    //                     src={`${basePath}${logo_ba_white}`}
    //                     alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
    //                   />
    //                 </LinkClient>
    //                 <div className="navbar-login-mobile">
    //                   <LinkClient className="btn btn-lg btn-icon  btn-outline-light">
    //                     <span className="material-symbols-rounded" aria-hidden="true">
    //                       person
    //                     </span>
    //                     <span className="btn-text">Ingresar</span>
    //                   </LinkClient>
    //                 </div>
    //                 <button
    //                   className="navbar-toggler"
    //                   type="button"
    //                   data-bs-toggle="collapse"
    //                   data-bs-target="#navbarContentMultimedia"
    //                   aria-controls="navbarContentMultimedia"
    //                   aria-expanded="false"
    //                   aria-label="Menú"
    //                 ></button>
    //                 <div className="collapse navbar-collapse" id="navbarContentMultimedia">
    //                   <div className="navbar-content">
    //                     <div className="navbar-sections">
    //                       <nav>
    //                         <p className="navbar-sections-title">Secciones</p>
    //                         <ul className="nav nav-pills nav-sections">
    //                           <li className="dropdown">
    //                             <button
    //                               type="button"
    //                               className="btn btn-dropdown btn-lg"
    //                               data-bs-toggle="dropdown"
    //                               aria-expanded="false"
    //                             >
    //                               <span className="btn-dropdown-text ellipsis-1">Áreas de Gobierno</span>
    //                               <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
    //                                 expand_more
    //                               </span>
    //                             </button>
    //                             <div className="dropdown-menu">
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item item-link">
    //                                 <span className="item-text">Ver más</span>
    //                                 <span className="material-symbols-rounded" aria-hidden="true">
    //                                   arrow_forward
    //                                 </span>
    //                               </LinkClient>
    //                             </div>
    //                           </li>
    //                           <li className="nav-item">
    //                             <LinkClient className="nav-link nav-link-lg">
    //                               <span>BA Discapacidad</span>
    //                             </LinkClient>
    //                           </li>
    //                           <li className="dropdown">
    //                             <button
    //                               type="button"
    //                               className="btn btn-dropdown btn-lg"
    //                               data-bs-toggle="dropdown"
    //                               aria-expanded="false"
    //                             >
    //                               <span className="btn-dropdown-text ellipsis-1">Trámites y servicios</span>
    //                               <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
    //                                 expand_more
    //                               </span>
    //                             </button>
    //                             <div className="dropdown-menu">
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item">
    //                                 <span className="item-text">Enlace de navegación</span>
    //                               </LinkClient>
    //                               <LinkClient className="dropdown-item item-link">
    //                                 <span className="item-text">Ver más</span>
    //                                 <span className="material-symbols-rounded" aria-hidden="true">
    //                                   arrow_forward
    //                                 </span>
    //                               </LinkClient>
    //                             </div>
    //                           </li>
    //                         </ul>
    //                       </nav>
    //                     </div>
    //                     <div className="navbar-search">
    //                       <form className="form-search">
    //                         <label htmlFor="header-search" className="form-label sr-only">
    //                           Buscador
    //                         </label>
    //                         <div className="search-container">
    //                           <input
    //                             type="search"
    //                             className="form-control input-search input-search-with-button"
    //                             id="header-search"
    //                             placeholder="Buscador"
    //                           />
    //                           <button className="reset" type="reset" aria-label="Borrar"></button>
    //                           <button className="button-search" type="submit" aria-label="Buscar"></button>
    //                         </div>
    //                       </form>
    //                     </div>
    //                     <div className="navbar-login">
    //                       <LinkClient className="btn btn-lg btn-outline-light">
    //                         <span className="material-symbols-rounded" aria-hidden="true">
    //                           person
    //                         </span>
    //                         <span className="btn-text">Ingresar</span>
    //                       </LinkClient>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="header-backdrop"></div>
    //             </header>

    //             {/* Header multimedia y contenido ⬇ */}
    //             <header className="hero-landing  ">
    //               {/* multimedia */}
    //               {/* <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video> */}
    //               <img src={`${basePath}/images/hero/hero_multimedia.jpg`} />

    //               {/* capa gradiente */}
    //               <div className="ob-bg"></div>

    //               {/* contenido, título, bajada, accionables */}
    //               <div className="container hero-landing-container">
    //                 <nav aria-label="breadcrumb">
    //                   <ol className="breadcrumb">
    //                     <li className="breadcrumb-item">
    //                       <a href="#">Inicio</a>
    //                     </li>
    //                     <li className="breadcrumb-item">
    //                       <a href="#">Página 2</a>
    //                     </li>
    //                     <li className="breadcrumb-item">
    //                       <a href="#">Página 3</a>
    //                     </li>
    //                     <li className="breadcrumb-item">
    //                       <a href="#">Página anterior</a>
    //                     </li>
    //                   </ol>
    //                 </nav>
    //                 <div className="row">
    //                   <div className="col-12 col-lg-8 w-100">
    //                     <h1>Título de la página</h1>
    //                     <p className="text-xl">
    //                       Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
    //                       brevemente su función.
    //                     </p>

    //                     {/* Accionable etiquetas */}
    //                     <div className="d-flex flex-wrap column-gap-2 row-gap-4">
    //                       <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
    //                       <span className="badge badge-s-default">Etiqueta</span>
    //                       <span className="badge badge-s-default">Etiqueta</span>
    //                       <span className="badge badge-s-default">Etiqueta</span>
    //                     </div>
    //                     {/* Accionable etiquetas */}
    //                   </div>
    //                 </div>
    //               </div>
    //               {/* contenido, título, bajada, accionables */}
    //             </header>
    //           </div>
    //         </ZoomContainer>
    //       </CodeBox>
    //     </>
    //   ),
    // },
    {
      subtitle: 'Con desplegables',
      content: (
        <>
          <CodeBox codeHTML={HERO_MULTIMEDIA_DESPLEGABLES}>
            <ZoomContainer>
              <div className="container-headers">
                {/* Header multimedia y contenido ⬇ */}
                <header className="hero-landing  ">
                  {/* multimedia */}
                  <video src={`${basePath}/images/hero/videoplayback.mp4`} autoPlay muted loop playsInline></video>
                  {/* <img src={`${basePath}/images/hero/hero_multimedia.jpg`} /> */}

                  {/* capa gradiente */}
                  <div className="ob-bg"></div>

                  {/* contenido, título, bajada, accionables */}
                  <div className="container hero-landing-container">
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="#">Inicio</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 2</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página 3</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="#">Página anterior</a>
                        </li>
                      </ol>
                    </nav>
                    <div className="row">
                      <div className="col-12 col-lg-8 w-100">
                        <h1>Título de la página</h1>
                        <p className="text-xl">
                          Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                          brevemente su función.
                        </p>

                        {/* Accionable desplegables */}
                        <div className="container-dropdowns">
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
                        </div>
                        {/* Accionable desplegables */}
                      </div>
                    </div>
                  </div>
                  {/* contenido, título, bajada, accionables */}
                </header>
              </div>
            </ZoomContainer>
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
          <p className="text-xl">Cuándo usar</p>
          <ul className="list-informative-bullet mb-3">
            <li>
              Opcionalmente puede estar presente en las páginas de área que requieran un componente principal que
              funcione como introducción al contenido multimedia (video o imagen), y que inmediatamente capte la
              atención de la persona usuaria.
            </li>
          </ul>

          <p className="text-xl">Cuándo no usar</p>
          <ul className="list-informative-bullet">
            <li>
              En caso de que no se cuente con una imagen o video de calidad que representen el área, se debe utilizar el
              componente Cabecera institucional (ver documentación).
            </li>
          </ul>
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
      subtitle: <>Imagen y Video</>,
      content: '',
    },
    {
      tertiarytitle: (
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

  return (
    <>
      <ComponentHeader
        title="Cabecera de página multimedia"
        description={[
          'La Cabecera de página Multimedia es el área principal de una página que brinda información introductoria para orientar a la persona usuaria en el propósito de la misma. El componente principal es un elemento multimedia qué puede ser de tipo imagen o video. También, puede contener accionables como botones, campos de búsqueda y otros.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        // customSections={[
        //   {
        //     title: 'Especificaciones',
        //     id: 'section-specs',
        //     sectionContent: SPECS,
        //   },
        //   {
        //     title: 'Accesibilidad',
        //     id: 'section-accessibility',
        //     sectionContent: ACCESSIBILITY,
        //   },
        // ]}
      />
    </>
  );
};

export default HeroMultimediaDocs;
