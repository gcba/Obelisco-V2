'use client';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { AREA_2 } from './code-views';

export default function AreaDos() {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  return (
    <>
      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem
              // key={section.id}
              id={`panel-content-docs`}
              title={'Docs'}
              icon="description"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem
              // key={section.id}
              id={`panel-content-html`}
              title={'HTML'}
              icon="description"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem
              // key={section.id}
              id={`#`}
              title={'Demo'}
              icon="description"
              urlDemo="https://gcba.github.io/obelisco-demo/pagina_area/area_de_gobierno/op2.html"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-docs`} activeTab={activeTab}>
            <>
              <DocumentationTemplate
                sections={[
                  {
                    title: 'Uso',
                    content: (
                      <>
                        <section className="box-section" id="section-use">
                          <div style={{ marginTop: '8px' }}>
                            <div className="list-informative">
                              <p className="text-xl">Cuándo usar</p>
                              <p>
                                Con este template buscamos mejorar la experiencia de las personas a la hora de navegar
                                nuestro sitio web. Buscamos crear jerarquías claras de contenido donde se aplique el
                                sistema de diseño Obelisco. 
                              </p>
                              <p>
                                Esta guía tiene como fin orientar a quienes trabajan como webmasters para que sepan qué
                                tipo de componente se utiliza en las distintas casuísticas. 
                              </p>
                              <p>
                                Si bien se contempla la máxima de contenido en esta propuesta, pueden ir quitando
                                aquellos bloques que consideren que no se adaptan al contenido de la página. 
                              </p>
                              <strong>¿A qué llamamos nivel 2?</strong>
                              <p>
                                Se llama segundo nivel de navegación a toda página que se desprenda de los atajos de las
                                home de Ministerios.  Son páginas que por su contenido funcionan como nexo a más
                                información de un área específica y buscan mostrar los destacados, programas y
                                servicios. 
                              </p>
                            </div>
                          </div>
                        </section>
                      </>
                    ),
                  },
                  {
                    title: 'Encabezado de página',
                    content: (
                      <>
                        <section className="box-section" id="section-header">
                          <div>
                            <p className="text-xl">Se compone con los siguientes elementos:</p>
                            <div className="list-informative">
                              <ul className="list-informative-bullet">
                                <li>
                                  Migas de pan que nos indican el camino recorrido hasta llegar a dónde estamos
                                  navegando. 
                                </li>
                                <li>Título</li>
                                <li>Bajada</li>
                                <li>
                                  Desplegables de “Institucional” y/o “Transparencia activa”. Evitamos sumar más
                                  desplegables. La idea de este bloque es que sea la presentación de lo que las personas
                                  encontrarán al seguir scrolleando. 
                                </li>
                              </ul>
                            </div>
                            <img
                              src="/assets/pagina_area//segundo_nivel/hero.svg"
                              alt="Ejemplo encabezado de área"
                              width="800"
                              height="295"
                              className="img-fluid"
                            />
                          </div>
                        </section>
                      </>
                    ),
                  },
                  {
                    title: 'Accesos rápidos / destacados',
                    content: (
                      <section className="box-section" id="section-fast-access">
                        <div>
                          <h3 className="text-xl mb-2">Contexto de uso</h3>
                          <p>
                            El propósito de la sección es acercar al usuario las principales acciones que el área
                            considere relevantes para interactuar. Es importante mencionar que cuantas más opciones
                            haya, más va a demorar el usuario en decidirse por la acción, por lo tanto es primordial que
                            el área tenga una elección clara en el contenido de las tarjetas destacadas.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl mb-2">Encabezado</h3>
                          <p>
                            Llevan un título que puede ser &quot;Accesos rápidos&quot; o &quot;Destacados&quot;, siempre
                            haciendo referencia que esos son los destacados de la página. 
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl mb-2">Variante de componente</h3>
                          <p>
                            Se utiliza la tarjeta horizontal con ícono con la alineación interna al borde superior
                            izquerdo. Sugerimos que tanto el título como la bajada no lleve más de dos líneas. 
                          </p>
                        </div>

                        <img
                          src="/assets/pagina_area//segundo_nivel/access.svg"
                          alt="Ejemplo accesos rapidos en página de área"
                          width="800"
                          height="295"
                          className="img-fluid"
                        />

                        <div>
                          <h3 className="text-xl mb-2">❌ Malas practicas</h3>
                          <p>
                            1. Generar puntos de tensión en la lectura y desequilibrio visual en el inicio de la página.
                            En las situaciones en las que haya tres tarjetas en la primera línea y una por debajo,
                            recomendamos reubicar la última tarjeta en la sección que corresponda y velar por el
                            equilibrio en la página.
                          </p>
                          <p>
                            2. Presentar sólo dos opciones como destacadas. En estas situaciones, recomendamos preservar
                            la simetría y el equilibrio al inicio de la página ya que un diseño agradable crea
                            respuestas positivas en el cerebro de las personas. Por lo tanto, considerar incluir una
                            tercera tarjeta con contenido relevante para los usuarios.
                          </p>
                          <p>
                            3. Creer que todo es importante para destacar. No recomendamos tener más de 6 tarjetas
                            destacadas, ya que el tiempo que lleva tomar una decisión aumenta con el número y la
                            complejidad de las opciones.
                          </p>

                          <p>
                            En las situaciones que haya 6 tarjetas destacadas recomendamos colocar los elementos menos
                            importantes en medio de la lista y las acciones claves en los extremos izquierdo y derecho
                            para aumentar la memorización.
                          </p>
                        </div>
                      </section>
                    ),
                  },
                  {
                    title: 'Programas',
                    content: (
                      <section className="box-section" id="section-programs">
                        <p>
                          Los programas son contenido de valor que crean desde las distintas áreas de gobierno para
                          acercarse a los vecinos, para promover su trabajo o las políticas que llevan adelante durante
                          su gestión. Por eso es que para este tipo de contenidos se utilizan las tarjetas horizontales
                          con imagen. 
                        </p>
                        <p>Esta información se presenta en grilla de tres con un ancho de 4 columnas.</p>
                        <p>
                          Esta agrupación de tarjetas de programas siempre llevan un título que haga referencia a dicho
                          grupo.
                        </p>
                        <img
                          src="/assets/pagina_area/segundo_nivel/programs.svg"
                          alt="Ejemplo encabezado de área"
                          width="800"
                          height="295"
                          className="img-fluid"
                        />
                        <div>
                          <h3 className="text-xl mb-2">⚠️ Excepción de uso.</h3>
                          <p>
                            En caso que solo haya dos programas para presentar, puede admitirse una grilla de dos con un
                            ancho de 6 columnas para cada tarjeta. En caso que se itere el contenido y se incorporen más
                            de dos programas, deberá volver a utilizarse la grilla de 3 con ancho de 4 columnas.
                          </p>
                        </div>
                      </section>
                    ),
                  },
                  {
                    title: 'Servicios',
                    content: (
                      <>
                        <section className="box-section" id="section-services">
                          <p>
                            Son aquellas acciones proporcionadas por el gobierno para satisfacer necesidades públicas y
                            mejorar la calidad de vida de los/as ciudadanos/as y residentes de la Ciudad de Buenos
                            Aires.
                          </p>
                          <p>
                            La agrupación de estas tarjetas lleva un título &quot;Servicios&quot; o &quot;Nuestros
                            servicios&quot; y se utiliza el acceso solo con título. Se utilizan en grilla de tres
                            columnas por fila.
                          </p>
                          <img
                            src="/assets/pagina_area/segundo_nivel/services.svg"
                            alt="Ejemplo encabezado de área"
                            width="800"
                            height="295"
                            className="img-fluid"
                          />
                        </section>
                      </>
                    ),
                  },
                  {
                    title: 'Destacados',
                    content: (
                      <>
                        <section className="box-section" id="section-outstanding">
                          <h2 className="h4 mb-3" style={{ marginTop: '8px' }}>
                            Destacados
                          </h2>
                          <div>
                            <h3 className="text-xl mb-2">Contexto de uso</h3>
                            <p>En caso que haya contenido a destacar tenemos dos variantes disponibles del template.</p>
                          </div>
                          <div>
                            <h3 className="text-xl mb-2">Un solo destacado</h3>
                            <p>
                              Se utiliza el destacado con fondo. Compuesto de título, bajada y accionable con el fondo
                              grisulado. Para los accionables hay tres variantes: enlace, acceso y botón primario. Se
                              elegirá el accionable acorde al tipo de contenido.
                            </p>
                            <img
                              src="/assets/pagina_area/segundo_nivel/destacado.svg"
                              alt="Ejemplo encabezado de área"
                              width="800"
                              height="295"
                              className="img-fluid"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl mb-2">Dos destacados</h3>
                            <p>
                              Se utiliza el panel vertical. Se posicionan ambos destacados uno al lado del otro, debajo
                              de los servicios.
                            </p>
                            <img
                              src="/assets/pagina_area/segundo_nivel/destacado.svg"
                              alt="Ejemplo encabezado de área"
                              width="800"
                              height="295"
                              className="img-fluid"
                            />
                          </div>
                        </section>
                      </>
                    ),
                  },
                  {
                    title: 'Noticias',
                    content: (
                      <>
                        <section className="box-section" id="section-news">
                          <p>
                            Se utilizan tarjetas de noticia con etiquetas y fecha. Se muestran tres por página, con el
                            enlace de ver todas las noticias.
                          </p>
                          <img
                            src="/assets/pagina_area/segundo_nivel/noticias.svg"
                            alt="Ejemplo encabezado de área"
                            width="800"
                            height="295"
                            className="img-fluid"
                          />
                        </section>
                      </>
                    ),
                  },
                  {
                    title: 'Institucional',
                    content: (
                      <>
                        <section className="box-section" id="section-institutional">
                          <p>Este bloque se compone de la siguiente información.</p>

                          <div>
                            <h3 className="text-xl mb-2">Título: Información Institucional. </h3>
                            <ul>
                              <li>Nombre del funcionario/a a cargo.</li>
                              <li>Cargo</li>
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xl mb-2">Contacto</h3>
                            <ul>
                              <li>Teléfono de contacto</li>
                              <li>Correo electrónico</li>
                            </ul>
                            <p>
                              La información institucional se aplica siempre y cuando el área tenga un funcionario a
                              cargo. En caso de que no haya alguna persona con este rol, este bloque de información no
                              debe incluirse y van únicamente las redes sociales. 
                            </p>
                          </div>

                          <div>
                            <h3 className="text-xl mb-2">Título: Redes sociales</h3>
                            <p>Facebook   /   Instagram   /   X   /   YouTube</p>
                            <p>Se utiliza el acceso con iconografía correspondiente a la red social y título. </p>
                          </div>

                          <img
                            src="/assets/pagina_area/segundo_nivel/social_media.svg"
                            alt="Ejemplo encabezado de área"
                            width="800"
                            height="295"
                            className="img-fluid"
                          />
                        </section>
                      </>
                    ),
                  },
                ]}
              />
            </>
          </TabPanel>

          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <>
              <CodeViewTemplate template={AREA_2} />
            </>
          </TabPanel>

          <TabPanel id={'panel-content-react'} activeTab={activeTab}>
            <></>
          </TabPanel>
        </div>
      </div>
    </>
  );
}
