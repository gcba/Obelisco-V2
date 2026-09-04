export const HERO_MULTIMEDIA_IMAGEN = `<div class="container-headers">
  <header class="hero-landing">
    <img src="/Obelisco-V2/images/hero/hero_multimedia.jpg" alt="Imagen de fondo" />
    <div class="ob-bg"></div>
    <div class="container hero-landing-container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Inicio</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 2</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 3</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página anterior</a>
          </li>
        </ol>
      </nav>

      <div class="row">
        <div class="col-12 col-lg-8 w-100">
          <h1>Título de la página</h1>
          <p class="text-xl">
            Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
            brevemente su función.
          </p>
          <div class="d-grid d-sm-grid d-md-flex flex-wrap search-container">
            <div class="search-wrapper">
              <label htmlFor="search-home" class="sr-only">
                Buscar
              </label>
              <input
                type="text"
                id="search-home"
                name="search-home"
                maxLength={100}
                autoComplete="off"
                class="form-control"
                placeholder="¿En qué te podemos ayudar?"
              />
              <div class="search-btn-container">
                <button class="btn btn-lg btn-primary btn-search">
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
              <div class="search-results bg-light">
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
`;

export const HERO_MULTIMEDIA_CAMPO_BUSCADOR = `<div class="container-headers">
  <header class="hero-landing">
    <video src={'/images/hero/videoplayback.mp4'} autoPlay muted loop playsInline></video>
    <div class="ob-bg"></div>
    <div class="container hero-landing-container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Inicio</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 2</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 3</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página anterior</a>
          </li>
        </ol>
      </nav>

      <div class="row">
        <div class="col-12 col-lg-8 w-100">
          <h1>Título de la página</h1>
          <p class="text-xl">
            Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
            brevemente su función.
          </p>
          <div class="d-grid d-sm-grid d-md-flex flex-wrap search-container">
            <div class="search-wrapper">
              <label for="search-home" class="sr-only">
                Buscar
              </label>
              <input
                type="text"
                id="search-home"
                name="search-home"
                maxlength="100"
                autocomplete="off"
                class="form-control"
                placeholder="¿En qué te podemos ayudar?"
              />
              <div class="search-btn-container">
                <button class="btn btn-lg btn-primary btn-search">
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
              <div class="search-results bg-light">
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
`;

export const HERO_MULTIMEDIA_BOTONES = `<div class="container-headers">
  <header class="hero-landing">
    <video src={'/images/hero/videoplayback.mp4'} autoPlay muted loop playsInline></video>
    <div class="ob-bg"></div>
    <div class="container hero-landing-container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Inicio</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 2</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 3</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página anterior</a>
          </li>
        </ol>
      </nav>

      <div class="row">
        <div class="col-12 col-lg-8 w-100">
          <h1>Título de la página</h1>
          <p class="text-xl">
            Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
            brevemente su función.
          </p>
          <div class="btn-hero">
            <button type="button" class="btn btn-light">Botón</button>
            <button type="button" class="btn btn-outline-light">Botón</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
`;

export const HERO_MULTIMEDIA_ETIQUETAS = `<div class="container-headers">
  <header class="hero-landing">
    <video src={'/images/hero/videoplayback.mp4'} autoPlay muted loop playsInline></video>
    <div class="ob-bg"></div>
    <div class="container hero-landing-container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Inicio</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 2</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 3</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página anterior</a>
          </li>
        </ol>
      </nav>

      <div class="row">
        <div class="col-12 col-lg-8 w-100">
          <h1>Título de la página</h1>
          <p class="text-xl">
            Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
            brevemente su función.
          </p>
          <div className="d-flex flex-wrap column-gap-2 row-gap-4">
            <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
            <span className="badge badge-s-default">Etiqueta</span>
            <span className="badge badge-s-default">Etiqueta</span>
            <span className="badge badge-s-default">Etiqueta</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
`;

export const HERO_MULTIMEDIA_DESPLEGABLES = `<div class="container-headers">
  <header class="hero-landing">
    <video src={'/images/hero/videoplayback.mp4'} autoPlay muted loop playsInline></video>
    <div class="ob-bg"></div>
      <div class="container hero-landing-container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Inicio</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Página 2</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Página 3</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Página anterior</a>
              </li>
            </ol>
          </nav>
          <div class="row">
            <div class="col-12 col-lg-8 w-100">
              <h1>Título de la página</h1>
              <p class="text-xl">
                Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
                brevemente su función.
              </p>
              <div class="d-grid d-sm-flex flex-wrap column-gap-2 row-gap-4">
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-dropdown btn-dropdown-border btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="btn-dropdown-text ellipsis-1">Desplegable</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                      expand_more
                    </span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                  </div>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-dropdown btn-dropdown-border btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="btn-dropdown-text ellipsis-1">Desplegable</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                      expand_more
                    </span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                  </div>
                </div>
                <div class="dropdown">
                  <button
                    type="button"
                    class="btn btn-dropdown btn-dropdown-border btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span class="btn-dropdown-text ellipsis-1">Desplegable</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                      expand_more
                    </span>
                  </button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                      <span class="item-text">Opción de navegación</span>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
`;

export const HERO_MULTIMEDIA = `<div class="container-headers">
  <header class="hero-landing">
    <video src='/images/hero/videoplayback.mp4' autoPlay muted loop playsInline></video>
    <div class="ob-bg"></div>
    <div class="container hero-landing-container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#">Inicio</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 2</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página 3</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">Página anterior</a>
          </li>
        </ol>
      </nav>

      <div class="row">
        <div class="col-12 col-lg-8 w-100">
          <h1>Título de la página</h1>
          <p class="text-xl">
            Este es el subtítulo de la página que puede contener hasta 3 líneas de texto, describiendo
            brevemente su función.
          </p>
          <div class="d-grid d-sm-grid d-md-flex flex-wrap search-container">
            <div class="search-wrapper">
              <label htmlFor="search-home" class="sr-only">
                Buscar
              </label>
              <input
                type="text"
                id="search-home"
                name="search-home"
                maxLength={100}
                autoComplete="off"
                class="form-control"
                placeholder="¿En qué te podemos ayudar?"
              />
              <div class="search-btn-container">
                <button class="btn btn-lg btn-primary btn-search">
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
              <div class="search-results bg-light">
                <div>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" class="list-link-result">
                    <span class="material-symbols-rounded">search</span>
                    Enlace predeterminado
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</div>
`;
