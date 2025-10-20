'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import '../../layout.scss';

import HeaderMobile from '../Mobile';

const basePath = '/Obelisco-V2';

export default function HeaderDesktop() {
  const gettingPages = [
    { text: 'Empezar con Obelisco', url: '/getting-started', id: 1 },
    { text: 'Librería', url: '/components', id: 2 },
    { text: 'Patrones', url: '/patterns', id: 3 },
    { text: 'Contenidos', url: '/content', id: 4 },
    { text: 'Plantillas', url: '/templates', id: 5 },
  ];
  const pathname = usePathname();

  return (
    <>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <Link href="https://gcba.github.io/" className="navbar-brand">
            <img className="d-none d-xl-block" src={`${basePath}/images/logo_obelisco.svg`} alt="Obelisco" />
            <img className="d-xl-none" src={`${basePath}/images/logo_obelisco_mobile.svg`} alt="Obelisco" />
          </Link>
          <HeaderMobile />
          <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-none d-xl-block">
              <div className="navbar-content">
                <div className="navbar-sections">
                  <nav>
                    <p className="navbar-sections-title">Secciones</p>
                    <ul className="nav nav-pills nav-sections">
                      {gettingPages.map((page) => (
                        <li className="nav-item" key={page.id}>
                          <Link
                            className={`nav-link nav-link-lg ${pathname.startsWith(page.url) ? 'active' : ''}`}
                            href={page.url}
                          >
                            <span>{page.text}</span>
                          </Link>
                        </li>
                      ))}
                      <li className="dropdown">
                        <button
                          type="button"
                          className="btn btn-dropdown btn-lg"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="btn-dropdown-text ellipsis-1">Versiones</span>
                          <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                            expand_more
                          </span>
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" href="/documentation">
                            <span className="item-text">Obelisco v.2</span>
                          </Link>
                          <a className="dropdown-item" href="https://gcba.github.io/obelisco-v1">
                            <span className="item-text">
                              Obelisco v.1
                              <span className="fst-italic">(deprecado)</span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-backdrop"></div>
      </header>
    </>
  );
}
