import Image from 'next/image';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const basePath = '/Obelisco-V2';

const sections = [
  {
    title: '4/4 Input Buscador ',
    content: (
      <div className="col-12">
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- input buscador --> */}
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
                  {/* <!-- input buscador --> */}
                </div>
                {/* search wrapper */}
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '3/4 Etiquetas',
    content: (
      <div className="col-12">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo brevemente
                  su función.
                </p>
              </div>

              <div className="d-flex flex-wrap column-gap-2 row-gap-4">
                <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '2/4 Botones',
    content: (
      <div className="col-12">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="btn-hero">
                <button type="button" className="btn btn-secondary">
                  Botón
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Botón
                </button>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '1/4 Desplegables',
    content: (
      <div className="col-12">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

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
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '1/2 Variante Video',
    content: (
      <div className="col-12">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="d-grid d-sm-grid d-md-flex flex-wrap column-gap-2 row-gap-4">
                {/* search wrapper */}
                <div className="search-wrapper" style={{ position: 'relative' }}>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- input buscador --> */}
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
                  {/* <!-- input buscador --> */}
                </div>
                {/* search wrapper */}
              </div>
            </div>
          </div>

          <div className="aside">
            <video src={`${basePath}/images/video_hero_header.mp4`} autoPlay muted loop controls>
              Your browser does not support the video tag.
            </video>
          </div>
        </header>
        <div className="container">CONTAINER:::::</div>
      </div>
    ),
  },
  {
    title: '2/2 Variante Imagen',
    content: (
      <div className="col-12">
        <header className="hero">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5 pe-md-1">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="d-grid d-sm-grid d-md-flex flex-wrap column-gap-2 row-gap-4">
                {/* search wrapper */}
                <div className="search-wrapper" style={{ position: 'relative' }}>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- input buscador --> */}
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
                  {/* <!-- input buscador --> */}
                </div>
                {/* search wrapper */}
              </div>
            </div>
          </div>

          <div className="aside">
            <Image src="https://picsum.photos/800/600" alt="Hero" fill />
          </div>
        </header>
        <div className="container">CONTAINER:::::</div>
      </div>
    ),
  },
  {
    title: '4/4 Input Buscador ',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-cyan">
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- input buscador --> */}
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
                  {/* <!-- input buscador --> */}
                </div>
                {/* search wrapper */}
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '3/4 Etiquetas',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-cyan">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo brevemente
                  su función.
                </p>
              </div>

              <div className="d-flex flex-wrap column-gap-2 row-gap-4">
                <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '2/4 Botones',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-cyan">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="btn-hero">
                <button type="button" className="btn btn-secondary">
                  Botón
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Botón
                </button>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '1/4 Desplegables',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-cyan">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

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
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '4/4 Input Buscador ',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-yellow">
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- input buscador --> */}
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
                  {/* <!-- input buscador --> */}
                </div>
                {/* search wrapper */}
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '3/4 Etiquetas',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-yellow">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo brevemente
                  su función.
                </p>
              </div>

              <div className="d-flex flex-wrap column-gap-2 row-gap-4">
                <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '2/4 Botones',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-yellow">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="btn-hero">
                <button type="button" className="btn btn-secondary">
                  Botón
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Botón
                </button>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '1/4 Desplegables',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-yellow">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

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
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '4/4 Input Buscador ',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-purple">
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- input buscador --> */}
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
                  {/* <!-- input buscador --> */}
                </div>
                {/* search wrapper */}
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '3/4 Etiquetas',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-purple">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo brevemente
                  su función.
                </p>
              </div>

              <div className="d-flex flex-wrap column-gap-2 row-gap-4">
                <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '2/4 Botones',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-purple">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="btn-hero">
                <button type="button" className="btn btn-secondary">
                  Botón
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Botón
                </button>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '1/4 Desplegables',
    content: (
      <div className="col-12">
        <header className="hero  bg-content-hero-purple">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

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
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '4/4 Input Buscador ',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-light">
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- input buscador --> */}
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
                  {/* <!-- input buscador --> */}
                </div>
                {/* search wrapper */}
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-muted"></div>
        </header>
      </div>
    ),
  },
  {
    title: '3/4 Etiquetas',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-light">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo brevemente
                  su función.
                </p>
              </div>

              <div className="d-flex flex-wrap column-gap-2 row-gap-4">
                <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-muted"></div>
        </header>
      </div>
    ),
  },
  {
    title: '2/4 Botones',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-light">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

              <div className="btn-hero">
                <button type="button" className="btn btn-secondary">
                  Botón
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Botón
                </button>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-muted"></div>
        </header>
      </div>
    ),
  },
  {
    title: '1/4 Desplegables',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-light">
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
                <h1 className="mb-3">Encabezado de la página</h1>
                <p className="lead m-0">
                  Brinda las herramientas necesarias para lograr el bienestar de perros y gatos, además de la
                  convivencia armónica y responsable de las mascotas y sus responsables en el espacio público.
                </p>
              </div>

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
            </div>
          </div>

          <div className="aside bg-aside-hero-muted"></div>
        </header>
      </div>
    ),
  },
  {
    title: '4/4 Input Buscador ',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-dark">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M11.3137 10.0598H10.6553L10.422 9.83477C11.422 8.6681 11.9387 7.07643 11.6553 5.38477C11.2637 3.0681 9.33034 1.2181 6.99701 0.934766C3.47201 0.501433 0.505339 3.4681 0.938672 6.9931C1.22201 9.32643 3.07201 11.2598 5.38867 11.6514C7.08034 11.9348 8.67201 11.4181 9.83867 10.4181L10.0637 10.6514V11.3098L13.6053 14.8514C13.947 15.1931 14.5053 15.1931 14.847 14.8514C15.1887 14.5098 15.1887 13.9514 14.847 13.6098L11.3137 10.0598ZM6.31367 10.0598C4.23867 10.0598 2.56367 8.38477 2.56367 6.30977C2.56367 4.23477 4.23867 2.55977 6.31367 2.55977C8.38867 2.55977 10.0637 4.23477 10.0637 6.30977C10.0637 8.38477 8.38867 10.0598 6.31367 10.0598Z"
                          fill="white"
                        ></path>
                      </svg>
                    </button>
                  </div>

                  {/* <!-- input buscador --> */}
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
                  {/* <!-- input buscador --> */}
                </div>
                {/* search wrapper */}
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '3/4 Etiquetas',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-dark">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
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
                  Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo brevemente
                  su función.
                </p>
              </div>

              <div className="d-flex flex-wrap column-gap-2 row-gap-4">
                <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
                <span className="badge badge-default">Etiqueta</span>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '2/4 Botones',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-dark">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
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

              <div className="btn-hero">
                <button type="button" className="btn btn-light">
                  Botón
                </button>

                <button type="button" className="btn btn-outline-light">
                  Botón
                </button>
              </div>
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
  {
    title: '1/4 Desplegables',
    content: (
      <div className="col-12">
        <header className="hero bg-content-hero-dark">
          <div className="content wave">
            <div className="d-flex flex-column row-gap-4 py-3 py-lg-5">
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
            </div>
          </div>

          <div className="aside bg-aside-hero-dark"></div>
        </header>
      </div>
    ),
  },
];

const HeroTemplate: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="HeroTemplate"
        description={[
          'En esta sección, aprenderás cómo instalar y comenzar a utilizar la librería de estilos de componentes Obelisco V2 en tus proyectos. Siguiendo unos sencillos pasos, podrás integrar nuestros componentes estilizados en cualquier aplicación web, ya sea que trabajes con React, Angular, o cualquier otra tecnología.',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="none" />
    </>
  );
};

export default HeroTemplate;
