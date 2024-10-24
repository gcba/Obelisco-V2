'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import '../../layout.scss';

import HeaderMobile from '../Mobile';

const basePath = '/Obelisco-V2';

export default function HeaderDesktop() {
  const gettingPages = [
    { text: 'Inicio', url: '/getting-started', id: 1 },
    { text: 'Elementos', url: '/components', id: 2 },
    { text: 'Documentación', url: '/documentation', id: 3 },
  ];
  const pathname = usePathname();

  return (
    <>
      <header className="o-header navbar" role="banner">
        <a href="#main" className="skip-to-main-content-link">
          Saltar al contenido principal
        </a>
        <div className="container header-container">
          <Link href="/" className="navbar-brand">
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
