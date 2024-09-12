'use client';
import Image from 'next/image';
import Link from 'next/link';

import '../../layout.scss';
import NavLayout from '../../Navigation/nav';
import HeaderMobile from '../Mobile';
import { usePathname } from "next/navigation";

export default function HeaderDesktop() {
  const gettingPages = [
    { text: 'Inicio', url: '/getting-started', id: 1 },
    { text: 'Elementos', url: '/components', id: 2 },
    { text: 'Documentación', url: '/documentation', id: 3 },
  ];
  const pathname = usePathname();

  return (
    <>
      {/* <header className="navbar navbar-light navbar-expand-lg shadow-sm p-3 mb-0 bg-body rounded" role="banner">
        <Link href="#main" className="skip-to-main-content-link visually-hidden">
          Saltar al contenido principal
        </Link>
        <div className="container header-container">
          <Link href="/" className="navbar-brand">
            <Image
              className="header-logo"
              src="./BA.svg"
              alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
              width={76}
              height={41}
            />
            <Image className="obelisco-logo" src="./obelisco-logo.png" width={76} height={41} alt="Logo React obelisco" />
          </Link>
          <HeaderMobile />
          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <div className="navbar-content">
              <div className="navbar-sections m-0">
                <h3 className="navbar-sections-title">Secciones</h3>
                <NavLayout items={gettingPages} className="custom-nav" />
              </div>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header> */}
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
          <div className="navbar-login-mobile">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
            >
              <span className="material-symbols-rounded" aria-hidden="true">person</span>
              <span className="btn-text">Ingresar</span>
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Menú"
          ></button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="navbar-content">
              <div className="navbar-sections">
                <nav>
                  <p className="navbar-sections-title">Secciones</p>
                  <ul className="nav nav-pills nav-sections">
                    {gettingPages.map(page => (
                      <li className="nav-item" key={page.id}>
                      <Link className={`nav-link nav-link-lg ${pathname.startsWith(page.url) ? 'active' : ''}`} href={page.url}>
                        <span>{page.text}</span>
                      </Link>
                    </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
     {/*  <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
          <div className="navbar-login-mobile">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
            >
              <span className="material-symbols-rounded" aria-hidden="true">person</span>
              <span className="btn-text">Ingresar</span>
            </a>
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
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-search">
                <form className="form-search">
                  <label htmlFor="header-search" className="form-label sr-only">Buscador</label>
                  <div className='search-container'>
                    <input type="search" className="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="button-search" type="submit" aria-label="Buscar"></button>
                  </div>
                </form>
              </div>
              <div className="navbar-login">
                <a
                  className="btn btn-lg btn-outline-link"
                  href="#"
                  target="_blank"
                >
                  <span className="material-symbols-rounded" aria-hidden="true">person</span>
                  <span className="btn-text">Ingresar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
          <div className="navbar-login-mobile">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
            >
              <span className="material-symbols-rounded" aria-hidden="true">person</span>
              <span className="btn-text">Ingresar</span>
            </a>
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
                  <label htmlFor="header-search" className="form-label sr-only">Buscador</label>
                  <div className='search-container'>
                    <input type="search" className="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="button-search" type="submit" aria-label="Buscar"></button>
                  </div>
                </form>
              </div>
              <div className="navbar-login">
                <a
                  className="btn btn-lg btn-outline-link"
                  href="#"
                  target="_blank"
                >
                  <span className="material-symbols-rounded" aria-hidden="true">person</span>
                  <span className="btn-text">Ingresar</span>
                </a>
              </div>
            </div>
            <div className="navbar-content-extended">
              <nav>
                <p className="navbar-sections-title">Secciones</p>
                <ul className="nav nav-pills nav-sections">
                  <li className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
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
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-search">
                <form className="form-search">
                  <label htmlFor="header-search" className="form-label sr-only">Buscador</label>
                  <div className='search-container'>
                    <input type="search" className="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="button-search" type="submit" aria-label="Buscar"></button>
                  </div>
                </form>
              </div>
              <div className="navbar-user">
                <div className="dropdown dropdown-lg">
                  <button type="button" className="btn btn-dropdown btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                    <span className="material-symbols-rounded" aria-hidden="true">person</span>
                    <span className="btn-dropdown-text ellipsis-1">Perfil</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 1</span></a>
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 2</span></a>
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 3</span></a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Notificaciones</span>
                      <span className="item-notifications"></span>
                    </a>
                    <a className="dropdown-item item-danger" href="#">
                      <span className="item-text">Cerrar sesión</span>
                      <span className="material-symbols-rounded" aria-hidden="true">logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-user-mobile">
              <nav>
                <p className="navbar-user-mobile-title">Perfil</p>
                <ul className="nav flex-column nav-pills nav-user">
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 1</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 2</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 3</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#">
                    <span>Notificaciones</span>
                    <span className="item-notifications"></span></a>
                  </li>
                  <li className="nav-item"><a className="nav-link nav-link-danger nav-link-lg" href="#">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded" aria-hidden="true">logout</span>
                      <span>Cerrar sesión</span>
                    </div></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
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
                  <label htmlFor="header-search" className="form-label sr-only">Buscador</label>
                  <div className='search-container'>
                    <input type="search" className="form-control input-search input-search-with-button" id="header-search" placeholder="Buscador" />
                    <button className="reset" type="reset" aria-label="Borrar"></button>
                    <button className="button-search" type="submit" aria-label="Buscar"></button>
                  </div>
                </form>
              </div>
              <div className="navbar-user">
                <div className="dropdown dropdown-lg">
                  <button type="button" className="btn btn-dropdown btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                    <span className="material-symbols-rounded" aria-hidden="true">person</span>
                    <span className="btn-dropdown-text ellipsis-1">Perfil</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 1</span></a>
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 2</span></a>
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 3</span></a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Notificaciones</span>
                      <span className="item-notifications"></span>
                    </a>
                    <a className="dropdown-item item-danger" href="#">
                      <span className="item-text">Cerrar sesión</span>
                      <span className="material-symbols-rounded" aria-hidden="true">logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-content-extended">
              <nav>
                <p className="navbar-sections-title">Secciones</p>
                <ul className="nav nav-pills nav-sections">
                  <li className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navbar-user-mobile">
              <nav>
                <p className="navbar-user-mobile-title">Perfil</p>
                <ul className="nav flex-column nav-pills nav-user">
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 1</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 2</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 3</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#">
                    <span>Notificaciones</span>
                    <span className="item-notifications"></span></a>
                  </li>
                  <li className="nav-item"><a className="nav-link nav-link-danger nav-link-lg" href="#">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded" aria-hidden="true">logout</span>
                      <span>Cerrar sesión</span>
                    </div></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
      <h2>hola esto es un divisor --> Header sin buscador</h2>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
          <div className="navbar-login-mobile">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
            >
              <span className="material-symbols-rounded" aria-hidden="true">person</span>
              <span className="btn-text">Ingresar</span>
            </a>
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
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-login">
                <a
                  className="btn btn-lg btn-outline-link"
                  href="#"
                  target="_blank"
                >
                  <span className="material-symbols-rounded" aria-hidden="true">person</span>
                  <span className="btn-text">Ingresar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
          <div className="navbar-login-mobile">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
            >
              <span className="material-symbols-rounded" aria-hidden="true">person</span>
              <span className="btn-text">Ingresar</span>
            </a>
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
                <a
                  className="btn btn-lg btn-outline-link"
                  href="#"
                  target="_blank"
                >
                  <span className="material-symbols-rounded" aria-hidden="true">person</span>
                  <span className="btn-text">Ingresar</span>
                </a>
              </div>
            </div>
            <div className="navbar-content-extended">
              <nav>
                <p className="navbar-sections-title">Secciones</p>
                <ul className="nav nav-pills nav-sections">
                  <li className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
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
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="navbar-user">
                <div className="dropdown dropdown-lg">
                  <button type="button" className="btn btn-dropdown btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                    <span className="material-symbols-rounded" aria-hidden="true">person</span>
                    <span className="btn-dropdown-text ellipsis-1">Perfil</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 1</span></a>
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 2</span></a>
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 3</span></a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Notificaciones</span>
                      <span className="item-notifications"></span>
                    </a>
                    <a className="dropdown-item item-danger" href="#">
                      <span className="item-text">Cerrar sesión</span>
                      <span className="material-symbols-rounded" aria-hidden="true">logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-user-mobile">
              <nav>
                <p className="navbar-user-mobile-title">Perfil</p>
                <ul className="nav flex-column nav-pills nav-user">
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 1</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 2</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 3</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#">
                    <span>Notificaciones</span>
                    <span className="item-notifications"></span></a>
                  </li>
                  <li className="nav-item"><a className="nav-link nav-link-danger nav-link-lg" href="#">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded" aria-hidden="true">logout</span>
                      <span>Cerrar sesión</span>
                    </div></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
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
                <div className="dropdown dropdown-lg">
                  <button type="button" className="btn btn-dropdown btn-dropdown-border notification" data-bs-toggle="dropdown"  aria-expanded="false">
                    <span className="material-symbols-rounded" aria-hidden="true">person</span>
                    <span className="btn-dropdown-text ellipsis-1">Perfil</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 1</span></a>
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 2</span></a>
                    <a className="dropdown-item" href="#"><span className="item-text">Navegación 3</span></a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Notificaciones</span>
                      <span className="item-notifications"></span>
                    </a>
                    <a className="dropdown-item item-danger" href="#">
                      <span className="item-text">Cerrar sesión</span>
                      <span className="material-symbols-rounded" aria-hidden="true">logout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-content-extended">
              <nav>
                <p className="navbar-sections-title">Secciones</p>
                <ul className="nav nav-pills nav-sections">
                  <li className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="dropdown dropdown-lg">
                    <button
                      type="button"
                      className="btn btn-dropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                      <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                        expand_more
                      </span>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="item-text">Navegación</span>
                      </a>
                      <a className="dropdown-item item-link" href="#">
                        <span className="item-text">Navegación</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-link-lg" href="#">
                      <span>Navegación</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="navbar-user-mobile">
              <nav>
                <p className="navbar-user-mobile-title">Perfil</p>
                <ul className="nav flex-column nav-pills nav-user">
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 1</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 2</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#"><span>Navegación 3</span></a></li>
                  <li className="nav-item"><a className="nav-link nav-link-lg" href="#">
                    <span>Notificaciones</span>
                    <span className="item-notifications"></span></a>
                  </li>
                  <li className="nav-item"><a className="nav-link nav-link-danger nav-link-lg" href="#">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded" aria-hidden="true">logout</span>
                      <span>Cerrar sesión</span>
                    </div></a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
      <h5>sin logueo</h5>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
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
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
                      </div>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link nav-link-lg" href="#">
                        <span>Navegación</span>
                      </a>
                    </li>
                    <li className="dropdown dropdown-lg">
                      <button
                        type="button"
                        className="btn btn-dropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text ellipsis-1">Navegación</span>
                        <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">Navegación</span>
                        </a>
                        <a className="dropdown-item item-link" href="#">
                          <span className="item-text">Navegación</span>
                          <span className="material-symbols-rounded" aria-hidden="true">arrow_forward</span>
                        </a>
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
      <h5>solo con login</h5>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <a href="https://buenosaires.gob.ar" className="navbar-brand">
            <img className="header-logo" src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg" alt="Gobierno de la Ciudad de Buenos Aires - Inicio" />
          </a>
          <div className="navbar-login-mobile">
            <a
              className="btn btn-lg btn-icon btn-outline-link"
              href="#"
              target="_blank"
            >
              <span className="material-symbols-rounded" aria-hidden="true">person</span>
              <span className="btn-text">Ingresar mob</span>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <div className="navbar-content">
              <div className="navbar-login">
                <a
                  className="btn btn-lg btn-outline-link"
                  href="#"
                  target="_blank"
                >
                  <span className="material-symbols-rounded" aria-hidden="true">person</span>
                  <span className="btn-text">Ingresar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header> */}
    </>
  );
}
