'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import SimpleText from '@/components/Template/SimpleText';
import { EGcodeBannerChildren, EGcodeBannerComplete, EGcodeBannerImport, EGcodeBannerText, EGcodeBannerTextIcon } from './code-views';

const BannerDocs: React.FC = () => {

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
          section5Ref,
          section6Ref,
          section7Ref,
          section8Ref,
          section9Ref,
          section10Ref
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
                  <li className={currentElementIndexInViewport === 1 ? "active" : ""}><a href="#section-2">Importación</a></li>
                  <li className={currentElementIndexInViewport === 2 ? "active" : ""}><a href="#section-3">Uso</a></li>
                  <li className={currentElementIndexInViewport === 3 ? "active" : ""}><a href="#section-4">Simple Completo</a></li>
                  <li className={currentElementIndexInViewport === 4 ? "active" : ""}><a href="#section-5">Banner Modularizado</a></li>
                  <li className={currentElementIndexInViewport === 5 ? "active" : ""}><a href="#section-6">Solo icono y texto</a></li>
                  <li className={currentElementIndexInViewport === 6 ? "active" : ""}><a href="#section-7">Solo texto</a></li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Banner</h1>
                    </HeadingTemplate>

                    <MainDescription description="Los banners muestran mensajes importantes y breves, a modo de aviso general, para informar a los usuarios sobre temas de diverso interés. Se muestran al ancho completo.." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">import</h2>
                    </HeadingTemplate>

                    <SimpleText description="Recuerda importarlo de manera correcta, ya sea el componente completo o cada modulo del componente por separado." />

                    <CodeCopy code={EGcodeBannerImport} />
                  </section>

                  <Divisor />

                  <section id="section-3" ref={section3Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">Usage</h2>
                    </HeadingTemplate>

                    <SimpleText description="loremloremlorem loremloremlorem loremlorem lorem lorem loremlorem." />
                  </section>

                  <Divisor />

                  <section id="section-4" ref={section4Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Simple completo</h3>
                    </HeadingTemplate>

                    <SimpleText description="Este componente proporciona el componente Acceso completo con la finalidad de que se use con icono, sin icono, con descripcion o sin descripcion, es un componente fijo no modular, permite añadirle un className, pero no se recomienda añadirle mas codigo HTML ya que este componente tambien se encuentra en la seccion Acceso Modularizado." />

                    {/* <Banner
                      iconBanner="bx bx-info-circle"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      buttons={
                        <>
                          <button className="btn btn-sm btn-primary">Click Me</button>
                          <button className="btn btn-sm btn-secondary">Click Me</button>
                        </>
                      }
                    /> */}

                    <br />

                    {/* <Banner
                      iconBanner="face"
                      isDark={true}
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      buttons={
                        <>
                          <button className="btn btn-sm btn-primary">Click Me</button>
                          <button className="btn btn-sm btn-secondary">Click Me</button>
                        </>
                      }
                    /> */}

                    <br />

                    <CodeCopy code={EGcodeBannerComplete} />

                    <HeadingTemplate>
                      <h3 className="mb-4">Children</h3>
                    </HeadingTemplate>

                    <SimpleText description="Este componente recibe un children en caso de necesitar añadir mas HTML para customizarlo" />

                    <CodeCopy code={EGcodeBannerChildren} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Banner Modularizado</h3>
                    </HeadingTemplate>

                    <SimpleText description="Se desarrolla de manera modular, permitiendo una mayor libertad al momento de usar el componente, permitiendo añadir mas HTML y clases personalizadas permitiendo que el componente pueda adaptarse a cada necesidad, manteniendo la estructura base del componente." />
                  </section>

                  <Divisor />

                  <section id="section-6" ref={section6Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Solo icono y texto</h3>
                    </HeadingTemplate>

                    <SimpleText description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum." />

                    {/* <Banner
                      iconBanner="bx bx-info-circle"
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />

                    <br />

                    <Banner
                      iconBanner="face"
                      isDark={true}
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    /> */}

                    <br />

                    <CodeCopy code={EGcodeBannerTextIcon} />
                  </section>

                  <Divisor />

                  <section id="section-7" ref={section7Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Solo texto</h3>
                    </HeadingTemplate>

                    <SimpleText description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum." />

                    {/* <Banner
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    />

                    <br />

                    <Banner
                      isDark={true}
                      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    /> */}

                    {/* <br /> */}

                    <CodeCopy code={EGcodeBannerText} />
                  </section>
                </div>
              </article>
            </div>
          )}
        </Scrollspy>
      </div >
    </BoxTemplate >
  );
};

export default BannerDocs;
