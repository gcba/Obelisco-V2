import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { MODAL_CONFIRM, MODAL_DANGER, MODAL_RECOGNITION } from './code-views';

const ModalDocs: React.FC = () => {
  const sections = [
    {
      title: 'Modal',
      h1: true,
      content: (
        <MainDescription description="Los modales muestran información importante que las personas usuarias deben reconocer. Aparecen en forma de ventana sobre la interfaz y bloquean el flujo de trabajo hasta que se selecciona una acción." />
      ),
    },

    {
      id: 'section-1',
      title: 'Tipos',
      content: (
        <>
          <CodeBox codeHTML={MODAL_CONFIRM}>
            <div className="container">
              <button
                type="button"
                className="btn btn-primary mb-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Modal de confirmación
              </button>
            </div>

            <div className="modal fade" tabIndex={-1} id="exampleModal1">
              <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">¡Importante!</h4>
                  </div>
                  <div className="modal-body">
                    <p>
                      Antes de realizar la ficha de salud, tené en cuenta haber realizado los pasos previos
                      correspondientes.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal">
                      Volver atrás
                    </button>
                    <button type="button" className="btn btn-secondary">
                      Continuar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={MODAL_DANGER}>
            <div className="container">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Modal de peligro
              </button>
            </div>
            <div className="modal fade" tabIndex={-1} id="exampleModal2">
              <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Eliminar documento</h4>
                  </div>
                  <div className="modal-body">
                    <p>El documento que seleccionaste será eliminado.</p>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                      Cancelar
                    </button>
                    <button type="button" className="btn btn-danger">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={MODAL_RECOGNITION}>
            <div className="container">
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                Modal de reconocimiento
              </button>
            </div>
            <div className="modal fade" tabIndex={-1} id="exampleModal3">
              <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content">
                  <div className="modal-header unbordered">
                    <small>CARGA EXITOSA</small>
                    <h4 className="modal-title">Los archivos se cargaron correctamente</h4>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                      Aceptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default ModalDocs;
