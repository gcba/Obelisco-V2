'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { AREA_1 } from './code-views';

const basePath = '/Obelisco-V2';

export default function AreaUno() {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: '¿A qué llamamos nivel 1?',
      content: (
        <>
          <div style={{ marginTop: '8px' }}>
            <p>
              Se llama primer nivel a toda página home de Ministerio, dónde se presenta los distintos accionables,
              programas/servicios e información relevante para la ciudadanía. Es la página de acceso para los diferentes
              contenidos que se desprenden de cada Ministerio.
            </p>
          </div>
        </>
      ),
    },
    {
      title: 'Encabezado de página',
      content: (
        <>
          <div>
            <p className="text-xl">Se compone con los siguientes elementos:</p>
            <div className="list-informative mb-3">
              <ul className="list-informative-bullet">
                <li>Migas de pan que nos indican el camino recorrido hasta llegar a dónde estamos navegando </li>
                <li>Título</li>
                <li>Bajada</li>
                <li>
                  Desplegables de “Institucional” y/o “Transparencia activa”. Evitamos sumar más desplegables. La idea
                  de este bloque es que sea la presentación de lo que las personas encontrarán al seguir scrolleando. 
                </li>
              </ul>
            </div>
            <Image
              src={`${basePath}/images/templates/pagina_area/hero.svg`}
              alt="Ejemplo encabezado de área"
              width="800"
              height="295"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Accesos rápidos / destacados',
      content: (
        <>
          <div>
            <h3 className="text-xl mb-2">Contexto de uso</h3>
            <p>
              El propósito de la sección es acercar al usuario las principales acciones que el área considere relevantes
              para interactuar. Es importante mencionar que cuantas más opciones haya, más va a demorar el usuario en
              decidirse por la acción, por lo tanto es primordial que el área tenga una elección clara en el contenido
              de las tarjetas destacadas. Sugerimos un máximo de tres tarjetas..
            </p>
          </div>
          <div>
            <h3 className="text-xl mb-2">Variante de componente</h3>
            <p>
              Se utiliza la tarjeta vertical con ícono sin borde. Sugerimos que tanto el título como la bajada no lleve
              más de dos líneas. 
            </p>
          </div>

          <Image
            src={`${basePath}/images/templates/pagina_area/access.svg`}
            alt="Ejemplo accesos rapidos en página de área"
            width="800"
            height="295"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>Malas practicas</>,
      content: (
        <>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>
            <p>
              Generar puntos de tensión en la lectura y desequilibrio visual en el inicio de la página. En las
              situaciones en las que haya cuatro tarjetas en la primera línea y una por debajo, recomendamos reubicar la
              última tarjeta en la sección que corresponda y velar por el equilibrio en la página.
            </p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>
            <p>
              Presentar sólo dos tarjetas destacadas. En estas situaciones, recomendamos preservar la simetría y el
              equilibrio al inicio de la página ya que un diseño agradable crea respuestas positivas en el cerebro de
              las personas. Por lo tanto, considerar incluir una tercera tarjeta con contenido relevante para los
              usuarios.
            </p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>
            <p>
              Creer que todo es importante para destacar. No recomendamos tener más de 6 tarjetas destacadas, ya que el
              tiempo que lleva tomar una decisión aumenta con el número y la complejidad de las opciones.
            </p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>
            <p>
              En las situaciones que haya 6 tarjetas destacadas, recomendamos colocar los elementos menos importantes en
              medio de la lista y las acciones claves en los extremos izquierdo y derecho para aumentar la memorización.
            </p>
          </div>
        </>
      ),
    },
    {
      title: 'Destacado (opcional)',
      content: (
        <>
          <h3 className="text-xl mb-2">Contexto de uso</h3>
          <p>
            El destacado con multimedia puede utilizarse para brindar jerarquía a algún programa, política pública o
            evento relevante. El contenido del mismo puede modificarse acorde el calendario de comunicación del
            Ministerio o simplemente quitarse cuando finalice el contenido a destacar.
          </p>
          <p>
            El botón accionable siempre debe llevar a alguna página donde se amplíe la información brindada en la
            descripción.
          </p>
          <Image
            src={`${basePath}/images/templates/pagina_area/destacado.svg`}
            alt="Ejemplo encabezado de área"
            width="800"
            height="295"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>Malas practicas</>,
      content: (
        <>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>
            <p>
              Sumar varios destacados dentro de una misma home. Es importante recordar que el propósito de este
              componente es darle jerarquía a un programa o evento.
            </p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>
            <p>Utilizar dos destacados con multimedia uno debajo del otro.</p>
          </div>
          <div className="d-flex">
            <span className="material-symbols-rounded text-danger">close</span>
            <p>Sumar más de dos botones de acción al destacado con multimedia. El mínimo es uno y el máximo es dos </p>
          </div>
        </>
      ),
    },
    {
      title: 'Áreas del Ministerio',
      content: (
        <>
          <section className="box-section" id="section-ministry-areas">
            <div>
              <h3 className="text-xl mb-2">Contexto de uso</h3>
              <p>
                La sección &quot;Áreas del Ministerio&quot; tiene como objetivo principal proporcionar a los visitantes
                de la página web una visión rápida y estructurada de las distintas áreas o departamentos dentro del
                ministerio.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-2">Encabezado</h3>
              <p>Sugerimos de título &quot;Áreas de Ministerio&quot;</p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Variantes de las Tarjetas:</h3>
              <p>
                Cada tarjeta vertical en la sección &quot;Áreas del Ministerio&quot; consta de los siguientes elementos:
              </p>
              <ul>
                <li>
                  Icono representativo: Se incluye una imagen que represente visualmente la esencia o el propósito de
                  cada área.
                </li>
                <li>Nombre del área</li>
                <li>
                  Descripción breve: Se proporciona una breve descripción que destaque los objetivos y propósitos
                  específicos de cada área. No debe ocupar más de tres lineas.{' '}
                </li>
              </ul>
              <Image
                src={`${basePath}/images/templates/pagina_area/hero_areas.svg`}
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
      title: 'Programas y servicios',
      content: (
        <>
          <div>
            <h3 className="text-xl mb-2">Contexto de uso</h3>
            <p>
              Los programas y servicios son las iniciativas o prestaciones que se impulsan u ofrecen desde cada
              Ministerio. Por su relevancia para la gestión o por el caudal de visitas, se ubican en la home para un
              rápido acceso o alcance en la comunicación.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Encabezado</h3>
            <p>
              La agrupación de tarjetas de programas siempre llevan un título que haga referencia a dicho grupo.
              Sugerimos títulos como &quot;Conocé nuestros programas&quot; &quot;, &quot;Programas y servicios del
              Ministerio&quot; &quot;.
            </p>
          </div>

          <div>
            <h3 className="text-xl mb-2">Variante del componente</h3>
            <p>Esta información se presenta en grilla de tres con un ancho de 4 columnas.</p>
            <p>
              Cada tarjeta debe contener el nombre del programa/servicio junto con una imagen ilustrativa de la temática
              del mismo.
            </p>
          </div>
          <Image
            src={`${basePath}/images/templates/pagina_area/programasyservicios.svg`}
            alt="Ejemplo encabezado de área"
            width="800"
            height="295"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      subtitle: <>Excepción de uso</>,
      content: (
        <div>
          <p>
            En caso que <strong>solo haya dos programas para presentar</strong>, puede admitirse una grilla de dos con
            un ancho de 6 columnas para cada tarjeta. En caso que se itere el contenido y se incorporen más de dos
            programas, deberá volver a utilizarse la grilla de 3 con ancho de 4 columnas.
          </p>
        </div>
      ),
    },
    {
      title: 'Noticias',
      content: (
        <>
          <section className="box-section" id="section-news">
            <p>
              Se utilizan tarjetas de noticia con etiquetas y fecha. Se muestran tres por página, con el enlace de ver
              todas las noticias.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_area/noticias.svg`}
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
      title: 'Información institucional',
      content: (
        <>
          <section className="box-section" id="section-institutional">
            <p>Este bloque se compone de la siguiente información.</p>

            <div>
              <h3 className="text-xl mb-2">Título: Información Institucional. </h3>
              <ul>
                <li>Foto del Ministro/a</li>
                <li>Nombre del Ministro/a a cargo.</li>
                <li>Cargo </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-2">Contacto</h3>
              <ul>
                <li>Teléfono de contacto</li>
                <li>Correo electrónico</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-2">Título: Redes sociales</h3>
              <p>Facebook   /   Instagram   /   X   /   YouTube</p>
              <p>Se utiliza el acceso con iconografía correspondiente a la red social y título. </p>
            </div>

            <p>
              Las redes sociales a publicar pueden ser las del Ministerio, en caso que tengan, o del ministro/a en
              cuestión.
            </p>

            <Image
              src={`${basePath}/images/templates/pagina_area/institucional.svg`}
              alt="Ejemplo encabezado de área"
              width="800"
              height="295"
              className="img-fluid"
            />
          </section>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Página de área - Nivel 1"
        description={[
          `
          Con este template buscamos mejorar la experiencia de las personas a la hora de navegar nuestro sitio
          web. Buscamos crear jerarquías claras de contenido donde se aplique el sistema de diseño
          Obelisco. Esta guía tiene como fin orientar a quienes trabajan como webmasters para que sepan qué tipo
          de componente se utiliza en las distintas casuísticas. 
          `,
        ]}
      />
      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem
              id={`panel-content-docs`}
              title={'Documentación'}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem id={`panel-content-html`} title={'HTML'} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabItem
              id={`#`}
              title={'Demo'}
              icon="open_in_new"
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
              <DocumentationTemplate sections={DOC_SECTIONS} type="ux" />
            </>
          </TabPanel>

          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <>
              <CodeViewTemplate template={AREA_1} />
            </>
          </TabPanel>
        </div>
      </div>
    </>
  );
}
