'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import { EGcodeSimpleNavVertical, EGcodeWithIconVertical, EGcodeTwoLevelVertical, EGcodeTwoLevelWithIconVertical, EGcodeThreeLevelVertical, EGcodeThreeLevelWithIconVertical } from './code-views';

const NavVerticalDocs: React.FC = () => {

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
                  <li className={currentElementIndexInViewport === 2 ? "active" : ""}><a href="#section-3">Simple con icono</a></li>
                  <li className={currentElementIndexInViewport === 3 ? "active" : ""}><a href="#section-4">Dos niveles</a></li>
                  <li className={currentElementIndexInViewport === 4 ? "active" : ""}><a href="#section-5">Tres niveles</a></li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Navegación vertical</h1>
                    </HeadingTemplate>
                    <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Simple</h2>
                    </HeadingTemplate>

                    <div className="col-12 col-lg-8 mx-auto pb-2">
                      <nav>
                        <ul className="nav flex-column nav-pills">
                          <li className="nav-item">
                            <a className="nav-link" href="#"><span>Link</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="#"><span>Activo</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#"><span>Link</span></a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link disabled"
                              href="#"
                              aria-disabled="true"
                              tabIndex={-1}
                            >
                              <span>Deshabilitado</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <CodeCopy code={EGcodeSimpleNavVertical} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Simple con icono</h2>
                    </HeadingTemplate>

                    <div className="col-12 col-lg-8 mx-auto pb-2">
                      <nav>
                        <ul className="nav flex-column nav-pills">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <div className="nav-icon">
                                <i className="bx bxs-user-circle o-icon"></i>
                                <span>Link</span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active" href="#">
                              <div className="nav-icon">
                                <i className="bx bxs-user-circle o-icon"></i>
                                <span>Activo</span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <div className="nav-icon">
                                <i className="bx bxs-user-circle o-icon"></i>
                                <span>Link</span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link disabled"
                              href="#"
                              aria-disabled="true"
                              tabIndex={-1}
                            >
                              <div className="nav-icon">
                                <i className="bx bxs-user-circle o-icon"></i>
                                <span>Deshabilitado</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <CodeCopy code={EGcodeWithIconVertical} />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Dos niveles</h3>
                    </HeadingTemplate>

                    <div className="col-12 col-lg-8 mx-auto pb-2">
                      <nav>
                        <ul className="nav flex-column nav-pills nav-lg">
                          <li className="nav-item">
                            <a className="nav-link" href="#"><span>Categorías</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active-child" href="#">
                              <span>Locales y comercios</span>
                            </a>
                            <ul className="nav flex-column nav-pills">
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  <span>
                                    Local Indumentaria y calzado. (Actividades comerciales de
                                    venta).
                                  </span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" href="#">
                                  <span>Locales gastronómicos: “para llevar/takeaway”</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#"><span>Locales de óptica</span></a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  <span>
                                    Comercial minorista (excluyendo indumentaria y calzado)
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#"><span>Actividades jurídicas</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#"><span>Otras actividades</span></a>
                          </li>
                        </ul>
                      </nav>

                      <Divisor />

                      <nav>
                        <ul className="nav flex-column nav-pills nav-lg">
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <div className="nav-icon">
                                <i className="bx bxs-user-circle o-icon"></i>
                                <span>Categorías</span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active-child" href="#">
                              <div className="nav-icon">
                                <i className="bx bxs-user-circle o-icon"></i>
                                <span>Locales y comercios</span>
                              </div>
                            </a>
                            <ul className="nav flex-column nav-pills">
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  <span>
                                    Local Indumentaria y calzado. (Actividades comerciales de
                                    venta).
                                  </span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active" href="#">
                                  <span>Locales gastronómicos: “para llevar/takeaway”</span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#"><span>Locales de óptica</span></a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  <span>
                                    Comercial minorista (excluyendo indumentaria y calzado)
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <div className="nav-icon">
                                <i className="bx bxs-user-circle o-icon"></i>
                                <span>Actividades jurídicas</span>
                              </div>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              <div className="nav-icon">
                                <i className="bx bxs-user-circle o-icon"></i>
                                <span>Otras actividades</span>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    <CodeCopy code={EGcodeTwoLevelVertical} />
                    <br />
                    <CodeCopy code={EGcodeTwoLevelWithIconVertical} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Tres niveles</h3>
                    </HeadingTemplate>

                    <div className="col-12 col-lg-8 mx-auto pb-2">
                      <nav>
                        <ul className="nav flex-column nav-pills nav-lg">
                          <li className="nav-item">
                            <a className="nav-link" href="#"><span>Categorías</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link active-child" href="#">
                              <span>Locales y comercios</span>
                            </a>
                            <ul className="nav flex-column nav-pills">
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  <span>
                                    Local Indumentaria y calzado. (Actividades comerciales de
                                    venta).
                                  </span>
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link active-child" href="#">
                                  <span>Locales gastronómicos: “para llevar/takeaway”</span>
                                </a>
                                <ul className="nav flex-column nav-pills">
                                  <li className="nav-item">
                                    <a className="nav-link" href="#">
                                      <span>Con local a la calle</span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link active" href="#"><span>Food trucks</span></a>
                                  </li>
                                </ul>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#"><span>Locales de óptica</span></a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">
                                  <span>
                                    Comercial minorista (excluyendo indumentaria y calzado)
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#"><span>Actividades jurídicas</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#"><span>Otras actividades</span></a>
                          </li>
                        </ul>
                      </nav>

                      <Divisor />

                      <div className="storybook__container-nav">
                        <nav>
                          <ul className="nav flex-column nav-pills nav-lg">
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                <div className="nav-icon">
                                  <i className="bx bxs-user-circle o-icon"></i>
                                  <span>Categorías</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link active-child" href="#">
                                <div className="nav-icon">
                                  <i className="bx bxs-user-circle o-icon"></i>
                                  <span>Locales y comercios</span>
                                </div>
                              </a>
                              <ul className="nav flex-column nav-pills">
                                <li className="nav-item">
                                  <a className="nav-link" href="#">
                                    <span>
                                      Local Indumentaria y calzado. (Actividades comerciales de
                                      venta).
                                    </span>
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link active-child" href="#">
                                    <span>Locales gastronómicos: “para llevar/takeaway”</span>
                                  </a>
                                  <ul className="nav flex-column nav-pills">
                                    <li className="nav-item">
                                      <a className="nav-link" href="#">
                                        <span>Con local a la calle</span>
                                      </a>
                                    </li>
                                    <li className="nav-item">
                                      <a className="nav-link active" href="#"><span>Food trucks</span></a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#"><span>Locales de óptica</span></a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#">
                                    <span>
                                      Comercial minorista (excluyendo indumentaria y calzado)
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                <div className="nav-icon">
                                  <i className="bx bxs-user-circle o-icon"></i>
                                  <span>Actividades jurídicas</span>
                                </div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                <div className="nav-icon">
                                  <i className="bx bxs-user-circle o-icon"></i>
                                  <span>Otras actividades</span>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>

                    <CodeCopy code={EGcodeThreeLevelVertical} />
                    <br />
                    <CodeCopy code={EGcodeThreeLevelWithIconVertical} />
                  </section>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div>
    </BoxTemplate >
  );
};

export default NavVerticalDocs;
