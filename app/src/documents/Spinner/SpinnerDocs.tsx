'use client';

import React from 'react';

const basePath = '/Obelisco-V2';
import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
import Image from 'next/image';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { SPINNER_ACCESSIBILTY, SPINNER_ACCESSIBILTY2, SPINNER_BLOCK, SPINNER_DESCRIPTION, SPINNER_SIZES, SPINNER_TYPES } from './code-views';

const SpinnerDocs: React.FC = () => {

  const SECTION_UX = [
    {
      title: 'Uso',
      content: (
        <>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>Para indicar que el sistema está procesando una acción cuyo tiempo de resolución es indeterminado.</li>
            </ul>
          </div>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para indicar el progreso de una acción en curso con un tiempo definido predecible, utilizar la <a href="https://gcba.github.io/Obelisco-V2/components/progress-bar">Barra de progreso</a>.
              </li>
              <li>
                Para acciones inmediatas, como enviar un formulario.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Tipos',
      content:
        <>
          <p className="text-md mb-4">Existen distintas variantes de color para el <i>spinner,</i> cada uno con un significado semántico
            asociado, y no meramente decorativo, que permiten mantener coherencia con el contexto de uso, como estados de carga,
            éxito o error. En fondos claros, se recomienda utilizar el <i>spinner</i> primario como opción predeterminada.
          </p>

          <Image
            src={`${basePath}/images/spinner/tipos.svg`}
            alt="Tipos de spinner"
            width="800"
            height="280"
            className="img-fluid">
          </Image>
        </>
    },
    {
      title: 'Tamaños',
      content:
        <>
          <p className="text-md mb-4">Hay tres tamaños de spinner: grande, mediano y chico, tanto para dispositivos desktop, tablet
            y mobile, y su uso depende del espacio disponible en la interfaz.
          </p>

          <Image
            src={`${basePath}/images/spinner/tamaños.svg`}
            alt="Tamaños de spinner"
            width="800"
            height="280"
            className="img-fluid">
          </Image>

          <div className="list-informative pt-4">
            <ul className="list-informative-bullet">
              <li><strong>Chico:</strong> se utiliza en elementos puntuales, como botones o inputs con carga.</li>
              <li><strong>Mediano:</strong> es ideal para modales o secciones de la interfaz.</li>
              <li><strong>Grande:</strong> se utiliza para pantallas completas o procesos de carga generales.</li>
            </ul>
          </div>
        </>
    },
    {
      title: 'Patrones de uso',
      content: <></>,
    },
    {
      subtitle: (
        <>
          En el componente Botón
        </>
      ),
      content:
        <>
          <p className="text-md">
            Utilizá la variante <i>Loading</i> del componente <a href="https://gcba.github.io/Obelisco-V2/components/button">Botón</a>
            para indicar que una acción está en progreso y aún no ha finalizado.
            Para reforzar el significado de la acción se puede configurar la variante de <i>spinner</i>
            correspondiente con la de cada botón.
          </p>

          <Image
            src={`${basePath}/images/spinner/patron_de_uso_boton.svg`}
            alt="Uso en botón"
            width="800"
            height="280"
            className="img-fluid">
          </Image>

        </>
    },
    {
      subtitle: (
        <>
          En línea con otros componentes
        </>
      ),
      content:
        <>
          <p className="text-md">
            El <i>spinner</i> también puede utilizarse por fuera del botón, por ejemplo para indicar que se está subiendo un archivo.
          </p>

          <Image
            src={`${basePath}/images/spinner/patron_de_uso_componentes.svg`}
            alt="Uso en componentes"
            width="800"
            height="280"
            className="img-fluid">
          </Image>

        </>
    },
    {
      subtitle: (
        <>
          Como única referencia visual
        </>
      ),
      content:
        <>
          <p className="text-md">
            Una acción particular puede desencadenar la carga de todo el contenido de una página. En este caso,
            debe utilizarse el <i>spinner</i> grande centrado, para identificar el procesamiento de la acción. Además, debe ir
            acompañando de una etiqueta descriptiva que sirva de contexto sobre el contenido a cargar.
          </p>
          <p className="text-md">
            El <i>spinner</i> se puede colocar sobre un fondo sólido de color blanco o sobre un <i>overlay</i> {' '}
            (<strong>grayscale-950 </strong>con 35 % de opacidad), ocupando el cuerpo de la página, sin incluir el encabezado
            (<i>header</i>) del sitio.
          </p>
          <p className="text-md">
            Dado que este comportamiento interrumpe la navegación de la persona usuaria, se recomienda minimizar su uso.
          </p>
          <div className="col">
            <Image
              src={`${basePath}/images/spinner/patron_buen_uso.svg`}
              alt="Buena práctica de uso"
              width="800"
              height="280"
              className="img-fluid"
              style={{ marginTop: '2rem !important' }}>
            </Image>
            <div className="d-flex pt-2">
              <span className="material-symbols-rounded text-success">check</span>
              <p className="mb-0">
                La etiqueta debe indicar el estado del proceso, en un lenguaje claro y utilizando verbos en gerundio,
                como "Cargando solicitud..." o "Procesando el pago...".
              </p>
            </div>
          </div>
          <div className="col">
            <Image
              src={`${basePath}/images/spinner/patron_mal_uso.svg`}
              alt="Mala práctica de uso"
              width="800"
              height="280"
              className="img-fluid"
              style={{ marginTop: '2rem !important' }}>
            </Image>
            <div className="d-flex pt-2">
              <span className="material-symbols-rounded text-danger">close</span>
              <p className="mb-0">
                No utilizar el spinner para la carga de contenidos multimedia como imágenes o videos.
                Tampoco utilizar más de 1 spinner a la vez.
              </p>
            </div>
          </div>
        </>
    }
  ];


  const SECTIONS_DEV = [
    {
      title: 'Tipos',
      content: (
        <CodeBox codeHTML={SPINNER_TYPES}>
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-secondary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-tertiary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="px-2 py-1 bg-dark">
              <div className="spinner-border text-light d-block" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
            <div className="spinner-border text-dark" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Tamaños',
      content: (
        <CodeBox codeHTML={SPINNER_SIZES}>
          <div className="d-flex gap-4 align-items-center justify-content-center">
            <div className="spinner-border text-primary spinner-border-sm" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
            <div className="spinner-border text-primary spinner-border-lg" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Expandible',
      content: (
        <>
          <CodeBox codeHTML={SPINNER_BLOCK}>
            <div className="col-4 col-md-2 mx-auto">
              <div className="spinner-block text-primary" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con descripción',
      content: (
        <>
          <CodeBox codeHTML={SPINNER_DESCRIPTION}>
            <div className="text-center">
              <div className="spinner-border text-primary spinner-border-lg" role="status">
                <span className="sr-only">Cargando...</span>
              </div>
              <p className="spinner-description">Cargando...</p>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  const SPECS = [
    {
      title: 'Anatomía',
      content: 
        <>
          <Image
            src={`${basePath}/images/spinner/anatomia.svg`}
            alt="Anatomía"
            width="800"
            height="280"
            className="img-fluid">
          </Image>
          <div className="responsive-scroll mt-4" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Elemento
                  </th>
                  <th scope="col" className="tb-text">
                    Carácter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Índicador de carga</td>
                  <td>Obligatorio, indica visualmente el proceso de carga.</td>
                </tr>
                <tr>
                  <td>Recorrido</td>
                  <td>Obligatorio, necesario para el contraste entre el fondo y el indicador de carga.</td>
                </tr>
                <tr>
                  <td>Etiqueta</td>
                  <td>Opcional, disponible solo para la variante de <strong>spinner grande</strong> cuando se requiera la carga del contenido dela página.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
    },
    {
      title: 'Variantes',
      content: 
        <>
          <p className="text-md">
            Únicamente el tamaño de <i>spinner</i> <strong>grande</strong> admite dos variantes, con etiqueta o sin etiqueta, y se ubica por debajo del indicador.
          </p>
          <Image
            src={`${basePath}/images/spinner/variantes.svg`}
            alt="Variantes"
            width="800"
            height="280"
            className="img-fluid">
          </Image>
        </>
    },
    {
      title: 'Medidas',
      content: 
        <>
          <p className="text-md">
            Todos los tamaños de <i>spinner</i> se ajustan proporcionalmente para no perder calidad, el <i>spinner</i> <strong>chico</strong> 
            tiene 16px de diámetro, el <strong>mediano</strong> 32px y el <strong>grande</strong> 48px.
          </p>
          <Image
            src={`${basePath}/images/spinner/medidas.svg`}
            alt="Medidas"
            width="800"
            height="280"
            className="img-fluid">
          </Image>
        </>
    },
    {
      title: 'Espaciados',
      content: 
        <>
          <p className="text-md">
            En la variante de tamaño grande, el espaciado entre la etiqueta y el indicador es de 8px.
          </p>
          <Image
            src={`${basePath}/images/spinner/espaciados.svg`}
            alt="Espaciados"
            width="800"
            height="280"
            className="img-fluid">
          </Image>
        </>
    }
  ];

  const ACCESSIBILITY = [
    {
      title: 'Navegación alternativa',
      content: 
        <>
          <p className="text-md">Al ser un elemento que irrumpe en la navegación de la persona usuaria, que solo aparece para indicar 
            la carga de un proceso y/o contenido, el <i>spinner</i> no debe ser recorrido ni operado por teclado para evitar confusiones 
            al navegar por medios alternativos, como lectores de pantalla.
          </p>
        </>
    },
    {
      subtitle: 'Interactividad limitada',
      content:
        <>
          <p className="text-md">
            Para indicarle a la persona usuaria que comenzó un proceso de carga y debe esperar a que responda el contenido, 
            debe agregarse el atributo <i>“aria-live=assertive”</i>. Con este atributo ARIA, medios alternativos para navegar 
            un sitio web, como lectores de voz, anunciarán que se ha interrumpido el recorrido y que la interfaz está en un 
            proceso de carga, por lo que deberá esperar y no podrá continuar navegando hasta que finalice.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            { SPINNER_ACCESSIBILTY }
          </SyntaxHighlighter>
        </>
    },
    {
      title: 'Etiquetado descriptivo',
      content:
        <>
          <p className="text-md">
            Para indicar a la persona usuaria, que utiliza medios alternativos para recorrer una página, sobre la aparición de un proceso 
            de carga con spinner, como lectores de pantalla, debe agregarse la clase sr-only en una etiqueta <i>span</i> con el texto 
            de <i>“Cargando...”</i>.
          </p>
          <p className="text-md">
            Adicionalmente, el spinner debe llevar el atributo de “role=status”, dentro del contenedor de la etiqueta <i>div</i>, 
            para indicar el estado de carga que especifica la etiqueta <i>span</i>.
          </p>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            { SPINNER_ACCESSIBILTY2 }
          </SyntaxHighlighter>
        </>
    },
    {
      title: 'Criterios WCAG aplicables',
      content:
        <>
        <a
          className="external mb-2"
          href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.11 Non-Text Contrast (Level AA)
        </a>
        <p>
          La presentación visual de elementos de la interfaz de usuario y objetos gráficos tiene por lo menos una
          relación de contraste de 3:1 con respecto a los colores adyacentes.
        </p>

        <a
          className="external mb-2"
          href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.3 Contrast (Minimum) (Level AA)
        </a>
        <p>
          La presentación visual de texto y de imágenes de texto tiene una relación de contraste de por lo menos
          4.5:1, excepto textos grandes e imágenes de texto grande que tienen un contraste de por lo menos 3:1, textos
          o imágenes que son parte de un componente inactivo de interfaz de usuario o son pura decoración, o
          logotipos.
        </p>

        <a
          className="external mb-2"
          href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 1.4.4 Resize Text (Level AA)
        </a>
        <p>
          Excepto por los subtítulos e imágenes de texto, el texto puede redimensionarse hasta un 200 % sin tecnología de asistencia, 
          sin pérdida de contenido ni funcionalidad.
        </p>

        <a
          className="external mb-2"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 3.2.4 Consistent Identification (Level AA)
        </a>
        <p>
          Los componentes que tienen la misma funcionalidad dentro de un conjunto de páginas web se identifican de manera consistente. 
          Los enlaces que dirigen a un mismo lugar deben tener la misma identificación para no generar confusiones.
        </p>

        <a
          className="external mb-2"
          href="https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Success Criterion 4.1.2 Name, Role, Value (Level A)
        </a>
        <p>
          Para todos los componentes de la interfaz de usuario (incluidos, entre otros: elementos de formulario, enlaces y 
          componentes generados por scripts), el nombre y la función se pueden determinar mediante programación; los estados, 
          propiedades y valores que puede establecer el usuario se pueden configurar mediante programación; y la notificación 
          de cambios en estos elementos está disponible para los agentes de usuario, incluidas las tecnologías de asistencia.
        </p>

        </>
    }
  ];

  return (
    <>
      <ComponentHeader
        title="Spinner"
        description={[
          'El spinner es un indicador visual que informa a las personas usuarias que el contenido está cargando y/o siendo procesado.',
        ]}
      />
      <Tabs
        sectionDev={SECTIONS_DEV}
        sectionUx={SECTION_UX} 
        customSections={[
          {
            title: 'Especificaciones',
            id: 'section-specs',
            sectionContent: SPECS,
          },
          {
            title: 'Accesibilidad',
            id: 'accessibility',
            sectionContent: ACCESSIBILITY,
          },
        ]}
        />
    </>
  );
};

export default SpinnerDocs;
