// app/components/alert/page.tsx
'use client';

import React from 'react';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import CodeCopy from "@/components/CodeBox";
import { EGcodeSimpleAlert, EGcodeCloseAlert, EGcodeWithStrong } from './code-views';

const AlertDocs: React.FC = () => {
  const sections = [
    {
      id: "section-1",
      title: "Introducción",
      content: <p>Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción.</p>,
    },
    {
      id: "section-2",
      title: "Simple",
      description: "pequeña descripcion sobre un tipo de alerta.",
      content: (
        <div className="col-12 col-lg-8 mx-auto">
          <div className="alert alert-info" role="alert">
            <p>Esta es la descripción de una alerta de información.</p>
          </div>
          <br />
          <div className="alert alert-primary" role="alert">
            <p>Esta es la descripción de una alerta de advertencia.</p>
          </div>
          <br />
          <div className="alert alert-success" role="alert">
            <p>Esta es la descripción de una alerta de éxito.</p>
          </div>
          <br />
          <div className="alert alert-danger" role="alert">
            <p>Esta es la descripción de una alerta de error.</p>
          </div>
          <br />
          <CodeCopy code={EGcodeSimpleAlert} />
        </div>
      ),
    },
    {
      id: "section-3",
      title: "Con cierre",
      content: (
        <div className="w-50 d-flex flex-column gap-2 mb-3">
          <div className="alert alert-warning alert-dismissible show fade" role="alert">
            <p>Esta es la descripción de una alerta de error.</p>
            <button type="button" className="close" data-dismiss="alert" aria-label="Cerrar">
              <span className="material-icons-round">close</span>
            </button>
          </div>
          <CodeCopy code={EGcodeCloseAlert} />
        </div>
      ),
    },
    {
      id: "section-4",
      title: "Con lista",
      content: (
        <div className="w-50 d-flex flex-column gap-2 mb-3 mx-auto">
          <div className="alert alert-danger" role="alert">
            <p>
              <strong>Este es un destacado de una alerta de error.</strong>
              Esta es la descripción de una alerta de error que continua al texto destacado.
            </p>
            <ol className="list-links">
              <li><a href="#">Ancla al error 1</a></li>
              <li><a href="#">Ancla al error 2</a></li>
              <li><a href="#">Ancla al error 3</a></li>
              <li><a href="#">Ancla al error 4</a></li>
              <li><a href="#">Ancla al error 5</a></li>
            </ol>
          </div>
          <CodeCopy code={EGcodeWithStrong} />
        </div>
      ),
    },
  ];

  return (
    <DocumentationTemplate
      title="Alertas"
      description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción."
      sections={sections}
    />
  );
};

export default AlertDocs;
