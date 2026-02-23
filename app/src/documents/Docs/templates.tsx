'use client';
// import Link from 'next/link';
import { basePath } from '@/utils';
import React from 'react';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const TemplatesComponents: React.FC = () => {
  const SECTION_UX = [
    {
      content: (
        <>
          <div className="container py-1">
            <div className="max-items-2">
              <div className="col">
                <div className="card h-100">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    info
                  </span>
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={`${basePath}/templates/paginas-de-areas`} className="card-title-link">
                        Páginas de área
                      </a>
                    </h3>
                    <p className="card-text">
                      Plantilla para páginas institucionales de primer y segundo nivel, utilizada para presentar
                      ministerios.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    description
                  </span>
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={`${basePath}/templates/pagina-tramites`} className="card-title-link">
                        Trámites
                      </a>
                    </h3>
                    <p className="card-text">
                      La usamos para los trámites que ofrece el Gobierno de la Ciudad de Buenos Aires.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    chrome_reader_mode{' '}
                  </span>{' '}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={`${basePath}/templates/pagina-simple`} className="card-title-link">
                        Página simple
                      </a>
                    </h3>
                    <p className="card-text">Página informativa con un nivel jerárquico menor a una página de área.</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    menu_book
                  </span>
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={`${basePath}/templates/pagina-de-libro`} className="card-title-link">
                        Página de libro
                      </a>
                    </h3>
                    <p className="card-text">La usamos para agrupar información sobre un mismo tema en subtemas. </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    newspaper
                  </span>{' '}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={`${basePath}/templates/pagina-de-noticias`} className="card-title-link">
                        Noticias
                      </a>
                    </h3>
                    <p className="card-text">
                      Página para comunicar avisos y novedades. Debe estar constantemente actualizada.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <span className="material-symbols-rounded card-icon" aria-hidden="true">
                    format_list_bulleted
                  </span>{' '}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={`${basePath}/templates/paginas-de-areas`} className="card-title-link">
                        Formularios
                      </a>
                    </h3>
                    <p className="card-text">
                      Permiten a las personas interactuar con el sistema, ingresando, editando o confirmando
                      información.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card h-100">
                  <i className="bx bxs-user card-icon"></i>
                  <div className="card-body">
                    <h3 className="card-title">
                      <a href={`${basePath}/templates/perfil-institucional`} className="card-title-link">
                        Perfil Institucional
                      </a>
                    </h3>
                    <p className="card-text">
                      La usamos para la ficha del perfil institucional del Gobierno de la Ciudad de Buenos Aires.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Construir una plantilla"
        description={[
          `
          Las plantillas son combinaciones de organismos y componentes que sirven como ejemplos y como guía para generar contenido. Son un buen punto de partida para construir nuevas páginas utilizando Obelisco como sistema de diseño.
          `,
        ]}
      />
      <DocumentationTemplate sections={SECTION_UX} type="none" />
    </>
  );
};

export default TemplatesComponents;
