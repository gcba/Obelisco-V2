import { TooltipWithButtons, TooltipWithIcons } from "./code-views";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import CodeCopy from "@/components/CodeBox";
import MainDescription from "@/components/Template/MainDescription";

const TooltipDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Tooltip",
      h1: true,
      content: (
        <MainDescription description="Pequeña ventana emergente que proporciona información contextual
          adicional sobre un elemento al pasar el cursor sobre él." />
      ),
    },
    {
      id: "section-2",
      title: "Con botones",
      content: (
        <>
          <h2 className="mb-4">Con botones</h2>
          <div className="row mb-4 justify-content-center">
            <div className="col-auto">
              <span
                data-direction="bottom-right"
                data-tooltip='Esta es la descripción de un tooltip "abajo-derecha".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">
                    subdirectory_arrow_right
                  </span>
                </button>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="bottom"
                data-tooltip='Esta es la descripción de un tooltip "abajo".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">
                    arrow_downward
                  </span>
                </button>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="bottom-left"
                data-tooltip='Esta es la descripción de un tooltip "abajo-izquierda".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">
                    subdirectory_arrow_left
                  </span>
                </button>
              </span>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-4 px-lg-5 mx-lg-5">
            <div className="d-flex flex-column align-items-start px-lg-5 mx-lg-5">
              <span
                className="mb-4"
                data-direction="right-bottom"
                data-tooltip='Esta es la descripción de un tooltip "derecha-abajo".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">south_east</span>
                </button>
              </span>
              <span
                className="mb-4"
                data-direction="right"
                data-tooltip='Esta es la descripción de un tooltip "derecha".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">
                    arrow_forward
                  </span>
                </button>
              </span>
              <span
                data-direction="right-top"
                data-tooltip='Esta es la descripción de un tooltip "derecha-arriba".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">north_east</span>
                </button>
              </span>
            </div>
            <div className="d-flex flex-column align-items-end px-lg-5 mx-lg-5">
              <span
                className="mb-4"
                data-direction="left-bottom"
                data-tooltip='Esta es la descripción de un tooltip "izquierda-abajo".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">south_west</span>
                </button>
              </span>
              <span
                className="mb-4"
                data-direction="left"
                data-tooltip='Esta es la descripción de un tooltip "izquierda".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">
                    keyboard_backspace
                  </span>
                </button>
              </span>
              <span
                data-direction="left-top"
                data-tooltip='Esta es la descripción de un tooltip "izquierda-arriba".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">north_west</span>
                </button>
              </span>
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-auto">
              <span
                data-direction="top-right"
                data-tooltip='Esta es la descripción de un tooltip "arriba-derecha".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">turn_right</span>
                </button>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="top"
                data-tooltip='Esta es la descripción de un tooltip "arriba".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">
                    arrow_upward
                  </span>
                </button>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="top-left"
                data-tooltip='Esta es la descripción de un tooltip "arriba-izquierda".'
                tabIndex={0}
              >
                <button
                  type="button"
                  className="btn btn-primary btn-icon"
                  aria-label="Botón"
                >
                  <span className="material-symbols-rounded">turn_left</span>
                </button>
              </span>
            </div>
          </div>
          <br />
          <CodeCopy code={TooltipWithButtons} />
        </>
      ),
    },
    {
      id: "section-3",
      title: "Con iconos",
      content: (
        <>
          <h2 className="mb-4">Con iconos</h2>
          <div className="row mb-4 justify-content-center">
            <div className="col-auto">
              <span
                data-direction="bottom-right"
                data-tooltip='Esta es la descripción de un tooltip "abajo-derecha".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="bottom"
                data-tooltip='Esta es la descripción de un tooltip "abajo".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="bottom-left"
                data-tooltip='Esta es la descripción de un tooltip "abajo-izquierda".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
            </div>
          </div>

          <div className="d-flex flex-wrap justify-content-between mb-4 px-lg-5 mx-lg-5">
            <div className="d-flex flex-column align-items-start px-lg-5 mx-lg-5">
              <span
                data-direction="right-bottom"
                data-tooltip='Esta es la descripción de un tooltip "derecha-abajo".'
                className="icon-box bg-light mb-4"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
              <span
                data-direction="right"
                data-tooltip='Esta es la descripción de un tooltip "derecha".'
                className="icon-box bg-light mb-4"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
              <span
                data-direction="right-top"
                data-tooltip='Esta es la descripción de un tooltip "derecha-arriba".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
            </div>
            <div className="d-flex flex-column align-items-end px-lg-5 mx-lg-5">
              <span
                data-direction="left-bottom"
                data-tooltip='Esta es la descripción de un tooltip "izquierda-abajo".'
                className="icon-box bg-light mb-4"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
              <span
                data-direction="left"
                data-tooltip='Esta es la descripción de un tooltip "izquierda".'
                className="icon-box bg-light mb-4"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
              <span
                data-direction="left-top"
                data-tooltip='Esta es la descripción de un tooltip "izquierda-arriba".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-auto">
              <span
                data-direction="top-right"
                data-tooltip='Esta es la descripción de un tooltip "arriba-derecha".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="top"
                data-tooltip='Esta es la descripción de un tooltip "arriba".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="top-left"
                data-tooltip='Esta es la descripción de un tooltip "arriba-izquierda".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded">help</span>
              </span>
            </div>
          </div>
          <br />
          <CodeCopy code={TooltipWithIcons} />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default TooltipDocs;
