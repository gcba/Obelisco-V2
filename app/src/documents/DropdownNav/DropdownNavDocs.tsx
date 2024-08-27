import CodeBox from "@/components/CodeBox";
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { DROPDOWN_CASCADE_RIGHT, } from './code-views';

const sections = [
  {
    id: 'section-1',
    title: 'Desplegable de navegación',
    content: (
      <MainDescription description="Este tipo de desplegables permite acceder a opciones de navegación y funcionalidades adicionales de manera organizada, desplegándolas de forma vertical u horizontal." />
    ),
    h1: true,
  },
  {
    id: 'section-2',
    title: 'Con icono',
    content: (
      <>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
              expand_more
            </span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              <i className="bx bxs-info-circle o-icon"></i>
              <span className="item-text">
                Opción de navegación
              </span>
              <i className="bx bxs-info-circle o-icon"></i>
            </a>
            <a className="dropdown-item" href="#">
              <i className="bx bxs-info-circle o-icon"></i>
              <span className="item-text text-end">
                Opción de navegación
              </span>
              <i className="bx bxs-info-circle o-icon"></i>
            </a>
            <a className="dropdown-item disabled" href="#">
              <i className="bx bxs-info-circle o-icon"></i>
              <span className="item-text text-end">
                Opción de navegación
              </span>
              <i className="bx bxs-info-circle o-icon"></i>
            </a>
            <a className="dropdown-item item-danger" href="#">
              <span
                className="material-symbols-rounded o-icon"
                aria-label="hidden"
              >
                logout
              </span>
              <span className="item-text">Cerrar sesión</span>
            </a>
          </div>
        </div>
        
        <br />
  
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span
              className="material-symbols-rounded o-icon"
              aria-label="hidden"
            >
              menu
            </span>
            <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              <i className="bx bxs-info-circle o-icon"></i>
              <span className="item-text">
                Opción de navegación
              </span>
            </a>
            <a className="dropdown-item" href="#">
              <span className="item-text text-end">
                Opción de navegación
              </span>
              <i className="bx bxs-info-circle o-icon"></i>
            </a>
            <a className="dropdown-item item-danger" href="#">
              <span className="item-text text-end">
                Cerrar sesión
              </span>
              <span
                className="material-symbols-rounded o-icon"
                aria-label="hidden"
              >
                logout
              </span>
            </a>
          </div>
        </div>
        
        <br />
  
        <div className="container">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Menu"
            >
              <span
                className="material-symbols-rounded o-icon"
                aria-label="hidden"
              >
                menu
              </span>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                <i className="bx bxs-info-circle o-icon"></i>
                <span className="item-text">
                  Opción de navegación
                </span>
              </a>
              <a className="dropdown-item" href="#">
                <span className="item-text text-end">
                  Opción de navegación
                </span>
                <i className="bx bxs-info-circle o-icon"></i>
              </a>
              <a className="dropdown-item item-danger" href="#">
                <span className="item-text text-end">
                  Cerrar sesión
                </span>
                <span
                  className="material-symbols-rounded o-icon"
                  aria-label="hidden"
                >
                  logout
                </span>
              </a>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'section-3',
    title: 'Disposición derecha',
    content: (
      <>
        <div className="dropdown ms-auto">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
              expand_more
            </span>
            <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
          </button>
          <div className="dropdown-menu dropdown-menu-end">
            <a className="dropdown-item" href="#">
              <span className="item-text">Opción de navegación</span>
            </a>
            <a className="dropdown-item" href="#">
              <span className="item-text">Opción de navegación</span>
            </a>
            <a className="dropdown-item" href="#">
              <span className="item-text">Opción de navegación</span>
            </a>
            <a className="dropdown-item item-danger" href="#">
              <span className="item-text">Cerrar sesión</span>
              <span
                className="material-symbols-rounded o-icon"
                aria-label="hidden"
              >
                logout
              </span>
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'section-4',
    title: 'Con cascada',
    content: (
      <>
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
            <span
              className="material-symbols-rounded o-icon btn-dropdown-icon"
              aria-label="hidden"
            >
              expand_more
            </span>
          </button>
          <div className="dropdown-menu">
            <div className="dropdown sub-dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <i className="bx bxs-info-circle o-icon"></i>
                <span className="btn-dropdown-text ellipsis-1">
                  Opción en cascada
                </span>
                <span
                  className="material-symbols-rounded o-icon btn-dropdown-icon"
                  aria-label="hidden"
                >
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown sub-dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bx bxs-info-circle o-icon"></i>
                    <span className="btn-dropdown-text">
                      Opción en cascada
                    </span>
                    <span
                      className="material-symbols-rounded o-icon btn-dropdown-icon"
                      aria-label="hidden"
                    >
                      expand_more
                    </span>
                  </button>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Opción de navegación</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Opción de navegación</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Opción de navegación</span>
                    </a>
                  </div>
                </div>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item" href="#">
                  <span className="item-text">Opción de navegación</span>
                </a>
                <a className="dropdown-item item-danger" href="#">
                  <span
                    className="material-symbols-rounded o-icon"
                    aria-label="hidden"
                  >
                    logout
                  </span>
                  <span className="item-text">Cerrar sesión</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <CodeBox codeHTML={DROPDOWN_CASCADE_RIGHT}>
          <div className="container">
            <div className="dropdown ms-auto">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span
                  className="material-symbols-rounded o-icon btn-dropdown-icon"
                  aria-label="hidden"
                >
                  expand_more
                </span>
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <div className="dropdown sub-dropdown">
                  <button
                    type="button"
                    className="btn btn-dropdown btn-dropdown-lg"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span
                      className="material-symbols-rounded o-icon btn-dropdown-icon"
                      aria-label="hidden"
                    >
                      expand_more
                    </span>
                    <span className="btn-dropdown-text">Desplegable</span>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div className="dropdown sub-dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span
                          className="material-symbols-rounded o-icon btn-dropdown-icon"
                          aria-label="hidden"
                        >
                          expand_more
                        </span>
                        <span className="btn-dropdown-text ellipsis-1">
                          Opción en cascada
                        </span>
                        <i className="bx bxs-info-circle o-icon"></i>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">
                            Opción de navegación
                          </span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">
                            Opción de navegación
                          </span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">
                            Opción de navegación
                          </span>
                        </a>
                      </div>
                    </div>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Opción de navegación</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Opción de navegación</span>
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="item-text">Opción de navegación</span>
                    </a>
                    <a className="dropdown-item item-danger" href="#">
                      <span className="item-text">Cerrar sesión</span>
                      <span
                        className="material-symbols-rounded o-icon"
                        aria-label="hidden"
                      >
                        logout
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br /><br /><br /><br />
      </>
    ),
  },
];

const DropdownNavDocs: React.FC = () => {
  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default DropdownNavDocs;
