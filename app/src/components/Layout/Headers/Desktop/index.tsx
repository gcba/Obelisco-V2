'use client';

import Image from 'next/image';
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
          <a href="/" className="navbar-brand">
            <Image
              className="header-logo"
              src={`${basePath}/images/BA.svg`}
              alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
              width={76}
              height={48}
            ></Image>
          </a>
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
