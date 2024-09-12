'use client';

import React from 'react';

import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { SPINNER_BLOCK, SPINNER_SIZES, SPINNER_TYPES } from './code-views';

const SpinnerDocs: React.FC = () => {
  const sections = [
    {
      h1: true,
      title: 'Spinner',
      content: (
        <MainDescription description="Un spinner es un indicador visual que ayuda a notificar a las personas usuarias que la carga de contenido o la recuperación de datos está en curso." />
      ),
    },
    {
      id: 'section-1',
      title: 'Tipos',
      content: (
        <CodeBox codeHTML={SPINNER_TYPES}>
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
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Tamaños',
      content: (
        <CodeBox codeHTML={SPINNER_SIZES}>
          <div className="d-flex gap-4 align-items-center justify-content-center">
            <div className="spinner-border text-primary spinner-border-sm" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-primary spinner-border-lg" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Expandible',
      content: (
        <>
          <CodeBox codeHTML={SPINNER_BLOCK}>
            <div className="col-4 col-md-2 mx-auto">
              <div className="spinner-block text-primary" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
          </CodeBox>
          <br />
          <br />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default SpinnerDocs;
