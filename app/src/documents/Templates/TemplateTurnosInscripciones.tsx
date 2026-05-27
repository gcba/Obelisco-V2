'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { TEMPLATE_PAG_SIMPLE } from './code-views';
const basePath = '/Obelisco-V2';

const TemplateTurnosInscripciones: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: 'Encabezado',
      content: (
        <>
          <div className="d-flex flex-column gap-3 mb-5">
            <p className="headline-sm">
              Se encuentra al comienzo de la página, justo debajo del header y está formado por:
            </p>

            <ul className="list-informative-bullet">
              <li>Migas de pan, que nos indican el recorrido de la persona usuaria hasta la página actual.</li>
              <li>Título del turno o inscripción.</li>
              <li>Una breve descripción del turno o inscripción.</li>
              <li>La modalidad del turno o incripción identificada con la etiqueta respectiva.</li>
            </ul>

            <Image
              src={`${basePath}/images/templates/pagina_turnos_inscripciones/pagina_turnos_inscripciones_1.svg`}
              alt="Ejemplo de estructura general"
              width="800"
              height="295"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Columna derecha',
      content: (
        <>
          <div className="d-flex flex-column gap-3">
            <p className="text-md">
              La columna derecha permite incorporar componentes complementarios al turno o inscripción, que se destacan
              por ser accionables por la persona. Con el uso opcional de los componentes, se puede incluir un destacado
              lateral, un mapa o ambos componentes, la elección depende de la modalidad del servicio.
            </p>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Destacado lateral',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Permite resaltar la acción principal del servicio, para que las personas puedan continuar el trámite.{' '}
            </p>

            <p className="headline-sm">Usar cuando:</p>

            <ul className="list-informative-bullet">
              <li>
                Para completar la reserva o inscripción, se debe ingresar y seguir los pasos en el sistema de Trámites a
                Distancia de BA (TAD) u otro sitio.
              </li>
              <li>
                Se necesita destacar una o varias llamadas a la acción, puede incluir 1 CTA o 2 CTA, botón de descarga,
                1 enlace o 1 acceso.
              </li>
            </ul>

            <p className="headline-sm">No usar cuando:</p>

            <ul className="list-informative-bullet">
              <li>
                Hay que continuar el trámite a través de un llamado telefónico, indicar en el contenido de la pantalla a
                que número de teléfono y en que horario tiene que llamar la persona usuaria.
              </li>
              <li>
                Se deba chatear con Boti para seguir los pasos de trámite, indicar en el contenido de la pantalla las
                referencias para que la persona usuaria empiece la conversación.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Mapa',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Permite mostrar la ubicación física del turno o incripción, en caso se deba complementar el servicio en
              una dirección concreta.{' '}
            </p>

            <p className="headline-sm">Usar cuando:</p>

            <ul className="list-informative-bullet">
              <li>La ubicación es relevante para la gestión del trámite.</li>
              <li>El servicio, curso o trámite, requiere presencialidad.</li>
            </ul>

            <p className="headline-sm">No usar cuando:</p>

            <ul className="list-informative-bullet">
              <li>El trámite es completamente digital.</li>
              <li>No se puede indentificar una sede específica.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      subtitleBold: 'Uso combinado',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Se recomienda utilizar ambos componentes, cuando el servicio tiene modalidad virtual y presencial.
            </p>

            <p className="headline-sm">Orden recomendado:</p>

            <ul>
              <li>Destacado lateral</li>
              <li>Mapa</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Bloque de información',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              En esta sección, se encuentran la descripción donde se amplía la información de la bajada del encabezado
              del turno o inscripción. Esta sección incluye título, párrafos, subtítulos y enlaces para organizar los
              detalles del servicio como ser días y horarios.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_turnos_inscripciones/pagina_turnos_inscripciones_3.svg`}
              alt="Ejemplo de estructura general"
              width="800"
              height="295"
              className="img-fluid"
            />
            <p className="text-xl" style={{ marginBottom: '12px' }}>
              Buenas prácticas
            </p>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Organizar la información desde lo general a lo particular, en forma ordenada a través de títulos y
                subtítulos.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">Puede incluir enlace para redirigir a otras pantallas del sitio BA.</p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">El título y el subtítulo es opcional y puede omitirse en caso de no ser necesario.</p>
            </div>
            <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
              Malas prácticas
            </p>{' '}
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No debe quitarse la opción de incluir texto, para ampliar la información del turno o inscripción.{' '}
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No respetar las pautas de escritura UX y escribir para la accesibilidad, para mantener consistencia con
                el resto del contenido del sitio BA.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No aplicar los parametros del estilo de tipografía, para seguir los lineamientos de Obelisco, nuestro
                sistema de estándares y diseño.
              </p>
            </div>
            <Image
              src={`${basePath}/images/templates/pagina_turnos_inscripciones/pagina_turnos_inscripciones_3.svg`}
              alt="Ejemplo de estructura general"
              width="800"
              height="295"
              className="img-fluid"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Requisitos del turno o inscripción',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Se incluirá esta sección en caso de ser necesario, se encuentran cada uno de los requisitos necesarios
              para realizar el turno o incripción. Para mostrarlos, se utiliza una lista informativa con check siguiendo
              los lineamientos de Obelisco, nuestro sistema de estándares y diseño.
            </p>
            <Image
              src={`${basePath}/images/templates/pagina_turnos_inscripciones/pagina_turnos_inscripciones_4.svg`}
              alt="Ejemplo de espaciados"
              width="800"
              height="295"
              className="img-fluid"
            />
            <p className="text-xl" style={{ marginBottom: '12px' }}>
              Buenas prácticas
            </p>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Las listas de requisitos llevan únicamente un subtítulo y contenido, cualquier elemento adicional debe
                ir fuera del componente.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                El subtítulo de la lista de requisitos es opcional y puede omitirse en caso de no ser necesario.
              </p>
            </div>
            <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
              Malas prácticas
            </p>{' '}
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">No debe modificarse el componente de lista para incluir elementos externos.</p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No utilizar variables bold dentro de los ítems de la lista para no agregar carga cognitiva a la persona
                usuaria.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Pasos del turno o inscripción',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              En este bloque la persona usuaria podrá ver cada uno de los pasos organizados en secuencia que deberá
              realizar para completar el trámite. Para mostrarlos, se utiliza una lista de pasos siguiendo los
              lineamientos de Obelisco, nuestro sistema de estándares y diseño.
            </p>
            {/* cambiar img */}
            <Image
              src={`${basePath}/images/templates/pagina_turnos_inscripciones/pagina_turnos_inscripciones_4.svg`}
              alt="Ejemplo de espaciados"
              width="800"
              height="295"
              className="img-fluid"
            />
            <p className="text-xl" style={{ marginBottom: '12px' }}>
              Buenas prácticas
            </p>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Utilizar títulos claros y concisos. Usar verbos o frases de acción para indicar a la persona usuaria lo
                que sucederá en cada paso.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Usar la menor cantidad de pasos posibles para no abrumar a la persona usuaria. Si luego en el flujo verá
                más información, limitar la lista de pasos a una síntesis del proceso a realizar.
              </p>
            </div>
            <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
              Malas prácticas
            </p>{' '}
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">No utilizar este componente si el proceso tiene sólo un paso.</p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No utilizar el componente sólo con el título. Siempre debe contener, aunque mínima, una bajada
                explicativa.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No incluir componentes como listas informativas, bulleteados y botones dentro de la lista de pasos. La
                bajada debe consistir sólo en un párrafo de texto, y si es necesario puede poseer enlaces dentro del
                mismo.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Costos del turno o inscripción',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Se utiliza para ingresar datos breves, de una sola línea, como nombres, dirección de correo electrónico o
              números de teléfonos.
            </p>
            {/* cambiar img */}
            <Image
              src={`${basePath}/images/templates/pagina_turnos_inscripciones/pagina_turnos_inscripciones_4.svg`}
              alt="Ejemplo de espaciados"
              width="800"
              height="295"
              className="img-fluid"
            />
            <p className="text-xl" style={{ marginBottom: '12px' }}>
              Buenas prácticas
            </p>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">Mantener un máximo de 2 costos con subtítulo y descripción por fila.</p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Conservar el sentido de lectura de izquierda a derecha. Antes de pasar a una 2da fila, la 1era fila debe
                ocupar un máximo de 6 columnas (2 ítems).
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Cuando el trámite es gratuito, el valor del monto cambia por “Gratuito” y no es necesario sumar una
                descripción del concepto.
              </p>
            </div>
            <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
              Malas prácticas
            </p>{' '}
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No apilar costos de forma vertical donde no se siga la estructura de bloque y/o no se respete el sentido
                de lectura de izquierda a derecha.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                La descripción de los costos no debe sobrepasar las 3 columnas de ancho, que es el límite de tamaño
                máximo para cada ítem.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Información adicional',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Se utiliza para ingresar datos breves, de una sola línea, como nombres, dirección de correo electrónico o
              números de teléfonos.
            </p>
            {/* cambiar img */}
            <Image
              src={`${basePath}/images/templates/pagina_turnos_inscripciones/pagina_turnos_inscripciones_4.svg`}
              alt="Ejemplo de espaciados"
              width="800"
              height="295"
              className="img-fluid"
            />
            <p className="text-xl" style={{ marginBottom: '12px' }}>
              Buenas prácticas
            </p>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Utilizar listas informativas para piezas de información de texto que no tienen un orden secuencial.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Utilizar texto plano cuando no es posible generar más de 1 ítem para la lista informativa.
              </p>
            </div>
            <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
              Malas prácticas
            </p>{' '}
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No utilizar variables bold dentro de los ítems de la lista para no agregar carga cognitiva a la persona
                usuaria.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">Al utilizar una lista informativa, no incluir más de 7 ítems en la misma.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Preguntas frecuentes',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Para mostrar preguntas frecuentes se utilizan colapsables de selección única siguiendo los lineamientos de
              Obelisco, nuestro sistema de estándares y diseño.
            </p>
            {/* cambiar img */}
            <Image
              src={`${basePath}/images/templates/pagina_turnos_inscripciones/pagina_turnos_inscripciones_4.svg`}
              alt="Ejemplo de espaciados"
              width="800"
              height="295"
              className="img-fluid"
            />
            <p className="text-xl" style={{ marginBottom: '12px' }}>
              Buenas prácticas
            </p>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Mantener títulos breves y claros. El encabezado es lo primero que capta la atención de la mayoría de las
                personas usuarias. Es fundamental que el contenido del colapsable se exprese de manera clara para que
                las personas usuarias puedan decidir si desean expandirlo o no.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                Cada colapsable puede tener un máximo de 800 caracteres (contando espacios) para su descripción.
              </p>
            </div>
            <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
              Malas prácticas
            </p>{' '}
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No utilizar un colapsable para el contenido que es necesario que esté visible. No ocultarlo dentro de un
                colapsable.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No utilizar más de 5 colapsables para sumar información. En todo caso, lo recomendable es buscar otros
                componentes que se adapten mejor al contenido o hacer bajadas sencillas de título y texto.
              </p>
            </div>
            <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">No utilizar más de una sección de colapsables.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Contenidos',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Para mejorar la experiencia al volcar la información en cada una de las secciones del template de turnos e
              inscripciones, es importante tener en cuenta que se trata de una página flexible y no de una estructura
              rígida, por lo que la información dentro del template es adaptable.
            </p>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Estilo de texto',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Al momento de llenar cualquier campo de texto del template se deben respetar los siguientes parámetros:
            </p>
            <ul className="list-informative-bullet">
              <li>No utilizar negrita (ejemplo) en ningún texto.</li>
              <li>
                Todos los campos de texto dentro del cuerpo del template pueden ir acompañados de un enlace/hipervínculo
                (ejemplo), a excepción de: los títulos (incluyendo el del Encabezado), los subtítulos, la descripción
                del trámite y la normativa.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Título',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Estos títulos son independientes a los componentes dentro del template y sirven para dividir e identificar
              cada una de las secciones y su contenido. Utilizan la etiqueta H2.
            </p>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Cantidad de caracteres',
      content: (
        <>
          <div className="d-flex flex-column gap-2 mb-3 mt-2">
            <p className="text-md">
              Existen secciones dentro del template de trámites que cuentan con un máximo de caracteres por la capacidad
              del espacio/componente (véase Encabezado como ejemplo), sin embargo, la gran mayoría de campos de texto no
              tienen un límite definido más allá de respetar la propuesta de contenido y no sobrecargar ninguna de las
              secciones.
            </p>
            <p className="text-md">
              Además, cada una de las secciones que está compuesta por un componente sigue los lineamientos establecidos
              en Obelisco, nuestro sistema de estándares y diseño.
            </p>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/templates">Plantillas</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Página de turnos e inscripciones"
        description={[
          `Esta guía está diseñada para proporcionar una compresión clara y completa de cómo utilizar la plantilla de turnos e inscripciones de manera efectiva. La idea es asegurar la mejorar experiencia posible a la persona usuaria y facilitar la implementación de la plantilla.`,
        ]}
      />

      <a
        className="btn btn-outline-secondary"
        href="https://gcba.github.io/obelisco-demo/pagina_simple/pagina_simple_op5/index.html"
        target="_blank"
        rel="noopener noreferrer"
        style={{ marginBottom: '32px' }}
      >
        Acceder a la plantilla
        <span className="material-symbols-rounded o-icon">open_in_new</span>
      </a>

      <div>
        <nav className="tabs-box" aria-label="Navegación por pestañas">
          <ul className="nav nav-pills nav-box tabs p-0" role="tablist">
            <TabItem
              id={`panel-content-docs`}
              title={'Especificaciones'}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabItem id={`panel-content-html`} title={'Código'} activeTab={activeTab} setActiveTab={setActiveTab} />
          </ul>
        </nav>

        <hr className="mt-0 mb-4" />

        <div className="tab-content" style={{ paddingTop: '32px' }}>
          <TabPanel id={`panel-content-docs`} activeTab={activeTab}>
            <DocumentationTemplate sections={DOC_SECTIONS} type="ux" />
          </TabPanel>
          <TabPanel id={`panel-content-html`} activeTab={activeTab}>
            <CodeViewTemplate template={TEMPLATE_PAG_SIMPLE} />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TemplateTurnosInscripciones;
