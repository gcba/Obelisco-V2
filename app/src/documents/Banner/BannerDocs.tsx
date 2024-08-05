'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import SimpleText from '@/components/Template/SimpleText';
import { EGcodeWithStrong, EGcodeSimpleAlert, EGcodeCloseAlert } from './code-views';

const BannerDocs: React.FC = () => {

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
                  <p className='font-weight-bold mb-1'> <strong>Componentes</strong> | Banner </p>
                  <li className={currentElementIndexInViewport === 0 ? "active" : ""}><a href="#section-1">Introducción</a></li>
                  <li className={currentElementIndexInViewport === 1 ? "active" : ""}><a href="#section-2">Tipos</a></li>
                  <li className={currentElementIndexInViewport === 2 ? "active" : ""}><a href="#section-3">Con botón</a></li>
                  <li className={currentElementIndexInViewport === 3 ? "active" : ""}><a href="#section-4">Con botones</a></li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Banner</h1>
                    </HeadingTemplate>
                    <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
                  </section>
                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Simple</h2>
                    </HeadingTemplate>

                    <div className="col-12 mx-auto mb-5">
                        <div className="banner">
                          <div className="banner-content">
                            <p className="banner-text">
                              Esta descripción de banner
                              <strong>puede tener énfasis</strong>
                              y
                              <a href="#" target="_blank" rel="noreferrer">enlace</a>
                              .
                            </p>
                          </div>
                        </div>
                        <div className="banner banner-dark">
                          <div className="banner-content">
                            <p className="banner-text">
                              Esta descripción de banner
                              <strong>puede tener énfasis</strong>
                              y
                              <a href="#" target="_blank" rel="noreferrer">enlace</a>
                              .
                            </p>
                          </div>
                        </div>
                    </div>
                    {/* <CodeCopy code={EGcodeSimpleAlert} /> */}
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Con botón</h2>
                    </HeadingTemplate>

                    <div className="col-12 mx-auto mb-5">
                      <div className="banner">
                        <div className="banner-content">
                          <span className="material-icons-round">departure_board</span>
                          <p className="banner-text">
                            Este banner tiene un solo botón y
                            <strong>puede tener énfasis</strong>
                            . Se truncan los textos que superen más de una línea de texto.
                          </p>
                          <div className="banner-actions">
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-secondary"
                            >
                              Botón
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="banner banner-dark">
                        <div className="banner-content">
                          <span className="material-icons-round">departure_board</span>
                          <p className="banner-text">
                            Este banner tiene un solo botón y
                            <strong>puede tener énfasis</strong>
                            . Se truncan los textos que superen más de una línea de texto.
                          </p>
                          <div className="banner-actions">
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-secondary"
                            >
                              Botón
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* <CodeCopy code={EGcodeCloseAlert} /> */}
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Con botones</h3>
                    </HeadingTemplate>

                    <div className="col-12 mx-auto mb-5">
                      <div className="banner">
                        <div className="banner-content">
                          <span className="material-icons-round">cookie</span>
                          <p className="banner-text">
                            Este banner tiene dos botones y
                            <strong>puede tener énfasis</strong>
                            . Se truncan los textos que superen más de una línea de texto.
                          </p>
                          <div className="banner-actions">
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-secondary"
                            >
                              Botón
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-primary"
                            >
                              Botón
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="banner banner-dark">
                        <div className="banner-content">
                          <span className="material-icons-round">cookie</span>
                          <p className="banner-text">
                            Este banner tiene dos botones y
                            <strong>puede tener énfasis</strong>
                            . Se truncan los textos que superen más de una línea de texto.
                          </p>
                          <div className="banner-actions">
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-secondary"
                            >
                              Botón
                            </a>
                            <a
                              href="#"
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-sm btn-primary"
                            >
                              Botón
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br />

                    {/* <CodeCopy code={EGcodeWithStrong} /> */}
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

export default BannerDocs;


/*********************************************************************** */

// Base
//import React from 'react';
//import './Banner.stories.scss';

// Addons
//import { withA11y } from '@storybook/addon-a11y';

// Components
//import { Banner, BUTTON_BANNER, BUTTONS_BANNER, TEXT_BANNER_LINK, TextBannerButton, handleTextResponsive } from '.';

// Configuración general del componente
// export default {
//   title: 'Componentes|Banner',
//   //decorators: [withA11y]
// };

// export const BannerTypes = (): JSX.Element => {
//   return (
//     <div className="storybook__container-banner">
//       <Banner textBanner={TEXT_BANNER_LINK} />
//       <Banner textBanner={TEXT_BANNER_LINK} isDark={true} />
//     </div>
//   );
// };
// BannerTypes.story = { name: 'Tipos' };

// export const BannerButton = (): JSX.Element => {
//   handleTextResponsive();
//   return (
//     <div className="storybook__container-banner">
//       <Banner
//         iconBanner="departure_board"
//         buttons={BUTTON_BANNER}
//         textBanner={<TextBannerButton textButtonAmount="un solo botón" />}
//       />
//       <Banner
//         iconBanner="departure_board"
//         buttons={BUTTON_BANNER}
//         textBanner={<TextBannerButton textButtonAmount="un solo botón" />}
//         isDark={true}
//       />
//     </div>
//   );
// };
// BannerButton.story = { name: 'Con botón' };

// export const BannerButtons = (): JSX.Element => {
//   handleTextResponsive();
//   return (
//     <div className="storybook__container-banner">
//       <Banner
//         iconBanner="cookie"
//         buttons={BUTTONS_BANNER}
//         textBanner={<TextBannerButton textButtonAmount="dos botones" />}
//       />
//       <Banner
//         iconBanner="cookie"
//         buttons={BUTTONS_BANNER}
//         textBanner={<TextBannerButton textButtonAmount="dos botones" />}
//         isDark={true}
//       />
//     </div>
//   );
// };
// BannerButtons.story = { name: 'Con botones' };
