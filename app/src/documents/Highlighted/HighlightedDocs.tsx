import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import { ModalTypes } from "./code-views";
import CodeCopy from "@/components/CodeBox";
import MainDescription from "@/components/Template/MainDescription";

const HighlightedDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Destacado",
      h1: true,
      content: (
        <MainDescription description="Los modales muestran información importante que las personas usuarias deben reconocer. Aparecen en forma de ventana sobre la interfaz y bloquean el flujo de trabajo hasta que se selecciona una acción." />
      ),
    },

    {
      id: "section-2",
      title: "Ejemplo",
      content: (
        <>
          <p>
            Los modales muestran información importante que las personas
            usuarias deben reconocer. Aparecen en forma de ventana sobre la
            interfaz y bloquean el flujo de trabajo hasta que se selecciona una
            acción.
          </p>
          <div className="">
            <div className="panel-horizontal-content">
              <div className="card card-simple panel-horizontal">
                <img
                  src="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"
                  alt="descripción de imagen"
                  className="card-img"
                />
                <div className="card-body">
                  <h2 className="card-title">Título del destacado</h2>
                  <p className="card-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso,
                    de pocas líneas. No puede contener negritas ni enlaces. Este
                    es el cuerpo de un destacado. Debe ser breve y conciso, de
                    pocas líneas. No puede contener negritas ni enlaces
                  </p>
                  <div className="panel-footer">
                    <a className="btn btn-primary btn-lg" href="#">
                      Botón
                    </a>
                    <a className="btn btn-secondary btn-lg" href="#">
                      Botón
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="panel-horizontal-content">
              <div className="card card-simple panel-horizontal">
                <img
                  src="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"
                  alt="descripción de imagen"
                  className="card-img"
                />
                <div className="card-body">
                  <h2 className="card-title">Título del destacado</h2>
                  <p className="card-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso,
                    de pocas líneas. No puede contener negritas ni enlaces. Este
                    es el cuerpo de un destacado. Debe ser breve y conciso, de
                    pocas líneas. No puede contener negritas ni enlaces
                  </p>
                  <div className="panel-footer">
                    <a className="btn btn-primary btn-lg" href="#">
                      Botón
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="panel-horizontal-content">
              <div className="card card-simple panel-horizontal">
                <img
                  src="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"
                  alt="descripción de imagen"
                  className="card-img"
                />
                <div className="card-body">
                  <h2 className="card-title">Título del destacado</h2>
                  <p className="card-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso,
                    de pocas líneas. No puede contener negritas ni enlaces. Este
                    es el cuerpo de un destacado. Debe ser breve y conciso, de
                    pocas líneas. No puede contener negritas ni enlaces
                  </p>
                  <div className="panel-footer">
                    <a
                      className="btn btn-secondary btn-lg btn-icon"
                      href="#"
                      target="_blank"
                      download=""
                    >
                      <span className="material-icons-round">
                        file_download
                      </span>
                      Descargar
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="panel-horizontal-content">
              <div className="card card-simple panel-horizontal">
                <img
                  src="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"
                  alt="descripción de imagen"
                  className="card-img"
                />
                <div className="card-body">
                  <h2 className="card-title">Título del destacado</h2>
                  <p className="card-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso,
                    de pocas líneas. No puede contener negritas ni enlaces. Este
                    es el cuerpo de un destacado. Debe ser breve y conciso, de
                    pocas líneas. No puede contener negritas ni enlaces
                  </p>
                  <div className="panel-footer">
                    <a className="external" href="#" target="_blank">
                      Enlace externo
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="panel-horizontal-content">
              <div className="card card-simple panel-horizontal">
                <img
                  src="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"
                  alt="descripción de imagen"
                  className="card-img"
                />
                <div className="card-body">
                  <h2 className="card-title">Título del destacado</h2>
                  <p className="card-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso,
                    de pocas líneas. No puede contener negritas ni enlaces. Este
                    es el cuerpo de un destacado. Debe ser breve y conciso, de
                    pocas líneas. No puede contener negritas ni enlaces
                  </p>
                  <div className="panel-footer">
                    <a href="#" className="list-group-item item-sm">
                      <i className="bx bxs-info-circle"></i>
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" tabIndex={-1} id="exampleModal1">
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">¡Importante!</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Antes de realizar la ficha de salud, tené en cuenta haber
                    realizado los pasos previos correspondientes.
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-link"
                    data-bs-dismiss="modal"
                  >
                    Volver atrás
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Continuar
                  </button>
                </div>
              </div>
            </div>
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
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancelar
                  </button>
                  <button type="button" className="btn btn-danger">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" tabIndex={-1} id="exampleModal3">
            <div className="modal-dialog modal-dialog-centered modal-sm">
              <div className="modal-content">
                <div className="modal-header unbordered">
                  <small>CARGA EXITOSA</small>
                  <h4 className="modal-title">
                    Los archivos se cargaron correctamente
                  </h4>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "section-3",
      title: "Tipos",
      content: <CodeCopy code={ModalTypes} />,
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default HighlightedDocs;
