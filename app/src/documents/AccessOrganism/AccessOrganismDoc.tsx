'use client';

import React from 'react';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { CATEGORIES_ACCESS_ORGANISM, LIST_ACCESS_ORGANISM, SIMPLE_ACCESS_ORGANISM } from './code-views';

const AccessOrganismDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Simple',
      firstTitle: true,
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
                              <h4 className="card-access-title">Título del organismo de máximo 2 líneas</h4>
                              <p className="card-access-text">Descripción del organismo de máximo 3 líneas.</p>
                            </div>
                            <span className="card-access-icon material-symbols-rounded" aria-hidden="true">
                              info
                            </span>
                          </div>
                          <LinkClient className="list-group-item card-item">
                            <span className="material-symbols-rounded o-icon" aria-hidden="true">
                              info
                            </span>
                            <div className="access-content">
                              <span className="access-title">Acceso</span>
                              <p className="access-text">Descripción (Opcional)</p>
                            </div>
                          </LinkClient>
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
                              <h4 className="card-access-title">Título del organismo de máximo 2 líneas</h4>
                              <p className="card-access-text">Descripción del organismo de máximo 3 líneas.</p>
                            </div>
                            <span className="card-access-icon descriptive">N°</span>
                          </div>
                          <hr className="clearfix" />
                          <div className="container-access">
                            <div className="access-option">
                              <LinkClient className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso</span>
                                  <p className="access-text">Descripción (Opcional)</p>
                                </div>
                              </LinkClient>
                              <LinkClient className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso</span>
                                  <p className="access-text">Descripción (Opcional)</p>
                                </div>
                              </LinkClient>
                              <LinkClient className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso</span>
                                  <p className="access-text">Descripción (Opcional)</p>
                                </div>
                              </LinkClient>
                            </div>
                          </div>
                          <hr className="clearfix" />
                          <LinkClient className="list-group-item card-item">
                            <span className="material-symbols-rounded o-icon" aria-hidden="true">
                              info
                            </span>
                            <div className="access-content">
                              <span className="access-title">Acceso grande</span>
                            </div>
                          </LinkClient>
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
                              <h4 className="card-access-title">Título del organismo de máximo 2 líneas</h4>
                              <p className="card-access-text">Descripción del organismo de máximo 3 líneas.</p>
                            </div>
                            <span className="card-access-icon descriptive">N°</span>
                          </div>
                          <hr className="clearfix" />
                          <div className="container-access">
                            <div className="access-option">
                              <h5 className="title-option">Categoría 1</h5>
                              <LinkClient className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso chico</span>
                                </div>
                              </LinkClient>
                              <LinkClient className="list-group-item item-sm">
                                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                                  info
                                </span>
                                <div className="access-content">
                                  <span className="access-title">Acceso chico</span>
                                </div>
                              </LinkClient>
                              <h5 className="title-option">Categoría 2</h5>
                              <LinkClient className="list-group-item item-sm">
                                <i className="bxf bx-info-circle o-icon"></i>
                                <div className="access-content">
                                  <span className="access-title">Acceso chico</span>
                                </div>
                              </LinkClient>
                              <LinkClient className="list-group-item item-sm">
                                <i className="bxf bx-info-circle o-icon"></i>
                                <div className="access-content">
                                  <span className="access-title">Acceso chico</span>
                                </div>
                              </LinkClient>
                            </div>
                          </div>
                          <hr className="clearfix" />
                          <LinkClient className="list-group-item card-item">
                            <span className="material-symbols-rounded o-icon" aria-hidden="true">
                              info
                            </span>
                            <div className="access-content">
                              <span className="access-title">Acceso grande</span>
                            </div>
                          </LinkClient>
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

  return (
    <>
      <ComponentHeader
        title="Accesos - Organismo"
        description={[
          'Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una similitud en su contenido.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a href="https://gcba.github.io/estandares/componentes/acceso/" target="_blank" rel="noopener noreferrer">
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default AccessOrganismDocs;
