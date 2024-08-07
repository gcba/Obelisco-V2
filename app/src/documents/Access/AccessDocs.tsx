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
  EGcodeWithStrong,
  EGcodeSimpleAlert,
  EGcodeCloseAlert,
} from "./code-views";

const AccessDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);

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
                    <a href="#section-3">Con cierre</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-4">Con Lista</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-5">Con Lista</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-6">Con Lista</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-7">Con Lista</a>
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
                        Acceso
                      </a>
                      <a href="" className="list-group-item item-sm active">
                        Acceso
                      </a>
                      <a href="" className="list-group-item item-sm hover">
                        Acceso
                      </a>
                      <a href="" className="list-group-item item-sm focus">
                        Acceso
                      </a>
                    </div>
                  </section>

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
                  </section>

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
                  </section>

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
                  </section>

                  {/* Lista ancho completo */}
                  {/* Cuatro Columnas */}
                  <section id="section-6" ref={section6Ref}>
                    <HeadingTemplate>
                      <h2>Cuatro Columnas</h2>
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
