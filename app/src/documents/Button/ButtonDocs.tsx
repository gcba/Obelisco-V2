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
  BUTTON_SPINNER,
  BUTTON_OUTLINE_SPINNER,
} from "./code-views";

const ButtonDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Tipos",
      h1: true,
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
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a
              className="btn btn-primary"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enlace
            </a>
            <a
              className="btn btn-outline-primary"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enlace
            </a>
          </div>
          <CodeCopy code={BUTTON_ANCHOR} />
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
            <button type="button" className="btn btn-primary">
              <i className="bx bxs-info-circle o-icon"></i>
              Botón
            </button>
            <button
              type="button"
              className="btn btn-primary"
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
          <br />
          <CodeCopy code={BUTTON_ICON} />
        </>
      ),
    },
    {
      id: "section-6",
      title: "Con spinner",
      content: (
        <>
          <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center">
            <button type="button" className="btn btn-primary">
              <div
                className="spinner-border text-light spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
            <button type="button" className="btn btn-secondary">
              <div
                className="spinner-border text-light spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
            <button type="button" className="btn btn-success">
              <div
                className="spinner-border text-light spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
            <button type="button" className="btn btn-danger">
              <div
                className="spinner-border text-light spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
            <button type="button" className="btn btn-link">
              <div
                className="spinner-border text-info spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
          </div>
          <CodeCopy code={BUTTON_SPINNER} />
          <br />
          <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center">
            <button type="button" className="btn btn-outline-primary">
              <div
                className="spinner-border text-primary spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
            <button type="button" className="btn btn-outline-secondary">
              <div
                className="spinner-border text-secondary spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
            <button type="button" className="btn btn-outline-success">
              <div
                className="spinner-border text-success spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
            <button type="button" className="btn btn-outline-danger">
              <div
                className="spinner-border text-danger spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
            <button type="button" className="btn btn-outline-link">
              <div
                className="spinner-border text-info spinner-border-sm"
                role="status"
              >
                <span className="sr-only">Cargando...</span>
              </div>
              Botón
            </button>
          </div>
          <CodeCopy code={BUTTON_OUTLINE_SPINNER} />
          <br />
        </>
      ),
    },
    {
      id: "section-7",
      title: "Botón XS - Icono",
      content: (
        <>
          <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center">
            <button type="button" className="btn btn-xs" aria-label="Editar">
              <span
                className="material-symbols-rounded o-icon"
                aria-hidden="true"
              >
                edit
              </span>
            </button>
            <button type="button" className="btn btn-xs" aria-label="Editar">
              <i className="bx bxs-trash-alt o-icon"></i>
            </button>
            <a href="#" className="btn btn-xs" aria-label="Editar" tabIndex={0}>
              <span
                className="material-symbols-rounded o-icon"
                aria-hidden="true"
              >
                visibility
              </span>
            </a>
            <a href="#" className="btn btn-xs" aria-label="Editar" tabIndex={0}>
              <i className="bx bxs-download o-icon"></i>
            </a>
          </div>
          <br />
          <CodeCopy code={BUTTON_ICON} />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default ButtonDocs;
