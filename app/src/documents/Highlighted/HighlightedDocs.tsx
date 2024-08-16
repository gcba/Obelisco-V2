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
            <h3>HORIZONTAL</h3>
            <div className="highlighted highlighted-horizontal">
              <img
                src="https://gcba.github.io/Obelisco/panel/destacado-bs-as.jpg"
                alt="descripción de imagen"
                className="highlighted-img"
              />
              <div className="highlighted-body">
                <h2 className="highlighted-title">Título del destacado</h2>
                <p className="highlighted-text">
                  Este es el cuerpo de un destacado. Debe ser breve y conciso,
                  de pocas líneas. No puede contener negritas ni enlaces. Este
                  es el cuerpo de un destacado. Debe ser breve y conciso, de
                  pocas líneas. No puede contener negritas ni enlaces
                </p>
                <div className="highlighted-footer">
                  <a className="btn btn-primary btn-lg" href="#">
                    Botón
                  </a>
                  <a className="btn btn-secondary btn-lg" href="#">
                    Botón
                  </a>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <h3>VERTICAL</h3>
            <div className="highlighted-container">

              <div className="highlighted highlighted-vertical">
                <img
                  src="panel/destacado-bs-as.jpg"
                  alt="descripción de imagen"
                  className="highlighted-img"
                />
                <div className="highlighted-body">
                  <h2 className="highlighted-title">Título del destacado</h2>
                  <p className="highlighted-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                    líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
                    destacado. Debe ser breve y conciso, de pocas líneas. No puede
                    contener negritas ni enlaces
                  </p>
                  <div className="highlighted-footer">
                    <a className="btn btn-primary btn-lg" href="#">Botón</a>
                  </div>
                </div>
              </div>
              <div className="highlighted highlighted-vertical">
                <img
                  src="panel/destacado-bs-as.jpg"
                  alt="descripción de imagen"
                  className="highlighted-img"
                />
                <div className="highlighted-body">
                  <h2 className="highlighted-title">Título del destacado</h2>
                  <p className="highlighted-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                    líneas. No puede contener negritas ni enlaces. Este es el cuerpo de un
                    destacado. Debe ser breve y conciso, de pocas líneas. No puede
                    contener negritas ni enlaces
                  </p>
                  <div className="highlighted-footer">
                    <a
                      className="btn btn-secondary btn-lg btn-icon"
                      href="#"
                      target="_blank"
                      download=""
                    >
                      <span className="material-icons-round">file_download</span>
                      Descargar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h3>LATERAL</h3>
          <div className="row">
            <div className="col-4">
              <div className="highlighted highlighted-lateral">
                <div className="highlighted-body">
                  <h2 className="highlighted-title">Título del destacado</h2>
                  <p className="highlighted-text">
                    Este es el cuerpo de un destacado. Debe ser breve y conciso, de pocas
                    líneas. No puede contener negritas ni enlaces.
                  </p>
                  <div className="highlighted-footer">
                    <a className="btn btn-primary btn-lg btn-block" href="#">Iniciar trámite</a>
                  </div>
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
