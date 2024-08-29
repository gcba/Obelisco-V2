import CodeBox from "@/components/CodeBox";
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from "@/components/Template/MainDescription";

import { TABS_SIMPLE_ICON, TABS_FIXED_WIDTH, TABS_CONTAINER, TABS_SIMPLE } from './code-views';

const TabsDocs: React.FC = () => {

  const sections = [
    {
      title: 'Pestañas',
      h1: true,
      content: (
        <MainDescription description="Las pestañas se pueden usar para organizar contenido como formularios, configuraciones y tableros para que un usuario no tenga que navegar fuera de su flujo de trabajo para completar su tarea." />
      ),
    },
    {
      id: 'section-1',
      title: 'Simple',
      content: (
        <>
          <CodeBox codeHTML={TABS_SIMPLE}>
            <div className="col-12 col-lg-8 mx-auto">
              <nav className="tabs-slider" aria-label="Navegación por pestañas">
                <ul className="nav nav-pills tabs" id="simple-myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-content-1"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-1"
                      aria-selected="false"
                      id="tab-1"
                    >
                      Pestaña 1
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-content-2"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-2"
                      aria-selected="false"
                      id="tab-2"
                    >
                      Pestaña 2
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-content-3"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-3"
                      aria-selected="true"
                      id="tab-3"
                    >
                      Pestaña 3
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link disabled"
                      disabled
                      tabIndex={-1}
                      data-bs-toggle="tab"
                      data-bs-target="#panel-content-4"
                      type="button"
                      role="tab"
                      aria-controls="panel-content-4"
                      aria-selected="false"
                      id="tab-4"
                    >
                      Pestaña 4
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="tab-content" id="simple-myTabContent">
                <div
                  className="tab-pane fade"
                  id="panel-content-1"
                  role="tabpanel"
                  aria-labelledby="tab-1"
                >
                  Contenido Pestaña 1
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-content-2"
                  role="tabpanel"
                  aria-labelledby="tab-2"
                >
                  Contenido Pestaña 2
                </div>
                <div
                  className="tab-pane fade show active"
                  id="panel-content-3"
                  role="tabpanel"
                  aria-labelledby="tab-3"
                >
                  Contenido Pestaña 3
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-content-4"
                  role="tabpanel"
                  aria-labelledby="tab-4"
                >
                  Contenido Pestaña 4
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={TABS_SIMPLE_ICON}>
            <div className="col-12 col-lg-8 mx-auto">
              <nav className="tabs-slider" aria-label="Navegación por pestañas">
                <ul className="nav nav-pills tabs" id="icon-myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-icon-content-1"
                      type="button"
                      role="tab"
                      aria-controls="panel-icon-content-1"
                      aria-selected="true"
                      id="tab-icon-1"
                    >
                      <div className="nav-icon">
                        Pestaña 1
                        <span className="material-symbols-rounded">
                          home
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-icon-content-2"
                      type="button"
                      role="tab"
                      aria-controls="panel-icon-content-2"
                      aria-selected="false"
                      id="tab-icon-2"
                    >
                      <div className="nav-icon">
                        Pestaña 2
                        <span className="material-symbols-rounded">
                          home
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-icon-content-3"
                      type="button"
                      role="tab"
                      aria-controls="panel-icon-content-3"
                      aria-selected="false"
                      id="tab-icon-3"
                      disabled
                    >
                      <div className="nav-icon">
                        Pestaña 3
                        <span className="material-symbols-rounded">
                          home
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-icon-content-4"
                      type="button"
                      role="tab"
                      aria-controls="panel-icon-content-4"
                      aria-selected="false"
                      id="tab-icon-4"
                    >
                      <div className="nav-icon">
                        Pestaña 4
                        <span className="material-symbols-rounded">
                          home
                        </span>
                      </div>
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="tab-content" id="icon-myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="panel-icon-content-1"
                  role="tabpanel"
                  aria-labelledby="tab-icon-1"
                >
                  Contenido Pestaña 1
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-icon-content-2"
                  role="tabpanel"
                  aria-labelledby="tab-icon-2"
                >
                  Contenido Pestaña 2
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-icon-content-3"
                  role="tabpanel"
                  aria-labelledby="tab-icon-3"
                >
                  Contenido Pestaña 3
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-icon-content-4"
                  role="tabpanel"
                  aria-labelledby="tab-icon-4"
                >
                  Contenido Pestaña 4
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Ancho fijo',
      content: (
        <CodeBox codeHTML={TABS_FIXED_WIDTH}>
          <div className="container">
            <nav className="tabs-slider" aria-label="Navegación por pestañas">
              <ul className="nav nav-pills tabs fixedWidth" id="icon-myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#panel-width-content-1"
                    type="button"
                    role="tab"
                    aria-controls="panel-width-content-1"
                    aria-selected="true"
                    id="tab-width-1"
                  >
                    <div className="nav-icon">
                      Pestaña 1
                      <span className="material-symbols-rounded">
                        home
                      </span>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#panel-width-content-2"
                    type="button"
                    role="tab"
                    aria-controls="panel-width-content-2"
                    aria-selected="false"
                    id="tab-width-2"
                  >
                    <div className="nav-icon">
                      Pestaña 2
                      <span className="material-symbols-rounded">
                        home
                      </span>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#panel-width-content-3"
                    type="button"
                    role="tab"
                    aria-controls="panel-width-content-3"
                    aria-selected="false"
                    id="tab-width-3"
                    disabled
                  >
                    <div className="nav-icon">
                      Pestaña 3
                      <span className="material-symbols-rounded">
                        home
                      </span>
                    </div>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#panel-width-content-4"
                    type="button"
                    role="tab"
                    aria-controls="panel-width-content-4"
                    aria-selected="false"
                    id="tab-width-4"
                  >
                    <div className="nav-icon">
                      Pestaña 4
                      <span className="material-symbols-rounded">
                        home
                      </span>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>
            <div className="tab-content" id="icon-myTabContent">
              <div
                className="tab-pane fade show active"
                id="panel-width-content-1"
                role="tabpanel"
                aria-labelledby="tab-width-1"
              >
                Contenido Pestaña 1
              </div>
              <div
                className="tab-pane fade"
                id="panel-width-content-2"
                role="tabpanel"
                aria-labelledby="tab-width-2"
              >
                Contenido Pestaña 2
              </div>
              <div
                className="tab-pane fade"
                id="panel-width-content-3"
                role="tabpanel"
                aria-labelledby="tab-width-3"
              >
                Contenido Pestaña 3
              </div>
              <div
                className="tab-pane fade"
                id="panel-width-content-4"
                role="tabpanel"
                aria-labelledby="tab-width-4"
              >
                Contenido Pestaña 4
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Con contenedor',
      content: (
        <>
          <CodeBox codeHTML={TABS_CONTAINER}>
            <div className="container">
              <nav className="tabs-box" aria-label="Navegación por pestañas">
                <ul className="nav nav-pills tabs nav-box" id="icon-myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-bg-content-1"
                      type="button"
                      role="tab"
                      aria-controls="panel-bg-content-1"
                      aria-selected="true"
                      id="tab-bg-1"
                    >
                      <div className="nav-icon">
                        Pestaña 1
                        <span className="material-symbols-rounded o-icon">
                          home
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-bg-content-2"
                      type="button"
                      role="tab"
                      aria-controls="panel-bg-content-2"
                      aria-selected="false"
                      id="tab-bg-2"
                    >
                      <div className="nav-icon">
                        Pestaña 2
                        <span className="material-symbols-rounded o-icon">
                          home
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-bg-content-3"
                      type="button"
                      role="tab"
                      aria-controls="panel-bg-content-3"
                      aria-selected="false"
                      id="tab-bg-3"
                      disabled
                    >
                      <div className="nav-icon">
                        Pestaña 3
                        <span className="material-symbols-rounded o-icon">
                          home
                        </span>
                      </div>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#panel-bg-content-4"
                      type="button"
                      role="tab"
                      aria-controls="panel-bg-content-4"
                      aria-selected="false"
                      id="tab-bg-4"
                    >
                      <div className="nav-icon">
                        Pestaña 4
                        <span className="material-symbols-rounded o-icon">
                          home
                        </span>
                      </div>
                    </button>
                  </li>
                </ul>
              </nav>
              <div className="tab-content" id="icon-myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="panel-bg-content-1"
                  role="tabpanel"
                  aria-labelledby="tab-bg-1"
                >
                  Contenido Pestaña 1
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-bg-content-2"
                  role="tabpanel"
                  aria-labelledby="tab-bg-2"
                >
                  Contenido Pestaña 2
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-bg-content-3"
                  role="tabpanel"
                  aria-labelledby="tab-bg-3"
                >
                  Contenido Pestaña 3
                </div>
                <div
                  className="tab-pane fade"
                  id="panel-bg-content-4"
                  role="tabpanel"
                  aria-labelledby="tab-bg-4"
                >
                  Contenido Pestaña 4
                </div>
              </div>
            </div>
          </CodeBox>
          <br /><br />
        </>
      ),
    },
  ];

  return (

    <DocumentationTemplate
      sections={sections}
    />
  );
};

export default TabsDocs;
