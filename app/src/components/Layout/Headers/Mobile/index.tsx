import React, { useEffect, useState } from 'react';

import Drawer from '../../../Drawer/index';
import {
  componentsPages,
  documentationPages,
  formsPages,
  gettingPages,
  organismsPages,
  stylesPages,
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
            <p className="headline-lg fw-bold">Secciones</p>
            <hr className="my-4" />
            <NavLayout items={gettingPages} />
            <p className="headline-lg fw-bold mt-4">Documentación</p>
            <hr className="my-4" />
            <NavLayout items={documentationPages} />
            <p className="headline-lg fw-bold mt-4">Estilos</p>
            <hr className="my-4" />
            <NavLayout items={stylesPages} />
            <p className="headline-lg fw-bold mt-4">Componentes</p>
            <hr className="my-4" />
            <NavLayout items={componentsPages} />
            <p className="headline-lg fw-bold mt-4">Formularios</p>
            <hr className="my-4" />
            <NavLayout items={formsPages} />
            <p className="headline-lg fw-bold mt-4">Organismos</p>
            <hr className="my-4" />
            <NavLayout items={organismsPages} />
          </div>
        </Drawer>
      </div>
    </>
  );
}
