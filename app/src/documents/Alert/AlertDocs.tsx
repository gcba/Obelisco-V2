import CodeBox from "@/components/CodeBox";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import MainDescription from "@/components/Template/MainDescription";

import {
  SIMPLE_ALERT,
  WITH_CLOSE_ALERT,
  HIGHLIGTHED_ALERT,
  HYPERLINK_ALERT,
  LIST_LINK_ALERT,
  WITH_DESCRIPTION_ALERT,
} from "./code-views";


const AlertDocs: React.FC = () => {
  const sections = [
    {
      id: "",
      title: "Introducción",
      content: (
        <MainDescription description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
      ),
    },
    {
      id: "section-1",
      title: "Simple",
      description: "pequeña descripcion sobre un tipo de alerta.",
      content: (
        <CodeBox codeHTML={SIMPLE_ALERT}>
        <section>
          <div className="alert alert-info" role="alert">
            Esta es la descripción de una alerta de información.
          </div>

          <div className="alert alert-success" role="alert">
            Esta es la descripción de una alerta de éxito.
          </div>

          <div className="alert alert-warning" role="alert">
            Esta es la descripción de una alerta de advertencia.
          </div>

          <div className="alert alert-danger" role="alert">
            Esta es la descripción de una alerta de error.
          </div>
          <br />
        </section>
        </CodeBox>
      ),
    },
    {
      id: "section-2",
      title: "Con cierre",
      content: (
        <CodeBox codeHTML={WITH_CLOSE_ALERT}>
        <section>
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            Esta es la descripción de una alerta de información.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Esta es la descripción de una alerta de éxito.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            Esta es la descripción de una alerta de advertencia.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Esta es la descripción de una alerta de error.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

        </section>
        </CodeBox>
      ),
    },
    {
      id: "section-3",
      title: "Con destacado",
      content: (
        <CodeBox codeHTML={HIGHLIGTHED_ALERT}>

        <section>
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de éxito. </strong>
            Esta es la descripción de una alerta de éxito que continua al
            texto destacado.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de error. </strong>
            Esta es la descripción de una alerta de error que continua al
            texto destacado.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

        </section>
        </CodeBox>
      ),
    },
    {
      id: "section-4",
      title: "Con hipervinculo",
      content: (
        <CodeBox codeHTML={HYPERLINK_ALERT}>

        <section>
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado, incluso {" "}
            <a href="#" className="alert-link">
              con enlaces
            </a>
            .
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de éxito. </strong>
            Esta es la descripción de una alerta de éxito que continua al
            texto destacado, incluso {" "}
            <a href="#" className="alert-link">
              con enlaces
            </a>
            .
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de advertencia. </strong>
            Esta es la descripción de una alerta de advertencia que continua al
            texto destacado, incluso {" "}
            <a href="#" className="alert-link">
              con enlaces
            </a>
            .
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de error. </strong>
            Esta es la descripción de una alerta de error que continua al
            texto destacado, incluso {" "}
            <a href="#" className="alert-link">
              con enlaces
            </a>
            .
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Cerrar"
            ></button>
          </div>

          <br />

        </section>
        </CodeBox>
      ),
    },
    {
      id: "section-5",
      title: "Con lista de enlaces",
      content: (
        <CodeBox codeHTML={LIST_LINK_ALERT}>

        <section>
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
            <ol className="list-links">
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 1
                </a>
              </li>
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 2
                </a>
              </li>
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 3
                </a>
              </li>
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 4
                </a>
              </li>
              <li>
                <a className="alert-link" href="#">
                  Ancla al error 5
                </a>
              </li>
            </ol>
          </div>

          <br />
        </section>
        </CodeBox>
      ),
    },
    {
      id: "section-6",
      title: "Con lista de enlaces descriptiva",
      content: (
        <CodeBox codeHTML={WITH_DESCRIPTION_ALERT}>

        <section>
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            <strong>Este es un destacado de una alerta de información. </strong>
            Esta es la descripción de una alerta de información que continua al
            texto destacado.
            <ol className="list-links">
              <li>
                <span>Texto descriptivo 1</span>
              </li>
              <li>
                <span>Texto descriptivo 2</span>
              </li>
              <li>
                <span>Texto descriptivo 3</span>
              </li>
              <li>
                <span>Texto descriptivo 4</span>
              </li>
              <li>
                <span>Texto descriptivo 5</span>
              </li>
            </ol>
          </div>

          <br />
        </section>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default AlertDocs;
