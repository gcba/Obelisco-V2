"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import SimpleText from "@/components/Template/SimpleText";
import {EGcodeSimpleAccess, EGcodeWithDescriptionAccess, EGcodeWithIconAccess, EGcodeSizesAccess, EGcodeListWidthComplete4ColumnsAccess, EGcodeListWidthComplete3ColumnsAccess, EGcodeListWidthComplete2ColumnsAccess, EGcodeListWidthComplete1ColumnAccess, EGcodeListWidthByAccess4ColumnsAccess, EGcodeListWidthByAccess3ColumnsAccess, EGcodeListWidthByAccess2ColumnsAccess, EGcodeListWidthByAccess1ColumnAccess
} from "./code-views";

const AccessDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);
  const section8Ref = useRef<HTMLDivElement>(null);
  const section9Ref = useRef<HTMLDivElement>(null);
  const section10Ref = useRef<HTMLDivElement>(null);
  const section11Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div className="col-12">
        <Scrollspy
          sectionRefs={[
            section1Ref,
            section2Ref,
            section3Ref,
            section4Ref,
            section5Ref,
            section6Ref,
            section7Ref,
            section8Ref,
            section9Ref,
            section10Ref,
            section11Ref,
          ]}
        >
          {({ currentElementIndexInViewport }) => (
            <div className="box-scrollspy">
              <div className="nav-scrollspy d-none d-lg-block">
                <ul className="scrollspy" data-cy="nav-wrapper">
                  <p className="font-weight-bold mb-1"> On this page</p>
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
                    <a href="#section-3">Con descripcion</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-4">Con icono</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-5">Tamaños</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-6">Lista ancho completo | 4 columnas</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-7">Lista ancho completo | 3 columnas</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-8">Lista ancho completo | 2 columnas</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-9">Lista ancho completo | 1 columnas</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-10">
                      Lista ancho por acceso | 4 columnas
                    </a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-11">
                      Lista ancho por acceso | 3 columnas
                    </a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-12">
                      Lista ancho por acceso | 2 columnas
                    </a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-12">Lista ancho por acceso | 1 columna</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Accesos</h1>
                    </HeadingTemplate>
                    <MainDescription description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
                  </section>

                  <Divisor />

                  {/* Simple */}
                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2>Simple</h2>
                    </HeadingTemplate>

                    <div className="list-group">
                      <a href="" className="list-group-item item-sm">
                        <span className="access-title">Acceso</span>
                      </a>
                      <a href="" className="list-group-item item-sm active">
                        <span className="access-title">Acceso</span>
                      </a>
                      <a href="" className="list-group-item item-sm hover">
                        <span className="access-title">Acceso</span>
                      </a>
                      <a href="" className="list-group-item item-sm focus">
                        <span className="access-title">Acceso</span>
                      </a>
                    </div>
                    <CodeCopy code={EGcodeSimpleAccess} />
                  </section>

                  <Divisor />

                  {/* Con descripcion */}
                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2>Con descripcion</h2>
                    </HeadingTemplate>

                    <div className="list-group">
                      <a href="" className="list-group-item item-sm">
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                          <p className="access-text">Descripción (Opcional)</p>
                        </div>
                      </a>
                      <a href="" className="list-group-item item-sm active">
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                          <p className="access-text">Descripción (Opcional)</p>
                        </div>
                      </a>
                      <a href="" className="list-group-item item-sm hover">
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                          <p className="access-text">Descripción (Opcional)</p>
                        </div>
                      </a>
                      <a href="" className="list-group-item item-sm focus">
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                          <p className="access-text">Descripción (Opcional)</p>
                        </div>
                      </a>
                    </div>
                    <CodeCopy code={EGcodeWithDescriptionAccess} />
                  </section>

                  <Divisor />

                  {/* Con icono */}
                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h2>Con icono</h2>
                    </HeadingTemplate>

                    <div className="list-group">
                      <a href="" className="list-group-item item-sm">
                        <i className="bx bxs-info-circle"></i>
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                          <p className="access-text">Descripción (Opcional)</p>
                        </div>
                      </a>
                      <a href="" className="list-group-item item-sm active">
                        <i className="bx bxs-info-circle"></i>
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                          <p className="access-text">Descripción (Opcional)</p>
                        </div>
                      </a>
                      <a href="" className="list-group-item item-sm hover">
                        <i className="bx bxs-info-circle"></i>
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                          <p className="access-text">Descripción (Opcional)</p>
                        </div>
                      </a>
                      <a href="" className="list-group-item item-sm focus">
                        <i className="bx bxs-info-circle"></i>
                        <div className="access-content">
                          <span className="access-title">Acceso</span>
                          <p className="access-text">Descripción (Opcional)</p>
                        </div>
                      </a>
                    </div>
                    <CodeCopy code={EGcodeWithIconAccess} />
                  </section>

                  <Divisor />

                  {/* Tamaños */}
                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h2>Tamaños</h2>
                    </HeadingTemplate>

                    <div className="list-group">
                      <a href="" className="list-group-item ">
                        <span className="access-title">Acceso</span>
                      </a>
                      <a href="" className="list-group-item item-sm hover">
                        <span className="access-title">Acceso</span>
                      </a>
                    </div>
                    <CodeCopy code={EGcodeSizesAccess} />
                  </section>

                  <Divisor />

                  {/* Lista ancho completo */}
                  {/* Cuatro Columnas */}
                  <section id="section-6" ref={section6Ref}>
                    <HeadingTemplate>
                      <h2>Lista ancho completo | Cuatro Columnas</h2>
                    </HeadingTemplate>

                    <div className="container">
                      <div className="access-deck max-cards-4">
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                      </div>
                    </div>
                    <CodeCopy code={EGcodeListWidthComplete4ColumnsAccess} />
                  </section>

                  <Divisor />

                  {/* Lista ancho completo */}
                  {/* Tres Columnas */}
                  <section id="section-7" ref={section6Ref}>
                    <HeadingTemplate>
                      <h2>Lista ancho completo | Tres Columnas</h2>
                    </HeadingTemplate>

                    <div className="container">
                      <div className="access-deck max-cards-4">
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                      </div>
                    </div>
                    <CodeCopy code={EGcodeListWidthComplete3ColumnsAccess} />
                  </section>

                  <Divisor />

                  {/* Lista ancho completo */}
                  {/* Dos Columnas */}
                  <section id="section-8" ref={section6Ref}>
                    <HeadingTemplate>
                      <h2>Lista ancho completo | Dos Columnas</h2>
                    </HeadingTemplate>

                    <div className="container">
                      <div className="access-deck max-cards-4">
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                      </div>
                    </div>
                    <CodeCopy code={EGcodeListWidthComplete2ColumnsAccess} />
                  </section>

                  <Divisor />

                  {/* Lista ancho completo */}
                  {/* Una Columna */}
                  <section id="section-9" ref={EGcodeListWidthComplete1ColumnAccess}>
                    <HeadingTemplate>
                      <h2>Lista ancho completo | Una Columna</h2>
                    </HeadingTemplate>

                    <div className="container">
                      <div className="access-deck max-cards-4">
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                      </div>
                    </div>
                  </section>

                  <Divisor />

                  {/* Lista ancho por acceso */}
                  {/* Cuatro Columnas */}
                  <section id="section-10" ref={EGcodeListWidthByAccess4ColumnsAccess}>
                    <HeadingTemplate>
                      <h2>Lista ancho por acceso | Cuatro Columnas</h2>
                    </HeadingTemplate>

                    <div className="container">
                      <div className="access-deck max-cards-4">
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                      </div>
                    </div>
                  </section>

                  <Divisor />

                  {/* Lista ancho por acceso */}
                  {/* Tres Columnas */}
                  <section id="section-11" ref={EGcodeListWidthByAccess3ColumnsAccess}>
                    <HeadingTemplate>
                      <h2>Lista ancho por acceso | Tres Columnas</h2>
                    </HeadingTemplate>

                    <div className="container">
                      <div className="access-deck max-cards-4">
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                      </div>
                    </div>
                  </section>

                  <Divisor />

                  {/* Lista ancho por acceso */}
                  {/* Dos Columnas */}
                  <section id="section-12" ref={EGcodeListWidthByAccess2ColumnsAccess}>
                    <HeadingTemplate>
                      <h2>Lista ancho por acceso | Dos Columnas</h2>
                    </HeadingTemplate>

                    <div className="container">
                      <div className="access-deck max-cards-4">
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                      </div>
                    </div>
                  </section>

                  <Divisor />

                  {/* Lista ancho por acceso */}
                  {/* Una Columna */}
                  <section id="section-12" ref={EGcodeListWidthByAccess1ColumnAccess}>
                    <HeadingTemplate>
                      <h2>Lista ancho por acceso | Una Columna</h2>
                    </HeadingTemplate>

                    <div className="container">
                      <div className="access-deck max-cards-4">
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                        <a href="" className="list-group-item item-sm">
                          <span className="access-title">Acceso</span>
                        </a>
                      </div>
                    </div>
                  </section>

                  <Divisor />
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div>
    </BoxTemplate>
  );
};

export default AccessDocs;
