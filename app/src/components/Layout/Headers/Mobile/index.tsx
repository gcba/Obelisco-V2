import React, { useEffect, useState } from 'react';

import Drawer from '../../../Drawer/index';
import { componentsPages, formsPages, gettingPages, organismsPages, stylesPages } from '../../main-layout';
import NavLayout from '../../Navigation/nav';

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 375);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="d-block d-lg-none">
      <button className="navbar-toggler btn btn-outline-primary" type="button" onClick={toggleDrawer} aria-label="Menú">
        <i className="bx bx-menu"></i>
      </button>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" size={isMobile ? 250 : 300}>
        <div className="px-4 pb-5">
          <p className="headline-lg fw-bold">Secciones</p>
          <hr className="my-4" />
          <NavLayout items={gettingPages} />
          <p className="headline-lg fw-bold mt-4">Estilos</p>
          <hr className="my-4" />
          <NavLayout items={stylesPages} />
          <p className="headline-lg fw-bold mt-4">Componentes</p>
          <hr className="my-4" />
          <NavLayout items={componentsPages} />
          <p className="headline-lg fw-bold mt-4">Formularios</p>
          <hr className="my-4" />
          <NavLayout items={formsPages} />
          {/* Al crear organismos, eliminar el div con clase d-none que envuelve al titulo y nav */}
          <div className="d-none">
            <p className="headline-lg fw-bold mt-4">Organismos</p>
            <hr className="my-4" />
            <NavLayout items={organismsPages} />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
