import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { TOOLTIP_BUTTONS, TOOLTIP_ICONS } from './code-views';

const TooltipDocs: React.FC = () => {
  const sections = [
    {
      title: 'Tooltip',
      h1: true,
      content: (
        <MainDescription description="Los tooltip muestran ayuda contextual o información sobre componentes específicos cuando un usuario se desplaza o se enfoca en ellos." />
      ),
    },
    {
      id: 'section-1',
      title: 'Con botones',
      content: (
        <CodeBox codeHTML={TOOLTIP_BUTTONS}>
          <div className="row mb-4 justify-content-center">
            <div className="col-auto">
              <span
                data-direction="bottom-right"
                data-tooltip='Esta es la descripción de un tooltip "abajo-derecha".'
                tabIndex={0}
              >
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    subdirectory_arrow_right
                  </span>
                </button>
              </span>
            </div>
            <div className="col-auto">
              <span data-direction="bottom" data-tooltip='Esta es la descripción de un tooltip "abajo".' tabIndex={0}>
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
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
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    subdirectory_arrow_left
                  </span>
                </button>
              </span>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-4 px-xl-5 mx-xl-5">
            <div className="d-flex flex-column align-items-start px-lg-5 mx-lg-5">
              <span
                className="mb-4"
                data-direction="right-bottom"
                data-tooltip='Esta es la descripción de un tooltip "derecha-abajo".'
                tabIndex={0}
              >
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    south_east
                  </span>
                </button>
              </span>
              <span
                className="mb-4"
                data-direction="right"
                data-tooltip='Esta es la descripción de un tooltip "derecha".'
                tabIndex={0}
              >
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
              </span>
              <span
                data-direction="right-top"
                data-tooltip='Esta es la descripción de un tooltip "derecha-arriba".'
                tabIndex={0}
              >
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    north_east
                  </span>
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
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    south_west
                  </span>
                </button>
              </span>
              <span
                className="mb-4"
                data-direction="left"
                data-tooltip='Esta es la descripción de un tooltip "izquierda".'
                tabIndex={0}
              >
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    keyboard_backspace
                  </span>
                </button>
              </span>
              <span
                data-direction="left-top"
                data-tooltip='Esta es la descripción de un tooltip "izquierda-arriba".'
                tabIndex={0}
              >
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    north_west
                  </span>
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
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    turn_right
                  </span>
                </button>
              </span>
            </div>
            <div className="col-auto">
              <span data-direction="top" data-tooltip='Esta es la descripción de un tooltip "arriba".' tabIndex={0}>
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
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
                <button type="button" className="btn btn-primary btn-icon" aria-label="Botón">
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    turn_left
                  </span>
                </button>
              </span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Con iconos',
      content: (
        <CodeBox codeHTML={TOOLTIP_ICONS}>
          <div className="row mb-4 justify-content-center">
            <div className="col-auto">
              <span
                data-direction="bottom-right"
                data-tooltip='Esta es la descripción de un tooltip "abajo-derecha".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="bottom"
                data-tooltip='Esta es la descripción de un tooltip "abajo".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="bottom-left"
                data-tooltip='Esta es la descripción de un tooltip "abajo-izquierda".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-between mb-4 px-xl-5 mx-xl-5">
            <div className="d-flex flex-column align-items-start px-lg-5 mx-lg-5">
              <span
                data-direction="right-bottom"
                data-tooltip='Esta es la descripción de un tooltip "derecha-abajo".'
                className="icon-box bg-light mb-4"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
              <span
                data-direction="right"
                data-tooltip='Esta es la descripción de un tooltip "derecha".'
                className="icon-box bg-light mb-4"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
              <span
                data-direction="right-top"
                data-tooltip='Esta es la descripción de un tooltip "derecha-arriba".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
            </div>
            <div className="d-flex flex-column align-items-end px-lg-5 mx-lg-5">
              <span
                data-direction="left-bottom"
                data-tooltip='Esta es la descripción de un tooltip "izquierda-abajo".'
                className="icon-box bg-light mb-4"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
              <span
                data-direction="left"
                data-tooltip='Esta es la descripción de un tooltip "izquierda".'
                className="icon-box bg-light mb-4"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
              <span
                data-direction="left-top"
                data-tooltip='Esta es la descripción de un tooltip "izquierda-arriba".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
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
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="top"
                data-tooltip='Esta es la descripción de un tooltip "arriba".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
            </div>
            <div className="col-auto">
              <span
                data-direction="top-left"
                data-tooltip='Esta es la descripción de un tooltip "arriba-izquierda".'
                className="icon-box bg-light"
                tabIndex={0}
              >
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  help
                </span>
              </span>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default TooltipDocs;
