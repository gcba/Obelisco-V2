import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer'
import { usePathname } from "next/navigation";

//import styles 👇
import 'react-modern-drawer/dist/index.css'

export default function HeaderMobile () {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }
  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el drawer cuando se hace clic en un enlace
  };

  useEffect(() => {
    function handleResize () {
      setIsMobile(window.innerWidth < 375); // Cambia 375 por el ancho deseado para el modo móvil
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleDrawer}
        aria-label="Menú"
      ></button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='drawerCustom'
        size={isMobile ? 250 : 300}
      >
        <div className="px-4 pb-5">
          <h3 className="navbar-sections-title">Secciones</h3>
          <hr className="my-4" />
          <nav>
            <ul className="nav d-block nav-pills">
              <li className="nav-item mb-3" onClick={handleLinkClick}>
                <Link className={`nav-link ${pathname === '/getting-started' ? 'active' : ''}`} href="/getting-started">
                  <div className="nav-icon">
                    <span className="material-icons-round">home</span>
                    <span>Inicio</span>
                  </div>
                </Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link ${pathname === '/components' ? 'active' : ''}`} href="/components">
                  <div className="nav-icon">
                    <span className="material-icons-round">code</span>
                    <span>Componentes</span>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <hr className="my-4" />
          <h3 className="navbar-sections-title mt-4">Componentes</h3>
          <nav>
            <ul className="nav flex-column nav-pills pt-2">
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/access' ? 'active' : ''}`} href="/components/access">Accesos</Link>
              </li> */}
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/alert' ? 'active' : ''}`} href="/components/alert">Alertas</Link>
              </li>
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/audio' ? 'active' : ''}`} href="/components/audio">Audio</Link>
              </li> */}
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/banner' ? 'active' : ''}`} href="/components/banner">Banner</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/block' ? 'active' : ''}`} href="/components/block">Bloque de trámite</Link>
              </li>
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/breadcrumb' ? 'active' : ''}`} href="/components/breadcrumb">Migas de pan</Link>
              </li> */}
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/button' ? 'active' : ''}`} href="/components/button">Botón</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/collapse' ? 'active' : ''}`} href="/components/collapse">Colapsable</Link>
              </li>
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/footer' ? 'active' : ''}`} href="/components/footer">Footer</Link>
              </li> */}
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/gallery' ? 'active' : ''}`} href="/components/gallery">Galeria</Link>
              </li> */}
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/navigation-vertical' ? 'active' : ''}`} href="/components/navigation-vertical">Navegacion vertical</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/navigation-horizontal' ? 'active' : ''}`} href="/components/navigation-horizontal">Navegacion Horizontal</Link>
              </li>
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/spinner' ? 'active' : ''}`} href="/components/spinner">Spinner</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/highlightedPanel' ? 'active' : ''}`} href="/components/highlightedPanel">highlightedPanel</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/modal' ? 'active' : ''}`} href="/components/modal">Modal</Link>
              </li> */}
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/progress-bar' ? 'active' : ''}`} href="/components/progress-bar">Barra de progreso</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/small-panel' ? 'active' : ''}`} href="/components/small-panel">Panel Chico</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/status-message' ? 'active' : ''}`} href="/components/status-message">Mensaje de estado</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/step-list' ? 'active' : ''}`} href="/components/step-list">Lista de pasos</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/stepper' ? 'active' : ''}`} href="/components/stepper">Pasos de un formulario</Link>
              </li> */}
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/card' ? 'active' : ''}`} href="/components/card">Tarjetas</Link>
              </li>
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className={`nav-link w-100 text-left ${pathname === '/components/map' ? 'active' : ''}`} href="/components/map">Mapa</Link>
              </li> */}
              {/* <li className="nav-item" onClick={handleLinkClick}>
                <Link className="nav-link w-100 text-left " href="/components/typography">Tipografia</Link>
              </li>
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className="nav-link w-100 text-left " href="/components/list-link">Lista de Pasos</Link>
              </li> */}
              <li className="nav-item" onClick={handleLinkClick}>
                <Link className="nav-link w-100 text-left " href="/components/tabs">Pestañas</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Drawer>
    </>
  )
}