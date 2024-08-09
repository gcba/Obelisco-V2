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
  DROPDOWN,
  DROPDOWN_MENU_ICON,
  DROPDOWN_MENU_RIGHT,
  DROPDOWN_CASCADE,
  DROPDOWN_CASCADE_RIGHT,
  DROPDOWN_MENU_ICON_ONLY,
} from "./code-views";

const DropdownNavDocs: React.FC = () => {
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
                    <a href="#section-1">Desplegable de navegación</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 1 ? "active" : ""
                    }
                  >
                    <a href="#section-2">Con icono</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 2 ? "active" : ""
                    }
                  >
                    <a href="#section-3">Disposición derecha</a>
                  </li>
                  <li
                    className={
                      currentElementIndexInViewport === 3 ? "active" : ""
                    }
                  >
                    <a href="#section-4">Con cascada</a>
                  </li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Desplegable de navegación</h1>
                    </HeadingTemplate>
                    <MainDescription description="La tipografía es nuestro sistema de fuentes. Las buenas prácticas ayudan a presentar el contenido de manera clara y eficiente." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Con icono</h2>
                    </HeadingTemplate>
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="btn-dropdown-text">Desplegable</span>
                        <span
                          className="material-symbols-rounded o-icon btn-dropdown-icon"
                          aria-label="hidden"
                        >
                          expand_more
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="bx bxs-info-circle o-icon"></i>
                          <span className="item-text">
                            Opción de navegación
                          </span>
                          <i className="bx bxs-info-circle o-icon"></i>
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="bx bxs-info-circle o-icon"></i>
                          <span className="item-text text-end">
                            Opción de navegación
                          </span>
                          <i className="bx bxs-info-circle o-icon"></i>
                        </a>
                        <a className="dropdown-item disabled" href="#">
                          <i className="bx bxs-info-circle o-icon"></i>
                          <span className="item-text text-end">
                            Opción de navegación
                          </span>
                          <i className="bx bxs-info-circle o-icon"></i>
                        </a>
                        <a className="dropdown-item item-danger" href="#">
                          <span
                            className="material-symbols-rounded o-icon"
                            aria-label="hidden"
                          >
                            logout
                          </span>
                          <span className="item-text">Cerrar sesión</span>
                        </a>
                      </div>
                    </div>

                    {/* <CodeCopy code={DROPDOWN} /> */}
                    <br />
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span
                          className="material-symbols-rounded o-icon"
                          aria-label="hidden"
                        >
                          menu
                        </span>
                        <span className="btn-dropdown-text">Desplegable</span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="bx bxs-info-circle o-icon"></i>
                          <span className="item-text">
                            Opción de navegación
                          </span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text text-end">
                            Opción de navegación
                          </span>
                          <i className="bx bxs-info-circle o-icon"></i>
                        </a>
                        <a className="dropdown-item item-danger" href="#">
                          <span className="item-text text-end">
                            Cerrar sesión
                          </span>
                          <span
                            className="material-symbols-rounded o-icon"
                            aria-label="hidden"
                          >
                            logout
                          </span>
                        </a>
                      </div>
                    </div>
                    {/* <CodeCopy code={DROPDOWN_MENU_ICON} /> */}
                    <br />
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        aria-label="Menu"
                      >
                        <span
                          className="material-symbols-rounded o-icon"
                          aria-label="hidden"
                        >
                          menu
                        </span>
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">
                          <i className="bx bxs-info-circle o-icon"></i>
                          <span className="item-text">
                            Opción de navegación
                          </span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text text-end">
                            Opción de navegación
                          </span>
                          <i className="bx bxs-info-circle o-icon"></i>
                        </a>
                        <a className="dropdown-item item-danger" href="#">
                          <span className="item-text text-end">
                            Cerrar sesión
                          </span>
                          <span
                            className="material-symbols-rounded o-icon"
                            aria-label="hidden"
                          >
                            logout
                          </span>
                        </a>
                      </div>
                    </div>
                    <CodeCopy code={DROPDOWN_MENU_ICON_ONLY} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Disposición derecha</h2>
                    </HeadingTemplate>

                    <div className="dropdown ms-auto">
                      <button
                        type="button"
                        className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span
                          className="material-symbols-rounded o-icon btn-dropdown-icon"
                          aria-label="hidden"
                        >
                          expand_more
                        </span>
                        <span className="btn-dropdown-text">Desplegable</span>
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          <span className="item-text">
                            Opción de navegación
                          </span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">
                            Opción de navegación
                          </span>
                        </a>
                        <a className="dropdown-item" href="#">
                          <span className="item-text">
                            Opción de navegación
                          </span>
                        </a>
                        <a className="dropdown-item item-danger" href="#">
                          <span className="item-text">Cerrar sesión</span>
                          <span
                            className="material-symbols-rounded o-icon"
                            aria-label="hidden"
                          >
                            logout
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* <CodeCopy code={DROPDOWN_MENU_RIGHT} /> */}
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4 bg-light">Con cascada</h2>
                    </HeadingTemplate>
                      <div className="dropdown">
                        <button
                          type="button"
                          className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          data-bs-auto-close="outside"
                        >
                          <span className="btn-dropdown-text">Desplegable</span>
                          <span
                            className="material-symbols-rounded o-icon btn-dropdown-icon"
                            aria-label="hidden"
                          >
                            expand_more
                          </span>
                        </button>
                        <div className="dropdown-menu">
                          <div className="dropdown sub-dropdown">
                            <button
                              type="button"
                              className="btn btn-dropdown btn-dropdown-lg"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bx bxs-info-circle o-icon"></i>
                              <span className="btn-dropdown-text">
                                Opción en cascada
                              </span>
                              <span
                                className="material-symbols-rounded o-icon btn-dropdown-icon"
                                aria-label="hidden"
                              >
                                expand_more
                              </span>
                            </button>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">
                                <span className="item-text">
                                  Opción de navegación
                                </span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">
                                  Opción de navegación
                                </span>
                              </a>
                              <a className="dropdown-item" href="#">
                                <span className="item-text">
                                  Opción de navegación
                                </span>
                              </a>
                            </div>
                          </div>
                          <a className="dropdown-item" href="#">
                            <span className="item-text">
                              Opción de navegación
                            </span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <span className="item-text">
                              Opción de navegación
                            </span>
                          </a>
                          <a className="dropdown-item" href="#">
                            <span className="item-text">
                              Opción de navegación
                            </span>
                          </a>
                          <a className="dropdown-item item-danger" href="#">
                            <span
                              className="material-symbols-rounded o-icon"
                              aria-label="hidden"
                            >
                              logout
                            </span>
                            <span className="item-text">Cerrar sesión</span>
                          </a>
                        </div>
                      </div>
                      {/* <CodeCopy code={DROPDOWN_CASCADE} /> */}
                      <div>
                        <div className="dropdown ms-auto">
                          <button
                            type="button"
                            className="btn btn-dropdown btn-dropdown-lg btn-dropdown-border"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-auto-close="outside"
                          >
                            <span
                              className="material-symbols-rounded o-icon btn-dropdown-icon"
                              aria-label="hidden"
                            >
                              expand_more
                            </span>
                            <span className="btn-dropdown-text">Desplegable</span>
                          </button>
                          <div className="dropdown-menu dropdown-menu-end">
                            <div className="dropdown sub-dropdown">
                              <button
                                type="button"
                                className="btn btn-dropdown btn-dropdown-lg"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span
                                  className="material-symbols-rounded o-icon btn-dropdown-icon"
                                  aria-label="hidden"
                                >
                                  expand_more
                                </span>

                                <span className="btn-dropdown-text">
                                  Opción en cascada
                                </span>
                                <i className="bx bxs-info-circle o-icon"></i>
                              </button>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                  <span className="item-text">
                                    Opción de navegación
                                  </span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <span className="item-text">
                                    Opción de navegación
                                  </span>
                                </a>
                                <a className="dropdown-item" href="#">
                                  <span className="item-text">
                                    Opción de navegación
                                  </span>
                                </a>
                              </div>
                            </div>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">
                                Opción de navegación
                              </span>
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">
                                Opción de navegación
                              </span>
                            </a>
                            <a className="dropdown-item" href="#">
                              <span className="item-text">
                                Opción de navegación
                              </span>
                            </a>
                            <a className="dropdown-item item-danger" href="#">
                              <span className="item-text">Cerrar sesión</span>
                              <span
                                className="material-symbols-rounded o-icon"
                                aria-label="hidden"
                              >
                                logout
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <CodeCopy code={DROPDOWN_CASCADE_RIGHT} /> */}
                      <br /><br /><br />
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

export default DropdownNavDocs;
