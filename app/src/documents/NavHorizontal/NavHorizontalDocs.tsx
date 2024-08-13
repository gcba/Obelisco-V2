import CodeCopy from "@/components/CodeBox";
import MainDescription from '@/components/Template/MainDescription';
import { EGcodeSimpleNavHorizontal, EGcodeWithIconHorizontal, EGcodeSizesHorizontal } from './code-views';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    id: 'section-1',
    title: 'Navegación horizontal',
    h1: true,
    content: (
      <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
    ),
    description: undefined
  },
  {
    id: 'section-2',
    title: 'Simple',
    content: (
      <>
        <div className="col-12 col-lg-8 mx-auto pb-2">
          <nav>
            <ul className="nav flex-row nav-pills">
              <li className="nav-item">
                <a className="nav-link" href="#"><span>Link</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#"><span>Activo</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><span>Link</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" aria-disabled="true" tabIndex={-1}>
                  <span>Deshabilitado</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <CodeCopy code={EGcodeSimpleNavHorizontal} />
      </>
    )
  },
  {
    id: 'section-3',
    title: 'Simple con icono',
    content: (
      <>
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
          <br />
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
        <CodeCopy code={EGcodeWithIconHorizontal} />
      </>
    )
  },
  {
    id: 'section-4',
    title: 'Tamaños',
    content: (
      <>
        <div className="col-12 col-lg-8 mx-auto pb-2">
          <nav>
            <ul className="nav flex-row nav-pills">
              <li className="nav-item">
                <a className="nav-link nav-link-lg border-link" href="#"><span>Link</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link border-link" href="#"><span>Link</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-sm border-link" href="#"><span>Link</span></a>
              </li>
            </ul>
          </nav>
        </div>
        <CodeCopy code={EGcodeSizesHorizontal} />
      </>
    )
  },
  {
    id: 'section-5',
    title: 'Con borde',
    content: (
      <>
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
        <CodeCopy code={EGcodeSizesHorizontal} />
      </>
    )
  }
];

const NavHorizontalDocs: React.FC = () => {
  return (
    <DocumentationTemplate
      sections={sections}
    />
  );
};

export default NavHorizontalDocs;
