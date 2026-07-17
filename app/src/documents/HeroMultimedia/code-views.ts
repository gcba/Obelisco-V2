export const HERO_MULTIMEDIA_IMAGEN = `<div class="container-headers">
{/* <! -- Header logo y navegación ⬇ --> */}
  <header class="o-header navbar" role="banner">
      <a href="#main" class="skip-to-main-content-link">
      Saltar al contenido principal
      </a>
      <div class="container header-container">
      <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
      </a>
      <div class="navbar-login-mobile">
          <a
          class="btn btn-lg btn-icon btn-outline-tertiary"
          href="#"
          target="_blank"
          >
          <span class="material-symbols-rounded" aria-hidden="true">person</span>
          <span class="btn-text">Ingresar</span>
          </a>
      </div>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent5"
          aria-controls="navbarContent5"
          aria-expanded="false"
          aria-label="Menú"
      ></button>
      <div class="collapse navbar-collapse" id="navbarContent5">
          <div class="navbar-content">
          <div class="navbar-sections">
              <nav>
              <p class="navbar-sections-title">Secciones</p>
              <ul class="nav nav-pills nav-sections">
                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/areasdegobierno"
                          >
                              <span>Áreas de gobierno</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/vicejefatura/ba-discapacidad"
                          >
                              <span>BA Discapacidad</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg" href="#">
                          <span>Trámites y servicios</span>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div class="navbar-login">
              <a
              class="btn btn-lg btn-outline-tertiary"
              href="#"
              target="_blank"
              >
              <span class="material-symbols-rounded" aria-hidden="true">person</span>
              <span class="btn-text">Ingresar</span>
              </a>
          </div>
          </div>
      </div>
    </div>
    <div class="header-backdrop"></div>
  </header>

  <header class="hero-landing  ">
    {/* <!-- multimedia --> */}
    <img src="/Obelisco-V2/images/hero/hero_multimedia.jpg" alt="Imagen de fondo" />
    {/* <!-- multimedia --> */}

    {/* <!-- capa gradiente --> */}
    <div class="ob-bg"></div>
    {/* <!-- capa gradiente --> */}

    {/* <!-- contenido, título, bajada, accionables --> */}
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
          {/* accionable campo buscador */}
          <div class="d-grid d-sm-grid d-md-flex flex-wrap search-container">
            {/* search wrapper */}
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
              {/* input buscador */}
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
              {/* input buscador */}
            </div>
            {/* search wrapper */}
          </div>
          {/* accionable campo buscador */}
        </div>
      </div>
    </div>
    {/* <!-- contenido, título, bajada, accionables --> */}


  </header>


</div>
`;

export const HERO_MULTIMEDIA_CAMPO_BUSCADOR = `<div class="container-headers">
{/* <! -- Header logo y navegación ⬇ --> */}
  <header class="o-header navbar" role="banner">
      <a href="#main" class="skip-to-main-content-link">
      Saltar al contenido principal
      </a>
      <div class="container header-container">
      <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
      </a>
      <div class="navbar-login-mobile">
          <a
          class="btn btn-lg btn-icon btn-outline-tertiary"
          href="#"
          target="_blank"
          >
          <span class="material-symbols-rounded" aria-hidden="true">person</span>
          <span class="btn-text">Ingresar</span>
          </a>
      </div>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent5"
          aria-controls="navbarContent5"
          aria-expanded="false"
          aria-label="Menú"
      ></button>
      <div class="collapse navbar-collapse" id="navbarContent5">
          <div class="navbar-content">
          <div class="navbar-sections">
              <nav>
              <p class="navbar-sections-title">Secciones</p>
              <ul class="nav nav-pills nav-sections">
                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/areasdegobierno"
                          >
                              <span>Áreas de gobierno</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/vicejefatura/ba-discapacidad"
                          >
                              <span>BA Discapacidad</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg" href="#">
                          <span>Trámites y servicios</span>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div class="navbar-login">
              <a
              class="btn btn-lg btn-outline-tertiary"
              href="#"
              target="_blank"
              >
              <span class="material-symbols-rounded" aria-hidden="true">person</span>
              <span class="btn-text">Ingresar</span>
              </a>
          </div>
          </div>
      </div>
    </div>
    <div class="header-backdrop"></div>
  </header>

  <header class="hero-landing  ">
    {/* <!-- multimedia --> */}
    <video src={'/images/hero/videoplayback.mp4'} autoPlay muted loop playsInline></video>
    {/* <!-- multimedia --> */}

    {/* <!-- capa gradiente --> */}
    <div class="ob-bg"></div>
    {/* <!-- capa gradiente --> */}

    {/* <!-- contenido, título, bajada, accionables --> */}
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
          {/* accionable campo buscador */}
          <div class="d-grid d-sm-grid d-md-flex flex-wrap search-container">
            {/* search wrapper */}
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
              {/* input buscador */}
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
              {/* input buscador */}
            </div>
            {/* search wrapper */}
          </div>
          {/* accionable campo buscador */}
        </div>
      </div>
    </div>
    {/* <!-- contenido, título, bajada, accionables --> */}

  </header>
</div>
`;

export const HERO_MULTIMEDIA_BOTONES = `<div class="container-headers">
{/* <!-- Header logo y navegación ⬇ --> */}
  <header class="o-header navbar" role="banner">
      <a href="#main" class="skip-to-main-content-link">
      Saltar al contenido principal
      </a>
      <div class="container header-container">
      <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
      </a>
      <div class="navbar-login-mobile">
          <a
          class="btn btn-lg btn-icon btn-outline-tertiary"
          href="#"
          target="_blank"
          >
          <span class="material-symbols-rounded" aria-hidden="true">person</span>
          <span class="btn-text">Ingresar</span>
          </a>
      </div>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent5"
          aria-controls="navbarContent5"
          aria-expanded="false"
          aria-label="Menú"
      ></button>
      <div class="collapse navbar-collapse" id="navbarContent5">
          <div class="navbar-content">
          <div class="navbar-sections">
              <nav>
              <p class="navbar-sections-title">Secciones</p>
              <ul class="nav nav-pills nav-sections">
                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/areasdegobierno"
                          >
                              <span>Áreas de gobierno</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/vicejefatura/ba-discapacidad"
                          >
                              <span>BA Discapacidad</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg" href="#">
                          <span>Trámites y servicios</span>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div class="navbar-login">
              <a
              class="btn btn-lg btn-outline-tertiary"
              href="#"
              target="_blank"
              >
              <span class="material-symbols-rounded" aria-hidden="true">person</span>
              <span class="btn-text">Ingresar</span>
              </a>
          </div>
          </div>
      </div>
    </div>
    <div class="header-backdrop"></div>
  </header>

  <header class="hero-landing  ">
    {/* <!-- multimedia --> */}
    <video src={'/images/hero/videoplayback.mp4'} autoPlay muted loop playsInline></video>
    {/* <!-- multimedia --> */}

    {/* <!-- capa gradiente --> */}
    <div class="ob-bg"></div>
    {/* <!-- capa gradiente --> */}

    {/* <!-- contenido, título, bajada, accionables --> */}
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
          {/* accionable botones */}
          <div class="btn-hero">
            <button type="button" class="btn btn-light">Botón</button>
            <button type="button" class="btn btn-outline-light">Botón</button>
          </div>
          {/* accionable botones */}
        </div>
      </div>
    </div>
    {/* <!-- contenido, título, bajada, accionables --> */}


  </header>


</div>
`;

export const HERO_MULTIMEDIA_ETIQUETAS = `<div class="container-headers">
{/* <!-- Header logo y navegación ⬇ --> */}
  <header class="o-header navbar" role="banner">
      <a href="#main" class="skip-to-main-content-link">
      Saltar al contenido principal
      </a>
      <div class="container header-container">
      <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
      </a>
      <div class="navbar-login-mobile">
          <a
          class="btn btn-lg btn-icon btn-outline-tertiary"
          href="#"
          target="_blank"
          >
          <span class="material-symbols-rounded" aria-hidden="true">person</span>
          <span class="btn-text">Ingresar</span>
          </a>
      </div>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent5"
          aria-controls="navbarContent5"
          aria-expanded="false"
          aria-label="Menú"
      ></button>
      <div class="collapse navbar-collapse" id="navbarContent5">
          <div class="navbar-content">
          <div class="navbar-sections">
              <nav>
              <p class="navbar-sections-title">Secciones</p>
              <ul class="nav nav-pills nav-sections">
                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/areasdegobierno"
                          >
                              <span>Áreas de gobierno</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/vicejefatura/ba-discapacidad"
                          >
                              <span>BA Discapacidad</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg" href="#">
                          <span>Trámites y servicios</span>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div class="navbar-login">
              <a
              class="btn btn-lg btn-outline-tertiary"
              href="#"
              target="_blank"
              >
              <span class="material-symbols-rounded" aria-hidden="true">person</span>
              <span class="btn-text">Ingresar</span>
              </a>
          </div>
          </div>
      </div>
    </div>
    <div class="header-backdrop"></div>
  </header>

  <header class="hero-landing  ">
    {/* <!-- multimedia --> */}
    <video src={'/images/hero/videoplayback.mp4'} autoPlay muted loop playsInline></video>
    {/* <!-- multimedia --> */}

    {/* <!-- capa gradiente --> */}
    <div class="ob-bg"></div>
    {/* <!-- capa gradiente --> */}

    {/* <!-- contenido, título, bajada, accionables --> */}
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
          {/* Accionable etiquetas */}
          <div className="d-flex flex-wrap column-gap-2 row-gap-4">
            <span className="me-3 fw-semibold">Texto de las etiquetas: </span>
            <span className="badge badge-s-default">Etiqueta</span>
            <span className="badge badge-s-default">Etiqueta</span>
            <span className="badge badge-s-default">Etiqueta</span>
          </div>
          {/* Accionable etiquetas */}
        </div>
      </div>
    </div>
    {/* <!-- contenido, título, bajada, accionables --> */}


  </header>


</div>
`;

export const HERO_MULTIMEDIA_DESPLEGABLES = `<div class="container-headers">
{/* <!-- Header logo y navegación ⬇ --> */}
  <header class="o-header navbar" role="banner">
      <a href="#main" class="skip-to-main-content-link">
      Saltar al contenido principal
      </a>
      <div class="container header-container">
      <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
      </a>
      <div class="navbar-login-mobile">
          <a
          class="btn btn-lg btn-icon btn-outline-tertiary"
          href="#"
          target="_blank"
          >
          <span class="material-symbols-rounded" aria-hidden="true">person</span>
          <span class="btn-text">Ingresar</span>
          </a>
      </div>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent5"
          aria-controls="navbarContent5"
          aria-expanded="false"
          aria-label="Menú"
      ></button>
      <div class="collapse navbar-collapse" id="navbarContent5">
          <div class="navbar-content">
          <div class="navbar-sections">
              <nav>
              <p class="navbar-sections-title">Secciones</p>
              <ul class="nav nav-pills nav-sections">
                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/areasdegobierno"
                          >
                              <span>Áreas de gobierno</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/vicejefatura/ba-discapacidad"
                          >
                              <span>BA Discapacidad</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg" href="#">
                          <span>Trámites y servicios</span>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div class="navbar-login">
              <a
              class="btn btn-lg btn-outline-tertiary"
              href="#"
              target="_blank"
              >
              <span class="material-symbols-rounded" aria-hidden="true">person</span>
              <span class="btn-text">Ingresar</span>
              </a>
          </div>
          </div>
      </div>
    </div>
    <div class="header-backdrop"></div>
  </header>

  <header class="hero-landing  ">
    {/* <!-- multimedia --> */}
    <video src={'/images/hero/videoplayback.mp4'} autoPlay muted loop playsInline></video>
    {/* <!-- multimedia --> */}

    {/* <!-- capa gradiente --> */}
    <div class="ob-bg"></div>
    {/* <!-- capa gradiente --> */}

    {/* <!-- contenido, título, bajada, accionables --> */}
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
              {/* Accionable desplegables */}
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
          {/* Accionable desplegables */}
        </div>
      </div>
    </div>
    {/* <!-- contenido, título, bajada, accionables --> */}


  </header>


</div>
`;

export const HERO_MULTIMEDIA = `<div class="container-headers">
{/* <! -- Header logo y navegación ⬇ --> */}
  <header class="o-header navbar" role="banner">
      <a href="#main" class="skip-to-main-content-link">
      Saltar al contenido principal
      </a>
      <div class="container header-container">
      <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
      </a>
      <div class="navbar-login-mobile">
          <a
          class="btn btn-lg btn-icon btn-outline-tertiary"
          href="#"
          target="_blank"
          >
          <span class="material-symbols-rounded" aria-hidden="true">person</span>
          <span class="btn-text">Ingresar</span>
          </a>
      </div>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent5"
          aria-controls="navbarContent5"
          aria-expanded="false"
          aria-label="Menú"
      ></button>
      <div class="collapse navbar-collapse" id="navbarContent5">
          <div class="navbar-content">
          <div class="navbar-sections">
              <nav>
              <p class="navbar-sections-title">Secciones</p>
              <ul class="nav nav-pills nav-sections">
                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/areasdegobierno"
                          >
                              <span>Áreas de gobierno</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg"
                          href="https://buenosaires.gob.ar/vicejefatura/ba-discapacidad"
                          >
                              <span>BA Discapacidad</span>
                          </a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link nav-link-lg" href="#">
                          <span>Trámites y servicios</span>
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
          <div class="navbar-login">
              <a
              class="btn btn-lg btn-outline-tertiary"
              href="#"
              target="_blank"
              >
              <span class="material-symbols-rounded" aria-hidden="true">person</span>
              <span class="btn-text">Ingresar</span>
              </a>
          </div>
          </div>
      </div>
    </div>
    <div class="header-backdrop"></div>
  </header>

  <header class="hero-landing  ">
    {/* <!-- multimedia --> */}
    <video src='/images/hero/videoplayback.mp4' autoPlay muted loop playsInline></video>
    {/* <!-- multimedia --> */}

    {/* <!-- capa gradiente --> */}
    <div class="ob-bg"></div>
    {/* <!-- capa gradiente --> */}

    {/* <!-- contenido, título, bajada, accionables --> */}
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
          {/* accionable campo buscador */}
          <div class="d-grid d-sm-grid d-md-flex flex-wrap search-container">
            {/* search wrapper */}
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
              {/* input buscador */}
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
              {/* input buscador */}
            </div>
            {/* search wrapper */}
          </div>
          {/* accionable campo buscador */}
        </div>
      </div>
    </div>
    {/* <!-- contenido, título, bajada, accionables --> */}


  </header>


</div>
`;
