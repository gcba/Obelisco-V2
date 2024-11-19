'use client';

import React from 'react';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { SPINNER_BLOCK, SPINNER_DESCRIPTION, SPINNER_SIZES, SPINNER_TYPES } from './code-views';

const SpinnerDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
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
            <div className="spinner-border text-tertiary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="px-2 py-1 bg-dark">
              <div className="spinner-border text-light d-block" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
            <div className="spinner-border text-dark" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
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
        </>
      ),
    },
    {
      title: 'Con descripción',
      content: (
        <>
          <CodeBox codeHTML={SPINNER_DESCRIPTION}>
            <div className="text-center">
              <div className="spinner-border text-primary spinner-border-lg" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
              <p className="spinner-description">Cargando...</p>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Spinner"
        description={[
          'Un spinner es un indicador visual que ayuda a notificar a las personas usuarias que la carga de contenido o la recuperación de datos está en curso.',
          <>
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;{' '}
            <a href="https://gcba.github.io/estandares/componentes/spinner/" target="_blank" rel="noopener noreferrer">
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

export default SpinnerDocs;
