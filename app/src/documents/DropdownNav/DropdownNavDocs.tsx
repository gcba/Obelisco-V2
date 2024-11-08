import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  DROPDOWN,
  DROPDOWN_CASCADE,
  DROPDOWN_CASCADE_RIGHT,
  DROPDOWN_MENU_ICON,
  DROPDOWN_MENU_ICON_ONLY,
  DROPDOWN_MENU_RIGHT,
} from './code-views';

const sections = [
  {
    title: 'Desplegable de navegación',
    content: (
      <>
        <MainDescription description="Este tipo de desplegables permite acceder a opciones de navegación y funcionalidades adicionales de manera organizada, desplegándolas de forma vertical u horizontal." />
        <p className="lead mb-4">
          Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
          <a
            href="https://gcba.github.io/estandares/componentes/desplegables/desplegables_navegacion/"
            target="_blank"
            rel="noopener noreferrer"
          >
            enlace
          </a>
          .
        </p>
      </>
    ),
    h1: true,
  },
  {
    id: 'section-1',
    title: 'Con icono',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu">
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={DROPDOWN_MENU_ICON}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  add
                </span>
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              </button>
              <div className="dropdown-menu">
                <LinkClient className="dropdown-item">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    add
                  </span>
                  <span className="item-text">Opción de navegación</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    arrow_forward
                  </span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    add
                  </span>
                  <span className="item-text text-end">Opción de navegación</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    arrow_forward
                  </span>
                </LinkClient>
                <a className="dropdown-item disabled">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    add
                  </span>
                  <span className="item-text text-end">Opción de navegación</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    arrow_forward
                  </span>
                </a>
                <LinkClient className="dropdown-item item-danger">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                  <span className="item-text">Cerrar sesión</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={DROPDOWN_MENU_ICON_ONLY}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Menu"
              >
                <span className="material-symbols-rounded o-icon" aria-label="hidden">
                  menu
                </span>
              </button>
              <div className="dropdown-menu">
                <LinkClient className="dropdown-item">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    add
                  </span>
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text text-end">Opción de navegación</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    arrow_forward
                  </span>
                </LinkClient>
                <LinkClient className="dropdown-item item-danger">
                  <span className="item-text text-end">Cerrar sesión</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    id: 'section-2',
    title: 'Disposición derecha',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN_MENU_RIGHT}>
          <div className="container">
            <div className="dropdown ms-auto">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item item-danger">
                  <span className="item-text">Cerrar sesión</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    id: 'section-3',
    title: 'Con cascada',
    content: (
      <>
        <CodeBox codeHTML={DROPDOWN_CASCADE}>
          <div className="container">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
              </button>
              <div className="dropdown-menu">
                <div className="dropdown sub-dropdown">
                  <button type="button" className="btn btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="material-symbols-rounded o-icon" aria-label="hidden">
                      add
                    </span>
                    <span className="btn-dropdown-text ellipsis-1">Opción en cascada</span>
                    <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                      expand_more
                    </span>
                  </button>
                  <div className="dropdown-menu">
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                  </div>
                </div>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item item-danger">
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                  <span className="item-text">Cerrar sesión</span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={DROPDOWN_CASCADE_RIGHT}>
          <div className="container">
            <div className="dropdown ms-auto">
              <button
                type="button"
                className="btn btn-dropdown btn-dropdown-border btn-lg"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
              >
                <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                  expand_more
                </span>
                <span className="btn-dropdown-text ellipsis-1">Desplegable</span>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <div className="dropdown sub-dropdown">
                  <button type="button" className="btn btn-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="material-symbols-rounded btn-dropdown-icon" aria-label="hidden">
                      expand_more
                    </span>
                    <span className="btn-dropdown-text ellipsis-1">Opción en cascada</span>
                    <span className="material-symbols-rounded o-icon" aria-label="hidden">
                      add
                    </span>
                  </button>
                  <div className="dropdown-menu">
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                    <LinkClient className="dropdown-item">
                      <span className="item-text">Opción de navegación</span>
                    </LinkClient>
                  </div>
                </div>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item">
                  <span className="item-text">Opción de navegación</span>
                </LinkClient>
                <LinkClient className="dropdown-item item-danger">
                  <span className="item-text">Cerrar sesión</span>
                  <span className="material-symbols-rounded o-icon" aria-label="hidden">
                    logout
                  </span>
                </LinkClient>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
      </>
    ),
  },
];

const DropdownNavDocs: React.FC = () => {
  return <DocumentationTemplate sections={sections} />;
};

export default DropdownNavDocs;
