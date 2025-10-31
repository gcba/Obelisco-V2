import React, { useEffect, useState } from 'react';

import Drawer from '../../../Drawer/index';
import {
  componentsPages,
  documentationPages,
  formsPages,
  gettingPages,
  organismsPages,
  stylesPages,
  templatesPages,
  versions,
} from '../../main-layout';
import NavLayout from '../../Navigation/nav';

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 375);
      setIsTablet(window.innerWidth > 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <button
        className="navbar-toggler d-inline-block d-xl-none"
        type="button"
        onClick={toggleDrawer}
        aria-label="Menú"
        aria-expanded="false"
      ></button>
      <div className="d-block d-xl-none">
        <Drawer open={isOpen} onClose={toggleDrawer} direction="left" size={isMobile ? 250 : isTablet ? 500 : 300}>
          <div className="px-4 pb-5">
            <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Empezar con Obelisco</p>
            <NavLayout items={gettingPages} />
            <hr className="nav-divider" />
            <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Documentación</p>
            <NavLayout items={documentationPages} />
            <hr className="nav-divider" />
            <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Plantillas</p>
            <NavLayout items={templatesPages} />
            <hr className="nav-divider" />
            <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Estilos</p>
            <NavLayout items={stylesPages} />
            <hr className="nav-divider" />
            <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Componentes</p>
            <NavLayout items={componentsPages} />
            <hr className="nav-divider" />
            <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Formularios</p>
            <NavLayout items={formsPages} />
            <hr className="nav-divider" />
            <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Organismos</p>
            <NavLayout items={organismsPages} />
            <hr className="nav-divider" />
            <p className="text-xs fw-semibold text-uppercase text-body-secondary mb-3">Versiones</p>
            <NavLayout items={versions} />
          </div>
        </Drawer>
      </div>
    </>
  );
}
