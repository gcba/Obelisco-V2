'use client';
import Image from 'next/image';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
// import Tabs from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
// import ComponentHeader from '@/components/Template/ComponentHeader';
import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { TEMPLATE_TRAMITES } from './code-views';
// import CodeBox from '@/components/CodeBox';

const basePath = '/Obelisco-V2';

const SECTIONS_UX = [
  {
    title: 'Encabezado',
    firstTitle: true,
    content: (
      <>
        <p className="text-md mb-4">Va al comienzo de la página, justo debajo del header, y está formado por: </p>
        <ul className="list-informative-bullet mb-4">
          <li>Migas de pan, que nos indican el recorrido de la persona usuaria hasta la página actual.</li>
          <li>El título del trámite.</li>
          <li>Una breve descripción del trámite.</li>
          <li>La modalidad del trámite identificada con la etiqueta respectiva.</li>
        </ul>

        <Image
          width={500}
          height={300}
          src={`${basePath}/images/templates/tramites/ejemplo_incluir_en_pagina.svg`}
          alt="Ejemplo de lo que puede incluir una página de tramite"
          className="img-fluid mb-2"
        />

        <p className="text-xl">Buenas prácticas</p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>
          <p>El máximo de caracteres para el título es de 120 caracteres (incluyendo espacios).</p>
        </div>
        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>
          <p>La estructura para armar el título de los trámites es: ACCIÓN + NOMBRE DEL TRÁMITE.</p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>
          <p>El máximo de caracteres para la descripción del trámite es de 250 caracteres (incluyendo espacios).</p>
        </div>
      </>
    ),
  },
  {
    title: <>Estado del trámite</>,
    content: (
      <>
        <p className="text-md mb-4">
          Por medio del bloque de iniciar trámite la persona usuaria podrá iniciar su trámite o, si así lo requiera,
          continuarlo desde el paso en el npque lo dejó por última vez.
        </p>

        <p className="text-md">
          Podés consultar la ficha de{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/block"> bloque de trámite</a> para conocer los
          lineamientos de uso del componente.
        </p>

        <Image
          width={500}
          height={300}
          src={`${basePath}/images/templates/tramites/estado_del_tramite.svg`}
          className="img-fluid"
          alt="Imagen del bloque de trámite"
        />
      </>
    ),
  },
  {
    title: 'Títulos de sección',
    content: (
      <>
        {' '}
        <p className="text-md">
          Estos títulos son independientes a los componentes dentro del template y sirven para dividir e identificar
          cada una de las secciones y su contenido. Utilizan la etiqueta H2.{' '}
        </p>
        <Image
          width={500}
          height={200}
          src={`${basePath}/images/templates/tramites/titulo_requisito_del_tramite.svg`}
          className=""
          alt="Imagen de títulos de sección"
        />
      </>
    ),
  },
  {
    subtitle: 'Requisitos del trámite',
    content: (
      <>
        <p className="text-md">
          En esta sección se encuentran cada uno de los requisitos necesarios para realizar el trámite. Para mostrarlos
          se utiliza una lista de requisitos con check siguiendo los lineamientos de Obelisco, nuestro sistema de
          estándares y diseño.{' '}
        </p>
        <a
          href="https://gcba.github.io/estandares/componentes/listas/lista-informativa/"
          className="external  d-block"
          target="_blank"
        >
          Ficha de Lista informativa
        </a>

        <Image
          width={500}
          height={300}
          src={`${basePath}/images/templates/tramites/subtitulo_con_lista_de_requisitos.png`}
          className="img-fluid mb-3 mt-3"
          alt="Imagen de lista informativa"
          style={{ border: '2px solid #e6ebf0', borderRadius: '5px' }}
        />

        <p className="text-xl">Buenas prácticas </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Las listas de requisitos llevan únicamente un subtítulo y contenido, cualquier elemento adicional debe ir
            fuera del componente.
          </p>
        </div>
        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>El subtítulo de la lista de requisitos es opcional y puede omitirse en caso de no ser necesario.</p>
        </div>
        <p className="text-xl">Malas prácticas </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>No debe modificarse el componente de lista para incluir elementos externos.</p>
        </div>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No utilizar variables bold dentro de los ítems de la lista para no agregar carga cognitiva a la persona
            usuaria.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Pasos del trámite',
    content: (
      <>
        <p className="text-md">
          En este bloque la persona usuaria podrá ver cada uno de los pasos organizados en secuencia que deberá realizar
          para completar el trámite. Para mostrarlos se utiliza una lista de pasos siguiendo los lineamientos de
          Obelisco, nuestro sistema de estándares y diseño.{' '}
        </p>

        <a
          href="https://gcba.github.io/estandares/componentes/listas/listas-de-pasos/"
          className="external mb-4  d-block"
          target="_blank"
        >
          Lista de pasos
        </a>
        <Image
          width={500}
          height={300}
          src={`${basePath}/images/templates/tramites/lista_de_pasos.png  `}
          className="img-fluid mb-4"
          alt="Imagen de lista de pasos"
          style={{ border: '2px solid #e6ebf0', borderRadius: '5px' }}
        />

        <p className="text-xl">Buenas prácticas</p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Utilizar títulos claros y concisos. Usar verbos o frases de acción para indicar a la persona usuaria lo que
            sucederá en cada paso.
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Usar la menor cantidad de pasos posibles para no abrumar a la persona usuaria. Si luego en el flujo verá más
            información, limitar la lista de pasos a una síntesis del proceso a realizar.
          </p>
        </div>

        <p className="text-xl">Malas prácticas </p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>No utilizar este componente si el proceso tiene sólo un paso.</p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No utilizar el componente sólo con el título. Siempre debe contener, aunque mínima, una bajada explicativa.
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No incluir componentes como listas informativas, bulleteados y botones dentro de la lista de pasos. La
            bajada debe consistir sólo en un párrafo de texto, y si es necesario puede poseer enlaces dentro del mismo.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Costos del trámite',
    content: (
      <>
        <p className="text-md mb-4">
          Esta sección va luego de la lista de pasos, y muestra todos los costos relacionados al trámite. Es una bajada
          simple de título, subtítulos y descripción organizada por bloques. La descripción del concepto sirve para
          identificar la razón del costo y puede contener un enlace si lo necesita.{' '}
        </p>

        <Image
          width={500}
          height={300}
          src={`${basePath}/images/templates/tramites/costos_del_tramite.svg`}
          className="img-fluid border-imgs mb-4"
          alt="Imagen de costos del tramite"
        />

        <p className="text-xl">Buenas prácticas</p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Utilizar títulos claros y concisos. Usar verbos o frases de acción para indicar a la persona usuaria lo que
            sucederá en cada paso.
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Usar la menor cantidad de pasos posibles para no abrumar a la persona usuaria. Si luego en el flujo verá más
            información, limitar la lista de pasos a una síntesis del proceso a realizar.
          </p>
        </div>

        <p className="text-xl">Malas prácticas </p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>No utilizar este componente si el proceso tiene sólo un paso.</p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No utilizar el componente sólo con el título. Siempre debe contener, aunque mínima, una bajada explicativa.
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No incluir componentes como listas informativas, bulleteados y botones dentro de la lista de pasos. La
            bajada debe consistir sólo en un párrafo de texto, y si es necesario puede poseer enlaces dentro del mismo.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Información adicional',

    content: <></>,
  },
  {
    subtitle: 'Colapsables',
    content: (
      <>
        <p className="text-md">
          Los colapsables se utilizan en caso que los trámites tengan información adicional de casos particulares. Es
          una buena forma de mostrar y ocultar secciones sin agregar información por fuera del template.
        </p>

        <p className="text-md">
          Para mostrarlos se utilizan colapsables de selección única siguiendo los lineamientos de Obelisco, nuestro
          sistema de estándares y diseño.
        </p>

        <a href="https://gcba.github.io/estandares/componentes/colapsable/" className="external mb-4" target="_blank">
          Colapsables
        </a>

        <p className="text-xl">Buenas prácticas</p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Mantener títulos breves y claros. El encabezado es lo primero que capta la atención de la mayoría de las
            personas usuarias. Es fundamental que el contenido del colapsable se exprese de manera clara para que las
            personas usuarias puedan decidir si desean expandirlo o no.
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>Cada colapsable puede tener un máximo de 800 caracteres (contando espacios) para su descripción.</p>
        </div>

        <p className="text-xl">Malas prácticas </p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No utilizar un colapsable para el contenido que es necesario que esté visible. No ocultarlo dentro de un
            colapsable.
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No utilizar más de 5 colapsables para sumar información. En todo caso, lo recomendable es buscar otros
            componentes que se adapten mejor al contenido o hacer bajadas sencillas de título y texto.
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>No utilizar más de 1 sección de colapsables. </p>
        </div>
      </>
    ),
  },
  {
    subtitle: 'Lista informativa',
    content: (
      <>
        <p className="text-md">
          Este bloque de contenido se utiliza para agregar información a destacar relacionada al trámite que no es parte
          de los requisitos o de los pasos a cumplir.
        </p>

        <p className="text-md">
          En este caso, se utiliza una lista informativa con viñeta o texto plano, siguiendo los lineamientos de
          Obelisco, nuestro sistema de estándares y diseño.
        </p>

        <a
          href="https://gcba.github.io/estandares/componentes/listas/lista-informativa//"
          className="external mb-4 d-block"
          target="_blank"
        >
          Lista informativa general
        </a>
        <Image
          width={500}
          height={300}
          src={`${basePath}/images/templates/tramites/info_adicional.svg`}
          className="img-fluid border-imgs mb-4"
          alt="Imagen de información adicional"
        />

        <p className="text-xl">Buenas prácticas</p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>Utilizar listas informativas para piezas de información de texto que no tienen un orden secuencial.</p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Mantener la redacción del contenido de los ítems de forma consistente. Por ejemplo: siempre usar la misma
            voz y tono.{' '}
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>Utilizar texto plano cuando no es posible generar más de 1 ítem para la lista informativa.</p>
        </div>

        <p className="text-xl">Malas prácticas </p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No utilizar variables bold dentro de los ítems de la lista para no agregar carga cognitiva a la persona
            usuaria.{' '}
          </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>Al utilizar una lista informativa, no incluir más de 7 ítems en la misma.</p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>No combinar listas informativas con listas de pasos.</p>
        </div>
      </>
    ),
  },
  {
    title: 'Descargables',
    content: (
      <>
        <p className="text-md">
          En este bloque la persona usuaria encontrará los descargables o archivos necesarios para realizar el trámite.
          En este caso, se utiliza una lista de enlaces siguiendo los lineamientos de Obelisco, nuestro sistema de
          estándares y diseño.{' '}
        </p>

        <a
          href="https://gcba.github.io/estandares/componentes/listas/lista-de-enlaces/"
          className="external mb-4 d-block"
          target="_blank"
        >
          Lista de enlaces
        </a>
        <Image
          width={500}
          height={300}
          className="img-fluid border-imgs mb-4"
          src={`${basePath}/images/templates/tramites/descargables.png`}
          alt="Ejemplo de links descargables"
          style={{ border: '2px solid #e6ebf0', borderRadius: '5px' }}
        />

        <p className="text-xl">Buenas prácticas </p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>El subtítulo de la lista debe ser coherente con el tipo de contenido que posee dentro. </p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>El subtítulo de la lista de enlaces es opcional y puede omitirse en caso de no ser necesario.</p>
        </div>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Las listas de enlaces llevan únicamente un subtítulo y contenido, cualquier elemento adicional debe ir fuera
            del componente.
          </p>
        </div>

        <p className="text-xl">Malas prácticas </p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No se debe quitar el ícono que acompaña a los enlaces de descarga. Se utiliza como refuerzo semántico del
            tipo de enlace.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Normativa',
    content: (
      <>
        <p className="text-md">
          El bloque de normativa muestra la normativa o las normativas relacionadas al trámite. Se trata de una bajada
          de texto simple con título y el número de normativa.
        </p>

        <Image
          width={300}
          height={100}
          className="img-fluid mb-4 border-imgs"
          src={`${basePath}/images/templates/tramites/normativa.png`}
          alt="Ejemplo de nro de normativa"
          style={{ border: '2px solid #e6ebf0', borderRadius: '5px' }}
        />

        <p className="text-xl">Buenas prácticas </p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            La normativa es una sección obligatoria para algunos trámites, pero puede omitirse en caso de no ser
            necesaria.
          </p>
        </div>

        <p className="text-xl">Malas prácticas </p>

        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>
            No es posible combinar esta sección con otras dentro del template o cambiar su estructura. Evitar sumar
            elementos que no correspondan a la sección.
          </p>
        </div>
      </>
    ),
  },
  {
    title: 'Organismo responsable',
    content: (
      <>
        {' '}
        <p className="text-md">
          El organismo responsable es el ente gubernamental que se encarga de la regulación del trámite. Dentro de esta
          sección la persona usuaria tendrá acceso al nombre del organismo, la ubicación, los días y horarios de
          atención, y la información de contacto.{' '}
        </p>
        <Image
          width={600}
          height={400}
          className="img-fluid mb-4"
          src={`${basePath}/images/templates/tramites/organismo_responsable.png`}
          alt="Ejemplo de organismo responsable"
          style={{ border: '2px solid #e6ebf0', borderRadius: '5px' }}
        />
        <p className="text-xl">Buenas prácticas </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-success">check</span>

          <p>
            Utilizar títulos, subtítulos y descripciones breves para jerarquizar e identificar la información, siguiendo
            el modelo del template.{' '}
          </p>
        </div>
        <p className="text-xl">Malas prácticas </p>
        <div className="d-flex">
          <span className="material-symbols-rounded text-danger">close</span>

          <p>No debe incluirse otro tipo de información que no sea sobre el organismo responsable en esta sección.</p>
        </div>
        <p className="text-md">
          El organismo responsable es el ente gubernamental que se encarga de la regulación del trámite. Dentro de esta
          sección la persona usuaria tendrá acceso al nombre del organismo, la ubicación, los días y horarios de
          atención, y la información de contacto.{' '}
        </p>
      </>
    ),
  },
  {
    title: 'Contenido del template de trámites',
    content: (
      <>
        <p className="text-md">
          Para mejorar la experiencia al volcar la información en cada una de las secciones del template de trámites, es
          importante tener en cuenta que se trata de una página flexible y no de una estructura rígida, por lo que la
          información dentro del template es adaptable.{' '}
        </p>
      </>
    ),
  },
  {
    title: 'Estilos de texto',
    content: (
      <>
        <p className="text-md">
          Al momento de llenar cualquier campo de texto del template se deben respetar los siguientes parámetros:{' '}
        </p>

        <ul className="list-informative-bullet">
          <li>No utilizar negrita (ejemplo) en ningún texto. </li>

          <li>
            Todos los campos de texto dentro del cuerpo del template pueden ir acompañados de un enlace/hipervínculo
            (ejemplo), a excepción de: los títulos (incluyendo el del <a href="#encabezado">Encabezado</a>), los
            subtítulos, la descripción del trámite y la normativa.{' '}
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Cantidad de caracteres',
    content: (
      <>
        <p className="text-md">
          Existen secciones dentro del template de trámites que cuentan con un máximo de caracteres por la capacidad del
          espacio/componente (véase <a href="#encabezado">Encabezado</a> como ejemplo), sin embargo, la gran mayoría de
          campos de texto no tienen un límite definido más allá de respetar la propuesta de contenido y no sobrecargar
          ninguna de las secciones.{' '}
        </p>

        <p className="text-md">
          Además, cada una de las secciones que está compuesta por un componente sigue los lineamientos establecidos en
          Obelisco, nuestro sistema de estándares y diseño.{' '}
        </p>
      </>
    ),
  },
];

const TemplateTramiteDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  return (
    <>
      <ComponentHeader
        title="Página de trámites"
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
              urlDemo="https://gcba.github.io/obelisco-demo/pagina_simple/tramites/index.html"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-docs`} activeTab={activeTab}>
            <>
              <DocumentationTemplate sections={SECTIONS_UX} />
            </>
          </TabPanel>

          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <>
              <CodeViewTemplate template={TEMPLATE_TRAMITES} />
            </>
          </TabPanel>

          <TabPanel id={'panel-content-react'} activeTab={activeTab}>
            <></>
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TemplateTramiteDocs;
