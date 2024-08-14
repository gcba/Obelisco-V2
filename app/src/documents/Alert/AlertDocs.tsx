"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import SimpleText from "@/components/Template/SimpleText";
import {
  EGcodeSimpleAlert,
  EGcodeCloseAlert,
  EGcodeCloseWith,
} from "./code-views";

const AlertDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div className="col-12">
        <Scrollspy
          sectionRefs={[section1Ref, section2Ref, section3Ref, section4Ref]}
        >
          {({ currentElementIndexInViewport }) => (
            <div className="box-scrollspy">
              <div className="nav-scrollspy d-none d-lg-block">
                <ul className="scrollspy" data-cy="nav-wrapper">
                  <p className="font-weight-bold mb-1"> On this page </p>
                  <li
                    className={
                      currentElementIndexInViewport === 0 ? "active" : ""
                    }
                  >
                    <a href="#section-1">Introducción</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 1 ? "active" : ""
                    }
                  >
                    <a href="#section-2">Simple</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">Con cierre</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-4">Con Lista</a>
                  </li>
                </ul>
              </div>

              {/* https://getbootstrap.com/docs/5.3/components/alerts/#additional-content */}
              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Alertas</h1>
                    </HeadingTemplate>
                    <MainDescription description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
                  </section>

                  <Divisor />

                  {/* Simple */}
                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Simple</h2>
                    </HeadingTemplate>

                    <div className="alert alert-primary" role="alert">
                      Esta es la descripción de una alerta de información.
                    </div>

                    <div className="alert alert-success" role="alert">
                      Esta es la descripción de una alerta de éxito.
                    </div>

                    <div className="alert alert-warning" role="alert">
                      Esta es la descripción de una alerta de advertencia.
                    </div>

                    <div className="alert alert-danger" role="alert">
                      Esta es la descripción de una alerta de error.
                    </div>
                    <br />
                    <CodeCopy code={EGcodeSimpleAlert} />
                  </section>

                  <Divisor />

                  {/* Con cierre */}
                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Con cierre</h2>
                    </HeadingTemplate>

                    <div
                      className="alert alert-primary alert-dismissible fade show"
                      role="alert"
                    >
                      Esta es la descripción de una alerta de información.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      Esta es la descripción de una alerta de éxito.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      Esta es la descripción de una alerta de advertencia.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      Esta es la descripción de una alerta de error.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <CodeCopy code={EGcodeCloseAlert} />
                  </section>

                  <Divisor />

                  {/* Con destacado */}
                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con destacado</h3>
                    </HeadingTemplate>

                    <div
                      className="alert alert-primary alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <CodeCopy code={""} />
                  </section>

                  {/* Con hipervinculo */}
                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con hipervinculo</h3>
                    </HeadingTemplate>

                    <div
                      className="alert alert-primary alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado, incluso con{" "}
                      <a href="#" className="alert-link">
                        enlace
                      </a>
                      .
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado, incluso con{" "}
                      <a href="#" className="alert-link">
                        enlace
                      </a>
                      .
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-warning alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado, incluso con{" "}
                      <a href="#" className="alert-link">
                        enlace
                      </a>
                      .
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <div
                      className="alert alert-danger alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado, incluso con{" "}
                      <a href="#" className="alert-link">
                        enlace
                      </a>
                      .
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Cerrar"
                      ></button>
                    </div>

                    <br />

                    <CodeCopy code={""} />
                  </section>

                  {/* Con lista de enlaces */}
                  <section id="section-6" ref={section6Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con lista de enlaces</h3>
                    </HeadingTemplate>

                    <div
                      className="alert alert-primary alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado.
                      <ol className="list-links">
                        <li>
                          <a className="alert-link" href="#">
                            Ancla al error 1
                          </a>
                        </li>
                        <li>
                          <a className="alert-link" href="#">
                            Ancla al error 2
                          </a>
                        </li>
                        <li>
                          <a className="alert-link" href="#">
                            Ancla al error 3
                          </a>
                        </li>
                        <li>
                          <a className="alert-link" href="#">
                            Ancla al error 4
                          </a>
                        </li>
                        <li>
                          <a className="alert-link" href="#">
                            Ancla al error 5
                          </a>
                        </li>
                      </ol>
                    </div>

                    <br />

                    <CodeCopy code={""} />
                  </section>

                  {/* Con lista de enlaces descriptiva */}
                  <section id="section-7" ref={section7Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con lista de enlaces descriptiva</h3>
                    </HeadingTemplate>

                    <div
                      className="alert alert-primary alert-dismissible fade show"
                      role="alert"
                    >
                      <strong>
                        Este es un destacado de una alerta de información.{" "}
                      </strong>
                      Esta es la descripción de una alerta de información que
                      continua al texto destacado.
                      <ol className="list-links">
                        <li>
                          <span>Texto descriptivo 1</span>
                        </li>
                        <li>
                          <span>Texto descriptivo 2</span>
                        </li>
                        <li>
                          <span>Texto descriptivo 3</span>
                        </li>
                        <li>
                          <span>Texto descriptivo 4</span>
                        </li>
                        <li>
                          <span>Texto descriptivo 5</span>
                        </li>
                      </ol>
                    </div>

                    <br />

                    <CodeCopy code={""} />
                  </section>
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div>
    </BoxTemplate>
  );
};

export default AlertDocs;
