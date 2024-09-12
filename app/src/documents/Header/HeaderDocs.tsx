import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { HEADER } from './code-views';

const HeaderDocs: React.FC = () => {
  const sections = [
    {
      title: 'Header (encabezado)',
      h1: true,
      content: (
        <MainDescription description="El header es una sección ubicada en la parte superior de la página que contiene elementos y componentes relacionados a la navegación. Su función es permitir que la persona usuaria pueda navegar y acceder intuitivamente a las diferentes secciones de un sitio." />
      ),
    },
    {
      id: 'section-1',
      title: 'Con buscador',
      content: (
        <CodeBox codeHTML={HEADER}>
          <div className="container">
            {/* <header className="navbar navbar-light navbar-expand-lg" role="banner">
              <a href="#main" className="skip-to-main-content-link">
                Saltar al contenido principal
              </a>
              <div className="container header-container">
                <a href="https://buenosaires.gob.ar" className="navbar-brand">
                  <img
                    className="header-logo"
                    src="https://gcba.github.io/Obelisco/header/logotipo_ba.svg"
                    alt="Gobierno de la Ciudad de Buenos Aires - Inicio"
                  />
                </a>
                <div className="navbar-login-mobile">
                  <a
                    className="btn btn-lg btn-icon btn-outline-link"
                    href="#"
                    target="_blank"
                  >
                    <span className="material-icons-round">person</span>
                    <span className="btn-text">Ingresar</span>
                  </a>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarContent"
                  aria-controls="navbarContent"
                  aria-expanded="false"
                  aria-label="Menú"
                ></button>
                <div className="collapse navbar-collapse" id="navbarContent">
                  <div className="navbar-content">
                    <div className="navbar-sections">
                      <nav>
                        <p className="navbar-sections-title">Secciones</p>
                        <ul className="nav nav-pills nav-sections">
                          <li className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="btn-dropdown-text">Navegación</span>
                              <span className="material-icons-round btn-dropdown-icon">
                                expand_more
                              </span>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item item-link" href="#">
                                <span className="item-text">Navegación</span>
                                <span className="material-icons-round">arrow_forward</span>
                              </a>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link nav-link-lg" href="#">
                              <span>Navegación</span>
                            </a>
                          </li>
                          <li className="dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-dropdown-lg dropdown-toggle"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="btn-dropdown-text">Navegación</span>
                              <span className="material-icons-round btn-dropdown-icon">
                                expand_more
                              </span>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">Navegación</span>
                              </a>
                              <a className="dropdown-item item-link" href="#">
                                <span className="item-text">Navegación</span>
                                <span className="material-icons-round">arrow_forward</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="navbar-search">
                      <form className="form-search">
                        <div className="form-group">
                          <label className="sr-only" htmlFor="search-input">Buscador</label>
                          <input
                            type="search"
                            className="form-control input-search"
                            id="search-input"
                            name="name"
                            placeholder="Buscar en Buenos Aires"
                          />
                          <button className="reset" type="reset" aria-label="Borrar"></button>
                          <button
                            className="submit-search"
                            type="submit"
                            aria-label="Buscar"
                          ></button>
                        </div>
                      </form>
                    </div>
                    <div className="navbar-login">
                      <a
                        className="btn btn-lg btn-icon btn-outline-link"
                        href="#"
                        target="_blank"
                      >
                        <span className="material-icons-round">person</span>
                        <span className="btn-text">Ingresar</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-backdrop"></div>
            </header> */}
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default HeaderDocs;
