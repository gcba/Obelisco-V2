"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import SimpleText from "@/components/Template/SimpleText";
import { HEADLINE, HEADINGS, BODY, OTHER_STYLES, DEFAULT_LISTS, BLOCKQUOTE } from "./code-views";

const TypographyDocs: React.FC = () => {
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
          sectionRefs={[
            section1Ref,
            section2Ref,
            section3Ref,
            section4Ref,
            section5Ref,
            section6Ref,
            section7Ref,
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
                    <a href="#section-1">Tipografía</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 1 ? "active" : ""
                    }
                  >
                    <a href="#section-2">Títulos</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">Titulares</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-4">Cuerpo</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 4 ? "active" : ""
                    }
                  >
                    <a href="#section-5">Otros estilos</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 5 ? "active" : ""
                    }
                  >
                    <a href="#section-6">Listas predeterminadas</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 6 ? "active" : ""
                    }
                  >
                    <a href="#section-7">Citas</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Tipografía</h1>
                    </HeadingTemplate>
                    <MainDescription description="La tipografía es nuestro sistema de fuentes. Las buenas prácticas ayudan a presentar el contenido de manera clara y eficiente." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Títulos</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <h1>Headings h1 - Nunito, 40px, IL 48px</h1>
                      <h2>Headings h2 - Nunito, 36px, IL 44px</h2>
                      <h3>Headings h3 - Nunito, 32px, IL 44px</h3>
                      <h4>Headings h4 - Nunito, 28px, IL 36px</h4>
                      <h5>Headings h5 - Nunito, 24px, IL 32px</h5>
                      <h6>Headings h6 - Nunito, 20px, IL 28px</h6>
                    </div>
                    <CodeCopy code={HEADINGS} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Titulares</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <p className="headline-lg">
                        Titular L - Nunito, 20px, IL 24px
                      </p>
                      <p className="headline-md">
                        Titular M - Nunito, 18px, IL 24px
                      </p>
                      <p className="headline-sm">
                        Titular S - Nunito, 16px, IL 20px
                      </p>
                    </div>
                    <CodeCopy code={HEADLINE} />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Cuerpo</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <p className="text-xl">
                        Cuerpo XL - Open Sans, 20px, IL 28px
                      </p>
                      <p className="text-lg">
                        Cuerpo L - Open Sans, 18px, IL 28px
                      </p>
                      <p>Cuerpo M - Open Sans, 16px, IL 24px</p>
                      <p className="text-sm">
                        Cuerpo S - Open Sans, 14px, IL 20px
                      </p>
                      <p className="text-xs">
                        Cuerpo XS - Open Sans, 12px, IL 16px
                      </p>
                      <br />
                      <p>Cuerpo M - Predeterminado - Open Sans, 16px, IL 24px</p> 
                    </div>
                    <CodeCopy code={BODY} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Otros estilos</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <p className="fw-normal">
                        Texto con font-weight normal (400)
                      </p>
                      <p className="fw-semibold">
                        Texto con font-weight semibold (600)
                      </p>
                      <p className="fw-bold">
                        Texto con font-weight bold (700)
                      </p>
                      <p className="fst-italic">Texto en itálica</p>
                      <p className="underline-1">
                        Texto subrayado con grosor de 1px
                      </p>
                      <p className="underline-2">
                        Texto subrayado con grosor de 2px
                      </p>
                    </div>
                    <CodeCopy code={OTHER_STYLES} />
                  </section>

                  <Divisor />

                  <section id="section-6" ref={section6Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Listas predeterminadas</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <ul>
                        <li>Esto es el texto de una lista</li>
                        <li>Esto es el texto de una lista</li>
                        <li>Esto es el texto de una lista</li>
                      </ul>
                      <br />
                      <ol>
                        <li>Esto es el texto de una lista ordenada</li>
                        <li>Esto es el texto de una lista ordenada</li>
                        <li>Esto es el texto de una lista ordenada</li>
                      </ol>
                    </div>
                    <CodeCopy code={DEFAULT_LISTS} />
                  </section>

                  <Divisor />

                  <section id="section-7" ref={section7Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Citas</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <blockquote>
                        <p>
                          Este es un apartado del texto que se quiere destacar por su importancia
                          dentro del contenido de la página.
                        </p>
                        <p className="author">Nombre del autor de la cita</p>
                      </blockquote>
                    </div>
                    <CodeCopy code={BLOCKQUOTE} />
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

export default TypographyDocs;
