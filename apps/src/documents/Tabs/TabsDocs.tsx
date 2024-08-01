'use client'

import React, { useRef } from 'react';
import { Scrollspy } from "@makotot/ghostui";
import CodeCopy from "@/components/CodeBox";
import BoxTemplate from '@/components/Template/Box';
import HeadingTemplate from '@/components/Template/HeadingTemplate';
import MainDescription from '@/components/Template/MainDescription';
import Divisor from '@/components/Template/Divisor';
import SimpleText from '@/components/Template/SimpleText';
// import Alert from "@testing/Alert";
import { EGcodeAccessComplete, EGcodeAlertImport, EGcodeDimissible } from './code-views';
// import Tabs, { TabType } from "@testing/Tabs/Tabs"

const TabsDocs: React.FC = () => {

  // const tabsData: TabType[] = [
  //   {
  //     id: 'tab-1',
  //     label: 'Pestaña 1',
  //     iconRight: <i className='bx bx-shield-minus'></i>,
  //     iconLeft: <i className='bx bx-shield-minus'></i>,
  //     content: <div>Contenido Pestaña 1</div>,
  //   },
  //   {
  //     id: 'tab-2',
  //     label: 'Pestaña 2',
  //     iconRight: <i className='bx bx-shield-minus'></i>,
  //     content: <div>Contenido Pestaña 2</div>,
  //   },
  //   {
  //     id: 'tab-3',
  //     label: 'Pestaña 3',
  //     iconLeft: <span className="material-icons-round">face</span>,
  //     content: <div>Contenido Pestaña 3</div>,
  //   },
  //   {
  //     id: 'tab-4',
  //     label: 'Pestaña 4',
  //     content: <div>Contenido Pestaña 4</div>,

  //   },
  //   {
  //     id: 'tab-5',
  //     label: 'Pestaña 5',
  //     content: <div>Contenido Pestaña 5</div>,

  //   },
  //   {
  //     id: 'tab-6',
  //     label: 'Pestaña 6',
  //     content: <div>Contenido Pestaña 6</div>,
  //   },
  //   {
  //     id: 'tab-7',
  //     label: 'Pestaña 7',
  //     content: <div>Contenido Pestaña 7</div>,
  //     // disabled: true,
  //   },
  //   {
  //     id: 'tab-8',
  //     label: 'Pestaña 8',
  //     content: <div>Contenido Pestaña 8</div>,
  //   },
  // ];

  // const tabsDataSecondary: TabType[] = [
  //   {
  //     id: 'tab-1',
  //     label: 'Pestaña 1',
  //     content: <div>Contenido Pestaña 1</div>,
  //   },
  //   {
  //     id: 'tab-2',
  //     label: 'Pestaña 2',
  //     iconRight: <i className='bx bx-shield-minus'></i>,
  //     content: <div>Contenido Pestaña 2</div>,
  //   },
  //   {
  //     id: 'tab-3',
  //     label: 'Pestaña 3',
  //     iconLeft: <span className="material-icons-round">face</span>,
  //     content: <div>Contenido Pestaña 3</div>,
  //   },
  //   {
  //     id: 'tab-4',
  //     label: 'Pestaña 4',
  //     content: <div>Contenido Pestaña 4</div>,
  //   },
  //   {
  //     id: 'tab-5',
  //     label: 'Pestaña 5',
  //     content: <div>Contenido Pestaña 5</div>,
  //   },
  //   {
  //     id: 'tab-6',
  //     label: 'Pestaña 6',
  //     content: <div>Contenido Pestaña 6</div>,
  //   },
  //   {
  //     id: 'tab-7',
  //     label: 'Pestaña 7',
  //     content: <div>Contenido Pestaña 7</div>,
  //   },
  //   {
  //     id: 'tab-8',
  //     label: 'Pestaña 8',
  //     content: <div>Contenido Pestaña 8</div>,
  //   },
  // ];

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
          section5Ref,
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
                  <li className={currentElementIndexInViewport === 4 ? "active" : ""}><a href="#section-5">Con cierre</a></li>
                </ul>
              </div>

              <article className="box-content col-12 col-lg-8">
                <div data-cy="section-wrapper">
                  <section id="section-1" ref={section1Ref}>
                    <HeadingTemplate>
                      <h1>Alertas</h1>
                    </HeadingTemplate>
                    <MainDescription description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
                  </section>

                  <Divisor />

                  <section id="section-2" ref={section2Ref}>
                    <HeadingTemplate>
                      <h2 className="mb-4">import</h2>
                    </HeadingTemplate>
                    <SimpleText description="Recuerda importarlo de manera correcta, ya sea el componente completo o cada modulo del componente por separado." />
                    <CodeCopy code={EGcodeAlertImport} />
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
                    <SimpleText description="Este componente proporciona el componente Alerta simple con todas sus props para ser usado de manera correcta." />

                    <div className='col-12'>

                      {/* <Tabs tabs={tabsData} />

                      <Divisor /> */}

                    </div>

                    {/* <div className='max-720'>
                      <Tabs tabs={tabsDataSecondary} tabsSecondary sizeSm isSlider />
                    </div> */}



                    {/* <Alert alertWarning>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
                        obca
                      </p>
                    </Alert>

                    <Alert alertSuccess>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
                        obca
                      </p>
                    </Alert>

                    <Alert alertDanger>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
                        obca
                      </p>
                    </Alert> */}

                    <br />

                    <CodeCopy code={EGcodeAccessComplete} />
                  </section>

                  <Divisor />

                  <section id="section-5" ref={section5Ref}>
                    <HeadingTemplate>
                      <h3 className="mb-4">Alerta con cierre</h3>
                    </HeadingTemplate>
                    <SimpleText description="Esta alerta incluye un boton de cierre que permite ocultar la alerta mediante de el click en el boton de cierre." />

                    {/* <Alert alertInfo isDimissible>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic ad
                        obca
                      </p>
                    </Alert> */}

                    <CodeCopy code={EGcodeDimissible} />
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
