import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import CodeCopy from "@/components/CodeBox";
import {
  EGcodeSimpleAlert,
  EGcodeWithClose,
  EGcodeHighlighted,
  EGcodeHyperlink,
  EGcodeListLink,
  EGcodeListLinkWithDescription,
} from "./code-views";
import MainDescription from "@/components/Template/MainDescription";

const AlertDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Introducción",
      content: (
        <MainDescription description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
      ),
    },
    {
      id: "section-2",
      title: "Simple",
      description: "pequeña descripcion sobre un tipo de alerta.",
      content: (
        <section>
          <div className="alert alert-primary" role="alert">
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
          <CodeCopy code={EGcodeSimpleAlert} />
        </section>
      ),
    },
    {
      id: "section-3",
      title: "Con cierre",
      content: (
        <section>
          <div
            className="alert alert-primary alert-dismissible fade show"
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

          <CodeCopy code={EGcodeWithClose} />
        </section>
      ),
    },
    {
      id: "section-4",
      title: "Con destacado",
      content: (
        <section>
          <div
            className="alert alert-primary alert-dismissible fade show"
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

          <CodeCopy code={EGcodeHighlighted} />
        </section>
      ),
    },
    {
      id: "section-5",
      title: "Con hipervinculo",
      content: (
        <section>
          <div
            className="alert alert-primary alert-dismissible fade show"
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
            className="alert alert-warning alert-dismissible fade show"
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
            className="alert alert-danger alert-dismissible fade show"
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

          <br />

          <CodeCopy code={EGcodeHyperlink} />
        </section>
      ),
    },
    {
      id: "section-6",
      title: "Con lista de enlaces",
      content: (
        <section>
          <div
            className="alert alert-primary alert-dismissible fade show"
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

          <CodeCopy code={EGcodeListLink} />
        </section>
      ),
    },
    {
      id: "section-7",
      title: "Con lista de enlaces descriptiva",
      content: (
        <section>
          <div
            className="alert alert-primary alert-dismissible fade show"
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

          <CodeCopy code={EGcodeListLinkWithDescription} />
        </section>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default AlertDocs;
