import Image from 'next/image';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { FOUR_COLUMNS, LAYOUTS, ONE_COLUMN, THREE_COLUMNS, TWO_COLUMNS } from './code-views';


const basePath = '/Obelisco-V2';

const GridDocs: React.FC = () => {
  const SECTION_UX = [
    {
      id: 'section-1',
      title: '¿Por qué usar una grilla?',
      content: (
        <>
          <div className="pt-2">
            <div className="row">
              <div className="col-md-6 mb-4">
                <span className="material-symbols-rounded">dashboard</span>
                <p className="fw-bold m-0">Coherencia visual</p>
                <p>Estandariza la disposición y alineación de los elementos de una interfaz.</p>
              </div>
              <div className="col-md-6 mb-4">
                <span className="material-symbols-rounded">devices</span>
                <p className="fw-bold m-0">Escalabilidad</p>
                <p>Facilita la adaptación de la interfaz en diferentes dispositivos y resoluciones.</p>
              </div>
              <div className="col-md-6 mb-4">
                <span className="material-symbols-rounded">ads_click</span>
                <p className="fw-bold m-0">Familiaridad</p>
                <p>Proporciona caminos claros e intuitivos a la persona usuaria al interactuar con el producto.</p>
              </div>
              <div className="col-md-6 mb-4">
                <span className="material-symbols-rounded">visibility</span>
                <p className="fw-bold m-0">Legibilidad</p>
                <p>Genera jerarquías para la percepción de los contenidos en grupos o módulos.</p>
              </div>
            </div>
          </div>
        </>
      ),
      h1: false,
    },
    {
      id: 'section-2',
      title: 'Fundamentos constructivos',
      content: (
        <>
          <p>
            Creamos una grilla que sigue{' '}
            <a
              href="https://gcba.github.io/estandares/creamos_experiencias/dise%C3%B1o/"
              target="_blank"
              aria-label="Más información sobre principios de diseño centrados en el usuario"
            >
              principios de diseño centrados en el usuario
            </a>
            , utilizando patrones conocidos y validados que aseguren que la información sea comprensible. Al idear
            nuestros estilos, nos apoyamos en{' '}
            <a href="https://lawsofux.com/es/" target="_blank" aria-label="Más información sobre leyes UX">
              leyes UX
            </a>{' '}
            y en{' '}
            <a
              href="https://gcba.github.io/estandares/creamos_experiencias/dise%C3%B1o/gestalt/"
              target="_blank"
              aria-label="Más información sobre principios de la Gestalt"
            >
              principios de la Gestalt
            </a>
            .
          </p>

          <div className="pt-4 mt-1">
            <div className="row">
              <div className="col-md-6 mb-4">
                <p className="fw-bold m-0">Ley de Fitts</p>
                <hr className="m-1" />
                <p>
                  Refuerza la disposición de los elementos interactivos, optimizando su colocación para que sean más
                  fáciles y rápidos de alcanzar.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <p className="fw-bold m-0">Ley de Miller</p>
                <hr className="m-1" />
                <p>
                  Favorece la agrupación y estructura del contenido de forma modular, permitiendo que la persona usuaria
                  procese la información en bloques más manejables.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <p className="fw-bold m-0">Ley de Hick</p>
                <hr className="m-1" />
                <p>
                  Permite organizar los contenidos de forma más clara, lo que reduce la complejidad visual y facilita
                  las decisiones de la persona usuaria.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <p className="fw-bold m-0">Ley de Proximidad</p>
                <hr className="m-1" />
                <p>
                  Facilita el control del espaciado entre elementos de manera coherente, reforzando las relaciones
                  visuales y jerárquicas entre los componentes de la interfaz.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      h1: false,
    },
    {
      id: 'section-3',
      title: 'Anatomía',
      content: (
        <>
          <p>
            Obelisco utiliza una grilla de columnas para las interfaces de sus productos digitales. La grilla se compone
            de:
          </p>
          <ul>
            <li>
              <strong>Columnas</strong>: es la unidad vertical de la grilla donde se colocan y organizan los contenidos.
            </li>
            <li>
              <strong>Calles (Gutters en Inglés)</strong>: es el espacio que sirve para separar las columnas entre sí, y
              por lo tanto, modulan el contenido de forma horizontal. En Obelisco, el ancho de las calles está definido
              según cada <i>breakpoint</i>.
            </li>
            <li>
              <strong>Márgenes</strong>: mantienen centrado el contenedor visible y evitan que elementos clave estén
              demasiado cerca del borde de una ventana.
            </li>
          </ul>

          <div className="container">
            <Image
              src={`${basePath}/images/grilla/anatomia-grilla.svg`}
              alt="Referencia visual de la anatomia de grillas"
              width="800"
              height="200"
              layout="responsive"
            />
          </div>
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Usos',
      content: (
        <>
          <p>
            La mayoría de los componentes están construidos en función de la grilla y se deben colocar sobre las
            columnas.
          </p>

          <div className="container pt-4 mt-1">
            <div className="row">
              <div className="col-md-6 mb-4">
                <Image
                  src={`${basePath}/images/grilla/uso-1.svg`}
                  alt="Referencia visual reglas de uso de grillas"
                  width="340"
                  height="170"
                  layout="responsive"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p>Colocar los componentes sobre las columnas.</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <Image
                  src={`${basePath}/images/grilla/uso-2.svg`}
                  alt="Referencia visual reglas de uso de grillas"
                  width="340"
                  height="170"
                  layout="responsive"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p>No colocar componentes sobre las calles. </p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <Image
                  src={`${basePath}/images/grilla/uso-3.svg`}
                  alt="Referencia visual reglas de uso de grillas"
                  width="340"
                  height="170"
                  layout="responsive"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-success">check</span>
                  <p>Ubicar los componentes dentro del área de columnas</p>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <Image
                  src={`${basePath}/images/grilla/uso-4.svg`}
                  alt="Referencia visual reglas de uso de grillas"
                  width="340"
                  height="170"
                  layout="responsive"
                />
                <div className="d-flex pt-3">
                  <span className="material-symbols-rounded text-danger">close</span>
                  <p>No colocar componentes sobre los márgenes. </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'section-5',
      title: 'Breakpoints',
      content: (
        <>
          <p>
            Un <i>breakpoint</i> es un punto específico en el que el diseño de una página cambia para adaptarse a
            diferentes tamaños de pantalla (<i>viewports</i>). Esto permite que el contenido se ajuste de manera
            adecuada a dispositivos grandes y pequeños, asegurando que la experiencia del usuario sea siempre óptima.
          </p>

          <div className="responsive-scroll mt-4" tabIndex={0}>
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Extra small</td>
                  <td>&lt;576px</td>
                  <td>100%</td>
                </tr>
                <tr>
                  <td>Small</td>
                  <td>&ge;576px</td>
                  <td>540px</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td>&ge;768px</td>
                  <td>720px</td>
                </tr>
                <tr>
                  <td>Large</td>
                  <td>&ge;992px</td>
                  <td>960px</td>
                </tr>
                <tr>
                  <td>Extra large</td>
                  <td>&ge;1200px</td>
                  <td>1140px</td>
                </tr>
                <tr>
                  <td>Extra extra large</td>
                  <td>&ge;1400px</td>
                  <td>1320px</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      id: 'section-6',
      title: 'Dispositivos',
      content: (
        <>
          <p>
            Si bien la grilla se adapta a cualquier tamaño de pantalla, contamos con medidas estándar que facilitan
            proceso de diseño e implementación.
          </p>

          <ul>
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

          <div className="container pt-4">
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
      id: 'section-7',
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
      id: 'section-8',
      title: 'Páginas de ancho completo',
      content: (
        <>
          <p>
            En esta distribución, el contenido de una página utilizando la grilla de Obelisco ocupa el 100 % del ancho
            del contenedor.
          </p>
          <div className="container pt-4">
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
      id: 'section-9',
      title: 'Páginas con una sección lateral',
      content: (
        <>
          <p>
            En esta distribución, el contenido de una página utilizando la grilla de Obelisco está dividido en 2
            secciones: una columna lateral que ocupa un tercio (<sup>1</sup>/<sub>3</sub>) de la página, y el cuerpo de
            la página que ocupa dos tercios (<sup>2</sup>/<sub>3</sub>).
          </p>
          <div className="container pt-4 mt-1">
            <div className="row">
              <div className="col-md-6 mb-4">
                <Image
                  src={`${basePath}/images/grilla/lateral-1.svg`}
                  alt="Referencia visual reglas de uso de grillas en disposicion lateral."
                  width="340"
                  height="170"
                  layout="responsive"
                />
              </div>
              <div className="col-md-6 mb-4">
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
      id: 'section-10',
      title: 'Páginas en dispositivos móviles',
      content: (
        <>
          <p>
            En dispositivos móviles, el contenido de una página se organiza con otra estructura para asegurar el
            entendimiento de la información. En pantallas de tamaños <i>tablet</i> o <i>mobile</i>, las secciones se
            colocan una debajo de la otra y no existen secciones laterales.
          </p>
          <div className="container pt-4">
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
      id: 'section-11',
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
      id: 'section-1',
      title: 'Layouts',
      content: (
        <>
          <CodeBox codeHTML={LAYOUTS}>
            <div className="container text-center text-white">
              <div className="bg-primary py-2">container</div>
            </div>
            <br />
            <div className="container text-white text-center">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="bg-primary py-2">col-12 col-lg-8</div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="bg-primary py-2">col-12 col-lg-4</div>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
      h1: false,
    },
    {
      id: 'section-2',
      title: 'Disposiciones',
      content: (
        <>
          <CodeBox codeHTML={FOUR_COLUMNS}>
            <div className="container">
              <h3>Cuatro columnas</h3>
              <div className="max-items-4 text-white text-center">
                <div className="col">
                  <div className="bg-primary py-2">1</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">2</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">3</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">4</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">5</div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={THREE_COLUMNS}>
            <div className="container">
              <h3>Tres columnas</h3>
              <div className="max-items-3 text-white text-center">
                <div className="col">
                  <div className="bg-primary py-2">1</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">2</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">3</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">4</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">5</div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={TWO_COLUMNS}>
            <div className="container">
              <h3>Dos columnas</h3>
              <div className="max-items-2 text-white text-center">
                <div className="col">
                  <div className="bg-primary py-2">1</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">2</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">3</div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={ONE_COLUMN}>
            <div className="container">
              <h3>Una columna</h3>
              <div className="max-items-1 text-white text-center">
                <div className="col">
                  <div className="bg-primary py-2">1</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">2</div>
                </div>
                <div className="col">
                  <div className="bg-primary py-2">3</div>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <br />
        </>
      ),
      h1: false,
    },
  ];

  return (
    <>
      <h1 className="mb-4">Grilla</h1>
      <p className="lead">
        La grilla es una estructura base que organiza elementos en una interfaz. Sirve para definir las secciones de un
        producto digital y distribuir los elementos internos asegurando la legibilidad, la usabilidad y la accesibilidad
        del contenido.
      </p>
      
      <Tabs>
        <DocumentationTemplate sections={SECTION_UX} />
        <DocumentationTemplate sections={SECTION_DEV} />
      </Tabs>
    </>
  );
};

export default GridDocs;
