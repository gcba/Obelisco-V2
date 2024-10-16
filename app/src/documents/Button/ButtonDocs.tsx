import React from 'react';

import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import LinkClient from '../../components/LinkClient/index';
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
  BUTTON_ICON_XS,
} from './code-views';

const ButtonDocs: React.FC = () => {
  const sections = [
    {
      title: 'Botones',
      content: (
        <>
          <MainDescription description="Los botones permiten iniciar acciones o navegar a otras páginas. Las etiquetas de los botones expresan qué acción ocurrirá cuando la persona usuaria interactúe con él." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a href="https://gcba.github.io/estandares/componentes/boton/" target="_blank" rel="noopener noreferrer">
              enlace.
            </a>
          </p>
        </>
      ),
      h1: true,
    },
    {
      id: 'section-1',
      title: 'Tipos',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SOLID}>
            <div className="d-flex gap-3 justify-content-center flex-wrap px-2">
              <button type="button" className="btn btn-primary">
                Primario
              </button>
              <button type="button" className="btn btn-secondary">
                Secundario
              </button>
              <button type="button" className="btn btn-tertiary">
                Terciario
              </button>
              <button type="button" className="btn btn-success">
                Éxito
              </button>
              <button type="button" className="btn btn-danger">
                Error
              </button>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BUTTON_OUTLINE}>
            <div className="d-flex gap-3 justify-content-center flex-wrap px-2">
              <button type="button" className="btn btn-outline-primary">
                Primario
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Secundario
              </button>
              <button type="button" className="btn btn-outline-tertiary">
                Terciario
              </button>
              <button type="button" className="btn btn-outline-success">
                Éxito
              </button>
              <button type="button" className="btn btn-outline-danger">
                Error
              </button>
            </div>
          </CodeBox>
          <br />
          <p>
            En caso de requerir que un elemento <code>anchor</code> adopte el estilo de un botón, simplemente pueden
            utilizarse las clases correspondientes de botones.
          </p>
          <CodeBox codeHTML={BUTTON_ANCHOR}>
            <div className="d-flex gap-3 justify-content-center flex-wrap px-2">
              <LinkClient className="btn btn-primary">Enlace</LinkClient>
              <LinkClient className="btn btn-outline-primary">Enlace</LinkClient>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Tamaños',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SIZES}>
            <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center px-2">
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
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Estado Deshabilitado',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_DISABLED}>
            <div className="d-flex gap-3 flex-wrap justify-content-center align-items-center px-2">
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
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Expandible',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_BLOCK}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6 mx-auto">
                  <button type="button" className="btn btn-primary btn-block">
                    Botón Expandible
                  </button>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-5',
      title: 'Con icono',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_ICON}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-primary">
                <i className="bx bxs-info-circle o-icon"></i>
                Botón
              </button>
              <button type="button" className="btn btn-primary" aria-label="Botón">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  info
                </span>
              </button>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-6',
      title: 'Con spinner',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SPINNER}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-primary">
                <div className="spinner-border text-light spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
              <button type="button" className="btn btn-secondary">
                <div className="spinner-border text-light spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
              <button type="button" className="btn btn-tertiary">
                <div className="spinner-border text-info spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
              <button type="button" className="btn btn-success">
                <div className="spinner-border text-light spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
              <button type="button" className="btn btn-danger">
                <div className="spinner-border text-light spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BUTTON_OUTLINE_SPINNER}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-outline-primary">
                <div className="spinner-border text-primary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
              <button type="button" className="btn btn-outline-secondary">
                <div className="spinner-border text-secondary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
              <button type="button" className="btn btn-outline-tertiary">
                <div className="spinner-border text-info spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
              <button type="button" className="btn btn-outline-success">
                <div className="spinner-border text-success spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
              <button type="button" className="btn btn-outline-danger">
                <div className="spinner-border text-danger spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Botón
              </button>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-7',
      title: 'Botón XS - Icono',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_ICON_XS}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-xs" aria-label="Editar">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  edit
                </span>
              </button>
              <button type="button" className="btn btn-xs" aria-label="Eliminar">
                <i className="bx bxs-trash-alt o-icon"></i>
              </button>
              <button type="button" className="btn btn-xs" aria-label="Visualizar">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  visibility
                </span>
              </button>
              <button type="button" className="btn btn-xs" aria-label="Descargar">
                <i className="bx bxs-download o-icon"></i>
              </button>
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

export default ButtonDocs;
