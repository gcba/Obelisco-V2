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
  LINK_DEFAULT,
  LINK_EXTERNAL,
  LINK_DOWNLOAD,
  LINK_ACCESS,
} from "./code-views";

const LinkDocs: React.FC = () => {
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
                    <a href="#section-1">Enlace</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 1 ? "active" : ""
                    }
                  >
                    <a href="#section-2">Predeterminado</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">Externo</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-4">Descarga</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 4 ? "active" : ""
                    }
                  >
                    <a href="#section-5">Acceso</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Enlace</h1>
                    </HeadingTemplate>
                    <MainDescription description="Los enlaces son hipervínculos que la persona usuaria utiliza para navegar contenidos en un sitio web. Pueden dirigir tanto a información y recursos dentro de una misma página o sitio web, como también a páginas externas." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Predeterminado</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <p>
                        <a href="#" target="_blank" rel="noreferrer">
                          enlace en párrafo
                        </a>
                      </p>
                      <p>
                        <small>
                          <a href="#" target="_blank" rel="noreferrer">
                            enlaces en párrafo
                          </a>
                        </small>
                      </p>
                      <div className="bg-dark p-2">
                        <p>
                          <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="link-white"
                          >
                            enlace en párrafo
                          </a>{" "}
                        </p>
                        <p className="mb-0">
                          <small>
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="link-white"
                            >
                              enlaces en párrafo
                            </a>
                          </small>
                        </p>
                      </div>
                    </div>
                    <CodeCopy code={LINK_DEFAULT} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Externo</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <div className="p-2">
                        <p>
                          <a
                            className="external"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            enlace externo
                          </a>
                        </p>
                      </div>
                      <div className="bg-dark p-2">
                        <p className="mb-0">
                          <a
                            className="external link-white"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            enlace externo
                          </a>
                        </p>
                      </div>
                    </div>
                    <CodeCopy code={LINK_EXTERNAL} />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Descarga</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <div className="p-2">
                        <p>
                          <a
                            className="download"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            download=""
                          >
                            enlace de descarga
                          </a>
                        </p>
                      </div>

                      <div className="bg-dark p-2">
                        <p className="mb-0">
                          <a
                            className="download link-white"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            download=""
                          >
                            enlace de descarga
                          </a>
                        </p>
                      </div>
                      <a
                        className="btn btn-secondary btn-sm download-link my-3"
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        download=""
                      >
                        Descargar
                      </a>
                    </div>
                    <CodeCopy code={LINK_DOWNLOAD} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Acceso</h2>
                    </HeadingTemplate>
                    <div className="container">
                      <div className="p-2">
                        <p>
                          <a
                            className="access"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            enlace de acceso
                          </a>
                        </p>
                      </div>

                      <div className="bg-dark p-2">
                        <p className="mb-0">
                          <a
                            className="access link-white"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            enlace de acceso
                          </a>
                        </p>
                      </div>
                    </div>
                    <CodeCopy code={LINK_ACCESS} />
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

export default LinkDocs;
