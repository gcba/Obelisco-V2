'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import SimpleText from '@/components/Template/SimpleText';
import { EGcodeWithStrong, EGcodeSimpleAlert, EGcodeCloseAlert } from './code-views';

const AlertDocs: React.FC = () => {

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div
        className="col-12"
      >
        <Scrollspy sectionRefs={[
          section1Ref,
          section2Ref,
          section3Ref,
          section4Ref,
        ]}>
          {({ currentElementIndexInViewport }) => (
            <div className='box-scrollspy'>
              <div className='nav-scrollspy d-none d-lg-block'>
                <ul
                  className='scrollspy'
                  data-cy="nav-wrapper"
                >
                  <p className='font-weight-bold mb-1'> On this page
                  </p>
                  <li className={currentElementIndexInViewport === 0 ? "active" : ""}><a href="#section-1">Introducción</a></li>
                  <li className={currentElementIndexInViewport === 1 ? "active" : ""}><a href="#section-2">Simple</a></li>
                  <li className={currentElementIndexInViewport === 2 ? "active" : ""}><a href="#section-3">Con cierre</a></li>
                  <li className={currentElementIndexInViewport === 3 ? "active" : ""}><a href="#section-4">Con Lista</a></li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Alertas</h1>
                    </HeadingTemplate>
                    <MainDescription description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Simple</h2>
                    </HeadingTemplate>

                    <div className="col-12 col-lg-8 mx-auto">
                      <div className="alert alert-info" role="alert">
                        <p>Esta es la descripción de una alerta de información.</p>
                      </div>
                      <br />
                      <div className="alert alert-primary" role="alert">
                        <p>Esta es la descripción de una alerta de advertencia.</p>
                      </div>
                      <br />
                      <div className="alert alert-success" role="alert">
                        <p>Esta es la descripción de una alerta de éxito.</p>
                      </div>
                      <br />
                      <div className="alert alert-danger" role="alert">
                        <p>Esta es la descripción de una alerta de error.</p>
                      </div>
                      <br />
                    </div>
                    <CodeCopy code={EGcodeSimpleAlert} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Con cierre</h2>
                    </HeadingTemplate>

                    <div className="w-50 d-flex flex-column gap-2 mb-3">
                      <div
                        className="alert alert-warning alert-dismissible show fade"
                        role="alert"
                      >
                        <p>Esta es la descripción de una alerta de error.</p>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Cerrar"
                        >
                          <span className="material-icons-round">close</span>
                        </button>
                      </div>

                      <p>Nuevo html de B5</p>

                      <div
                        className="alert alert-warning alert-dismissible fade show"
                        role="alert"
                      >
                        <strong>Holy guacamole!</strong> You should check in on some of those
                        fields below.
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="alert"
                          aria-label="Cerrar"
                        ></button>
                      </div>
                    </div>

                    <CodeCopy code={EGcodeCloseAlert} />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con lista</h3>
                    </HeadingTemplate>

                    <div className="w-50 d-flex flex-column gap-2 mb-3 mx-auto">
                      <div className="alert alert-danger" role="alert">
                        <p>
                          <strong>Este es un destacado de una alerta de error.</strong>
                          Esta es la descripción de una alerta de error que continua al texto
                          destacado.
                        </p>
                        <ol className="list-links">
                          <li>
                            <a href="#">Ancla al error 1</a>
                          </li>
                          <li>
                            <a href="#">Ancla al error 2</a>
                          </li>
                          <li>
                            <a href="#">Ancla al error 3</a>
                          </li>
                          <li>
                            <a href="#">Ancla al error 4</a>
                          </li>
                          <li>
                            <a href="#">Ancla al error 5</a>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <br />

                    <CodeCopy code={EGcodeWithStrong} />
                  </section>
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div>
    </BoxTemplate >
  );
};

export default AlertDocs;
