'use client';

import React, { useState } from 'react';

import CodeCopy from '@/components/CodeBox';
import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { PAGINATION_CENTRAL, PAGINATION_FINAL, PAGINATION_INITIAL, PAGINATION_DESCRIPTION } from './code-views';

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
      id: 'section-1',
      title: 'Paginado',
      h1: true,
      content: (
        <MainDescription description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur expedita autem in quae culpa illum sed, eveniet perferendis ratione soluta, est assumenda ducimus corporis. Deleniti dolore quaerat consequuntur dolorem sequi." />
      ),
    },
    {
      id: 'section-2',
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
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        10
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </a>
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
                      <a className="page-link" href="#">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        10
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </a>
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
                      <a className="page-link" href="#">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item no-events">
                      <span className="page-link">...</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        6
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        7
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        8
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        9
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        10
                      </a>
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
      id: 'section-3',
      title: 'Descriptivo',
      content: (
        <CodeCopy codeHTML={PAGINATION_DESCRIPTION}>
          <div className="container">
            <div className="pagination">
              <div className="page-navigation">
                <div className="page-item">
                  <a className="btn page-link" href="#">
                    <span className="page-previous-icon" aria-hidden="true"></span>
                    <span className="page-next-text">Anterior</span>
                  </a>
                </div>
                <div className="page-item">
                  <a className="btn page-link" href="#">
                    <span className="page-next-text">Siguiente</span>
                    <span className="page-next-icon" aria-hidden="true"></span>
                  </a>
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
