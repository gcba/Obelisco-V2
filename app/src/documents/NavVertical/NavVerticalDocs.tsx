import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  NAV_VERTICAL_SIMPLE,
  NAV_VERTICAL_ICON,
  NAV_VERTICAL_TWO_LEVEL_ICON,
  NAV_VERTICAL_TWO_LEVEL,
  NAV_VERTICAL_THREE_LEVEL,
  NAV_VERTICAL_THREE_LEVEL_ICON,
} from './code-views';

const NavVerticalDocs: React.FC = () => {
  const sections = [
    {
      title: 'Navegación Vertical',
      h1: true,
      content: (
        <MainDescription description="La navegación vertical debe usarse cuando el espacio horizontal es más amplio y cuando la lista de secciones es mayor de lo que se puede presentar al usuario en un formato horizontal. También se pueden usar como anclas dentro del contenido en una sola página." />
      ),
    },
    {
      id: 'section-1',
      title: 'Simple',
      content: (
        <>
          <CodeBox codeHTML={NAV_VERTICAL_SIMPLE}>
            <div className="col-12 col-lg-8 mx-auto pb-2">
              <nav>
                <ul className="nav flex-column nav-pills">
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
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Simple con icono',
      content: (
        <>
          <CodeBox codeHTML={NAV_VERTICAL_ICON}>
            <div className="col-12 col-lg-8 mx-auto pb-2">
              <nav>
                <ul className="nav flex-column nav-pills">
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
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Dos niveles',
      content: (
        <>
          <CodeBox codeHTML={NAV_VERTICAL_TWO_LEVEL}>
            <div className="col-12 col-lg-8 mx-auto pb-2">
              <nav>
                <ul className="nav flex-column nav-pills nav-lg">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>Categorías</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active-child" href="#">
                      <span>Locales y comercios</span>
                    </a>
                    <ul className="nav flex-column nav-pills">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Local Indumentaria y calzado. (Actividades comerciales de venta).</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          <span>Locales gastronómicos: “para llevar/takeaway”</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Locales de óptica</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Comercial minorista (excluyendo indumentaria y calzado)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>Actividades jurídicas</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>Otras actividades</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={NAV_VERTICAL_TWO_LEVEL_ICON}>
            <div className="col-12 col-lg-8 mx-auto pb-2">
              <nav>
                <ul className="nav flex-column nav-pills nav-lg">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="nav-icon">
                        <i className="bx bxs-user-circle"></i>
                        <span>Categorías</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active-child" href="#">
                      <div className="nav-icon">
                        <i className="bx bxs-user-circle"></i>
                        <span>Locales y comercios</span>
                      </div>
                    </a>
                    <ul className="nav flex-column nav-pills">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Local Indumentaria y calzado. (Actividades comerciales de venta).</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          <span>Locales gastronómicos: “para llevar/takeaway”</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Locales de óptica</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Comercial minorista (excluyendo indumentaria y calzado)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="nav-icon">
                        <i className="bx bxs-user-circle"></i>
                        <span>Actividades jurídicas</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="nav-icon">
                        <i className="bx bxs-user-circle"></i>
                        <span>Otras actividades</span>
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
      id: 'section-4',
      title: 'Tres niveles',
      content: (
        <>
          <CodeBox codeHTML={NAV_VERTICAL_THREE_LEVEL}>
            <div className="col-12 col-lg-8 mx-auto pb-2">
              <nav>
                <ul className="nav flex-column nav-pills nav-lg">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>Categorías</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active-child" href="#">
                      <span>Locales y comercios</span>
                    </a>
                    <ul className="nav flex-column nav-pills">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Local Indumentaria y calzado. (Actividades comerciales de venta).</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active-child" href="#">
                          <span>Locales gastronómicos: “para llevar/takeaway”</span>
                        </a>
                        <ul className="nav flex-column nav-pills">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <span>Con local a la calle</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="#">
                              <span>Food trucks</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Locales de óptica</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Comercial minorista (excluyendo indumentaria y calzado)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>Actividades jurídicas</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <span>Otras actividades</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={NAV_VERTICAL_THREE_LEVEL_ICON}>
            <div className="col-12 col-lg-8 mx-auto pb-2">
              <nav>
                <ul className="nav flex-column nav-pills nav-lg">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="nav-icon">
                        <i className="bx bxs-user-circle"></i>
                        <span>Categorías</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active-child" href="#">
                      <div className="nav-icon">
                        <i className="bx bxs-user-circle"></i>
                        <span>Locales y comercios</span>
                      </div>
                    </a>
                    <ul className="nav flex-column nav-pills">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Local Indumentaria y calzado. (Actividades comerciales de venta).</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active-child" href="#">
                          <span>Locales gastronómicos: “para llevar/takeaway”</span>
                        </a>
                        <ul className="nav flex-column nav-pills">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <span>Con local a la calle</span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="#">
                              <span>Food trucks</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Locales de óptica</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>Comercial minorista (excluyendo indumentaria y calzado)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="nav-icon">
                        <i className="bx bxs-user-circle"></i>
                        <span>Actividades jurídicas</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <div className="nav-icon">
                        <i className="bx bxs-user-circle"></i>
                        <span>Otras actividades</span>
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

  return <DocumentationTemplate sections={sections} />;
};

export default NavVerticalDocs;
