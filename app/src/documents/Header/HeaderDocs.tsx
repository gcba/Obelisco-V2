import Image from 'next/image';
const basePath = '/Obelisco-V2';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
  HEADER,
  HEADER_2
} from './code-views';


const logo = '/images/logo_ba.svg';

const logo_mobile = '/images/logo_ba_mobile.svg';

const HeaderDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Deslogueado',
    },
    {
      subtitle: 'En una línea',
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
                      <LinkClient className="btn btn-lg btn-icon btn-outline-tertiary">
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                          <LinkClient className="btn btn-lg btn-outline-tertiary">
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
                      <LinkClient className="btn btn-lg btn-icon btn-outline-tertiary">
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                          <LinkClient className="btn btn-lg btn-outline-tertiary">
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
      subtitle: 'En dos líneas',
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
                      <LinkClient className="btn btn-lg btn-icon btn-outline-tertiary">
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
                          <LinkClient className="btn btn-lg btn-outline-tertiary">
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
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Ver más</span>
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
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Ver más</span>
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
                      <LinkClient className="btn btn-lg btn-icon btn-outline-tertiary">
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
                          <LinkClient className="btn btn-lg btn-outline-tertiary">
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
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Ver más</span>
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
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Ver más</span>
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
      title: 'Logueado',
    },
    {
      subtitle: 'En una línea',
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                <span className="item-text">Enlace de navegación</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Enlace de navegación</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Enlace de navegación</span>
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
                                <span>Enlace de navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Enlace de navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Enlace de navegación</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                <span className="item-text">Enlace de navegación</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Enlace de navegación</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Enlace de navegación</span>
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
                                <span>Enlace de navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Enlace de navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Enlace de navegación</span>
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
      subtitle: 'En dos líneas',
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
                                <span className="item-text">Enlace de navegación</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Enlace de navegación</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Enlace de navegación</span>
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
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Ver más</span>
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
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Ver más</span>
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
                                <span>Enlace de navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Enlace de navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Enlace de navegación</span>
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
                                <span className="item-text">Enlace de navegación</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Enlace de navegación</span>
                              </LinkClient>
                              <LinkClient className="dropdown-item">
                                <span className="item-text">Enlace de navegación</span>
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
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Ver más</span>
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
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item">
                                  <span className="item-text">Enlace de navegación</span>
                                </LinkClient>
                                <LinkClient className="dropdown-item item-link">
                                  <span className="item-text">Ver más</span>
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
                                <span>Enlace de navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Enlace de navegación</span>
                              </LinkClient>
                            </li>
                            <li className="nav-item">
                              <LinkClient className="nav-link nav-link-lg">
                                <span>Enlace de navegación</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item">
                                    <span className="item-text">Enlace de navegación</span>
                                  </LinkClient>
                                  <LinkClient className="dropdown-item item-link">
                                    <span className="item-text">Ver más</span>
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
                      <LinkClient className="btn btn-lg btn-icon btn-outline-tertiary">
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
                          <LinkClient className="btn btn-lg btn-outline-tertiary">
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
                      <LinkClient className="btn btn-lg btn-icon btn-outline-tertiary">
                        <span className="material-symbols-rounded" aria-hidden="true">
                          person
                        </span>
                        <span className="btn-text">Ingresar</span>
                      </LinkClient>
                    </div>
                    <div className="collapse navbar-collapse">
                      <div className="navbar-content">
                        <div className="navbar-login">
                          <LinkClient className="btn btn-lg btn-outline-tertiary">
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

  const SECTION_UX = [
    {
      title: 'Uso',
      content: (
        <>
          
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo usar</p>
            <ul className='list-informative-bullet'>
              <li>Debe estar presente en todas las páginas de forma consistente, para facilitar la navegación de la persona usuaria a través del sitio web.</li>
              <li>Para mantener las navegaciones principales y la presencia de la marca en un primer nivel.</li>
            </ul>
          </div>

          <div className="list-informative pb-3">
            <p className='text-xl'>Cuándo no usar</p>
            <ul className='list-informative-bullet' >
              <li>Para categorías internas o filtrado dentro de una página, utilizar <a href="https://gcba.github.io/Obelisco-V2/components/tabs">Pestañas</a> en su lugar.</li>
              <li>Para mantener las navegaciones principales y la presencia de la marca en un primer nivel.</li>
              <li>
                <strong>
                  Para navegaciones de 2do nivel o subsecciones de contenido, considerar la </strong> <a href="https://gcba.github.io/Obelisco-V2/components/nav-horizontal">Navegación horizontal</a> <strong>o la </strong><a href="https://gcba.github.io/Obelisco-V2/components/nav-vertical">Navegación vertical</a> <strong>dependiendo del tipo de página</strong>.
              </li>
            </ul>
          </div>
        </>
      )
    },
    {
      title: 'Ejemplos de uso',
    },
    {
      subtitle: 'Navegación principal',
      content: (
        <>
          <p className='text-md'>Los enlaces de navegación redirigen a las secciones y/o páginas principales de la arquitectura de información del sitio web.</p>

          <div className="py-4">
            <div className="max-items-2">
              <div className="col">
                <Image
                  src={`${basePath}/images/header/header_Columnas_si_usar.svg`}
                  alt="Cómo usar la navegacion principal de header"
                  width="800"
                  height="352"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">Utilizar hasta 7 enlaces de navegación, dependiendo del tipo de encabezado (header).</p>
                </div>

              </div>
              <div className="col">
                <Image
                  src={`${basePath}/images/header/header_Columnas_no_usar.svg`}
                  alt="Cómo usar la navegacion principal de header"
                  width="800"
                  height="352"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">No utilizar más de 7 enlaces de navegación, o más de las navegaciones disponibles para cada tipo de encabezado (header) y sus variantes.</p>
                </div>

              </div>
            </div>
          </div>

        </>
      ),
    },
    {
      subtitle: 'Opciones de navegación',
      content: (
        <>
          <p className="text-md">
            Las opciones de navegación se utilizan como subsecciones dentro de un desplegable de navegación del encabezado <i>(header)</i>.
          </p>

          <div className="py-4">
            <div className="max-items-2">
              <div className="col">
                <Image
                  src={`${basePath}/images/header/header_opciones_de_navegacion_si.svg`}
                  alt="Cómo sí usar las opciones de navegación del header"
                  width="800"
                  height="352"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">Utilizar una opción de navegación con link de acceso cuando hay más de 6 opciones.</p>
                </div>

              </div>
              <div className="col">
                <Image
                  src={`${basePath}/images/header/header_opciones_de_navegacion_no.svg`}
                  alt="Cómo no usar las opciones de navegación del header"
                  width="800"
                  height="352"
                  className="img-fluid"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">No utilizar una opción link si las subsecciones no superan las 6 opciones.</p>
                </div>

              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: <>
        Tipos de encabezado <i>(header)</i>
      </>,
      content: (
        <>
          <p className="text-md">
            Existen 2 tipos de header según la cantidad de navegaciones y el estado de la cuenta de la persona usuaria (con sesión iniciada y sin iniciar sesión).
          </p>
        </>
      ),
    },
    {
      subtitle: <>
        <i>Desktop deslogueado</i> | En 1 línea
      </>,
      content: (
        <>
          <p className="text-md mt-2 mb-4">El encabezado <i>(header)</i> de 1 línea es el tipo de encabezado que se utiliza por defecto.</p>
          <Image
            src={`${basePath}/images/header/header_desktop_deslogueado_1_linea.svg`}
            alt="Desktop deslogueado en 1 línea"
            width="800"
            height="35"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>
        <i>Desktop logueado</i> | En 1 línea
      </>,
      content: (
        <>
          <p className="text-md mt-2 mb-4">El encabezado <i>(header)</i> de 1 línea es el tipo de encabezado que se utiliza por defecto.</p>
          <Image
            src={`${basePath}/images/header/header_desktop_logueado_1_linea.svg`}
            alt="Desktop logueado en 1 línea"
            width="800"
            height="35"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>
        <i>Desktop deslogueado</i> | En 2 líneas
      </>,
      content: (
        <>
          <p className="text-md mt-2 mb-4">El encabezado <i>(header)</i> de 2 líneas se utiliza cuando la cantidad de navegaciones excede al espacio disponible en 1 línea.</p>
          <Image
            src={`${basePath}/images/header/header_desktop_deslogueado_2_lineas.svg`}
            alt="Desktop logueado en 2 líneas"
            width="800"
            height="35"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>
        <i>Desktop logueado</i> | En 2 líneas
      </>,
      content: (
        <>
          <p className="text-md mt-2 mb-4">El encabezado <i>(header)</i> de 2 líneas se utiliza cuando la cantidad de navegaciones excede al espacio disponible en 1 línea.</p>
          <Image
            src={`${basePath}/images/header/header_desktop_logueado_2_lineas.svg`}
            alt="Desktop deslogueado en 2 líneas"
            width="800"
            height="35"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>
        <i>Mobile</i>
      </>,
      content: (
        <>
          <p className="text-md mt-2 mb-4">El encabezado <i>(header)</i> en su versión mobile pasa a ser un menú desplegable con la reorganización de los elementos que lo componen.</p>
          <Image
            src={`${basePath}/images/header/header_mobile.svg`}
            alt="Mobile"
            width="800"
            height="389"
            className="img-fluid"
          />
        </>

      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      content: (
        <>
          <Image
            src={`${basePath}/images/header/header_specs_anatomia.svg`}
            alt="Header anatomía"
            width="800"
            height="242"
            className="img-fluid"
          />
          <div className="mt-4">
            <div className="responsive-scroll" tabIndex={0}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="tb-text">Elemento</th>
                    <th scope="col" className="tb-text">Texto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Logo</td>
                    <td>Obligatorio.</td>
                  </tr>
                  <tr>
                    <td>Navegación principal</td>
                    <td>Opcional, pero recomendado.</td>
                  </tr>
                  <tr>
                    <td>Buscador</td>
                    <td>Opcional.</td>
                  </tr>
                  <tr>
                    <td>Desplegable de perfil</td>
                    <td>Opcional.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )
    },
    {
      title: 'Variantes',
      content: (
        <>
          <p className="text-md mt-2 mb-4">
            El encabezado <i>(header)</i> puede adaptarse a las necesidades del producto digital para ofrecer una estructura basada en la arquitectura de información del sitio. El único elemento inamovible e imprescindible del organismo es el logo de la Ciudad.
          </p>
        </>
      ),
    },
    {
      subtitle: 'Sin buscador',
      content: (
        <>
          <p className="text-md mt-2 mb-4">
            El encabezado <i>(header)</i> puede prescindir del buscador de no ser necesario o si ya hay un buscador general dentro del cuerpo de la página. En caso de no haber un buscador, se pueden utilizar hasta 6 navegaciones manteniendo 1 sola línea para el organismo.
          </p>
          <Image
            src={`${basePath}/images/header/header_specs_variantes.svg`}
            alt="Variante del header - Sin buscador"
            width="800"
            height="35"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Sin botón/sección de perfil',
      content: (
        <>
          <p className="text-md mt-2 mb-4">
            El encabezado <i>(header)</i> puede prescindir de la sección de perfil de no ser necesaria. En caso de no haber un botón de perfil o un desplegable de perfil, se pueden utilizar hasta 6 navegaciones manteniendo 1 sola línea para el organismo.
          </p>
          <Image
            src={`${basePath}/images/header/header_specs_sin_boton.svg`}
            alt="Header variante sin boton/seccion de perfil"
            width="800"
            height="35"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: 'Sin navegaciones',
      content: (
        <>
          <>
            <p className="text-md mt-2 mb-4">
              El encabezado <i>(header)</i> puede prescindir de la sección de perfil de no ser necesaria. En caso de no haber un botón de perfil o un desplegable de perfil, se pueden utilizar hasta 6 navegaciones manteniendo 1 sola línea para el organismo.
            </p>
            <Image
              src={`${basePath}/images/header/header_specs_sin_navegacion.svg`}
              alt="Header variante sin boton/seccion de perfil"
              width="800"
              height="35"
              className="img-fluid"
            />
          </>
        </>
      ),
    }
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      content: (
        <>
          <p className="text-md">
            Todos los elementos del encabezado <i>(header)</i> pueden recorrerse utilizando la navegación por teclado u otras herramientas de asistencia como lectores por voz.
          </p>
        </>
      )
    },
    {
      subtitle: "Enlace 'Saltar al contenido principal'",
      content: (
        <>
          <p className="text-md">
            Con la clase {'skip-to-main-content-link'}, la persona usuaria puede saltar el encabezado <i>(header)</i> y continuar directamente en el cuerpo de la página, sin la necesidad de navegar a través de los elementos del organismo.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {HEADER}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      subtitle: 'Texto alternativo para el logo',
      content: (
        <>
          <p className="text-md">
            El logo dentro del encabezado <i>(header)</i> funciona como enlace de redirección a la página de inicio del sitio web. Por eso, dentro del atributo alt es necesario incluir la palabra “Inicio”, como forma de identificar y brindar mayor contexto sobre la acción.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {HEADER_2}
          </SyntaxHighlighter>
        </>
      ),
    }
  ];

  return (
    <>
      <ComponentHeader
        title="Encabezado (header)"
        description={[
          'El header es una sección ubicada en la parte superior de la página que contiene elementos y componentes relacionados a la navegación. Su función es permitir que la persona usuaria pueda navegar y acceder intuitivamente a las diferentes secciones de un sitio.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/encabezado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      {/* <Tabs
        sectionUx={SECTION_UX}
        sectionDev={SECTIONS_DEV}
        customSections={
          [
            { title: 'Especificaciones', id: 'section_ux', sectionContent: SPECS }
          ]
        }
      /> */}
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX}
        customSections={
          [
            { title: 'Especificaciones', id: 'section-specs', sectionContent: SPECS },
            { title: 'Accesibilidad', id: 'section-accessibility', sectionContent: ACCESSIBILITY }

          ]
        }
      />

    </>
  );
};

export default HeaderDocs;
