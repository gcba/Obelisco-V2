"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import { TooltipWithButtons, TooltipWithIcons } from "./code-views";

const TooltipDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

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
                  <p className="font-weight-bold mb-1">On this page</p>
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
                    <a href="#section-2">Con botones</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">Con iconos</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8 p-0">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Tooltip</h1>
                    </HeadingTemplate>
                    <MainDescription description="Los interruptores permiten a los usuarios alternar entre dos estados, como encendido y apagado. Son útiles para configuraciones rápidas y fáciles de usar." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Con botones</h2>
                    </HeadingTemplate>

                    <div className="row mb-4 justify-content-center">
                      <div className="col-auto">
                        <span
                          data-direction="top-right"
                          data-tooltip='Esta es la descripción de un tooltip "arriba-derecha".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              turn_right
                            </span>
                          </button>
                        </span>
                      </div>
                      <div className="col-auto">
                        <span
                          data-direction="top"
                          data-tooltip='Esta es la descripción de un tooltip "arriba".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              arrow_upward
                            </span>
                          </button>
                        </span>
                      </div>
                      <div className="col-auto">
                        <span
                          data-direction="top-left"
                          data-tooltip='Esta es la descripción de un tooltip "arriba-izquierda".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              turn_left
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-4">
                      <div className="d-flex flex-column align-items-start">
                        <span
                          className="mb-4"
                          data-direction="right-bottom"
                          data-tooltip='Esta es la descripción de un tooltip "derecha-abajo".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              south_east
                            </span>
                          </button>
                        </span>
                        <span
                          className="mb-4"
                          data-direction="right"
                          data-tooltip='Esta es la descripción de un tooltip "derecha".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              arrow_forward
                            </span>
                          </button>
                        </span>
                        <span
                          data-direction="right-top"
                          data-tooltip='Esta es la descripción de un tooltip "derecha-arriba".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              north_east
                            </span>
                          </button>
                        </span>
                      </div>
                      <div className="d-flex flex-column align-items-end">
                        <span
                          className="mb-4"
                          data-direction="left-bottom"
                          data-tooltip='Esta es la descripción de un tooltip "izquierda-abajo".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              south_west
                            </span>
                          </button>
                        </span>
                        <span
                          className="mb-4"
                          data-direction="left"
                          data-tooltip='Esta es la descripción de un tooltip "izquierda".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              keyboard_backspace
                            </span>
                          </button>
                        </span>
                        <span
                          data-direction="left-top"
                          data-tooltip='Esta es la descripción de un tooltip "izquierda-arriba".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              north_west
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="row mb-4 justify-content-center">
                      <div className="col-auto">
                        <span
                          data-direction="bottom-right"
                          data-tooltip='Esta es la descripción de un tooltip "abajo-derecha".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              subdirectory_arrow_right
                            </span>
                          </button>
                        </span>
                      </div>
                      <div className="col-auto">
                        <span
                          data-direction="bottom"
                          data-tooltip='Esta es la descripción de un tooltip "abajo".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              arrow_downward
                            </span>
                          </button>
                        </span>
                      </div>
                      <div className="col-auto">
                        <span
                          data-direction="bottom-left"
                          data-tooltip='Esta es la descripción de un tooltip "abajo-izquierda".'
                          tabIndex={0}
                        >
                          <button
                            type="button"
                            className="btn btn-primary btn-icon"
                            aria-label="Botón"
                          >
                            <span className="material-symbols-rounded">
                              subdirectory_arrow_left
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>

                    <br />
                    <CodeCopy code={TooltipWithButtons} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Con iconos</h2>
                    </HeadingTemplate>

                    <div className="row mb-4 justify-content-center">
                      <div className="col-auto">
                        <span
                          data-direction="top-right"
                          data-tooltip='Esta es la descripción de un tooltip "arriba-derecha".'
                          className="icon-box bg-light"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                      </div>
                      <div className="col-auto">
                        <span
                          data-direction="top"
                          data-tooltip='Esta es la descripción de un tooltip "arriba".'
                          className="icon-box bg-light"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                      </div>
                      <div className="col-auto">
                        <span
                          data-direction="top-left"
                          data-tooltip='Esta es la descripción de un tooltip "arriba-izquierda".'
                          className="icon-box bg-light"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-4">
                      <div className="d-flex flex-column align-items-start">
                        <span
                          data-direction="right-bottom"
                          data-tooltip='Esta es la descripción de un tooltip "derecha-abajo".'
                          className="icon-box bg-light mb-4"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                        <span
                          data-direction="right"
                          data-tooltip='Esta es la descripción de un tooltip "derecha".'
                          className="icon-box bg-light mb-4"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                        <span
                          data-direction="right-top"
                          data-tooltip='Esta es la descripción de un tooltip "derecha-arriba".'
                          className="icon-box bg-light"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                      </div>
                      <div className="d-flex flex-column align-items-end">
                        <span
                          data-direction="left-bottom"
                          data-tooltip='Esta es la descripción de un tooltip "izquierda-abajo".'
                          className="icon-box bg-light mb-4"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                        <span
                          data-direction="left"
                          data-tooltip='Esta es la descripción de un tooltip "izquierda".'
                          className="icon-box bg-light mb-4"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                        <span
                          data-direction="left-top"
                          data-tooltip='Esta es la descripción de un tooltip "izquierda-arriba".'
                          className="icon-box bg-light"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                      </div>
                    </div>
                    <div className="row mb-4 justify-content-center">
                      <div className="col-auto">
                        <span
                          data-direction="bottom-right"
                          data-tooltip='Esta es la descripción de un tooltip "abajo-derecha".'
                          className="icon-box bg-light"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                      </div>
                      <div className="col-auto">
                        <span
                          data-direction="bottom"
                          data-tooltip='Esta es la descripción de un tooltip "abajo".'
                          className="icon-box bg-light"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                      </div>
                      <div className="col-auto">
                        <span
                          data-direction="bottom-left"
                          data-tooltip='Esta es la descripción de un tooltip "abajo-izquierda".'
                          className="icon-box bg-light"
                          tabIndex={0}
                        >
                          <span className="material-symbols-rounded">help</span>
                        </span>
                      </div>
                    </div>

                    <br />
                    <CodeCopy code={TooltipWithIcons} />
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

export default TooltipDocs;
