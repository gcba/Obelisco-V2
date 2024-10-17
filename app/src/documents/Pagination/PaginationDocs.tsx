'use client';

import React, { useState } from 'react';

import CodeCopy from '@/components/CodeBox';
import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { PAGINATION_CENTRAL, PAGINATION_FINAL, PAGINATION_INITIAL, PAGINATION_DESCRIPTION, PAGINATION_DISABLED } from './code-views';

const PaginationDocs: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<'inicial' | 'central' | 'final'>('inicial');

  const getCodeExample = () => {
    switch (selectedExample) {
      case 'central':
        return PAGINATION_CENTRAL;
      case 'final':
        return PAGINATION_FINAL;
      case 'inicial':
      default:
        return PAGINATION_INITIAL;
    }
  };

  const sections = [
    {
      title: 'Paginado',
      h1: true,
      content: (
        <>
          <MainDescription description="El paginado se utiliza para dividir contenido o datos en varias páginas, con un control para navegar a la página siguiente o anterior." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a href="https://gcba.github.io/estandares/componentes/paginado/" target="_blank" rel="noopener noreferrer">
              enlace
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'section-1',
      title: 'Numerado',
      content: (
        <CodeBox codeHTML={getCodeExample()}>
          <div className="row justify-content-center mt-4">
            <div className="col-auto">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  className={`btn ${selectedExample === 'inicial' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedExample('inicial')}
                >
                  Inicial
                </button>
                <button
                  type="button"
                  className={`btn ${selectedExample === 'central' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedExample('central')}
                >
                  Central
                </button>
                <button
                  type="button"
                  className={`btn ${selectedExample === 'final' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setSelectedExample('final')}
                >
                  Final
                </button>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center text-center">
            {selectedExample === 'inicial' && (
              <div className="col-auto mb-4">
                <nav aria-label="Ejemplo de paginado numerado inicial">
                  <ul className="pagination">
                    <li className="page-item" style={{ opacity: 0 }}>
                      <span className="page-link">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </span>
                    </li>
                    <li className="page-item active">
                      <LinkClient className="page-link">1</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">2</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">3</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">4</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">5</LinkClient>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">10</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </LinkClient>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
            {selectedExample === 'central' && (
              <div className="col-auto mb-4">
                <nav aria-label="Ejemplo de paginado numerado central">
                  <ul className="pagination">
                    <li className="page-item">
                      <LinkClient className="page-link">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">1</LinkClient>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">4</LinkClient>
                    </li>
                    <li className="page-item active">
                      <LinkClient className="page-link">5</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">6</LinkClient>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">10</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </LinkClient>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
            {selectedExample === 'final' && (
              <div className="col-auto mb-4">
                <nav aria-label="Ejemplo de paginado numerado final">
                  <ul className="pagination">
                    <li className="page-item">
                      <LinkClient className="page-link">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">1</LinkClient>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">6</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">7</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">8</LinkClient>
                    </li>
                    <li className="page-item">
                      <LinkClient className="page-link">9</LinkClient>
                    </li>
                    <li className="page-item active">
                      <LinkClient className="page-link">10</LinkClient>
                    </li>
                    <li className="page-item" style={{ opacity: 0 }}>
                      <span className="page-link">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Descriptivo',
      content: (
        <CodeCopy codeHTML={PAGINATION_DESCRIPTION}>
          <div className="container">
            <div className="pagination">
              <div className="page-navigation">
                <div className="page-item">
                  <LinkClient className="btn page-link">
                    <span className="page-previous-icon" aria-hidden="true"></span>
                    <span className="page-next-text">Anterior</span>
                  </LinkClient>
                </div>
                <div className="page-item">
                  <LinkClient className="btn page-link">
                    <span className="page-next-text">Siguiente</span>
                    <span className="page-next-icon" aria-hidden="true"></span>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeCopy>
      ),
    },
    {
      id: 'section-2',
      title: 'Estado deshabilitado',
      content: (
        <CodeCopy codeHTML={PAGINATION_DISABLED}>
          <div className="container">
            <div className="pagination">
              <div className="page-navigation">
                <div className="page-item disabled">
                  <LinkClient className="btn page-link">
                    <span className="page-previous-icon" aria-hidden="true"></span>
                    <span className="page-next-text">Anterior</span>
                  </LinkClient>
                </div>
                <div className="page-item disabled">
                  <LinkClient className="btn page-link">
                    <span className="page-next-text">Siguiente</span>
                    <span className="page-next-icon" aria-hidden="true"></span>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeCopy>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default PaginationDocs;
