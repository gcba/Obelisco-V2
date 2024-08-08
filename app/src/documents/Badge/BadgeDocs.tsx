"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import { EGcodeSimpleAlert, EGcodeCloseAlert } from "./code-views";

const BadgeDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div className="col-12">
        <Scrollspy sectionRefs={[section1Ref, section2Ref, section3Ref]}>
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
                    <a href="#section-2">Colores</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">Enlace</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Etiqueta</h1>
                    </HeadingTemplate>
                    <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Colores</h2>
                    </HeadingTemplate>

                    <div className="">
                      <span className="badge badge-secondary">Etiqueta</span>
                      <span className="badge badge-danger">Etiqueta</span>
                      <span className="badge badge-success">Etiqueta</span>
                      <span className="badge badge-info">Etiqueta</span>
                      <span className="badge badge-primary">Etiqueta</span>
                    </div>
                    <CodeCopy code={EGcodeSimpleAlert} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Enlace</h2>
                    </HeadingTemplate>

                    <div className="">
                      <a href="#" className="badge badge-secondary">
                        Etiqueta
                      </a>
                      <a href="#" className="badge hover badge-secondary">
                        Etiqueta
                      </a>
                      <a href="#" className="badge focus hover badge-secondary">
                        Etiqueta
                      </a>
                      <a href="#" className="badge focus badge-secondary">
                        Etiqueta
                      </a>
                    </div>

                    <CodeCopy code={EGcodeCloseAlert} />
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

export default BadgeDocs;
