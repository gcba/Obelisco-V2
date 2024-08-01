"use client";
import Image from 'next/image';
import React from 'react';
import "../../layout.scss";
import Link from 'next/link';
import HeaderMobile from '../Mobile';
import NavLayout from '../../Navigation/nav';

export default function HeaderDesktop () {

  const gettingPages = [
    {text: "Inicio", url: "/getting-started", id: 1},
    {text: "Componentes", url: "/components", id: 2},
  ];

  return (
    <header className="navbar navbar-light navbar-expand-lg" role="banner">
      <Link href="#main" className="skip-to-main-content-link">
        Saltar al contenido principal
      </Link>
      <div className="container header-container">
        <Link href="/" className="navbar-brand">
          <Image
            className="header-logo"
            src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg"
            alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
            width={76}
            height={41}
          />
          <Image
            className="react-logo"
            src="/react-logo.svg"
            width={41}
            height={41}
            alt="Logo React obelisco"
          />
        </Link>
        <HeaderMobile />
        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-content">
            <div className="navbar-sections m-0">
              <h3 className="navbar-sections-title">Secciones</h3>
              <NavLayout items={gettingPages} className='custom-nav'/>
            </div>
          </div>
        </div>
      </div>
      <div className="header-backdrop"></div>
    </header>
  )
}