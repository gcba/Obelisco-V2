'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import { EGcodeWithStrong, EGcodeSimpleAlert, EGcodeCloseAlert } from './code-views';

const FormTextDocs: React.FC = () => {

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
                      <h1>Formulario de textos</h1>
                    </HeadingTemplate>
                    <MainDescription description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Texto</h2>
                    </HeadingTemplate>

                    <div className="col-12 col-lg-8">
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1texts" className="form-label disabled">text</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1texts" placeholder="texto" disabled />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1number" className="form-label">numero</label>
                        <input type="number" className="form-control" id="exampleFormControlInput1number" placeholder="numero" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}></textarea>
                      </div>
                    </div>

                    <Divisor />

                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" className="form-text">
                      Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>

                    <Divisor />

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1date" className="form-label">Select date</label>
                      <input type="date" className="form-control" id="exampleFormControlInput1date" placeholder="seleccionar fecha" />
                    </div>

                    <CodeCopy code={EGcodeSimpleAlert} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Tamaños</h2>
                    </HeadingTemplate>

                    <div className="w-50 d-flex flex-column gap-2 mb-3">
                      <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example" />
                      <input className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                      <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example" />
                    </div>

                    <CodeCopy code={EGcodeCloseAlert} />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Mail</h3>
                    </HeadingTemplate>

                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <br />

                    <CodeCopy code={EGcodeWithStrong} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Validación</h3>
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

export default FormTextDocs;
