"use client";

import React, { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeCopy";
import BoxTemplate from "@/components/Template/Box";
import HeadingTemplate from "@/components/Template/HeadingTemplate";
import MainDescription from "@/components/Template/MainDescription";
import Divisor from "@/components/Template/Divisor";
import { TooltipWithButtons, TooltipWithIcons } from "./code-views";

const FooterDocs: React.FC = () => {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

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
                      <h1>Footer</h1>
                    </HeadingTemplate>
                    <MainDescription description="Pequeña ventana emergente que proporciona información contextual adicional sobre un elemento al pasar el cursor sobre él." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Con botones</h2>
                    </HeadingTemplate>

                    <div className="bg-danger container-fluid">
                      <h2 className="sr-only">Navegación de pie de página</h2>
                      <div className="footer-info">
                        <div className="container">
                          <h3 className="footer-info-text">
                            ¿Te fue útil esta página?
                          </h3>
                          <div className="footer-info-actions">
                            <button className="btn btn-primary">
                              Sí, me fue útil
                            </button>
                            <button className="btn btn-secondary">
                              No me sirvió
                            </button>
                          </div>
                        </div>
                      </div>
                      <footer className="main-footer">
                        <div className="container">
                          <section>
                            <h3>Teléfonos útiles</h3>
                            <ul className="list-inline">
                              <li className="list-inline-item phone-items">
                                <a href="tel:102">102 - Niñez y Adolescencia</a>
                              </li>
                              <li className="list-inline-item phone-items">
                                <a href="tel:103">103 - Emergencias</a>
                              </li>
                              <li className="list-inline-item phone-items">
                                <a href="tel:107">107 - SAME</a>
                              </li>
                              <li className="list-inline-item phone-items">
                                <a href="tel:911">911 - Policía</a>
                              </li>
                              <li className="list-inline-item phone-items">
                                <a href="tel:144">144 - Violencia de género</a>
                              </li>
                              <li className="list-inline-item phone-items">
                                <a href="tel:147">147 - Atención ciudadana</a>
                              </li>
                            </ul>
                            <a href="https://buenosaires.gob.ar/inicio/telefonos">
                              Ver todos los teléfonos
                            </a>
                          </section>
                          <section>
                            <h3>Redes de la ciudad</h3>
                            <ul className="list-inline">
                              <li className="list-inline-item redes-items">
                                <a href="https://www.facebook.com/GCBA">
                                  <i className="bx bxl-facebook-circle"></i>
                                  Facebook
                                </a>
                              </li>
                              <li className="list-inline-item redes-items">
                                <a href="https://www.instagram.com/gcba/">
                                  <i className="bx bxl-instagram-alt"></i>
                                  Instagram
                                </a>
                              </li>
                              <li className="list-inline-item redes-items">
                                <a href="https://twitter.com/buenosaires">
                                  <i className="bx bxl-twitter"></i>
                                  Twitter
                                </a>
                              </li>
                              <li className="list-inline-item redes-items">
                                <a href="https://www.youtube.com/user/GCBA">
                                  <i className="bx bxl-youtube"></i>
                                  YouTube
                                </a>
                              </li>
                              <li className="list-inline-item redes-items">
                                <a href="https://ar.linkedin.com/company/gobierno-de-la-ciudad-de-buenos-aires">
                                  <i className="bx bxl-linkedin-square"></i>
                                  LinkedIn
                                </a>
                              </li>
                              <li className="list-inline-item redes-items">
                                <a href="https://www.tiktok.com/@buenosaires">
                                  <i className="bx bxl-tiktok"></i>
                                  TikTok
                                </a>
                              </li>
                              <li className="list-inline-item redes-items">
                                <a href="https://www.pinterest.es/buenosaires/">
                                  <i className="bx bxl-pinterest"></i>
                                  Pinterest
                                </a>
                              </li>
                            </ul>
                          </section>
                        </div>
                        <hr className="divider" />
                        <div className="container">
                          <section className="footer-legal-section">
                            <h3 className="sr-only">
                              Información gubernamental
                            </h3>
                            <div className="row align-items-center">
                              <div className="col-12 col-md-5 col-xl-4 footer-content-img">
                                <img
                                  className="d-lg-none"
                                  src="footer/ciudad-ba-sm.svg"
                                  alt="Logo de Ciudad de Buenos Aires"
                                  height="48"
                                />
                                <img
                                  className="d-none d-lg-inline"
                                  src="footer/ciudad-ba.svg"
                                  alt="Logo de Ciudad de Buenos Aires"
                                  height="40"
                                />
                                <img
                                  className="img-vamos-ba"
                                  src="footer/vamos-ba.svg"
                                  alt="Logo de Vamos Buenos Aires"
                                />
                              </div>
                              <div className="col-12">
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <a href="https://boletinoficial.buenosaires.gob.ar">
                                      Boletín oficial
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="https://buenosaires.gob.ar/inicio/terminos-y-condiciones">
                                      Términos y condiciones
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="https://buenosaires.gob.ar/inicio/privacidad">
                                      Política de privacidad
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="https://buenosaires.gob.ar/jefedegobierno/legalytecnica/normativa/boletin-oficial-y-registro/oficios-judiciales">
                                      Oficios judiciales
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="https://www.buenosaires.gob.ar/gobierno/transparencia">
                                      Transparencia
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </section>
                          <section>
                            <div className="footer-license-text">
                              Los contenidos de buenosaires.gob.ar están
                              licenciados bajo Creative Commons Reconocimiento
                              2.5 Argentina License.
                            </div>
                          </section>
                        </div>
                      </footer>
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

                    <div className="d-flex flex-wrap justify-content-between mb-4 px-lg-5 mx-lg-5">
                      <div className="d-flex flex-column align-items-start px-lg-5 mx-lg-5">
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
                      <div className="d-flex flex-column align-items-end px-lg-5 mx-lg-5">
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

export default FooterDocs;
