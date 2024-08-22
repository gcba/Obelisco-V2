'use client'

import React, { useState } from 'react';

import CodeCopy from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { PaginationExample, PaginationExample1, PaginationExample2, PaginationExample3 } from './code-views';

const PaginationDocs: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<'inicial' | 'central' | 'final'>('inicial');

  const sections = [
    {
      id: 'section-1',
      title: 'Paginado',
      h1: true,
      content: (
        <MainDescription description='Los modales muestran información importante que las personas usuarias deben reconocer. Aparecen en forma de ventana sobre la interfaz y bloquean el flujo de trabajo hasta que se selecciona una acción.' />
      ),
    },
    {
      id: 'section-2',
      title: 'Numerado',
      content: (
        <>
          <p>Los modales muestran información importante que las personas usuarias deben reconocer. Aparecen en forma de ventana sobre la interfaz y bloquean el flujo de trabajo hasta que se selecciona una acción.</p>

          <div className="row justify-content-center">
            <div className="col align-items-center">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary" onClick={() => setSelectedExample('inicial')}>Inicial</button>
                <button type="button" className="btn btn-primary" onClick={() => setSelectedExample('central')}>Central</button>
                <button type="button" className="btn btn-primary" onClick={() => setSelectedExample('final')}>Final</button>
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">

            {selectedExample === 'inicial' && (
              <>
                <nav aria-label="Ejemplo de paginado numerado inicial" className='mb-3'>  
                  <ul className="pagination">
                    <li className="page-item" style={{ opacity: 0 }}>
                      <span className="page-link">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </span>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>  
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                    <li className="page-item no-events"><span className="page-link">...</span></li>
                    <li className="page-item"><a className="page-link" href="#">10</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </a>
                    </li>
                  </ul>
                </nav>

                <CodeCopy code={PaginationExample1} />
              </>
            )}
            {selectedExample === 'central' && (
              <>
                <nav aria-label="Ejemplo de paginado numerado central">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item no-events"><span className="page-link">...</span></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item active"><a className="page-link" href="#">5</a></li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item no-events"><span className="page-link">...</span></li>
                    <li className="page-item"><a className="page-link" href="#">10</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </a>
                    </li>
                  </ul>
                </nav>

                <CodeCopy code={PaginationExample2} />
              </>
            )}
            {selectedExample === 'final' && (
              <>
                <nav aria-label="Ejemplo de paginado numerado final">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="page-previous-icon" aria-hidden="true"></span>
                        <span className="page-previous-text">Anterior</span>
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item no-events"><span className="page-link">...</span></li>
                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                    <li className="page-item"><a className="page-link" href="#">7</a></li>
                    <li className="page-item"><a className="page-link" href="#">8</a></li>
                    <li className="page-item"><a className="page-link" href="#">9</a></li>
                    <li className="page-item active"><a className="page-link" href="#">10</a></li>
                    <li className="page-item" style={{ opacity: 0 }}>
                      <span className="page-link">
                        <span className="page-next-text">Siguiente</span>
                        <span className="page-next-icon" aria-hidden="true"></span>
                      </span>
                    </li>
                  </ul>
                </nav>

                <CodeCopy code={PaginationExample3} />
              </>
            )}
          </div>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Descriptivo',
      content: (
        <>
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

          <CodeCopy code={PaginationExample} />
        </>
      ),
    },
  ];

  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default PaginationDocs;
