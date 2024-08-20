"use client";

import React from "react";
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";
import CodeCopy from "@/components/CodeBox";
import { SPINNER_BLOCK, SPINNER_SIZES, SPINNER_TYPES } from "./code-views";

const SpinnerDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      description: "lorem ipsum dolor sit amet, lorem ipsum dolor sit amet v lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
      h1: true,
      title: "Tipos",
      content: (
        <>
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-dark" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
          <br />
          <CodeCopy code={SPINNER_TYPES} />
        </>
      ),
    },
    {
      id: "section-2",
      title: "Tamaños",
      content: (
        <>
          <div className="d-flex gap-4 align-items-center justify-content-center">
            <div
              className="spinner-border text-primary spinner-border-sm"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div
              className="spinner-border text-primary spinner-border-lg"
              role="status"
            >
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
          <br />
          <CodeCopy code={SPINNER_SIZES} />
        </>
      ),
    },
    {
      id: "section-3",
      title: "Expandible",
      content: (
        <>
          <div className="col-4 col-md-2 mx-auto">
            <div className="spinner-block text-primary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
          <br />
          <CodeCopy code={SPINNER_BLOCK} />
        </>
      ),
    },
  ];

  return (
    <DocumentationTemplate
      sections={sections}
    />
  );
};

export default SpinnerDocs;
