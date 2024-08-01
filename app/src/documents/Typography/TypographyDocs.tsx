'use client'
import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import BoxTemplate from '@/components/Template/Box';
// import { Body, Tag, Title, Quote, List, Transformation } from '@testing/Typography/Typography';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import SimpleText from '@/components/Template/SimpleText';
import CodeCopy from '@/components/CodeBox';
import { EGCodeBody, EGCodeList, EGCodeQuote, EGCodeQuoteAuthor, EGCodeTag, EGCodeTitle, EGCodeTransform, EGcodeTypographyImport } from './code-views';
import Divisor from '@/components/Template/Divisor';


const TypographyDocs: React.FC = () => {

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);
  const section7Ref = useRef<HTMLDivElement>(null);
  const section8Ref = useRef<HTMLDivElement>(null);
  const section9Ref = useRef<HTMLDivElement>(null);

  return (

    <>
      <BoxTemplate>
        <div className="col-12" >
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
          ]}>
            {({ currentElementIndexInViewport }) => (
              <div className='box-scrollspy'>
                <div className='nav-scrollspy d-none d-lg-block'>
                  <ul className='scrollspy' data-cy="nav-wrapper" >
                    <p className='font-weight-bold mb-1'> On this page</p>

                    <li className={currentElementIndexInViewport === 0 ? "active" : ""}><a href="#section-1">Introducción</a></li>
                    <li className={currentElementIndexInViewport === 1 ? "active" : ""}><a href="#section-2">Importación</a></li>
                    <li className={currentElementIndexInViewport === 2 ? "active" : ""}><a href="#section-3">Uso</a></li>
                    <li className={currentElementIndexInViewport === 3 ? "active" : ""}><a href="#section-4">Títulos</a></li>
                    <li className={currentElementIndexInViewport === 4 ? "active" : ""}><a href="#section-5">Titulares</a></li>
                    <li className={currentElementIndexInViewport === 5 ? "active" : ""}><a href="#section-6">Cuerpos</a></li>
                    <li className={currentElementIndexInViewport === 6 ? "active" : ""}><a href="#section-7">Citas</a></li>
                    <li className={currentElementIndexInViewport === 7 ? "active" : ""}><a href="#section-8">Listas</a></li>
                    <li className={currentElementIndexInViewport === 8 ? "active" : ""}><a href="#section-9">Transformaciones</a></li>

                  </ul>
                </div>

                <article className="box-content col-12 col-lg-8">
                  <div data-cy="section-wrapper">
                    {/* tipografia */}
                    <section id="section-1" ref={section1Ref}>
                      <HeadingTemplate>
                        <h1>Tipografia</h1>
                      </HeadingTemplate>
                      <MainDescription description="Tipografia del proyecto" />
                    </section>

                    {/* introduccion */}
                    <section id="section-2" ref={section2Ref}>
                      <HeadingTemplate>
                        <h2 className="mb-4">import</h2>
                      </HeadingTemplate>
                      <SimpleText description="Recuerda importarlo de manera correcta, ya sea el componente completo o cada modulo del componente por separado." />
                      <CodeCopy code={EGcodeTypographyImport} />
                    </section>

                    <Divisor />

                    {/* uso */}
                    <section id="section-3" ref={section3Ref}>
                      <HeadingTemplate>
                        <h2 className="mb-4">Usage</h2>
                      </HeadingTemplate>
                      <SimpleText description="loremloremlorem loremloremlorem loremlorem lorem lorem loremlorem." />
                    </section>

                    {/* titulos */}
                    <section id="section-4" ref={section4Ref}>
                      <HeadingTemplate>
                        <h3 className="mb-4">Títulos</h3>
                      </HeadingTemplate>
                      <SimpleText description={`En level va el nivel de Título que se desea usar, admite del h1 al h6. weight acepta los siguientes valores: bold, semibold, normal. `} />
                      <CodeCopy code={EGCodeTitle} />

                      <br />

                      {/* <Title level="h1" content='Título h1 bold' weight="bold" />
                      <Title level="h1" content="Título h1 semibold" weight="semibold" />
                      <Title level="h1" content="Título h1 normal" weight="normal" /> */}
                    </section>

                    <Divisor />

                    {/* titulares */}
                    <section id="section-5" ref={section5Ref}>
                      <HeadingTemplate>
                        <h3 className="mb-4">Titulares</h3>
                      </HeadingTemplate>
                      <SimpleText description={`El componente Titulares renderiza una etiqueta <p></p> con las características que se le asignen: 
                      En size pueden ir los siguientes valores: xs, sm, md, lg, xl. weight acepta los siguientes valores: bold, semibold, normal.`} />
                      <CodeCopy code={EGCodeTag} />

                      <br />
                      {/* 
                      <Tag size="lg" weight='normal' content='Esto es un texto de titulares' />
                      <Tag size="lg" weight='semibold' content='Esto es un texto de titulares' />
                      <Tag size="lg" weight='bold' content='Esto es un texto de titulares' />
                      <Tag size="lg" weight='normal' italic='italic' content='Esto es un texto de titulares' />
                      <Tag size="lg" weight='normal' underline='underline' content='Esto es un texto de titulares' /> */}

                    </section>

                    <Divisor />

                    {/* cuerpos */}
                    <section id="section-6" ref={section6Ref}>
                      <HeadingTemplate>
                        <h3 className="mb-4">Cuerpos</h3>
                      </HeadingTemplate>
                      <SimpleText description={`El componente Body renderiza una etiqueta <p></p> con las características que se le asignen.
                        En 'size' pueden ir los siguientes valores: 'xs', 'sm', 'md', 'lg', 'xl'. 'weight' acepta los siguientes valores: 'bold', 'semibold', 'normal'.`} />
                      <CodeCopy code={EGCodeBody} />

                      <br />

                      {/* <Body size="lg" weight='normal' content='Esto es un texto de cuerpos' />
                      <Body size="lg" weight='semibold' content='Esto es un texto de cuerpos' />
                      <Body size="lg" weight='bold' content='Esto es un texto de cuerpos' />
                      <Body size="lg" weight='normal' italic='italic' content='Esto es un texto de cuerpos' />
                      <Body size="lg" weight='normal' underline='underline' content='Esto es un texto de cuerpos' /> */}

                    </section>

                    <Divisor />

                    {/* citas */}
                    <section id="section-7" ref={section7Ref}>
                      <HeadingTemplate>
                        <h3 className="mb-4">Citas</h3>
                      </HeadingTemplate>
                      <SimpleText description={`El uso de Citas .... `} />
                      <CodeCopy code={EGCodeQuote} />
                      <CodeCopy code={EGCodeQuoteAuthor} />
                      <br />

                      {/* <Quote content='Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.' />
                      <Quote content='Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la página.' author='Nombre del autor de la cita' /> */}
                    </section>

                    <Divisor />

                    {/* listas */}
                    <section id="section-8" ref={section8Ref}>
                      <HeadingTemplate>
                        <h3 className="mb-4">Listas</h3>
                      </HeadingTemplate>
                      <SimpleText description={`El uso de Listas .... `} />
                      <CodeCopy code={EGCodeList} />

                      <br />

                      {/* <List list="ol" content={["Esto es el texto de una lista ordenada", "Esto es el texto de una lista ordenada", "Esto es el texto de una lista ordenada",]} />

                      <List list="ul" content={["Esto es el texto de una lista sin ordenar", "Esto es el texto de una lista sin ordenar", "Esto es el texto de una lista sin ordenar",]} /> */}

                    </section>

                    <Divisor />

                    {/* Chequear cómo lograr de mostrar Transformaciones igual que en storybook. No se podría usar más de una a la vez */}
                    {/* transformaciones */}
                    <section id="section-9" ref={section9Ref}>
                      <HeadingTemplate>
                        <h3 className="mb-4">Transformaciones</h3>
                      </HeadingTemplate>
                      <SimpleText description={`El uso de Transformaciones .... `} />
                      <CodeCopy code={EGCodeTransform} />

                      <br />

                      {/* Nuestro sistema de <Transformation transform='strong' content='estándares' /> brinda un <Transformation transform='em' content='conjunto de herramientas' /> y componentes colaborativos
                      y <Transformation transform='em' content='accesibles' /> que define procesos para que los equipos internos y externos puedan trabajar alineadamente. De esta forma, ayudamos a crear <Transformation transform='mark' content='servicios' /> consistent<Transformation transform='sup' content='es' /> para mejorar
                      la experiencia digit<Transformation transform='sub' content='al' /> de vecinos y vecina<Transformation transform='kbd' content='s' />. */}

                    </section>
                  </div>
                </article>

              </div>
            )}

          </Scrollspy>
        </div>
      </BoxTemplate>
    </>

  )
};

export default TypographyDocs;