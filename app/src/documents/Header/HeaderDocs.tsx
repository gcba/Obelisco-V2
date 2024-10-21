import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  HEADER_LOGIN_ONE_LINE,
  HEADER_LOGIN_ONE_LINE_SEARCH,
  HEADER_LOGIN_TWO_LINES,
  HEADER_LOGIN_TWO_LINES_SEARCH,
  HEADER_NO_LOGIN,
  HEADER_NO_LOGIN_SEARCH,
  HEADER_ONE_LINE_SEARCH,
  HEADER_ONLY_LOGIN,
  HEADER_ONLY_LOGIN_SEARCH,
  HEADER_ONLY_LOGO,
  HEADER_ONLY_SEARCH,
  HEADER_TWO_LINES,
  HEADER_TWO_LINES_SEARCH,
} from './code-views';

const basePath = '/Obelisco-V2';

const logo = '/images/BA.svg';

const logo_mobile = '/images/ba_mobile.svg';

const HeaderDocs: React.FC = () => {
  const sections = [
    {
      title: 'Header (encabezado)',
      h1: true,
      content: (
        <>
          <MainDescription description="El header es una sección ubicada en la parte superior de la página que contiene elementos y componentes relacionados a la navegación. Su función es permitir que la persona usuaria pueda navegar y acceder intuitivamente a las diferentes secciones de un sitio." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a
              href="https://gcba.github.io/estandares/componentes/encabezado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              enlace
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'section-1',
      title: 'Deslogueado en una línea',
      content: (
        <>
          <CodeBox codeHTML={HEADER_LOGIN_ONE_LINE_SEARCH}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <div className="navbar-login-mobile">
                      <LinkClient className="btn btn-lg btn-icon btn-outline-primary">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          person
                        </span>
                        <span className="btn-text">Ingresar</span>
                      </LinkClient>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent1"
                      aria-controls="navbarContent1"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent1">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                              <li className="nav-item">
                                <LinkClient className="nav-link nav-link-lg">
                                  <span>Navegación</span>
                                </LinkClient>
                              </li>
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="navbar-search">
                          <form className="form-search">
                            <label htmlFor="header-search" className="form-label sr-only">
                              Buscador
                            </label>
                            <div className="search-container">
                              <input
                                type="search"
                                className="form-control input-search input-search-with-button"
                                id="header-search"
                                placeholder="Buscador"
                              />
                              <button className="reset" type="reset" aria-label="Borrar"></button>
                              <button className="button-search" type="submit" aria-label="Buscar"></button>
                            </div>
                          </form>
                        </div>
                        <div className="navbar-login">
                          <LinkClient className="btn btn-lg btn-outline-primary">
                            <span className="material-symbols-rounded" aria-hidden="true">
                              person
                            </span>
                            <span className="btn-text">Ingresar</span>
                          </LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
          <br />
          <p>También está disponible la variante sin buscador:</p>
          <CodeBox codeHTML={HEADER_LOGIN_ONE_LINE}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <div className="navbar-login-mobile">
                      <LinkClient className="btn btn-lg btn-icon btn-outline-primary">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          person
                        </span>
                        <span className="btn-text">Ingresar</span>
                      </LinkClient>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent5"
                      aria-controls="navbarContent5"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent5">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                              <li className="nav-item">
                                <LinkClient className="nav-link nav-link-lg">
                                  <span>Navegación</span>
                                </LinkClient>
                              </li>
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="navbar-login">
                          <LinkClient className="btn btn-lg btn-outline-primary">
                            <span className="material-symbols-rounded" aria-hidden="true">
                              person
                            </span>
                            <span className="btn-text">Ingresar</span>
                          </LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Deslogueado en dos líneas',
      content: (
        <>
          <CodeBox codeHTML={HEADER_LOGIN_TWO_LINES_SEARCH}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <div className="navbar-login-mobile">
                      <LinkClient className="btn btn-lg btn-icon btn-outline-primary">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          person
                        </span>
                        <span className="btn-text">Ingresar</span>
                      </LinkClient>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent2"
                      aria-controls="navbarContent2"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent2">
                      <div className="navbar-content">
                        <div className="navbar-search">
                          <form className="form-search">
                            <label htmlFor="header-search" className="form-label sr-only">
                              Buscador
                            </label>
                            <div className="search-container">
                              <input
                                type="search"
                                className="form-control input-search input-search-with-button"
                                id="header-search"
                                placeholder="Buscador"
                              />
                              <button className="reset" type="reset" aria-label="Borrar"></button>
                              <button className="button-search" type="submit" aria-label="Buscar"></button>
                            </div>
                          </form>
                        </div>
                        <div className="navbar-login">
                          <LinkClient className="btn btn-lg btn-outline-primary">
                            <span className="material-symbols-rounded" aria-hidden="true">
                              person
                            </span>
                            <span className="btn-text">Ingresar</span>
                          </LinkClient>
                        </div>
                      </div>
                      <div className="navbar-content-extended">
                        <nav>
                          <p className="navbar-sections-title">Secciones</p>
                          <ul className="nav nav-pills nav-sections">
                            <li className="dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                  expand_more
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Navegación</span>
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_forward
                                  </span>
                                </LinkClient>
                              </div>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                  expand_more
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Navegación</span>
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_forward
                                  </span>
                                </LinkClient>
                              </div>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
          <br />
          <p>También está disponible la variante sin buscador:</p>
          <CodeBox codeHTML={HEADER_LOGIN_TWO_LINES}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <div className="navbar-login-mobile">
                      <LinkClient className="btn btn-lg btn-icon btn-outline-primary">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          person
                        </span>
                        <span className="btn-text">Ingresar</span>
                      </LinkClient>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent6"
                      aria-controls="navbarContent6"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent6">
                      <div className="navbar-content">
                        <div className="navbar-login">
                          <LinkClient className="btn btn-lg btn-outline-primary">
                            <span className="material-symbols-rounded" aria-hidden="true">
                              person
                            </span>
                            <span className="btn-text">Ingresar</span>
                          </LinkClient>
                        </div>
                      </div>
                      <div className="navbar-content-extended">
                        <nav>
                          <p className="navbar-sections-title">Secciones</p>
                          <ul className="nav nav-pills nav-sections">
                            <li className="dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                  expand_more
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Navegación</span>
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_forward
                                  </span>
                                </LinkClient>
                              </div>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                  expand_more
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Navegación</span>
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_forward
                                  </span>
                                </LinkClient>
                              </div>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Logueado en una línea',
      content: (
        <>
          <CodeBox codeHTML={HEADER_ONE_LINE_SEARCH}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent3"
                      aria-controls="navbarContent3"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent3">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                              <li className="nav-item">
                                <LinkClient className="nav-link nav-link-lg">
                                  <span>Navegación</span>
                                </LinkClient>
                              </li>
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="navbar-search">
                          <form className="form-search">
                            <label htmlFor="header-search" className="form-label sr-only">
                              Buscador
                            </label>
                            <div className="search-container">
                              <input
                                type="search"
                                className="form-control input-search input-search-with-button"
                                id="header-search"
                                placeholder="Buscador"
                              />
                              <button className="reset" type="reset" aria-label="Borrar"></button>
                              <button className="button-search" type="submit" aria-label="Buscar"></button>
                            </div>
                          </form>
                        </div>
                        <div className="navbar-user">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-lg btn-dropdown-border notification"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="material-symbols-rounded" aria-hidden="true">
                                person
                              </span>
                              <span className="btn-dropdown-text ellipsis-1">Perfil</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 1</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 2</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 3</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Notificaciones</span>
                                <span className="item-notifications"></span>
                              </LinkClient>
                              <LinkClient className="dropdown-item item-danger">
                                <span className="item-text">Cerrar sesión</span>
                                <span className="material-symbols-rounded" aria-hidden="true">
                                  logout
                                </span>
                              </LinkClient>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="navbar-user-mobile">
                        <nav>
                          <p className="navbar-user-mobile-title">Perfil</p>
                          <ul className="nav flex-column nav-pills nav-user">
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 1</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 2</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 3</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Notificaciones</span>
                                <span className="item-notifications"></span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-danger nav-link-lg">
                                <div className="nav-icon">
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    logout
                                  </span>
                                  <span>Cerrar sesión</span>
                                </div>
                              </LinkClient>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
          <br />
          <p>También está disponible la variante sin buscador:</p>
          <CodeBox codeHTML={HEADER_LOGIN_TWO_LINES}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent7"
                      aria-controls="navbarContent7"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent7">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                              <li className="nav-item">
                                <LinkClient className="nav-link nav-link-lg">
                                  <span>Navegación</span>
                                </LinkClient>
                              </li>
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="navbar-user">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-lg btn-dropdown-border notification"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="material-symbols-rounded" aria-hidden="true">
                                person
                              </span>
                              <span className="btn-dropdown-text ellipsis-1">Perfil</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 1</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 2</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 3</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Notificaciones</span>
                                <span className="item-notifications"></span>
                              </LinkClient>
                              <LinkClient className="dropdown-item item-danger">
                                <span className="item-text">Cerrar sesión</span>
                                <span className="material-symbols-rounded" aria-hidden="true">
                                  logout
                                </span>
                              </LinkClient>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="navbar-user-mobile">
                        <nav>
                          <p className="navbar-user-mobile-title">Perfil</p>
                          <ul className="nav flex-column nav-pills nav-user">
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 1</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 2</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 3</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Notificaciones</span>
                                <span className="item-notifications"></span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-danger nav-link-lg" href="#">
                                <div className="nav-icon">
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    logout
                                  </span>
                                  <span>Cerrar sesión</span>
                                </div>
                              </LinkClient>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Logueado en dos líneas',
      content: (
        <>
          <CodeBox codeHTML={HEADER_TWO_LINES_SEARCH}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent4"
                      aria-controls="navbarContent4"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent4">
                      <div className="navbar-content">
                        <div className="navbar-search">
                          <form className="form-search">
                            <label htmlFor="header-search" className="form-label sr-only">
                              Buscador
                            </label>
                            <div className="search-container">
                              <input
                                type="search"
                                className="form-control input-search input-search-with-button"
                                id="header-search"
                                placeholder="Buscador"
                              />
                              <button className="reset" type="reset" aria-label="Borrar"></button>
                              <button className="button-search" type="submit" aria-label="Buscar"></button>
                            </div>
                          </form>
                        </div>
                        <div className="navbar-user">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-lg btn-dropdown-border notification"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="material-symbols-rounded" aria-hidden="true">
                                person
                              </span>
                              <span className="btn-dropdown-text ellipsis-1">Perfil</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 1</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 2</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 3</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Notificaciones</span>
                                <span className="item-notifications"></span>
                              </LinkClient>
                              <LinkClient className="dropdown-item item-danger">
                                <span className="item-text">Cerrar sesión</span>
                                <span className="material-symbols-rounded" aria-hidden="true">
                                  logout
                                </span>
                              </LinkClient>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="navbar-content-extended">
                        <nav>
                          <p className="navbar-sections-title">Secciones</p>
                          <ul className="nav nav-pills nav-sections">
                            <li className="dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                  expand_more
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Navegación</span>
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_forward
                                  </span>
                                </LinkClient>
                              </div>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                  expand_more
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Navegación</span>
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_forward
                                  </span>
                                </LinkClient>
                              </div>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="navbar-user-mobile">
                        <nav>
                          <p className="navbar-user-mobile-title">Perfil</p>
                          <ul className="nav flex-column nav-pills nav-user">
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 1</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 2</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 3</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Notificaciones</span>
                                <span className="item-notifications"></span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-danger nav-link-lg">
                                <div className="nav-icon">
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    logout
                                  </span>
                                  <span>Cerrar sesión</span>
                                </div>
                              </LinkClient>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
          <br />
          <p>También está disponible la variante sin buscador:</p>
          <CodeBox codeHTML={HEADER_TWO_LINES}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent8"
                      aria-controls="navbarContent8"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent8">
                      <div className="navbar-content">
                        <div className="navbar-user">
                          <div className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-lg btn-dropdown-border notification"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="material-symbols-rounded" aria-hidden="true">
                                person
                              </span>
                              <span className="btn-dropdown-text ellipsis-1">Perfil</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end">
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 1</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 2</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Navegación 3</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Notificaciones</span>
                                <span className="item-notifications"></span>
                              </LinkClient>
                              <LinkClient className="dropdown-item item-danger">
                                <span className="item-text">Cerrar sesión</span>
                                <span className="material-symbols-rounded" aria-hidden="true">
                                  logout
                                </span>
                              </LinkClient>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="navbar-content-extended">
                        <nav>
                          <p className="navbar-sections-title">Secciones</p>
                          <ul className="nav nav-pills nav-sections">
                            <li className="dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                  expand_more
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Navegación</span>
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_forward
                                  </span>
                                </LinkClient>
                              </div>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                  expand_more
                                </span>
                              </button>
                              <div className="dropdown-menu">
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Navegación</span>
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    arrow_forward
                                  </span>
                                </LinkClient>
                              </div>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación</span>
                              </LinkClient>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="navbar-user-mobile">
                        <nav>
                          <p className="navbar-user-mobile-title">Perfil</p>
                          <ul className="nav flex-column nav-pills nav-user">
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 1</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 2</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Navegación 3</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Notificaciones</span>
                                <span className="item-notifications"></span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-danger nav-link-lg">
                                <div className="nav-icon">
                                  <span className="material-symbols-rounded" aria-hidden="true">
                                    logout
                                  </span>
                                  <span>Cerrar sesión</span>
                                </div>
                              </LinkClient>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-5',
      title: 'Sin logueo',
      content: (
        <>
          <CodeBox codeHTML={HEADER_NO_LOGIN_SEARCH}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent9"
                      aria-controls="navbarContent9"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent9">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                              <li className="nav-item">
                                <LinkClient className="nav-link nav-link-lg">
                                  <span>Navegación</span>
                                </LinkClient>
                              </li>
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="navbar-search">
                          <form className="form-search">
                            <label htmlFor="header-search" className="form-label sr-only">
                              Buscador
                            </label>
                            <div className="search-container">
                              <input
                                type="search"
                                className="form-control input-search input-search-with-button"
                                id="header-search"
                                placeholder="Buscador"
                              />
                              <button className="reset" type="reset" aria-label="Borrar"></button>
                              <button className="button-search" type="submit" aria-label="Buscar"></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
          <br />
          <p>También está disponible la variante sin buscador:</p>
          <CodeBox codeHTML={HEADER_NO_LOGIN}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent9a"
                      aria-controls="navbarContent9a"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent9a">
                      <div className="navbar-content">
                        <div className="navbar-sections">
                          <nav>
                            <p className="navbar-sections-title">Secciones</p>
                            <ul className="nav nav-pills nav-sections">
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                              <li className="nav-item">
                                <LinkClient className="nav-link nav-link-lg">
                                  <span>Navegación</span>
                                </LinkClient>
                              </li>
                              <li className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dropdown btn-lg"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                                  <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                                    expand_more
                                  </span>
                                </button>
                                <div className="dropdown-menu">
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Navegación</span>
                                    <span className="material-symbols-rounded" aria-hidden="true">
                                      arrow_forward
                                    </span>
                                  </LinkClient>
                                </div>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-6',
      title: 'Sólo login',
      content: (
        <>
          <CodeBox codeHTML={HEADER_ONLY_LOGIN_SEARCH}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <div className="navbar-login-mobile">
                      <LinkClient className="btn btn-lg btn-icon btn-outline-primary">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          person
                        </span>
                        <span className="btn-text">Ingresar</span>
                      </LinkClient>
                    </div>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent12"
                      aria-controls="navbarContent12"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent12">
                      <div className="navbar-content">
                        <div className="navbar-search">
                          <form className="form-search">
                            <label htmlFor="header-search" className="form-label sr-only">
                              Buscador
                            </label>
                            <div className="search-container">
                              <input
                                type="search"
                                className="form-control input-search input-search-with-button"
                                id="header-search"
                                placeholder="Buscador"
                              />
                              <button className="reset" type="reset" aria-label="Borrar"></button>
                              <button className="button-search" type="submit" aria-label="Buscar"></button>
                            </div>
                          </form>
                        </div>
                        <div className="navbar-login">
                          <LinkClient className="btn btn-lg btn-outline-primary">
                            <span className="material-symbols-rounded" aria-hidden="true">
                              person
                            </span>
                            <span className="btn-text">Ingresar</span>
                          </LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
          <br />
          <p>También está disponible la variante sin buscador:</p>
          <CodeBox codeHTML={HEADER_ONLY_LOGIN}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <div className="navbar-login-mobile">
                      <LinkClient className="btn btn-lg btn-icon btn-outline-primary">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          person
                        </span>
                        <span className="btn-text">Ingresar</span>
                      </LinkClient>
                    </div>
                    <div className="collapse navbar-collapse">
                      <div className="navbar-content">
                        <div className="navbar-login">
                          <LinkClient className="btn btn-lg btn-outline-primary">
                            <span className="material-symbols-rounded" aria-hidden="true">
                              person
                            </span>
                            <span className="btn-text">Ingresar</span>
                          </LinkClient>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-7',
      title: 'Sólo buscador',
      content: (
        <>
          <CodeBox codeHTML={HEADER_ONLY_SEARCH}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarContent11"
                      aria-controls="navbarContent11"
                      aria-expanded="false"
                      aria-label="Menú"
                    ></button>
                    <div className="collapse navbar-collapse" id="navbarContent11">
                      <div className="navbar-content">
                        <div className="navbar-search">
                          <form className="form-search">
                            <label htmlFor="header-search" className="form-label sr-only">
                              Buscador
                            </label>
                            <div className="search-container">
                              <input
                                type="search"
                                className="form-control input-search input-search-with-button"
                                id="header-search"
                                placeholder="Buscador"
                              />
                              <button className="reset" type="reset" aria-label="Borrar"></button>
                              <button className="button-search" type="submit" aria-label="Buscar"></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-8',
      title: 'Sólo logo',
      content: (
        <>
          <CodeBox codeHTML={HEADER_ONLY_LOGO}>
            <div className="container">
              <div className="header-box-sizing">
                <header className="o-header navbar" role="banner">
                  <LinkClient href="#main" className="skip-to-main-content-link">
                    Saltar al contenido principal
                  </LinkClient>
                  <div className="container header-container">
                    <LinkClient href="https://buenosaires.gob.ar" className="navbar-brand">
                      <img
                        className="d-none d-xl-block"
                        src={`${basePath}${logo}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                      <img
                        className="d-xl-none"
                        src={`${basePath}${logo_mobile}`}
                        alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                      />
                    </LinkClient>
                  </div>
                  <div className="header-backdrop"></div>
                </header>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return (
    <>
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default HeaderDocs;
