'use client';
import Image from 'next/image';
import Link from 'next/link';

import '../../layout.scss';
import NavLayout from '../../Navigation/nav';
import HeaderMobile from '../Mobile';

export default function HeaderDesktop() {
  const gettingPages = [
    { text: 'Inicio', url: '/getting-started', id: 1 },
    { text: 'Elementos UI/UX', url: '/components', id: 2 },
    { text: 'Documentación', url: '/templates', id: 3 },
  ];

  return (
    <header className="navbar navbar-light navbar-expand-lg shadow-sm p-3 mb-0 bg-body rounded" role="banner">
      <Link href="#main" className="skip-to-main-content-link visually-hidden">
        Saltar al contenido principal
      </Link>
      <h1 className="visually-hidden">Obelisco</h1>
      <div className="container header-container">
        <Link href="/" className="navbar-brand">
          <Image
            className="header-logo"
            src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg"
            alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
            width={76}
            height={41}
          />
          <Image className="obelisco-logo" src="/obelisco-logo.png" width={76} height={41} alt="Logo React obelisco" />
        </Link>
        <HeaderMobile />
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <div className="navbar-content">
            <div className="navbar-sections m-0">
              {/* <h3 className="navbar-sections-title">Secciones</h3> */}
              <NavLayout items={gettingPages} className="custom-nav" />
            </div>
          </div>
        </div>
      </div>
      <div className="header-backdrop"></div>
    </header>
  );
}
