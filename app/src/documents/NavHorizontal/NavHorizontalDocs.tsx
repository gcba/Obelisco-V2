'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox"
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import SimpleText from '@/components/Template/SimpleText';
import { EGcodeNavHorizontal1, EGcodeNavHorizontal2, EGcodeNavHorizontal3, EGcodeNavHorizontal4, EGcodeNavHorizontal5, EGcodeNavHorizontal6, EGcodeImportGallery } from './code-views';

const NavHorizontalDocs: React.FC = () => {

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
                  <li className={currentElementIndexInViewport === 4 ? "active" : ""}><a href="#section-5">Acceso Modularizado</a></li>
                  <li className={currentElementIndexInViewport === 5 ? "active" : ""}><a href="#section-6">Solo Enlace</a></li>
                  <li className={currentElementIndexInViewport === 6 ? "active" : ""}><a href="#section-7">Modular Content</a></li>
                  <li className={currentElementIndexInViewport === 7 ? "active" : ""}><a href="#section-8">Modular Title</a></li>
                  <li className={currentElementIndexInViewport === 8 ? "active" : ""}><a href="#section-9">Modular Description</a></li>
                  <li className={currentElementIndexInViewport === 9 ? "active" : ""}><a href="#section-10">Modular Estructurado</a></li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Navegación horizontal</h1>
                    </HeadingTemplate>
                    <MainDescription description="Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una similitud en su contenido." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">import</h2>
                    </HeadingTemplate>
                    <SimpleText description="Recuerda importarlo de manera correcta, ya sea el componente completo o cada modulo del componente por separado." />
                    <CodeCopy code={EGcodeImportGallery} />
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
                    <br />
                    <CodeCopy code={EGcodeNavHorizontal1} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Acceso Modularizado</h3>
                    </HeadingTemplate>
                    <SimpleText description="Se desarrolla de manera modular, permitiendo una mayor libertad al momento de usar el componente, permitiendo añadir mas HTML y clases personalizadas permitiendo que el componente pueda adaptarse a cada necesidad, manteniendo la estructura base del componente." />
                  </section>

                  <Divisor />

                  <section id="section-6" ref={section6Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">AccessLink</h3>
                    </HeadingTemplate>
                    <SimpleText description="Se añade con la finalidad de envolver los elementos que estaran incluidos en el componente Acceso, como titulos, descripcion, iconos entre otros, este componente recibe una props url y className. Basicamente es un tag <a> que viene con los estilos bases de obelisco." />
                    <CodeCopy code={EGcodeNavHorizontal4} />
                  </section>

                  <Divisor />

                  <section id="section-7" ref={section7Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">AccessContent</h3>
                    </HeadingTemplate>
                    <SimpleText description="Se añade con la finalidad de envolver los elementos Ttulos y descripcion, recibe un children que permite agregar mas contenido dependiendo de las necesidades e incluyen la props className para asignar clases customizadas." />
                    <CodeCopy code={EGcodeNavHorizontal5} />
                  </section>

                  <Divisor />

                  <section id="section-8" ref={section8Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">AccessTitle</h3>
                    </HeadingTemplate>
                    <SimpleText description="Se añade con la finalidad de asignar un titulo, este titulo viene con los estilos proporcionados por Obelisco." />
                    <CodeCopy code={EGcodeNavHorizontal2} />
                  </section>

                  <Divisor />

                  <section id="section-9" ref={section9Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">AccessDescription</h3>
                    </HeadingTemplate>
                    <SimpleText description="Se añade con la finalidad de asignar una descricioón, esta descripción viene con los estilos proporcionados por Obelisco." />
                    <CodeCopy code={EGcodeNavHorizontal3} />
                  </section>

                  <Divisor />

                  <section id="section-10" ref={section10Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Access modular estructurado</h3>
                    </HeadingTemplate>
                    <SimpleText description="Juntando los atomos del componente podemos llegar al componente final de Accesos de Obelisco." />
                    <CodeCopy code={EGcodeNavHorizontal6} />
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

export default NavHorizontalDocs;
