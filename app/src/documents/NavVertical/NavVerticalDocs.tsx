import CodeCopy from "@/components/CodeBox";
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import { EGcodeSimpleNavVertical, EGcodeWithIconVertical, EGcodeTwoLevelVertical, EGcodeTwoLevelWithIconVertical, EGcodeThreeLevelVertical, EGcodeThreeLevelWithIconVertical } from './code-views';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const NavVerticalDocs: React.FC = () => {

  const sections = [
    {
      id: 'section-1',
      title: 'Navegación Vertical',
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
              <ul className="nav flex-column nav-pills">
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
                  <a
                    className="nav-link disabled"
                    href="#"
                    aria-disabled="true"
                    tabIndex={-1}
                  >
                    <span>Deshabilitado</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <CodeCopy code={EGcodeSimpleNavVertical} />
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
                  <a
                    className="nav-link disabled"
                    href="#"
                    aria-disabled="true"
                    tabIndex={-1}
                  >
                    <div className="nav-icon">
                      <i className="bx bxs-user-circle"></i>
                      <span>Deshabilitado</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <CodeCopy code={EGcodeWithIconVertical} />
        </>
      )
    },
    {
      id: 'section-4',
      title: 'Dos niveles',
      content: (
        <>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav>
              <ul className="nav flex-column nav-pills nav-lg">
                <li className="nav-item">
                  <a className="nav-link" href="#"><span>Categorías</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active-child" href="#">
                    <span>Locales y comercios</span>
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>
                          Local Indumentaria y calzado. (Actividades comerciales de
                          venta).
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <span>Locales gastronómicos: “para llevar/takeaway”</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><span>Locales de óptica</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>
                          Comercial minorista (excluyendo indumentaria y calzado)
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span>Actividades jurídicas</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span>Otras actividades</span></a>
                </li>
              </ul>
            </nav>

            <Divisor />

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
                        <span>
                          Local Indumentaria y calzado. (Actividades comerciales de
                          venta).
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">
                        <span>Locales gastronómicos: “para llevar/takeaway”</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><span>Locales de óptica</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>
                          Comercial minorista (excluyendo indumentaria y calzado)
                        </span>
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

          <CodeCopy code={EGcodeTwoLevelVertical} />
          <br />
          <CodeCopy code={EGcodeTwoLevelWithIconVertical} />
        </>
      )
    },
    {
      id: 'section-5',
      title: 'Tres niveles',
      content: (
        <>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav>
              <ul className="nav flex-column nav-pills nav-lg">
                <li className="nav-item">
                  <a className="nav-link" href="#"><span>Categorías</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active-child" href="#">
                    <span>Locales y comercios</span>
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>
                          Local Indumentaria y calzado. (Actividades comerciales de
                          venta).
                        </span>
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
                          <a className="nav-link active" href="#"><span>Food trucks</span></a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#"><span>Locales de óptica</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <span>
                          Comercial minorista (excluyendo indumentaria y calzado)
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span>Actividades jurídicas</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span>Otras actividades</span></a>
                </li>
              </ul>
            </nav>

            <Divisor />

            <div className="storybook__container-nav">
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
                          <span>
                            Local Indumentaria y calzado. (Actividades comerciales de
                            venta).
                          </span>
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
                            <a className="nav-link active" href="#"><span>Food trucks</span></a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#"><span>Locales de óptica</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span>
                            Comercial minorista (excluyendo indumentaria y calzado)
                          </span>
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
          </div>

          <CodeCopy code={EGcodeThreeLevelVertical} />
          <br />
          <CodeCopy code={EGcodeThreeLevelWithIconVertical} />
        </>
      )
    }
  ];

  return (
    <DocumentationTemplate
      sections={sections}
    />
  );
};

export default NavVerticalDocs;
