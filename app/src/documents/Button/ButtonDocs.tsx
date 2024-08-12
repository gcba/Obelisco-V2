"use client";

import React from "react";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import CodeCopy from "@/components/CodeBox";
import {
  BUTTON_SOLID,
  BUTTON_OUTLINE,
  BUTTON_SIZES,
  BUTTON_DISABLED,
  BUTTON_ICON,
  BUTTON_BLOCK,
  BUTTON_ANCHOR,
} from "./code-views";

const ButtonDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Tipos",
      content: (
        <>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button type="button" className="btn btn-primary">
              Primario
            </button>
            <button type="button" className="btn btn-secondary">
              Secundario
            </button>
            <button type="button" className="btn btn-success">
              Éxito
            </button>
            <button type="button" className="btn btn-danger">
              Error
            </button>
            <button type="button" className="btn btn-link">
              Link
            </button>
          </div>
          <CodeCopy code={BUTTON_SOLID} />
          <br />
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button type="button" className="btn btn-outline-primary">
              Primario
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Secundario
            </button>
            <button type="button" className="btn btn-outline-success">
              Éxito
            </button>
            <button type="button" className="btn btn-outline-danger">
              Error
            </button>
            <button type="button" className="btn btn-outline-link">
              Link
            </button>
          </div>
          <CodeCopy code={BUTTON_OUTLINE} />
          <br />
          <p>
            En caso de requerir que un elemento <code>anchor</code> adopte el
            estilo de un botón, simplemente pueden utilizarse las clases
            correspondientes de botones.
          </p>
          <br />
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a className="btn btn-primary" href="#" target="_blank">
              Enlace
            </a>
            <a className="btn btn-outline-primary" href="#" target="_blank">
              Enlace
            </a>
          </div>
          <CodeCopy code={BUTTON_ANCHOR} />
          <br />
          <p className="headline-lg fw-bold">Estilos de botones en fondo oscuro</p>
          <div className="d-flex gap-3 justify-content-center flex-wrap bg-dark p-2">
            <button type="button" className="btn btn-primary">
              Primario
            </button>
            <button type="button" className="btn btn-secondary">
              Secundario
            </button>
            <button type="button" className="btn btn-success">
              Éxito
            </button>
            <button type="button" className="btn btn-danger">
              Error
            </button>
            <button type="button" className="btn btn-link">
              Link
            </button>
          </div>
          <div className="d-flex gap-3 justify-content-center flex-wrap bg-dark p-2">
            <button type="button" className="btn btn-outline-primary">
              Primario
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Secundario
            </button>
            <button type="button" className="btn btn-outline-success">
              Éxito
            </button>
            <button type="button" className="btn btn-outline-danger">
              Error
            </button>
            <button type="button" className="btn btn-outline-link">
              Link
            </button>
          </div>
          {/* <div className="d-flex gap-3 flex-wrap">
            <button type="button" className="btn btn-primary">
              Primary
            </button>
            <button type="button" className="btn btn-secondary">
              Secondary
            </button>
            <button type="button" className="btn btn-success">
              Success
            </button>
            <button type="button" className="btn btn-danger">
              Danger
            </button>
            <button type="button" className="btn btn-warning">
              Warning
            </button>
            <button type="button" className="btn btn-info">
              Info
            </button>
            <button type="button" className="btn btn-light">
              Light
            </button>
            <button type="button" className="btn btn-dark">
              Dark
            </button>

            <button type="button" className="btn btn-link">
              Link
            </button>
          </div>
          <br />
          <div className="d-flex gap-3 flex-wrap">
            <button type="button" className="btn btn-outline-primary">
              Primary
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Secondary
            </button>
            <button type="button" className="btn btn-outline-success">
              Success
            </button>
            <button type="button" className="btn btn-outline-danger">
              Danger
            </button>
            <button type="button" className="btn btn-outline-warning">
              Warning
            </button>
            <button type="button" className="btn btn-outline-info">
              Info
            </button>
            <button type="button" className="btn btn-outline-light">
              Light
            </button>
            <button type="button" className="btn btn-outline-dark">
              Dark
            </button>
          </div>
          <br /> */}
        </>
      ),
    },
    {
      id: "section-2",
      title: "Tamaños",
      content: (
        <>
          <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center">
            <div>
              <button type="button" className="btn btn-primary btn-sm">
                Chico
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-primary">
                Mediano
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-lg">
                Grande
              </button>
            </div>
          </div>
          <CodeCopy code={BUTTON_SIZES} />
        </>
      ),
    },
    {
      id: "section-3",
      title: "Estado Deshabilitado",
      content: (
        <>
          <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center">
            <div>
              <button type="button" className="btn btn-primary btn-sm" disabled>
                Chico
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-primary" disabled>
                Mediano
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-lg" disabled>
                Grande
              </button>
            </div>
          </div>
          <CodeCopy code={BUTTON_DISABLED} />
        </>
      ),
    },
    {
      id: "section-4",
      title: "Expandible",
      content: (
        <>
          <div className="col-12 col-lg-6 mx-auto">
            <button type="button" className="btn btn-primary btn-block">
              Botón Expandible
            </button>
          </div>
          <br />
          <CodeCopy code={BUTTON_BLOCK} />
        </>
      ),
    },
    {
      id: "section-5",
      title: "Con icono",
      content: (
        <>
          <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center">
            <div>
              <button type="button" className="btn btn-primary btn-icon">
                <i className="bx bxs-info-circle o-icon"></i>
                Botón
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary btn-icon"
                aria-label="Botón"
              >
                <span
                  className="material-symbols-rounded o-icon"
                  aria-hidden="true"
                >
                  info
                </span>
              </button>
            </div>
          </div>
          <br />
          {/* <div className="d-flex gap-3 flex-wrap align-items-center">
          <div>
              <button type="button" className="btn btn-primary btn-sm btn-icon">
                <i className="bx bxs-info-circle o-icon"></i>
                Chico
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-icon">
                <i className="bx bxs-info-circle o-icon"></i>
                Mediano
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-primary btn-lg btn-icon">
                <i className="bx bxs-info-circle o-icon"></i>
                Grande
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary btn-sm btn-icon"
                aria-label="Botón"
              >
                <span
                  className="material-symbols-rounded o-icon"
                  aria-hidden="true"
                >
                  info
                </span>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary btn-icon"
                aria-label="Botón"
              >
                <span
                  className="material-symbols-rounded o-icon"
                  aria-hidden="true"
                >
                  info
                </span>
              </button>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-icon"
                aria-label="Botón"
              >
                <span
                  className="material-symbols-rounded o-icon"
                  aria-hidden="true"
                >
                  info
                </span>
              </button>
            </div>
          </div> */}
          <CodeCopy code={BUTTON_ICON} />
        </>
      ),
    },
  ];

  return (
    <DocumentationTemplate
      title="Botones"
      description="Los botones permiten iniciar acciones o navegar a otras páginas. Las etiquetas de los botones expresan qué acción ocurrirá cuando la persona usuaria interactúe con él."
      sections={sections}
    />
  );
};

export default ButtonDocs;
