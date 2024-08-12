'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import { EGcodeSimpleTabs, EGcodeSimpleTabsWithIcon, EGcodeTabsWidth, EGcodeTabsBg } from './code-views';

const TabsDocs: React.FC = () => {

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);

  return (
    <BoxTemplate>
      <div
        className="col-12"
      >
        <Scrollspy sectionRefs={[
          section1Ref,
          section2Ref,
          section3Ref,
          section4Ref,
        ]}>
          {({ currentElementIndexInViewport }) => (
            <div className='box-scrollspy'>
              <div className='nav-scrollspy d-none d-lg-block'>
                <ul
                  className='scrollspy'
                  data-cy="nav-wrapper"
                >
                  <p className='font-weight-bold mb-1'> On this page
                  </p>
                  <li className={currentElementIndexInViewport === 0 ? "active" : ""}><a href="#section-1">Introducción</a></li>
                  <li className={currentElementIndexInViewport === 1 ? "active" : ""}><a href="#section-2">Simple</a></li>
                  <li className={currentElementIndexInViewport === 2 ? "active" : ""}><a href="#section-3">Ancho Fijo</a></li>
                  <li className={currentElementIndexInViewport === 3 ? "active" : ""}><a href="#section-4">Con contenedor</a></li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Pestañas</h1>
                    </HeadingTemplate>
                    <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Simple</h2>
                    </HeadingTemplate>

                    <div className="col-12 col-lg-8 mx-auto">
                      <nav className="tabs-box" aria-label="Navegación por pestañas">
                        <ul className="nav nav-pills tabs" id="simple-myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-content-1"
                              type="button"
                              role="tab"
                              aria-controls="panel-content-1"
                              aria-selected="false"
                              id="tab-1"
                            >
                              Pestaña 1
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-content-2"
                              type="button"
                              role="tab"
                              aria-controls="panel-content-2"
                              aria-selected="false"
                              id="tab-2"
                            >
                              Pestaña 2
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-content-3"
                              type="button"
                              role="tab"
                              aria-controls="panel-content-3"
                              aria-selected="true"
                              id="tab-3"
                            >
                              Pestaña 3
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link disabled"
                              disabled
                              tabIndex={-1}
                              data-bs-toggle="tab"
                              data-bs-target="#panel-content-4"
                              type="button"
                              role="tab"
                              aria-controls="panel-content-4"
                              aria-selected="false"
                              id="tab-4"
                            >
                              Pestaña 4
                            </button>
                          </li>
                        </ul>
                      </nav>
                      <div className="tab-content" id="simple-myTabContent">
                        <div
                          className="tab-pane fade"
                          id="panel-content-1"
                          role="tabpanel"
                          aria-labelledby="tab-1"
                        >
                          Contenido Pestaña 1
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-content-2"
                          role="tabpanel"
                          aria-labelledby="tab-2"
                        >
                          Contenido Pestaña 2
                        </div>
                        <div
                          className="tab-pane fade show active"
                          id="panel-content-3"
                          role="tabpanel"
                          aria-labelledby="tab-3"
                        >
                          Contenido Pestaña 3
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-content-4"
                          role="tabpanel"
                          aria-labelledby="tab-4"
                        >
                          Contenido Pestaña 4
                        </div>
                      </div>
                    </div>

                    <CodeCopy code={EGcodeSimpleTabs} />

                    <div className="col-12 col-lg-8 mx-auto">
                      <nav className="tabs-box" aria-label="Navegación por pestañas">
                        <ul className="nav nav-pills tabs" id="icon-myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-icon-content-1"
                              type="button"
                              role="tab"
                              aria-controls="panel-icon-content-1"
                              aria-selected="true"
                              id="tab-icon-1"
                            >
                              <div className="nav-icon">
                                Pestaña 1
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-icon-content-2"
                              type="button"
                              role="tab"
                              aria-controls="panel-icon-content-2"
                              aria-selected="false"
                              id="tab-icon-2"
                            >
                              <div className="nav-icon">
                                Pestaña 2
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-icon-content-3"
                              type="button"
                              role="tab"
                              aria-controls="panel-icon-content-3"
                              aria-selected="false"
                              id="tab-icon-3"
                              disabled
                            >
                              <div className="nav-icon">
                                Pestaña 3
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-icon-content-4"
                              type="button"
                              role="tab"
                              aria-controls="panel-icon-content-4"
                              aria-selected="false"
                              id="tab-icon-4"
                            >
                              <div className="nav-icon">
                                Pestaña 4
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                        </ul>
                      </nav>
                      <div className="tab-content" id="icon-myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="panel-icon-content-1"
                          role="tabpanel"
                          aria-labelledby="tab-icon-1"
                        >
                          Contenido Pestaña 1
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-icon-content-2"
                          role="tabpanel"
                          aria-labelledby="tab-icon-2"
                        >
                          Contenido Pestaña 2
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-icon-content-3"
                          role="tabpanel"
                          aria-labelledby="tab-icon-3"
                        >
                          Contenido Pestaña 3
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-icon-content-4"
                          role="tabpanel"
                          aria-labelledby="tab-icon-4"
                        >
                          Contenido Pestaña 4
                        </div>
                      </div>
                    </div>

                    <CodeCopy code={EGcodeSimpleTabsWithIcon} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Ancho fijo</h2>
                    </HeadingTemplate>

                    <div className="col-12">
                      <nav className="tabs-box" aria-label="Navegación por pestañas">
                        <ul className="nav nav-pills tabs fixed-width" id="icon-myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-width-content-1"
                              type="button"
                              role="tab"
                              aria-controls="panel-width-content-1"
                              aria-selected="true"
                              id="tab-width-1"
                            >
                              <div className="nav-icon">
                                Pestaña 1
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-width-content-2"
                              type="button"
                              role="tab"
                              aria-controls="panel-width-content-2"
                              aria-selected="false"
                              id="tab-width-2"
                            >
                              <div className="nav-icon">
                                Pestaña 2
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-width-content-3"
                              type="button"
                              role="tab"
                              aria-controls="panel-width-content-3"
                              aria-selected="false"
                              id="tab-width-3"
                              disabled
                            >
                              <div className="nav-icon">
                                Pestaña 3
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-width-content-4"
                              type="button"
                              role="tab"
                              aria-controls="panel-width-content-4"
                              aria-selected="false"
                              id="tab-width-4"
                            >
                              <div className="nav-icon">
                                Pestaña 4
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                        </ul>
                      </nav>
                      <div className="tab-content" id="icon-myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="panel-width-content-1"
                          role="tabpanel"
                          aria-labelledby="tab-width-1"
                        >
                          Contenido Pestaña 1
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-width-content-2"
                          role="tabpanel"
                          aria-labelledby="tab-width-2"
                        >
                          Contenido Pestaña 2
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-width-content-3"
                          role="tabpanel"
                          aria-labelledby="tab-width-3"
                        >
                          Contenido Pestaña 3
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-width-content-4"
                          role="tabpanel"
                          aria-labelledby="tab-width-4"
                        >
                          Contenido Pestaña 4
                        </div>
                      </div>
                    </div>

                    <CodeCopy code={EGcodeTabsWidth} />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con contenedor</h3>
                    </HeadingTemplate>

                    <div className="col-12">
                      <nav className="tabs-box" aria-label="Navegación por pestañas">
                        <ul className="nav nav-pills tabs nav-box" id="icon-myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-bg-content-1"
                              type="button"
                              role="tab"
                              aria-controls="panel-bg-content-1"
                              aria-selected="true"
                              id="tab-bg-1"
                            >
                              <div className="nav-icon">
                                Pestaña 1
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-bg-content-2"
                              type="button"
                              role="tab"
                              aria-controls="panel-bg-content-2"
                              aria-selected="false"
                              id="tab-bg-2"
                            >
                              <div className="nav-icon">
                                Pestaña 2
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-bg-content-3"
                              type="button"
                              role="tab"
                              aria-controls="panel-bg-content-3"
                              aria-selected="false"
                              id="tab-bg-3"
                              disabled
                            >
                              <div className="nav-icon">
                                Pestaña 3
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              data-bs-toggle="tab"
                              data-bs-target="#panel-bg-content-4"
                              type="button"
                              role="tab"
                              aria-controls="panel-bg-content-4"
                              aria-selected="false"
                              id="tab-bg-4"
                            >
                              <div className="nav-icon">
                                Pestaña 4
                                <span className="material-symbols-rounded o-icon">
                                  home
                                </span>
                              </div>
                            </button>
                          </li>
                        </ul>
                      </nav>
                      <div className="tab-content" id="icon-myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="panel-bg-content-1"
                          role="tabpanel"
                          aria-labelledby="tab-bg-1"
                        >
                          Contenido Pestaña 1
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-bg-content-2"
                          role="tabpanel"
                          aria-labelledby="tab-bg-2"
                        >
                          Contenido Pestaña 2
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-bg-content-3"
                          role="tabpanel"
                          aria-labelledby="tab-bg-3"
                        >
                          Contenido Pestaña 3
                        </div>
                        <div
                          className="tab-pane fade"
                          id="panel-bg-content-4"
                          role="tabpanel"
                          aria-labelledby="tab-bg-4"
                        >
                          Contenido Pestaña 4
                        </div>
                      </div>
                    </div>

                    <br />

                    <CodeCopy code={EGcodeTabsBg} />
                  </section>
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div>
    </BoxTemplate >
  );
};

export default TabsDocs;
