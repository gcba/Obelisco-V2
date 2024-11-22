import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { FOUR_COLUMNS, LAYOUTS, ONE_COLUMN, THREE_COLUMNS, TWO_COLUMNS } from './code-views';

const basePath = '/Obelisco-V2';

const GridDocs: React.FC = () => {
  const SECTION_UX = [
    {
      title: '¿Por qué usar una grilla?',
      content: (
        <>
          <div className="list-informative pb-3">
            <ul className="list-informative-bullet">
              <li>
                <span className="fw-semibold">Coherencia visual</span>: estandariza la disposición y alineación de los
                elementos de una interfaz.
              </li>
              <li>
                <span className="fw-semibold">Escalabilidad</span>: facilita la adaptación de la interfaz en diferentes
                dispositivos y resoluciones.
              </li>
              <li>
                <span className="fw-semibold">Familiaridad</span>: proporciona caminos claros e intuitivos a la persona
                usuaria al interactuar con el producto.
              </li>
              <li>
                <span className="fw-semibold">Legibilidad</span>: genera jerarquías para la percepción de los contenidos
                en grupos o módulos.{' '}
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Fundamentos UX',
      content: (
        <>
          <p className="pb-3">
            Creamos una grilla que sigue{' '}
            <a href="https://gcba.github.io/estandares/creamos_experiencias/dise%C3%B1o/" target="_blank">
              principios de diseño centrados en el usuario
            </a>
            , utilizando patrones conocidos y validados que aseguran que la información sea comprensible. Al idear
            nuestros estilos, nos apoyamos en{' '}
            <a href="https://lawsofux.com/es/" target="_blank">
              leyes UX
            </a>{' '}
            y en{' '}
            <a href="https://gcba.github.io/estandares/creamos_experiencias/dise%C3%B1o/gestalt/" target="_blank">
              principios de la Gestalt
            </a>
            .
          </p>

          <div className="list-informative pb-3">
            <ul className="list-informative-bullet">
              <li>
                <span className="fw-semibold">Ley de Fitts</span>: Estandariza la disposición y alineación de los
                elementos de una interfaz.
              </li>
              <li>
                <span className="fw-semibold">Ley de Miller</span>: Facilita la adaptación de la interfaz en diferentes
                dispositivos y resoluciones.
              </li>
              <li>
                <span className="fw-semibold">Ley de Hick</span>: Proporciona caminos claros e intuitivos a la persona
                usuaria al interactuar con el producto.
              </li>
              <li>
                <span className="fw-semibold">Ley de Proximidad</span>: Genera jerarquías para la percepción de los
                contenidos en grupos o módulos.{' '}
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Anatomía',
      content: (
        <>
          <p>
            Utilizamos una grilla de columnas para las interfaces de sus productos digitales. La grilla se compone de:
          </p>
          <ul className="list-informative-bullet mb-3">
            <li>
              <strong>Columnas</strong>: es la unidad vertical de la grilla donde se colocan y organizan los contenidos.
            </li>
            <li>
              <strong>
                Calles (<i>Gutters</i> en Inglés)
              </strong>
              : es el espacio que sirve para separar las columnas entre sí, y por lo tanto, modulan el contenido de
              forma horizontal. En Obelisco, el ancho de las calles está definido según cada <i>breakpoint</i>.
            </li>
            <li>
              <strong>Márgenes</strong>: mantienen centrado el contenedor visible y evitan que elementos clave estén
              demasiado cerca del borde de una ventana.
            </li>
          </ul>

          <Image
            src={`${basePath}/images/grilla/anatomia-grilla.svg`}
            alt="Referencia visual de la anatomia de grillas"
            width="800"
            height="200"
            layout="responsive"
          />
        </>
      ),
    },
    {
      title: 'Usos',
      content: (
        <>
          <p>
            La mayoría de los componentes están construidos en función de la grilla y se deben colocar sobre las
            columnas.
          </p>

          <div className="py-4">
            <div className="max-items-2">
              <div className="col">
                <Image
                  src={`${basePath}/images/grilla/uso-1.svg`}
                  alt="Referencia visual reglas de uso de grillas"
                  width="340"
                  height="170"
                  layout="responsive"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">Colocar los componentes sobre las columnas.</p>
                </div>
              </div>
              <div className="col">
                <Image
                  src={`${basePath}/images/grilla/uso-2.svg`}
                  alt="Referencia visual reglas de uso de grillas"
                  width="340"
                  height="170"
                  layout="responsive"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">No colocar componentes sobre las calles. </p>
                </div>
              </div>
              <div className="col">
                <Image
                  src={`${basePath}/images/grilla/uso-3.svg`}
                  alt="Referencia visual reglas de uso de grillas"
                  width="340"
                  height="170"
                  layout="responsive"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p className="mb-0">Ubicar los componentes dentro del área de columnas</p>
                </div>
              </div>
              <div className="col">
                <Image
                  src={`${basePath}/images/grilla/uso-4.svg`}
                  alt="Referencia visual reglas de uso de grillas"
                  width="340"
                  height="170"
                  layout="responsive"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p className="mb-0">No colocar componentes sobre los márgenes. </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: 'Breakpoints',
      content: (
        <>
          <p>
            Un <i>breakpoint</i> es un punto específico en el que el diseño de una página cambia para adaptarse a
            diferentes tamaños de pantalla (<i>viewports</i>). Esto permite que el contenido se ajuste de manera
            adecuada a dispositivos grandes y pequeños, asegurando que la experiencia del usuario sea siempre óptima.
          </p>

          <div className="responsive-scroll mt-4 mb-5" tabIndex={0}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="tb-text">
                    Breakpoint
                  </th>
                  <th scope="col" className="tb-text">
                    Dimensiones
                  </th>
                  <th scope="col" className="tb-text">
                    Ancho máximo
                  </th>
                  <th scope="col" className="tb-text">
                    Columnas
                  </th>
                  <th scope="col" className="tb-text">
                    Espaciado <i>(Gutter)</i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Extra small <code>(xs)</code>
                  </td>
                  <td>&lt;576px</td>
                  <td>100%</td>
                  <td>2</td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>
                    Small <code>(sm)</code>
                  </td>
                  <td>&ge;576px</td>
                  <td>540px</td>
                  <td>2</td>
                  <td>16px</td>
                </tr>
                <tr>
                  <td>
                    Medium <code>(md)</code>
                  </td>
                  <td>&ge;768px</td>
                  <td>720px</td>
                  <td>6</td>
                  <td>24px</td>
                </tr>
                <tr>
                  <td>
                    Large <code>(lg)</code>
                  </td>
                  <td>&ge;992px</td>
                  <td>720px</td>
                  <td>6</td>
                  <td>24px</td>
                </tr>
                <tr>
                  <td>
                    Extra large <code>(xl)</code>
                  </td>
                  <td>&ge;1200px</td>
                  <td>1140px</td>
                  <td>12</td>
                  <td>32px</td>
                </tr>
                <tr>
                  <td>
                    Extra extra large <code>(xxl)</code>
                  </td>
                  <td>&ge;1400px</td>
                  <td>1140px</td>
                  <td>12</td>
                  <td>32px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Dispositivos',
      content: (
        <>
          <p>
            Si bien la grilla se adapta a cualquier tamaño de pantalla, contamos con medidas estándar que facilitan
            proceso de diseño e implementación.
          </p>

          <ul className="list-informative-bullet">
            <li>
              <strong>Desktop (1366&nbsp;x&nbsp;1024 px):</strong> 12 columnas
            </li>
            <li>
              <strong>Tablet (768&nbsp;x&nbsp;1194 px):</strong> 6 columnas
            </li>
            <li>
              <strong>Mobile (360&nbsp;x&nbsp;640 px):</strong> 2 columnas
            </li>
          </ul>

          <div className="py-4">
            <Image
              src={`${basePath}/images/grilla/dispositivos.svg`}
              alt="Referencia visual de uso de grillas en diferentes dispositivos."
              width="711"
              height="411"
              layout="responsive"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Comportamiento',
      content: (
        <p>
          La grilla de Obelisco tiene un comportamiento responsivo basado en porcentajes, donde existen secciones
          definidas que ocupan siempre el mismo espacio, y otras secciones que van cambiando según el tamaño de la
          ventana, asegurando la distribución del contenido.
        </p>
      ),
    },
    {
      subtitle: 'Páginas de ancho completo',
      content: (
        <>
          <p>
            En esta distribución, el contenido de una página utilizando la grilla de Obelisco ocupa el 100 % del ancho
            del contenedor.
          </p>
          <div className="pt-2">
            <Image
              src={`${basePath}/images/grilla/ancho-completo.svg`}
              alt="Referencia visual de uso de grillas en pantalla ancho completo"
              width="711"
              height="411"
              layout="responsive"
            />
          </div>
        </>
      ),
    },
    {
      subtitle: 'Páginas con una sección lateral',
      content: (
        <>
          <p>
            En esta distribución, el contenido de una página utilizando la grilla de Obelisco está dividido en 2
            secciones: una columna lateral que ocupa un tercio (1/3) de la página, y el cuerpo de la página que ocupa
            dos tercios (2/3).
          </p>
          <div className="pt-2 mt-1">
            <div className="max-items-2">
              <div className="col">
                <Image
                  src={`${basePath}/images/grilla/lateral-1.svg`}
                  alt="Referencia visual reglas de uso de grillas en disposicion lateral."
                  width="340"
                  height="170"
                  layout="responsive"
                />
              </div>
              <div className="col">
                <Image
                  src={`${basePath}/images/grilla/lateral-2.svg`}
                  alt="Referencia visual reglas de uso de grillas en disposicion lateral."
                  width="340"
                  height="170"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Páginas en dispositivos móviles',
      content: (
        <>
          <p>
            En dispositivos móviles, el contenido de una página se organiza con otra estructura para asegurar el
            entendimiento de la información. En pantallas de tamaños <i>tablet</i> o <i>mobile</i>, las secciones se
            colocan una debajo de la otra y no existen secciones laterales.
          </p>
          <div className="pt-2 mb-5">
            <Image
              src={`${basePath}/images/grilla/mobile.svg`}
              alt="Referencia visual de uso de grillas en pantallas de dispositivos mobiles"
              width="711"
              height="411"
              layout="responsive"
            />
          </div>
        </>
      ),
    },
    {
      title: 'Accesibilidad',
      content: (
        <p>
          De acuerdo al&nbsp;
          <a href="https://www.w3.org/WAI/WCAG21/Understanding/reflow.html" target="_blank" rel="noopener noreferrer">
            Criterio de Éxito 1.4.10 Reflow
          </a>
          , es requisito que las grillas responsivas respondan al tamaño de la ventana del navegador sin perder
          información o funcionalidad.
        </p>
      ),
    },
  ];

  const SECTION_DEV = [
    {
      title: 'Contenedores de la página',
      content: (
        <>
          <p className="pb-3">
            La grilla de Obelisco cuenta con distintos anchos posibles para los contenedores de las páginas. Para cada
            ancho, hay que considerar cuál es el mejor para consumir e interactuar con los elementos de la página.
          </p>

          <CodeBox codeHTML={LAYOUTS}>
            <div
              className="bg-light py-5 px-md-4 rounded-3 mx-md-3"
              style={{ outline: '2px solid #E6EBF0', outlineOffset: '-2px' }}
            >
              <div className="container text-center mb-4">
                <div className="py-4 fw-semibold" style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}>
                  Container (100%)
                </div>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="col-12 col-xl-8">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      col-12 col-xl-8
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      col-12 col-xl-4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>

          <div className="list-informative" style={{ marginTop: '32px' }}>
            <ul className="list-informative-bullet">
              <li>
                <span className="fw-semibold">Ancho completo (100%)</span>: Excepción para páginas donde la interacción
                se beneficia de más espacio en pantalla, como gráficos y otras visualizaciones de datos o tableros.
              </li>
              <li>
                <span className="fw-semibold">Ancho predeterminado (col-8)</span>: De manera predeterminada, todas las
                páginas utilizan este ancho que ocupa 2/3 de la página. Es ideal para formularios, tablas con pocas
                columnas o páginas que se centran en contenido escrito.
              </li>
              <li>
                <span className="fw-semibold">Ancho mínimo (col-4)</span>: Corresponde a una columna lateral que ocupa
                1/3 de la página. Puede contener componentes tales como Bloque de trámite o Mapa.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      subtitle: 'Sistema de columnas',
      content: (
        <>
          <p>
            Para el breakpoint <code>xs</code> (extra small), se puede utilizar como clase, el formato:
          </p>
          <p className="text-center">
            <code>{`.col-{quantity}`}</code>
          </p>
          <p>
            En este caso, <code>{`{quantity}`}</code> es el número de columnas que ocupará el elemento, y puede ser un
            valor entre 1 y 12.
          </p>

          <p>
            Para los otros breakpoints como por ejemplo <code>sm</code>, <code>md</code>, <code>lg</code>,{' '}
            <code>xl</code> y <code>xxl</code>, se puede utilizar como clase, el formato:
          </p>
          <p className="text-center">
            <code>{`.col-{breakpoint}-{quantity}`}</code>
          </p>
          <p>
            Por ejemplo, las clases <code>.col-12.col-xl-8</code> indican que el elemento ocupará 12 columnas y que a
            partir del breakpoint <code>xl</code> (viewport de 1200px) ocupará 8 columnas.
          </p>
        </>
      ),
    },
    {
      title: 'Disposición en la página',
      content: (
        <>
          <p>
            A continuacion, se mencionan las disposiciones de los elementos en una página. Para componentes especificos
            como Accesos, Tarjetas, Destacado, o Calendario, existen clases específicas para su disposición.
          </p>
        </>
      ),
    },
    {
      subtitle: 'Disposición en 4 columnas',
      content: (
        <>
          <p className="mb-4">
            La disposición de los elementos es responsive, es decir que, en mobile se visualiza 1 columna, en tablet 2
            columnas, a partir del viewport de 1200px 3 columnas y a partir del viewport de 1400px 4 columnas.
          </p>
          <CodeBox codeHTML={FOUR_COLUMNS}>
            <div
              className="bg-light py-5 px-md-0 rounded-3 mx-md-2"
              style={{ outline: '2px solid #E6EBF0', outlineOffset: '-2px' }}
            >
              <div className="container text-center">
                <div className="max-items-4 text-center">
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      1
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      2
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      3
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      4
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Disposición en 3 columnas',
      content: (
        <>
          <p className="mb-4">
            La disposición de los elementos es responsive, es decir que, en mobile se visualiza 1 columna, en tablet 2
            columnas, y en desktop 3 columnas.
          </p>
          <CodeBox codeHTML={THREE_COLUMNS}>
            <div
              className="bg-light py-5 px-md-0 rounded-3 mx-md-2"
              style={{ outline: '2px solid #E6EBF0', outlineOffset: '-2px' }}
            >
              <div className="container">
                <div className="max-items-3 text-center">
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      1
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      2
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      3
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      4
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Disposición en 2 columnas',
      content: (
        <>
          <p className="mb-4">
            La disposición de los elementos es responsive, es decir que, en mobile se visualiza 1 columna, y en tablet y
            desktop 2 columnas.
          </p>
          <CodeBox codeHTML={TWO_COLUMNS}>
            <div
              className="bg-light py-5 px-md-0 rounded-3 mx-md-2"
              style={{ outline: '2px solid #E6EBF0', outlineOffset: '-2px' }}
            >
              <div className="container">
                <div className="max-items-2 text-center">
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      1
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      2
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      subtitle: 'Disposición en 1 columna',
      content: (
        <>
          <p className="mb-4">En mobile, tablet y desktop se visualiza 1 columna.</p>
          <CodeBox codeHTML={ONE_COLUMN}>
            <div
              className="bg-light py-5 px-md-0 rounded-3 mx-md-2"
              style={{ outline: '2px solid #E6EBF0', outlineOffset: '-2px' }}
            >
              <div className="container">
                <div className="max-items-1 text-center">
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      1
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      2
                    </div>
                  </div>
                  <div className="col">
                    <div
                      className="py-4 fw-semibold"
                      style={{ backgroundColor: '#F7E5FF', border: '2px dashed #9100CC' }}
                    >
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Grilla"
        description="La grilla es una estructura base que organiza elementos en una interfaz. Sirve para definir las secciones de un producto digital y distribuir los elementos internos asegurando la legibilidad, la usabilidad y la accesibilidad del contenido."
      />
      <Tabs sectionUx={SECTION_UX} sectionDev={SECTION_DEV} />
    </>
  );
};

export default GridDocs;
