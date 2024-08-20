import React, { useEffect, useState } from 'react';

import Drawer from '../../../Drawer/index'; 
import { componentsPages, gettingPages } from '../../main-layout';
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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <button
        className="navbar-toggler btn btn-outline-primary"
        type="button"
        onClick={toggleDrawer}
        aria-label="Menú"
      >
        <i className="bx bx-menu"></i>
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={isMobile ? 250 : 300}
      >
        <div className="px-4 pb-5">
          <h3 className="headline-lg fw-bold">Secciones</h3>
          <hr className="my-4" />
          <NavLayout items={gettingPages} />
          <h3 className="headline-lg fw-bold mt-4">Componentes</h3>
          <hr className="my-4" />
          <NavLayout items={componentsPages} />
        </div>
      </Drawer>
    </div>
  );
}
