'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { TabItem, TabPanel } from '@/components/Tabs';
import { CodeViewTemplate } from '@/components/Template/CodeViewTemplate';
import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { TEMPLATE_PAG_NOTICIAS } from './code-views';
const basePath = '/Obelisco-V2';

const TemplatePaginaNoticiasDocs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('panel-content-docs');

  const DOC_SECTIONS = [
    {
      firstTitle: true,
      title: 'Encabezado',
      content: (
        <>
          <p className="text-md">
            Este módulo tiene como objetivo presentar la información principal de la noticia de forma clara y
            jerarquizada. Permite a la persona usuaria comprender rápidamente la relevancia del contenido antes de
            continuar con la lectura. Está compuesto por:
          </p>
          <div className="list-informative d-flex flex-column gap-2">
            <ul className="list-informative-bullet">
              <li>
                <a
                  href="https://gcba.github.io/Obelisco-V2/components/breadcrumb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Migas de pan
                </a>
                , que nos indican el recorrido de la persona usuaria hasta la página actual.
              </li>
              <li>
                <a
                  href="https://gcba.github.io/Obelisco-V2/components/breadcrumb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Etiqueta de categoría{' '}
                </a>
                , que identifica el tema o área temática a la que pertenece la noticia. Se utiliza para orientar y
                facilitar la exploración de contenidos relacionados.
              </li>{' '}
              <li>Título, texto principal que resume de qué trata la noticia. Extensión máxima: 115 caracteres.</li>
              <li>
                Bajada, breve descripción introductoria que amplía la idea del título y anticipa el contenido. Extensión
                máxima: 180 caracteres.
              </li>
              <li>Botones iconográficos, que habilitan la difusión del contenido en redes sociales.</li>
            </ul>
          </div>
          <Image
            src={`${basePath}/images/templates/noticias/1.svg`}
            alt="Ejemplo de noticias"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Usar títulos claros, informativos y directos que permitan comprender el contenido sin necesidad de leer la
              noticia completa.
            </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Incorporar una bajada concisa y contextual.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Verificar que la etiqueta de categoría sea coherente con el contenido.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Confirmar que la fecha de publicación sea correcta.</p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Utilizar títulos excesivamente largos, ambiguos o sin información relevante. </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Repetir exactamente el título dentro de la bajada.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Incluir categorías genéricas sin relación con el contenido.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Hacer uso de frases y palabras completas en mayúsculas.</p>
          </div>
        </>
      ),
    },
    {
      title: 'Cuerpo de la noticia',
      content: (
        <>
          <p className="text-md">
            Este módulo tiene como objetivo concentrar el contenido principal de la noticia. Permite organizar la
            información y sumar recursos complementarios. Está compuesto por los siguientes elementos:{' '}
          </p>
          <h6>Elementos de párrafo</h6>
          <p className="text-md">
            Opciones disponibles para redactar, estructurar y dar forma al contenido textual de la noticia:
          </p>
          <ul className="list-informative-bullet">
            <li>
              Títulos y subtítulos que pueden ir de &quot;Encabezado 2&quot; a &quot;Encabezado 6&quot;, utilizados para
              organizar y jerarquizar el contenido en secciones, especialmente en textos extensos.
            </li>
            <li>
              Texto general para el desarrollo completo de la información. Permite aplicar estilos de formato como
              negrita e itálica para jerarquizar y destacar contenido relevante.
            </li>
            <li>Enlaces, permite enlazar información complementaria sin extender el texto principal.</li>
            <li>
              Listas simples con viñetas o numeración para organizar información. Las listas con viñetas se utilizan
              cuando los elementos no siguen un orden secuencial, mientras que las listas numeradas se emplean cuando
              existe un orden o secuencia definida.
            </li>
            <li>
              Cita destacada, debe incluir la frase y, opcionalmente, puede incluir el nombre de la persona autora de la
              cita.
            </li>
            <li>
              Permite insertar una imagen puntual entre bloques de texto para acompañar o reforzar una idea específica
              del contenido. Recomendamos completar el campo de texto alternativo con una breve descripción de la imagen
              para garantizar la accesibilidad.
              <br />
              <br />
              <strong>Ejemplo de texto alternativo</strong>: &quot;Grupo de personas realizando actividades recreativas
              al aire libre&quot;.
            </li>
          </ul>
          <Image
            src={`${basePath}/images/templates/noticias/2.svg`}
            alt="Ejemplo de noticias"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <h6>Elementos multimedia</h6>
          <p className="text-md">
            Opciones disponibles para incorporar recursos audiovisuales que complementan el contenido de la noticia:{' '}
          </p>
          <ul className="list-informative-bullet">
            <li>
              Incrustación de video, permite incorporar contenido audiovisual en la noticia, ya sea mediante un video
              remoto (YouTube) o un archivo de video cargado desde el dispositivo. El uso de este elemento es opcional y
              se recomienda limitarlo a un solo video por publicación.
            </li>
            <li>
              Fotogalería, compuesta por varias imágenes presentadas en una grilla adaptable. El uso es opcional y
              permite cargar entre 1 y 7 elementos.
              <strong>Peso máximo</strong>: 400 KB
              <br />
              <strong>Formato permitido</strong>: .jpg, .jpeg, .webp, .avif
            </li>
            <li>
              Incrustación de audio, permite incorporar un archivo de audio dentro de la noticia. El uso de este
              elemento es opcional y se recomienda utilizarlo cuando el contenido lo requiera.
            </li>
            <li>
              Permite incorporar publicaciones de redes sociales dentro de la noticia. Se sugiere priorizar contenido de
              fuentes confiables, preferentemente de X e Instagram.
            </li>
          </ul>
          <Image
            src={`${basePath}/images/templates/noticias/3.svg`}
            alt="Ejemplo de noticias"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <Image
            src={`${basePath}/images/templates/noticias/4.svg`}
            alt="Ejemplo de noticias"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Redactar utilizando lenguaje claro, evitando tecnicismos innecesarios.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Utilizar títulos secundarios cuando haya contenido extenso.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Incorporar recursos multimedia solo si aportan información útil o contextual.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Verificar enlaces antes de publicar.</p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Sobrecargar el contenido con elementos multimedia sin propósito informativo.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Insertar bloques extensos de texto sin estructura, listas ni separación.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Utilizar imágenes pixeladas o contenido no verificado.</p>
          </div>
        </>
      ),
    },
    {
      title: 'Destacado',
      content: (
        <>
          <p className="text-md">
            Componente que permite resaltar información puntual dentro de la noticia. Incluye un título y una bajada
            contextual, y puede incorporar un enlace en caso de ser necesario.
          </p>
          <ul className="list-informative-bullet">
            <li>El enlace de acceso se utiliza para ver más información dentro del mismo sitio.</li>
            <li>
              El enlace externo se usa para enlazar contenido a un sitio web externo por fuera del dominio actual.
            </li>
          </ul>
          <Image
            src={`${basePath}/images/templates/noticias/5.svg`}
            alt="Ejemplo de noticias"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Utilizar el componente solo cuando sea necesario para destacar información relevante.
            </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Incluir siempre un título y una bajada que aporten contexto y ayuden a comprender el contenido destacado.
            </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Solo deberá utilizarse una única vez y deberá ubicarse entre bloques de texto o al final de la noticia,
              respetando el flujo de lectura.
            </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Mantener textos breves y claros para no interrumpir la lectura principal.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              En caso de incluir un enlace, que sea un llamado a la acción claro y breve, por ejemplo: &quot;Ir al
              formulario&quot;, &quot;Conocé más&quot;, &quot;Accedé al trámite&quot;.
            </p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Colocar el destacado al inicio de la noticia, desplazando el contenido principal.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Usarlo de forma reiterada o sin un criterio claro dentro de una misma publicación.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Incluir el componente sin contexto, sin título o sin bajada.</p>
          </div>
        </>
      ),
    },
    {
      title: 'Apartado',
      content: (
        <>
          <p className="text-md mb-0">
            Se ubica en la columna derecha de la página y permite incorporar información complementaria a la noticia.
          </p>
          <h6>Documentación adjunta</h6>
          <p className="text-md">Permite incorporar archivos complementarios a la noticia para su descarga.</p>
          <ul className="list-informative-bullet">
            <li>
              Audios descargables:
              <br />
              <strong>Peso máximo</strong>: 50MB
              <br />
              <strong>Formato permitido</strong>: .mp3, .wav, .aac
            </li>
          </ul>
          <ul className="list-informative-bullet mt-3">
            <li>
              Documentos descargables:
              <br />
              <strong>Peso máximo</strong>: 50MB
              <br />
              <strong>Formato permitido</strong>: .pdf
            </li>
          </ul>
          <Image
            src={`${basePath}/images/templates/noticias/6.svg`}
            alt="Ejemplo de información institucional"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              El botón debe redirigir a la subsección correspondiente del organigrama que se encuentra esa área; si no
              existe una subsección específica, deberá dirigir a la página de inicio del organigrama.
            </p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              Redireccionar a la página de inicio del organigrama si existe una subsección específica.
            </p>
          </div>
          <h6>Mapa de ubicación</h6>
          <p className="text-md">Permite indicar una ubicación física relevante asociada a la noticia. </p>
          <Image
            src={`${basePath}/images/templates/noticias/7.svg`}
            alt="Ejemplo de noticias"
            width="800"
            height="295"
            className="img-fluid"
            style={{ marginTop: '32px', marginBottom: '32px' }}
          />
          <p className="text-xl" style={{ marginBottom: '12px' }}>
            Buenas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Utilizar el apartado únicamente cuando el contenido adicional sea relevante para la noticia.
            </p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Verificar que el contenido se encuentre correctamente vinculado.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">Asegurar que la información se encuentre actualizada..</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-success">check</span>
            <p className="mb-0">
              Renombrar los archivos antes de publicarlos con un nombre claro y descriptivo, que refleje su contenido.
            </p>
          </div>
          <p className="text-xl" style={{ marginBottom: '12px', marginTop: '32px;' }}>
            Malas prácticas
          </p>{' '}
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Incluir enlaces o archivos que no aporten valor al contenido de la noticia.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">Publicar enlaces rotos, incorrectos o sin destino válido.</p>
          </div>
          <div className="d-flex gap-2" style={{ marginBottom: '12px' }}>
            <span className="material-symbols-rounded text-danger">close</span>
            <p className="mb-0">
              Adjuntar recursos sin relación directa con la noticia o con nombres poco descriptivos, que dificulten la
              comprensión de su contenido.
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
        title="Noticias"
        description={[
          `Guía orientada a estandarizar la carga y presentación de noticias, promoviendo claridad, consistencia y una lectura fluida.`,
        ]}
      />

      <a
        className="btn btn-outline-secondary"
        href="https://gcba.github.io/obelisco-demo/noticias/index.html"
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
            <CodeViewTemplate template={TEMPLATE_PAG_NOTICIAS} />
          </TabPanel>
        </div>
      </div>
    </>
  );
};

export default TemplatePaginaNoticiasDocs;
