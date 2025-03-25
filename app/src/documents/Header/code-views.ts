export const HEADER_LOGIN_ONE_LINE_SEARCH = `
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
        data-bs-target="#navbarContent1"
        aria-controls="navbarContent1"
        aria-expanded="false"
        aria-label="Menú"
        ></button>
        <div class="collapse navbar-collapse" id="navbarContent1">
        <div class="navbar-content">
            <div class="navbar-sections">
            <nav>
                <p class="navbar-sections-title">Secciones</p>
                <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                    <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                    </span>
                    </button>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                        <span class="item-text">Ver más</span>
                        <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                    </a>
                </li>
                <li class="dropdown">
                    <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                    </span>
                    </button>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                        <span class="item-text">Ver más</span>
                        <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                    </div>
                </li>
                </ul>
            </nav>
            </div>
            <div class="navbar-search">
            <form class="form-search">
                <label for="header-search" class="form-label sr-only">Buscador</label>
                <div class='search-container'>
                <input type="search" class="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
                </div>
            </form>
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
`;

export const HEADER_BANNER = ` 
{/* header banner */}
<div class="header-banner">
    <img
    class="header-banner-img"
    src='/Obelisco-V2/images/header/logo_BA_banner.svg'
    alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
    />
    <p class="text-sm">Gobierno de la Ciudad de Buenos Aires</p>
</div>
{/* header banner */}
<header class="o-header o-header_banner navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
    Saltar al contenido principal
    </a>
    <div class="container header-container">
    <a href="https://www.estadisticaciudad.gob.ar/eyc/" class="navbar-brand">
        <img
        class="d-none d-xl-block"
        src='/Obelisco-V2/images/logo_ba.svg'
        alt="LOGO BA"
        />
        <img
        class="d-xl-none"
        src='/Obelisco-V2/images/logo_ba_mobile.svg'
        alt="LOGO BA"
        />
    </a>
    <div class="navbar-login-mobile">
        <a class="btn btn-lg btn-icon btn-outline-tertiary">
        <span class="material-symbols-rounded" aria-hidden="true">
            person
        </span>
        <span class="btn-text">Ingresar</span>
        </a>
    </div>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent1"
        aria-controls="navbarContent1"
        aria-expanded="false"
        aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent1">
        <div class="navbar-content">
        <div class="navbar-sections">
            <nav>
            <p class="navbar-sections-title">Secciones</p>
            <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">
                        arrow_forward
                    </span>
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">
                        arrow_forward
                    </span>
                    </a>
                </div>
                </li>
            </ul>
            </nav>
        </div>
        <div class="navbar-search">
            <form class="form-search">
            <label for="header-search" class="form-label sr-only">
                Buscador
            </label>
            <div class="search-container">
                <input
                type="search"
                class="form-control input-search input-search-with-button"
                id="header-search"
                placeholder="Buscador"
                />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
            </div>
            </form>
        </div>
        <div class="navbar-login">
            <a class="btn btn-lg btn-outline-tertiary">
            <span class="material-symbols-rounded" aria-hidden="true">
                person
            </span>
            <span class="btn-text">Ingresar</span>
            </a>
        </div>
        </div>
    </div>
    </div>
    <div class="header-backdrop"></div>
</header>`;

export const HEADER_LOGIN_ONE_LINE = `
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
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
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
`;
export const HEADER_LOGIN_TWO_LINES_SEARCH = `
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
        data-bs-target="#navbarContent2"
        aria-controls="navbarContent2"
        aria-expanded="false"
        aria-label="Menú"
        ></button>
        <div class="collapse navbar-collapse" id="navbarContent2">
        <div class="navbar-content">
            <div class="navbar-search">
            <form class="form-search">
                <label for="header-search" class="form-label sr-only">Buscador</label>
                <div class='search-container'>
                <input type="search" class="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
                </div>
            </form>
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
        <div class="navbar-content-extended">
            <nav>
            <p class="navbar-sections-title">Secciones</p>
            <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_LOGIN_TWO_LINES = `
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
        data-bs-target="#navbarContent6"
        aria-controls="navbarContent6"
        aria-expanded="false"
        aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent6">
        <div class="navbar-content">
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
        <div class="navbar-content-extended">
        <nav>
            <p class="navbar-sections-title">Secciones</p>
            <ul class="nav nav-pills nav-sections">
            <li class="dropdown">
                <button
                type="button"
                class="btn btn-dropdown btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                </span>
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                </a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            <li class="dropdown">
                <button
                type="button"
                class="btn btn-dropdown btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                </span>
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                </a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            </ul>
        </nav>
        </div>
    </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_ONE_LINE_SEARCH = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
        Saltar al contenido principal
    </a>
    <div class="container header-container">
        <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        </a>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent3"
        aria-controls="navbarContent3"
        aria-expanded="false"
        aria-label="Menú"
        ></button>
        <div class="collapse navbar-collapse" id="navbarContent3">
        <div class="navbar-content">
            <div class="navbar-sections">
            <nav>
                <p class="navbar-sections-title">Secciones</p>
                <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                    <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                    </span>
                    </button>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                        <span class="item-text">Ver más</span>
                        <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                    </a>
                </li>
                <li class="dropdown">
                    <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                    </span>
                    </button>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                        <span class="item-text">Ver más</span>
                        <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                    </div>
                </li>
                </ul>
            </nav>
            </div>
            <div class="navbar-search">
            <form class="form-search">
                <label for="header-search" class="form-label sr-only">Buscador</label>
                <div class='search-container'>
                <input type="search" class="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
                </div>
            </form>
            </div>
            <div class="navbar-user">
            <div class="dropdown">
                <button type="button" class="btn btn-dropdown btn-lg btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                <span class="material-symbols-rounded" aria-hidden="true">person</span>
                <span class="btn-dropdown-text ellipsis-1">Perfil</span>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Notificaciones</span>
                    <span class="item-notifications"></span>
                </a>
                <a class="dropdown-item item-danger" href="#">
                    <span class="item-text">Cerrar sesión</span>
                    <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                </a>
                </div>
            </div>
            </div>
        </div>
        <div class="navbar-user-mobile">
            <nav>
            <p class="navbar-user-mobile-title">Perfil</p>
            <ul class="nav flex-column nav-pills nav-user">
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#">
                <span>Notificaciones</span>
                <span class="item-notifications"></span></a>
                </li>
                <li class="nav-item"><a class="nav-link nav-link-danger nav-link-lg" href="#">
                <div class="nav-icon">
                    <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                    <span>Cerrar sesión</span>
                </div></a>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_ONE_LINE = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
        Saltar al contenido principal
    </a>
    <div class="container header-container">
        <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        </a>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent7"
        aria-controls="navbarContent7"
        aria-expanded="false"
        aria-label="Menú"
        ></button>
        <div class="collapse navbar-collapse" id="navbarContent7">
        <div class="navbar-content">
            <div class="navbar-sections">
            <nav>
                <p class="navbar-sections-title">Secciones</p>
                <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                    <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                    </span>
                    </button>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                        <span class="item-text">Ver más</span>
                        <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                    </a>
                </li>
                <li class="dropdown">
                    <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                    </span>
                    </button>
                    <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                        <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                        <span class="item-text">Ver más</span>
                        <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                    </div>
                </li>
                </ul>
            </nav>
            </div>
            <div class="navbar-user">
            <div class="dropdown">
                <button type="button" class="btn btn-dropdown btn-lg btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                <span class="material-symbols-rounded" aria-hidden="true">person</span>
                <span class="btn-dropdown-text ellipsis-1">Perfil</span>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Notificaciones</span>
                    <span class="item-notifications"></span>
                </a>
                <a class="dropdown-item item-danger" href="#">
                    <span class="item-text">Cerrar sesión</span>
                    <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                </a>
                </div>
            </div>
            </div>
        </div>
        <div class="navbar-user-mobile">
            <nav>
            <p class="navbar-user-mobile-title">Perfil</p>
            <ul class="nav flex-column nav-pills nav-user">
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#">
                <span>Notificaciones</span>
                <span class="item-notifications"></span></a>
                </li>
                <li class="nav-item"><a class="nav-link nav-link-danger nav-link-lg" href="#">
                <div class="nav-icon">
                    <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                    <span>Cerrar sesión</span>
                </div></a>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    </div>
    <div class="header-backdrop"></div>
    </header>
`;
export const HEADER_TWO_LINES_SEARCH = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
        Saltar al contenido principal
    </a>
    <div class="container header-container">
        <a href="https://buenosaires.gob.ar" class="navbar-brand">
          <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        </a>
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent4"
        aria-controls="navbarContent4"
        aria-expanded="false"
        aria-label="Menú"
        ></button>
        <div class="collapse navbar-collapse" id="navbarContent4">
        <div class="navbar-content">
            <div class="navbar-search">
            <form class="form-search">
                <label for="header-search" class="form-label sr-only">Buscador</label>
                <div class='search-container'>
                <input type="search" class="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
                </div>
            </form>
            </div>
            <div class="navbar-user">
            <div class="dropdown">
                <button type="button" class="btn btn-dropdown btn-lg btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                <span class="material-symbols-rounded" aria-hidden="true">person</span>
                <span class="btn-dropdown-text ellipsis-1">Perfil</span>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Notificaciones</span>
                    <span class="item-notifications"></span>
                </a>
                <a class="dropdown-item item-danger" href="#">
                    <span class="item-text">Cerrar sesión</span>
                    <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                </a>
                </div>
            </div>
            </div>
        </div>
        <div class="navbar-content-extended">
            <nav>
            <p class="navbar-sections-title">Secciones</p>
            <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
            </ul>
            </nav>
        </div>
        <div class="navbar-user-mobile">
            <nav>
            <p class="navbar-user-mobile-title">Perfil</p>
            <ul class="nav flex-column nav-pills nav-user">
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
                <li class="nav-item"><a class="nav-link nav-link-lg" href="#">
                <span>Notificaciones</span>
                <span class="item-notifications"></span></a>
                </li>
                <li class="nav-item"><a class="nav-link nav-link-danger nav-link-lg" href="#">
                <div class="nav-icon">
                    <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                    <span>Cerrar sesión</span>
                </div></a>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_TWO_LINES = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
    Saltar al contenido principal
    </a>
    <div class="container header-container">
    <a href="https://buenosaires.gob.ar" class="navbar-brand">
        <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
    </a>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent8"
        aria-controls="navbarContent8"
        aria-expanded="false"
        aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent8">
        <div class="navbar-content">
        <div class="navbar-user">
            <div class="dropdown">
            <button type="button" class="btn btn-dropdown btn-lg btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                <span class="material-symbols-rounded" aria-hidden="true">person</span>
                <span class="btn-dropdown-text ellipsis-1">Perfil</span>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#"><span class="item-text">Enlace de navegación</span></a>
                <a class="dropdown-item" href="#">
                <span class="item-text">Notificaciones</span>
                <span class="item-notifications"></span>
                </a>
                <a class="dropdown-item item-danger" href="#">
                <span class="item-text">Cerrar sesión</span>
                <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                </a>
            </div>
            </div>
        </div>
        </div>
        <div class="navbar-content-extended">
        <nav>
            <p class="navbar-sections-title">Secciones</p>
            <ul class="nav nav-pills nav-sections">
            <li class="dropdown">
                <button
                type="button"
                class="btn btn-dropdown btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                </span>
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                </a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            <li class="dropdown">
                <button
                type="button"
                class="btn btn-dropdown btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                </span>
                </button>
                <div class="dropdown-menu">
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                </a>
                <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                </a>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                <span>Navegación</span>
                </a>
            </li>
            </ul>
        </nav>
        </div>
        <div class="navbar-user-mobile">
        <nav>
            <p class="navbar-user-mobile-title">Perfil</p>
            <ul class="nav flex-column nav-pills nav-user">
            <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
            <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
            <li class="nav-item"><a class="nav-link nav-link-lg" href="#"><span>Enlace de navegación</span></a></li>
            <li class="nav-item"><a class="nav-link nav-link-lg" href="#">
                <span>Notificaciones</span>
                <span class="item-notifications"></span></a>
            </li>
            <li class="nav-item"><a class="nav-link nav-link-danger nav-link-lg" href="#">
                <div class="nav-icon">
                <span class="material-symbols-rounded" aria-hidden="true">logout</span>
                <span>Cerrar sesión</span>
                </div></a>
            </li>
            </ul>
        </nav>
        </div>
    </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_NO_LOGIN_SEARCH = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
    Saltar al contenido principal
    </a>
    <div class="container header-container">
    <a href="https://buenosaires.gob.ar" class="navbar-brand">
        <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
    </a>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent9"
        aria-controls="navbarContent9"
        aria-expanded="false"
        aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent9">
        <div class="navbar-content">
        <div class="navbar-sections">
            <nav>
            <p class="navbar-sections-title">Secciones</p>
            <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
            </ul>
            </nav>
        </div>
        <div class="navbar-search">
            <form class="form-search">
            <label for="header-search" class="form-label sr-only">Buscador</label>
            <div class='search-container'>
                <input type="search" class="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_NO_LOGIN = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
    Saltar al contenido principal
    </a>
    <div class="container header-container">
    <a href="https://buenosaires.gob.ar" class="navbar-brand">
        <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
    </a>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent9a"
        aria-controls="navbarContent9a"
        aria-expanded="false"
        aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent9a">
        <div class="navbar-content">
        <div class="navbar-sections">
            <nav>
            <p class="navbar-sections-title">Secciones</p>
            <ul class="nav nav-pills nav-sections">
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
                <li class="nav-item">
                <a class="nav-link nav-link-lg" href="#">
                    <span>Navegación</span>
                </a>
                </li>
                <li class="dropdown">
                <button
                    type="button"
                    class="btn btn-dropdown btn-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span class="btn-dropdown-text ellipsis-1">Navegación</span>
                    <span class="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                    expand_more
                    </span>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item" href="#">
                    <span class="item-text">Enlace de navegación</span>
                    </a>
                    <a class="dropdown-item item-link" href="#">
                    <span class="item-text">Ver más</span>
                    <span class="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                    </a>
                </div>
                </li>
            </ul>
            </nav>
        </div>
        </div>
    </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_ONLY_LOGIN = `
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
    <div class="collapse navbar-collapse">
        <div class="navbar-content">
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
`;
export const HEADER_ONLY_LOGIN_SEARCH = `
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
        <a class="btn btn-lg btn-icon btn-outline-tertiary" href="#" target="_blank">
        <span class="material-symbols-rounded" aria-hidden="true">
            person
        </span>
        <span class="btn-text">Ingresar</span>
        </a>
    </div>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent12"
        aria-controls="navbarContent12"
        aria-expanded="false"
        aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent12">
        <div class="navbar-content">
        <div class="navbar-search">
            <form class="form-search">
            <label for="header-search" class="form-label sr-only">
                Buscador
            </label>
            <div class="search-container">
                <input
                type="search"
                class="form-control input-search input-search-with-button"
                id="header-search"
                placeholder="Buscador"
                />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
            </div>
            </form>
        </div>
        <div class="navbar-login">
            <a class="btn btn-lg btn-outline-tertiary" href="#" target="_blank">
            <span class="material-symbols-rounded" aria-hidden="true">
                person
            </span>
            <span class="btn-text">Ingresar</span>
            </a>
        </div>
        </div>
    </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_ONLY_SEARCH = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
    Saltar al contenido principal
    </a>
    <div class="container header-container">
    <a href="https://buenosaires.gob.ar" class="navbar-brand">
        <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
    </a>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent11"
        aria-controls="navbarContent11"
        aria-expanded="false"
        aria-label="Menú"
    ></button>
    <div class="collapse navbar-collapse" id="navbarContent11">
        <div class="navbar-content">
        <div class="navbar-search">
            <form class="form-search">
            <label for="header-search" class="form-label sr-only">Buscador</label>
            <div class='search-container'>
                <input type="search" class="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                <button class="reset" type="reset" aria-label="Borrar"></button>
                <button class="button-search" type="submit" aria-label="Buscar"></button>
            </div>
            </form>
        </div>
        </div>
    </div>
    </div>
    <div class="header-backdrop"></div>
</header>
`;
export const HEADER_ONLY_LOGO = `
<header class="o-header navbar" role="banner">
    <a href="#main" class="skip-to-main-content-link">
    Saltar al contenido principal
    </a>
    <div class="container header-container">
    <a href="https://buenosaires.gob.ar" class="navbar-brand">
        <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
    </a>
    </div>
    <div class="header-backdrop"></div>
</header>
`;

export const HEADER = `<header class="navbar navbar-light navbar-expand-lg" role='banner'>
    <a href="#main" class="skip-to-main-content-link">Ir al contenido principal</a>
    ...
</header>
<main id="main">...</main>
`;

export const HEADER_2 = `<header class="navbar navbar-light navbar-expand-lg" role='banner'>
    ...
    <div class="container header-container">
    <a href="https://buenosaires.gob.ar" class="navbar-brand">
        <img class="d-none d-xl-block" src="/Obelisco-V2/images/logo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
        <img class="d-xl-none" src="/Obelisco-V2/images/logo_ba_mobile.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
    </a>
    ...
    </div>
</header>
`;
