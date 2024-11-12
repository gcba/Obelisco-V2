import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  NAV_HORIZONTAL_SIMPLE,
  NAV_HORIZONTAL_ICON,
  NAV_HORIZONTAL_ICON_RIGHT,
  NAV_HORIZONTAL_SIZES,
  NAV_HORIZONTAL_BORDER,
} from './code-views';

const sections = [
  {
    title: 'Navegación Horizontal',
    h1: true,
    content: (
      <>
        <MainDescription description="Permite a las personas usuarias a navegar por las vistas sin salir de la página. Siempre contienen al menos dos elementos y una esta activa a la vez. Generalmente se utilizan en encabezados o secciones grandes." />
        <p className="lead mb-4">
          Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
          <a href="https://gcba.github.io/estandares/componentes/navegacion/" target="_blank" rel="noopener noreferrer">
            enlace
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'section-1',
    title: 'Simple',
    content: (
      <CodeBox codeHTML={NAV_HORIZONTAL_SIMPLE}>
        <div className="container w-fit">
          <nav aria-label="Navegación horizontal">
            <ul className="nav flex-row nav-pills">
              <li className="nav-item">
                <LinkClient className="nav-link">
                  <span>Navegación</span>
                </LinkClient>
              </li>
              <li className="nav-item">
                <a className="nav-link active">
                  <span>Activo</span>
                </a>
              </li>
              <li className="nav-item">
                <LinkClient className="nav-link">
                  <span>Navegación</span>
                </LinkClient>
              </li>
            </ul>
          </nav>
        </div>
      </CodeBox>
    ),
  },
  {
    id: 'section-2',
    title: 'Simple con icono',
    content: (
      <>
        <CodeBox codeHTML={NAV_HORIZONTAL_ICON}>
          <div className="container w-fit">
            <nav aria-label="Navegación horizontal">
              <ul className="nav flex-row nav-pills">
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Navegación</span>
                    </div>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Activo</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Link</span>
                    </div>
                  </LinkClient>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={NAV_HORIZONTAL_ICON_RIGHT}>
          <div className="container w-fit">
            <nav aria-label="Navegación horizontal">
              <ul className="nav flex-row nav-pills">
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span>Navegación</span>
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        arrow_forward
                      </span>
                    </div>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <a className="nav-link active">
                    <div className="nav-icon">
                      <span>Activo</span>
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        arrow_forward
                      </span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span>Navegación</span>
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        arrow_forward
                      </span>
                    </div>
                  </LinkClient>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    id: 'section-3',
    title: 'Tamaños',
    content: (
      <>
        <CodeBox codeHTML={NAV_HORIZONTAL_SIZES}>
          <div className="container w-fit">
            <nav aria-label="Navegación horizontal">
              <ul className="nav flex-row nav-pills">
                <li className="nav-item">
                  <a className="nav-link nav-link-lg border-link">
                    <span>Navegación</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border-link">
                    <span>Navegación</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-sm border-link">
                    <span>Navegación</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
      </>
    ),
  },
  {
    id: 'section-4',
    title: 'Con borde',
    content: (
      <>
        <CodeBox codeHTML={NAV_HORIZONTAL_BORDER}>
          <div className="container w-fit">
            <nav aria-label="Navegación horizontal">
              <ul className="nav flex-row nav-pills">
                <li className="nav-item">
                  <a className="nav-link border-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Navegación</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border-link active">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Activo</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Navegación</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
        <br />
        <br />
      </>
    ),
  },
];

const NavHorizontalDocs: React.FC = () => {
  return <DocumentationTemplate sections={sections} />;
};

export default NavHorizontalDocs;
