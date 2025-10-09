'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const ReleasesComponents: React.FC = () => {
  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    fetch('https://api.github.com/repos/gcba/Obelisco-V2/releases/latest')
      .then((response) => response.json())
      .then((data) => setVersion(data.tag_name))
      .catch((error) => console.error('Error fetching version:', error));
  }, []);

  const versionPages = { text: ` ${version}`, url: 'https://github.com/gcba/Obelisco-V2/releases/latest', id: 1 };
  const sections = [
    {
      title: 'Versión 1.6.2',
      firstTitle: true,
      content: (
        <ul className="docs-list">
          <p>La versión 1.7.0 contiene lo siguiente: </p>
          <li>Se crea el componente Encabezado (hero).</li>
          <li>
            <strong>Contenido principal:</strong> se crean las clases <code>.bg-content-hero-{'{color}'}</code>
            para definir el color de fondo del contenido principal del Hero. <br />
            Colores disponibles: <code>sky</code>, <code>blue</code>, <code>cyan</code>, <code>yellow</code>,{' '}
            <code>red</code>, <code>purple</code>, <code>light</code> y <code>dark</code>.
          </li>

          <li>
            <strong>Aside:</strong> se crean las clases <code>.bg-aside-hero-{'{color}'}</code>, que deben utilizarse
            junto con <code>.aside</code> para definir el color del fondo lateral. <br />
            Colores disponibles: <code>dark</code> y <code>light</code>.
          </li>

          <li>
            <strong>Accionable de botón:</strong> se incorpora la clase <code>.btn-hero</code>, que permite generar un
            botón expandible a partir de 360px de ancho.
          </li>

          <li>
            <strong>Accionable de buscador:</strong> se integran las clases <code>.search-wrapper</code>,{' '}
            <code>.search-results</code>, <code>.search-btn-container</code> y <code>#search-home.form-control</code>,
            correspondientes al buscador utilizado en BA Productiva.
          </li>

          <li>
            <strong>Decoraciones visuales:</strong> se incorporan las clases <code>.corner</code> (borde esquinado) y{' '}
            <code>.wave</code> (efecto de onda).
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.6.2',
      firstTitle: true,
      content: (
        <ul className="docs-list">
          <p>La versión 1.6.2 contiene lo siguiente: </p>
          <li>
            Se modifica la propiedad color del componente Migas de pan para fondos claros al <code>#101e37</code>
          </li>
          <li>
            Se agrega la variante <code>dark</code> de Migas de pan para fondos oscuros
          </li>
          <li>Se modifica el color de la línea divisoria del componente header</li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.6.1',
      firstTitle: true,
      content: (
        <ul className="docs-list">
          <p>La versión 1.6.1 contiene lo siguiente: </p>
          <li>Actualización de la Ficha de componente Páginado.</li>
          <li>Actualización de la Ficha de componente Tarjetas.</li>
          <li>Nueva variante de componente Tarjetas con miscelánea.</li>
          <li>
            En{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-30">
              Cambios de componentes
            </a>{' '}
            se encuentran las clases para las Tarjetas con miscelánea.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.6.0',
      firstTitle: true,
      content: (
        <ul className="docs-list">
          <p>La versión 1.6.0 contiene lo siguiente: </p>
          <li>
            Se disponibiliza componente Galeria, se incluye documentación en{' '}
            <a href="https://gcba.github.io/Obelisco-V2/documentation/update-component#section-change-16">
              Cambios en componentes
            </a>
            .
          </li>
          <li>Fix de comportamiento de tarjetas verticales de noticias.</li>
          <li>
            Se crea la clase <code>has-card-items</code> para tarjetas con disposición y scroll.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.6',
      firstTitle: true,
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.6 contiene lo siguiente: </p>
          <li>
            Se modifica el posicionamiento del texto de asistencia para tener una mejor alineación entre el input y
            label en formularios horizontales.
          </li>
          <li>Se modifica el posicionamiento del contador de caracteres en validación del input textarea.</li>
          <li>
            Se agrega un espacio superior e inferior <i>(css)</i> en la clase <code>form-label-container</code>.
          </li>
          <li>
            Se agrega la sección de diagramación en patrones <i>(documentación).</i>
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.5',
      content: (
        <ul className="docs-list">
          <p>
            La versión 1.5.5 contiene el fix de la versión anterior, agregando los archivos de estilos css compilados.{' '}
          </p>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.4',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.4 contiene lo siguiente: </p>
          <li>
            Se corrigen estilos de la clase <code>form-control</code>
          </li>
          <li>
            Se agrega la variante en formulario de selección de <i>radio-group</i> y <i>checkbox-group</i>
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.3',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.3 contiene lo siguiente: </p>
          <li>Creación del componente Input File (Carga de archivo).</li>
          <li>Creación de la etiqueta Badge Forms para identificar si un campo es requerido u opcional.</li>
          <li>
            Se modifica visualmente la validación de los campos manteniendo la misma clase <code>invalid-feedback</code>
            ; <code>valid-feedback</code>
          </li>
          <li>Se modifica el gap entre el subtítulo y los ítems en los componentes de Listas de 8px a 4px.</li>
          <li>Se incorporó una volanta descriptiva dentro del componente Pasos de un formulario</li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.2',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.2 contiene los siguientes fixes: </p>
          <li>Nueva variante del componente Header: &quot;Banner del GCBA&quot;. Actualización de su ficha.</li>
          <li>Se actualiza la guía de adopción de Obelisco, incluyendo el modelo de contribución.</li>
          <li>Se actualiza el PDF descargable de la guía de adopción en la sección de &quot;Sobre Obelisco&quot;.</li>
          <li>
            Nuevos templates de issues para contribuir con Obelisco: &quot;new_feature&quot; y &quot;bug_report&quot;.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.1',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.1 contiene los siguientes fixes: </p>
          <li>
            Se modifica el máximo de líneas en título (2) y descripción (3) del{' '}
            <span className="fst-italic">organismo Accesos.</span>
          </li>
          <li>
            Se ajusta el alineado vertical del componente radio que se encuentra dentro del componente{' '}
            <span className="fst-italic">Colapsable con lista seleccionable.</span>
          </li>
          <li>Se modifica el tamaño del ícono en botón mediano a 18px. </li>
          <li>
            En el organismo Pie de página <span className="fst-italic">(Footer)</span>, se coloca el ícono de la red
            social &quot;X&quot;, por medio de la clase <code>.social-x </code> antes utilizada en una etiqueta{' '}
            <code>img</code>.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.5.0',
      content: (
        <ul className="docs-list">
          <p>La versión 1.5.0 contiene: </p>
          <li>
            Un nuevo editor para poder probar los componentes de obelisco. En ella se podrá copiar el html y manipular
            el código en tiempo real.
          </li>
        </ul>
      ),
    },
    {
      title: 'Versión 1.4.2',
      content: (
        <ul className="docs-list">
          <p>La versión 1.4.2 es la primer versión estable de Obelisco. Los puntos más destacados de ésta contiene: </p>
          <li>La totalidad de los componentes migrados de la Versión 1</li>
          <li>
            Nueva guía de estilos: Modificación de tipografía, grilla y nueva paleta de color enfocada en la
            accesibilidad.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/documentation">Documentación</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Versionados"
        description={[
          'En esta sección se encuentran los versionados de la librería y la documentación de los cambios que se hicieron sobre cada versión de Obelisco.',
          <>
            Versión actual:{' '}
            <Link href="https://github.com/gcba/Obelisco-V2/releases" target="blank">
              {versionPages.text}
            </Link>
          </>,
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="change" />
    </>
  );
};

export default ReleasesComponents;
