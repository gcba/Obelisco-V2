import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { MODAL_CONFIRM, MODAL_DANGER, MODAL_RECOGNITION } from './code-views';

const ModalDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Tipos',
    },
    {
      subtitle: 'Modal de confirmación',
      content: (
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

          <div
            className="modal fade"
            tabIndex={-1}
            id="exampleModal1"
            aria-labelledby="exampleModal1Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModal1Label">
                    ¡Importante!
                  </h4>
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
                  <button type="button" className="btn btn-primary">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      subtitle: 'Modal de peligro',
      content: (
        <CodeBox codeHTML={MODAL_DANGER}>
          <div className="container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
              Modal de peligro
            </button>
          </div>
          <div
            className="modal fade"
            tabIndex={-1}
            id="exampleModal2"
            aria-labelledby="exampleModal2Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModal2Label">
                    Eliminar documento
                  </h4>
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
      ),
    },
    {
      subtitle: 'Modal de reconocimiento',
      content: (
        <CodeBox codeHTML={MODAL_RECOGNITION}>
          <div className="container">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
              Modal de reconocimiento
            </button>
          </div>
          <div
            className="modal fade"
            tabIndex={-1}
            id="exampleModal3"
            aria-labelledby="exampleModal3Label"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header unbordered">
                  <small>CARGA EXITOSA</small>
                  <h4 className="modal-title" id="exampleModal3Label">
                    Los archivos se cargaron correctamente
                  </h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                    Aceptar
                  </button>
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
        title="Modal"
        description={[
          'Los modales muestran información importante que las personas usuarias deben reconocer. Aparecen en forma de ventana sobre la interfaz y bloquean el flujo de trabajo hasta que se selecciona una acción.',
          <>
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;{' '}
            <a href="https://gcba.github.io/estandares/componentes/modals/" target="_blank" rel="noopener noreferrer">
              {' '}
              enlace
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default ModalDocs;
