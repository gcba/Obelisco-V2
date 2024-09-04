import CodeBox from '@/components/CodeBox';
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
      <MainDescription description="Permite a las personas usuarias a navegar por las vistas sin salir de la página. Siempre contienen al menos dos elementos y una esta activa a la vez. Generalmente se utilizan en encabezados o secciones grandes." />
    ),
  },
  {
    id: 'section-1',
    title: 'Simple',
    content: (
      <CodeBox codeHTML={NAV_HORIZONTAL_SIMPLE}>
        <div className="col-12 col-lg-8 mx-auto pb-2">
          <nav>
            <ul className="nav flex-row nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>Link</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <span>Activo</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <span>Link</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true" tabIndex={-1}>
                  <span>Deshabilitado</span>
                </a>
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
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav>
              <ul className="nav flex-row nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Link</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Activo</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Link</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" aria-disabled="true" tabIndex={-1}>
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Deshabilitado</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
        <br />
        <CodeBox codeHTML={NAV_HORIZONTAL_ICON_RIGHT}>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav>
              <ul className="nav flex-row nav-pills">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="nav-icon">
                      <span>Link</span>
                      <i className="bx bxs-user-circle"></i>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <div className="nav-icon">
                      <span>Activo</span>
                      <i className="bx bxs-user-circle"></i>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <div className="nav-icon">
                      <span>Link</span>
                      <i className="bx bxs-user-circle"></i>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" aria-disabled="true" tabIndex={-1}>
                    <div className="nav-icon">
                      <span>Deshabilitado</span>
                      <i className="bx bxs-user-circle"></i>
                    </div>
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
    id: 'section-3',
    title: 'Tamaños',
    content: (
      <>
        <CodeBox codeHTML={NAV_HORIZONTAL_SIZES}>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav>
              <ul className="nav flex-row nav-pills">
                <li className="nav-item">
                  <a className="nav-link nav-link-lg border-link" href="#">
                    <span>Link</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border-link" href="#">
                    <span>Link</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-sm border-link" href="#">
                    <span>Link</span>
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
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav>
              <ul className="nav flex-row nav-pills">
                <li className="nav-item">
                  <a className="nav-link border-link" href="#">
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Link</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border-link active" href="#">
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Activo</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border-link" href="#">
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Link</span>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border-link disabled" href="#" aria-disabled="true" tabIndex={-1}>
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Deshabilitado</span>
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
