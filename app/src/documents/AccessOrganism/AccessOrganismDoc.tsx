'use client';

import React from 'react';

import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { CATEGORIES_ACCESS_ORGANISM, LIST_ACCESS_ORGANISM, SIMPLE_ACCESS_ORGANISM } from './code-views';

const AccessOrganismDocs: React.FC = () => {
  const sections = [
    {
      title: 'Accesos - Organismo',
      content: (
        <>
          <MainDescription description="Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una similitud en su contenido." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a href="https://gcba.github.io/estandares/componentes/acceso/" target="_blank" rel="noopener noreferrer">
              enlace.
            </a>
          </p>
        </>
      ),
      h1: true,
    },
    {
      id: 'section-2',
      title: 'Simple',
      content: (
        <>
          <CodeBox codeHTML={SIMPLE_ACCESS_ORGANISM}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="access-items-1">
                    <div className="col">
                      <div className="group-access">
                        <div className="card-access">
                          <div className="card-access-body reverse">
                            <div>
                              <h4 className="mb-1">Título del acceso</h4>
                              <p className="mb-0">Descripción del acceso</p>
                            </div>
                            <span className="card-access-icon material-symbols-rounded" aria-hidden="true">
                              info
                            </span>
                          </div>
                          <a href="#" className="list-group-item card-item">
                            <span className="material-symbols-rounded o-icon" aria-hidden="true">
                              info
                            </span>
                            <div className="access-content">
                              <span className="access-title">Acceso</span>
                              <p className="access-text">Descripción (Opcional)</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Con lista de accesos',
      content: (
        <>
          <CodeBox codeHTML={LIST_ACCESS_ORGANISM}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="access-items-1">
                    <div className="col">
                      <div className="group-access">
                        <div className="card-access">
                          <div className="card-access-body">
                            <div>
                              <h4 className="mb-1">Título del acceso</h4>
                              <p className="mb-0">Descripción del acceso</p>
                            </div>
                            <span className="card-access-icon descriptive">N°</span>
                          </div>
                          <hr className="clearfix" />
                          <div className="container-access">
                            <div className="access-option">
                              <a href="#" className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso</span>
                                  <p className="access-text">Descripción (Opcional)</p>
                                </div>
                              </a>
                              <a href="#" className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso</span>
                                  <p className="access-text">Descripción (Opcional)</p>
                                </div>
                              </a>
                              <a href="#" className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso</span>
                                  <p className="access-text">Descripción (Opcional)</p>
                                </div>
                              </a>
                            </div>
                          </div>
                          <hr className="clearfix" />
                          <a href="#" className="list-group-item card-item">
                            <span className="material-symbols-rounded o-icon" aria-hidden="true">
                              info
                            </span>
                            <div className="access-content">
                              <span className="access-title">Acceso grande</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Con categorías',
      content: (
        <>
          <CodeBox codeHTML={CATEGORIES_ACCESS_ORGANISM}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="access-items-1">
                    <div className="col">
                      <div className="group-access">
                        <div className="card-access">
                          <div className="card-access-body">
                            <div>
                              <h4 className="mb-1">Título del acceso</h4>
                              <p className="mb-0">Descripción del acceso</p>
                            </div>
                            <span className="card-access-icon descriptive">N°</span>
                          </div>
                          <hr className="clearfix" />
                          <div className="container-access">
                            <div className="access-option">
                              <h5 className="title-option">Categoría 1</h5>
                              <a href="#" className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso chico</span>
                                </div>
                              </a>
                              <a href="#" className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso chico</span>
                                </div>
                              </a>
                              <h5 className="title-option">Categoría 2</h5>
                              <a href="#" className="list-group-item item-sm">
                                <i className="bx bxs-info-circle o-icon"></i>
                                <div className="access-content">
                                  <span className="access-title">Acceso chico</span>
                                </div>
                              </a>
                              <a href="#" className="list-group-item item-sm">
                                <i className="bx bxs-info-circle o-icon"></i>
                                <div className="access-content">
                                  <span className="access-title">Acceso chico</span>
                                </div>
                              </a>
                            </div>
                          </div>
                          <hr className="clearfix" />
                          <a href="#" className="list-group-item card-item">
                            <span className="material-symbols-rounded o-icon" aria-hidden="true">
                              info
                            </span>
                            <div className="access-content">
                              <span className="access-title">Acceso grande</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default AccessOrganismDocs;
