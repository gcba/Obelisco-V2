"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import {
  SwitchDisabled,
  SwitchSizes,
  SwitchTypes,
  SwitchWithoutLabel,
} from "./code-views";

const SwitchDocs: React.FC = () => {
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
                    <a href="#section-2">Tipos</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">Sin label</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-4">Tamaños</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 4 ? "active" : ""
                    }
                  >
                    <a href="#section-5">Deshabilitado</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Switch</h1>
                    </HeadingTemplate>
                    <MainDescription description="Los interruptores permiten a los usuarios alternar entre dos estados, como encendido y apagado. Son útiles para configuraciones rápidas y fáciles de usar." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Tipos</h2>
                    </HeadingTemplate>

                    <div className="row mb-2">
                      <label className="switch" htmlFor="switch-1">
                        <input type="checkbox" id="switch-1" />
                        <span className="slider"></span>
                        <span className="switch-label on">Prendido</span>
                        <span className="switch-label off">Apagado</span>
                      </label>
                      <label className="switch" htmlFor="switch-2">
                        <input type="checkbox" id="switch-2" checked />
                        <span className="slider"></span>
                        <span className="switch-label on">Prendido</span>
                        <span className="switch-label off">Apagado</span>
                      </label>
                    </div>

                    <div className="row">
                      <label
                        className="switch switch-dark"
                        htmlFor="switch-dark-1"
                      >
                        <input type="checkbox" id="switch-dark-1" />
                        <span className="slider"></span>
                        <span className="switch-label on">Prendido</span>
                        <span className="switch-label off">Apagado</span>
                      </label>
                      <label
                        className="switch switch-dark"
                        htmlFor="switch-dark-2"
                      >
                        <input type="checkbox" id="switch-dark-2" checked />
                        <span className="slider"></span>
                        <span className="switch-label on">Prendido</span>
                        <span className="switch-label off">Apagado</span>
                      </label>
                    </div>
                    <br />
                    <CodeCopy code={SwitchTypes} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Sin label</h2>
                    </HeadingTemplate>

                    <div className="row mb-2">
                      <label className="switch" htmlFor="switch-1">
                        <input type="checkbox" id="switch-1" />
                        <span className="slider"></span>
                        <span
                          className="switch-label on"
                          aria-label="Prendido"
                        ></span>
                        <span
                          className="switch-label off"
                          aria-label="Apagado"
                        ></span>
                      </label>
                      <label className="switch" htmlFor="switch-2">
                        <input type="checkbox" id="switch-2" checked />
                        <span className="slider"></span>
                        <span
                          className="switch-label on"
                          aria-label="Prendido"
                        ></span>
                        <span
                          className="switch-label off"
                          aria-label="Apagado"
                        ></span>
                      </label>
                    </div>

                    <div className="row">
                      <label
                        className="switch switch-dark"
                        htmlFor="switch-label-hidden-1"
                      >
                        <input type="checkbox" id="switch-label-hidden-1" />
                        <span className="slider"></span>
                        <span
                          className="switch-label on"
                          aria-label="Prendido"
                        ></span>
                        <span
                          className="switch-label off"
                          aria-label="Apagado"
                        ></span>
                      </label>
                      <label
                        className="switch switch-dark"
                        htmlFor="switch-label-hidden-2"
                      >
                        <input
                          type="checkbox"
                          id="switch-label-hidden-2"
                          checked
                        />
                        <span className="slider"></span>
                        <span
                          className="switch-label on"
                          aria-label="Prendido"
                        ></span>
                        <span
                          className="switch-label off"
                          aria-label="Apagado"
                        ></span>
                      </label>
                    </div>
                    <br />
                    <CodeCopy code={SwitchWithoutLabel} />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Tamaños</h2>
                    </HeadingTemplate>

                    <div className="row mb-2">
                      <label className="switch" htmlFor="switch-1">
                        <input type="checkbox" id="switch-1" />
                        <span className="slider"></span>
                        <span className="switch-label on">Prendido</span>
                        <span className="switch-label off">Apagado</span>
                      </label>
                      <label className="switch" htmlFor="switch-2">
                        <input type="checkbox" id="switch-2" checked />
                        <span className="slider"></span>
                        <span className="switch-label on">Prendido</span>
                        <span className="switch-label off">Apagado</span>
                      </label>
                    </div>

                    <div className="row">
                      <label
                        className="switch switch-sm"
                        htmlFor="switch-small-1"
                      >
                        <input type="checkbox" id="switch-small-1" />
                        <span className="slider"></span>
                        <span
                          className="switch-label on"
                          aria-label="Prendido"
                        ></span>
                        <span
                          className="switch-label off"
                          aria-label="Apagado"
                        ></span>
                      </label>
                      <label
                        className="switch switch-sm"
                        htmlFor="switch-small-2"
                      >
                        <input type="checkbox" id="switch-small-2" checked />
                        <span className="slider"></span>
                        <span
                          className="switch-label on"
                          aria-label="Prendido"
                        ></span>
                        <span
                          className="switch-label off"
                          aria-label="Apagado"
                        ></span>
                      </label>
                    </div>
                    <br />
                    <CodeCopy code={SwitchSizes} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Deshabilitado</h2>
                    </HeadingTemplate>

                    <div className="row mb-2">
                      <label className="switch" htmlFor="switch-1">
                        <input type="checkbox" id="switch-1" disabled />
                        <span className="slider"></span>
                        <span className="switch-label disabled on">
                          Prendido / Deshabilitado
                        </span>
                        <span className="switch-label disabled off">
                          Apagado / Deshabilitado
                        </span>
                      </label>
                      <label className="switch" htmlFor="switch-2">
                        <input type="checkbox" id="switch-2" disabled checked />
                        <span className="slider"></span>
                        <span className="switch-label disabled on">
                          Prendido / Deshabilitado
                        </span>
                        <span className="switch-label disabled off">
                          Apagado / Deshabilitado
                        </span>
                      </label>
                    </div>

                    <div className="row">
                      <label className="switch" htmlFor="switch-disabled-1">
                        <input
                          type="checkbox"
                          id="switch-disabled-1"
                          disabled
                        />
                        <span className="slider"></span>
                        <span
                          className="switch-label disabled on"
                          aria-label="Prendido / Deshabilitado"
                        ></span>
                        <span
                          className="switch-label disabled off"
                          aria-label="Apagado / Deshabilitado"
                        ></span>
                      </label>
                      <label className="switch" htmlFor="switch-disabled-2">
                        <input
                          type="checkbox"
                          id="switch-disabled-2"
                          disabled
                          checked
                        />
                        <span className="slider"></span>
                        <span
                          className="switch-label disabled on"
                          aria-label="Prendido / Deshabilitado"
                        ></span>
                        <span
                          className="switch-label disabled off"
                          aria-label="Apagado / Deshabilitado"
                        ></span>
                      </label>
                    </div>
                    <br />
                    <CodeCopy code={SwitchDisabled} />
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

export default SwitchDocs;
