import React from 'react';
 
import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
 
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
 
  const SECTIONS_DEV = [
    {
      title: 'Tipos',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SOLID}>
            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap px-2">
              <div>
                <button type="button" className="btn btn-primary">
                  Primario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-secondary">
                  Secundario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-tertiary">
                  Terciario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-success">
                  Éxito
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-danger">
                  Error
                </button>
              </div>
              <div className="p-2 bg-dark">
                <button type="button" className="btn btn-light">
                  Light
                </button>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BUTTON_OUTLINE}>
            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap px-2">
              <div>
                <button type="button" className="btn btn-outline-primary">
                  Primario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-secondary">
                  Secundario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-tertiary">
                  Terciario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-success">
                  Éxito
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-danger">
                  Error
                </button>
              </div>
              <div className="p-2 bg-dark">
                <button type="button" className="btn btn-outline-light">
                  Light
                </button>
              </div>
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
      title: 'Estado Deshabilitado',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_DISABLED}>
            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap px-2">
              <div>
                <button type="button" className="btn btn-primary" disabled>
                  Primario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-secondary" disabled>
                  Secundario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-tertiary" disabled>
                  Terciario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-success" disabled>
                  Éxito
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-danger" disabled>
                  Error
                </button>
              </div>
              <div className="p-2 bg-dark">
                <button type="button" className="btn btn-light" disabled>
                  Light
                </button>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
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
      title: 'Con icono',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_ICON}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              {/* Icono y Texto */}
              <button type="button" className="btn btn-primary btn-sm">
                <i className="bx bx-plus o-icon"></i>
                Botón
              </button>
 
              <button type="button" className="btn btn-primary">
                <i className="bx bx-plus o-icon"></i>
                Botón
              </button>
 
              <button type="button" className="btn btn-primary btn-lg">
                <i className="bx bx-plus o-icon"></i>
                Botón
              </button>
              {/* Fin Icono y Texto */}
 
              <div className="w-100"></div>
              {/* Icono y Texto */}
              <button type="button" className="btn btn-primary btn-sm">
                Botón
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
 
              <button type="button" className="btn btn-primary">
                Botón
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
 
              <button type="button" className="btn btn-primary btn-lg">
                Botón
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
              {/* Fin Icono y Texto */}
 
              <div className="w-100"></div>
              {/* Icono  */}
              <button type="button" className="btn btn-primary btn-sm" aria-label="Botón">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add
                </span>
              </button>
 
              <button type="button" className="btn btn-primary" aria-label="Botón">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add
                </span>
              </button>
 
              <button type="button" className="btn btn-primary btn-lg" aria-label="Botón">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  add
                </span>
              </button>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con spinner',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SPINNER}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-primary" disabled>
                <div className="spinner-border text-primary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-secondary" disabled>
                <div className="spinner-border text-secondary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-tertiary" disabled>
                <div className="spinner-border text-tertiary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-success" disabled>
                <div className="spinner-border text-success spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-danger" disabled>
                <div className="spinner-border text-danger spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <div className="bg-dark p-2">
                <button type="button" className="btn btn-light" disabled>
                  <div className="spinner-border text-light spinner-border-sm" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                  Cargando
                </button>
              </div>
            </div>
          </CodeBox>
          <br />
          <p className="headline-md mb-4">Botón con borde y spinner</p>
          <CodeBox codeHTML={BUTTON_OUTLINE_SPINNER}>
            <div className="d-flex gap-4 flex-wrap justify-content-center align-items-center px-2">
              <button type="button" className="btn btn-outline-primary" disabled>
                <div className="spinner-border text-primary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-outline-secondary" disabled>
                <div className="spinner-border text-secondary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-outline-tertiary" disabled>
                <div className="spinner-border text-tertiary spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-outline-success" disabled>
                <div className="spinner-border text-success spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <button type="button" className="btn btn-outline-danger" disabled>
                <div className="spinner-border text-danger spinner-border-sm" role="status">
                  <span className="sr-only">Cargando...</span>
                </div>
                Cargando
              </button>
              <div className="bg-dark p-2">
                <button type="button" className="btn btn-light" disabled>
                  <div className="spinner-border text-light spinner-border-sm" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                  Cargando
                </button>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
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
 
  const SECTIONS_GUIDE_USE_BUTTON = [
    {
      title: 'Tipos',
      content: (
        <>
          <CodeBox codeHTML={BUTTON_SOLID}>
            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap px-2">
              <div>
                <button type="button" className="btn btn-primary">
                  Primario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-secondary">
                  Secundario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-tertiary">
                  Terciario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-success">
                  Éxito
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-danger">
                  Error
                </button>
              </div>
              <div className="p-2 bg-dark">
                <button type="button" className="btn btn-light">
                  Light
                </button>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BUTTON_OUTLINE}>
            <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap px-2">
              <div>
                <button type="button" className="btn btn-outline-primary">
                  Primario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-secondary">
                  Secundario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-tertiary">
                  Terciario
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-success">
                  Éxito
                </button>
              </div>
              <div>
                <button type="button" className="btn btn-outline-danger">
                  Error
                </button>
              </div>
              <div className="p-2 bg-dark">
                <button type="button" className="btn btn-outline-light">
                  Light
                </button>
              </div>
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
    }
  ];
 
  return (
    <>
      <ComponentHeader
        title="Botones"
        description={[
          'Los botones permiten iniciar acciones o navegar a otras páginas. Las etiquetas de los botones expresan qué acción ocurrirá cuando la persona usuaria interactúe con él.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a href="https://gcba.github.io/estandares/componentes/boton/" target="_blank" rel="noopener noreferrer">
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV}
        customSections={
          [
            {
              title: "Guía de uso",
              id: "guide-use",
              sectionContent: SECTIONS_GUIDE_USE_BUTTON
            }, {
              title: "Compatibilidad",
              id: "guide-usee",
              sectionContent: SECTIONS_GUIDE_USE_BUTTON
            }, {
              title: "Accesibilidad",
              id: "guide-useee",
              sectionContent: SECTIONS_GUIDE_USE_BUTTON
            }
            , {
              title: "Guía de uso",
              id: "guide-useeee",
              sectionContent: SECTIONS_GUIDE_USE_BUTTON
            }
          ]
        }
      />
    </>
  );
};
 
export default ButtonDocs;
 