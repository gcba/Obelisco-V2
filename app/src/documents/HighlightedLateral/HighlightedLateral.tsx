import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { HIGHLIGHTED_LATERAL } from './code-views';

const HighlightedLateralDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Destacado lateral',
      content: (
        <CodeBox codeHTML={HIGHLIGHTED_LATERAL}>
          <div className="container">
            <div className="col-12 col-xl-6">
              <div className="panel-lateral">
                <div className="panel-body">
                  <h2 className="panel-title">Título del destacado</h2>
                  <div className="d-flex gap-1 my-3">
                    <span className="badge badge-default">Etiqueta</span>
                    <span className="badge badge-default">Etiqueta</span>
                    <span className="badge badge-default">Etiqueta</span>
                  </div>
                  <p className="panel-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas líneas. No puede contener
                    negritas ni enlaces.
                  </p>

                  <div className="accordion plain">
                    <div className="accordion-item">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseHeaderIcon"
                        aria-expanded="false"
                        aria-controls="collapseHeaderIcon"
                      >
                        <p className="headline-sm m-0">Detalle</p>
                      </button>
                      <div id="collapseHeaderIcon" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          <p>
                            Esta es la descripción que se encuentra dentro de un colapsable. Debe ser breve y concisa.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="panel-footer">
                    <LinkClient className="btn btn-primary btn-lg btn-block">Botón</LinkClient>
                  </div>
                  <div className="d-flex gap-3 mt-3 align-items-center">
                    <p className="text-md mb-1">Compartir en redes:</p>
                    <div className="d-flex gap-2">
                      <a href="#" className="shadow-none" target="_blank">
                        <i className="bxl bx-facebook-circle o-icon text-primary"></i>
                      </a>
                      <a href="#" className="shadow-none" target="_blank">
                        <i className="bxl bx-instagram o-icon text-primary"></i>
                      </a>
                      <a href="#" className="shadow-none" target="_blank">
                        <i className="bxl bx-twitter-x o-icon text-primary"></i>
                      </a>
                      <a href="#" className="shadow-none" target="_blank">
                        <i className="bxl bx-linkedin-square o-icon text-primary"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Destacado lateral"
        description={[
          'Los destacados laterales permiten resaltar contenido relevante que requiere un nivel jerárquico mayor al resto de la información. Se usa para captar la atención de la persona usuaria incorporando, accionables y otros elementos interactivos.',
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default HighlightedLateralDocs;
