import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
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
        <>
          <MainDescription description="La navegación vertical debe usarse cuando el espacio horizontal es más amplio y cuando la lista de secciones es mayor de lo que se puede presentar al usuario en un formato horizontal. También se pueden usar como anclas dentro del contenido en una sola página." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a
              href="https://gcba.github.io/estandares/componentes/navegacion/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
        <CodeBox codeHTML={NAV_VERTICAL_SIMPLE}>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav aria-label="Navegación vertical">
              <ul className="nav flex-column nav-pills">
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
        <CodeBox codeHTML={NAV_VERTICAL_ICON}>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav aria-label="Navegación vertical">
              <ul className="nav flex-column nav-pills">
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
                      <span>Navegación</span>
                    </div>
                  </LinkClient>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Dos niveles',
    },
    {
      id: 'section-4',
      subtitle: 'Sin icono',
      content: (
        <CodeBox codeHTML={NAV_VERTICAL_TWO_LEVEL}>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav  aria-label="Navegación vertical">
              <ul className="nav flex-column nav-pills nav-lg">
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <span>Categorías</span>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <a className="nav-link active-child">
                    <span>Locales y comercios</span>
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Local Indumentaria y calzado. (Actividades comerciales de venta).</span>
                      </LinkClient>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active">
                        <span>Locales gastronómicos: “para llevar/takeaway”</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Locales de óptica</span>
                      </LinkClient>
                    </li>
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Comercial minorista (excluyendo indumentaria y calzado)</span>
                      </LinkClient>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <span>Actividades jurídicas</span>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <span>Otras actividades</span>
                  </LinkClient>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-5',
      subtitle: 'Con icono',
      content: (
        <CodeBox codeHTML={NAV_VERTICAL_TWO_LEVEL_ICON}>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav  aria-label="Navegación vertical">
              <ul className="nav flex-column nav-pills nav-lg">
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Categorías</span>
                    </div>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <a className="nav-link active-child">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Locales y comercios</span>
                    </div>
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Local Indumentaria y calzado. (Actividades comerciales de venta).</span>
                      </LinkClient>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active">
                        <span>Locales gastronómicos: “para llevar/takeaway”</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Locales de óptica</span>
                      </LinkClient>
                    </li>
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Comercial minorista (excluyendo indumentaria y calzado)</span>
                      </LinkClient>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Actividades jurídicas</span>
                    </div>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Otras actividades</span>
                    </div>
                  </LinkClient>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-6',
      title: 'Tres niveles',
    },
    {
      id: 'section-7',
      subtitle: 'Sin icono',
      content: (
        <CodeBox codeHTML={NAV_VERTICAL_THREE_LEVEL}>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav  aria-label="Navegación vertical">
              <ul className="nav flex-column nav-pills nav-lg">
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <span>Categorías</span>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <a className="nav-link active-child">
                    <span>Locales y comercios</span>
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Local Indumentaria y calzado. (Actividades comerciales de venta).</span>
                      </LinkClient>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active-child">
                        <span>Locales gastronómicos: “para llevar/takeaway”</span>
                      </a>
                      <ul className="nav flex-column nav-pills">
                        <li className="nav-item">
                          <LinkClient className="nav-link">
                            <span>Con local a la calle</span>
                          </LinkClient>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active">
                            <span>Food trucks</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Locales de óptica</span>
                      </LinkClient>
                    </li>
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Comercial minorista (excluyendo indumentaria y calzado)</span>
                      </LinkClient>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <span>Actividades jurídicas</span>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <span>Otras actividades</span>
                  </LinkClient>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
      ),
    }, 
    {
      id: 'section-8',
      subtitle: 'Con icono',
      content: (
        <CodeBox codeHTML={NAV_VERTICAL_THREE_LEVEL_ICON}>
          <div className="col-12 col-lg-8 mx-auto pb-2">
            <nav  aria-label="Navegación vertical">
              <ul className="nav flex-column nav-pills nav-lg">
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Categorías</span>
                    </div>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <a className="nav-link active-child">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Locales y comercios</span>
                    </div>
                  </a>
                  <ul className="nav flex-column nav-pills">
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Local Indumentaria y calzado. (Actividades comerciales de venta).</span>
                      </LinkClient>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active-child">
                        <span>Locales gastronómicos: “para llevar/takeaway”</span>
                      </a>
                      <ul className="nav flex-column nav-pills">
                        <li className="nav-item">
                          <LinkClient className="nav-link">
                            <span>Con local a la calle</span>
                          </LinkClient>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active">
                            <span>Food trucks</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Locales de óptica</span>
                      </LinkClient>
                    </li>
                    <li className="nav-item">
                      <LinkClient className="nav-link">
                        <span>Comercial minorista (excluyendo indumentaria y calzado)</span>
                      </LinkClient>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Actividades jurídicas</span>
                    </div>
                  </LinkClient>
                </li>
                <li className="nav-item">
                  <LinkClient className="nav-link">
                    <div className="nav-icon">
                      <span className="material-symbols-rounded o-icon" aria-label="hidden">
                        add
                      </span>
                      <span>Otras actividades</span>
                    </div>
                  </LinkClient>
                </li>
              </ul>
            </nav>
          </div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default NavVerticalDocs;
