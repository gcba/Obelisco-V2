import Link from 'next/link';

import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

const UpdateComponents: React.FC = () => {
  const sections = [
    {
      title: 'Clases disponibles',
      content: (
        <>
          <MainDescription description="En la siguiente sección podemos encontrar las clases heredadas de Bootstrap 5, disponibles en Obelisco las cúales te permiten facilitar el uso y el armado del sistema de diseño." />
        </>
      ),
      h1: true,
      defaultTitle: true,
    },
    {
      id: 'section-1',
      title: 'Bordes',
    },
    {
      id: 'section-2',
      title: '- Aditivo',
      content: (
        <>
          {/* Aditivo */}
          <ul className="docs-list">
            <li>
              <code>
                border
              </code>
            </li>
            <li>
              <code>
                border-top
              </code>
            </li>
            <li>
              <code>
                border-right
              </code>
            </li>
            <li>
              <code>
                border-bottom
              </code>
            </li>
            <li>
              <code>
                border-left
              </code>
            </li>
          </ul>
          {/* Aditivo */}
        </>
      ),
    },
    {
      id: 'section-3',
      title: '- Sustractivo',
      content: (
        <>
          {/* Sustractivo */}
          <ul className="docs-list">
            <li>
              <code>
                border-0
              </code>
            </li>
            <li>
              <code>
                border-top-0
              </code>
            </li>
            <li>
              <code>
                border-right-0
              </code>
            </li>
            <li>
              <code>
                border-bottom-0
              </code>
            </li>
            <li>
              <code>
                border-left-0
              </code>
            </li>
          </ul>
          {/* Sustractivo */}
        </>
      ),
    },
    {
      id: 'section-4',
      title: '- Width',
      content: (
        <>
          {/* Width */}
          <ul className="docs-list">
            <li>
              <code>border border-1</code>
            </li>
            <li>
              <code>border border-2</code>
            </li>
            <li>
              <code>border border-3</code>
            </li>
            <li>
              <code>border border-4</code>
            </li>
            <li>
              <code>border border-5</code>
            </li>
          </ul>
          {/* Width */}
        </>
      ),
    },
    {
      id: 'section-5',
      title: '- Redondeado',
      content: (
        <>
          {/* Redondeado */}
          <ul className="docs-list">
            <li>
              <code>rounded</code>
            </li>
            <li>
              <code>rounded-top</code>
            </li>
            <li>
              <code>rounded-end</code>
            </li>
            <li>
              <code>rounded-bottom</code>
            </li>
            <li>
              <code>rounded-start</code>
            </li>
            <li>
              <code>rounded-circle</code>
            </li>
            <li>
              <code>rounded-pill</code>
            </li>

          </ul>
          {/* Redondeado */}
        </>
      ),
    },
    {
      id: 'section-6',
      title: '- Tamaños',
      content: (
        <>
          {/* Tamaños */}
          <ul className="docs-list">
            <li>
              <code>rounded-0</code>
            </li>
            <li>
              <code>rounded-1</code>
            </li>
            <li>
              <code>rounded-2</code>
            </li>
            <li>
              <code>rounded-3</code>
            </li>
            <li>
              <code>rounded-4</code>
            </li>
            <li>
              <code>rounded-5</code>
            </li>
          </ul>
          {/* Tamaños */}
        </>
      ),
    },
    {
      id: 'section-7',
      title: 'Texto',
    },
    {
      id: 'section-8',
      title: ' - Alineamiento de Texto',
      content: (
        <>

          {/* Texto - Alineamiento de Texto */}
          <ul className="docs-list">
            <li><code>text-start</code></li>
            <li><code>text-center</code></li>
            <li><code>text-end</code></li>
            <li><code>text-sm-end</code></li>
            <li><code>text-md-end</code></li>
            <li><code>text-lg-end</code></li>
            <li><code>text-xl-end</code></li>
            <li><code>text-xxl-end</code></li>
          </ul>
          {/* Texto - Alineamiento de Texto */}
        </>
      ),
    },
    {
      id: 'section-9',
      title: ' - Peso e Itálica',
      content: (
        <>

          {/* Texto - Peso e Itálica */}
          <ul className="docs-list">
            <li><code>fw-bold</code></li>
            <li><code>fw-bolder</code></li>
            <li><code>fw-semibold</code></li>
            <li><code>fw-medium</code></li>
            <li><code>fw-normal</code></li>
            <li><code>fw-light</code></li>
            <li><code>fw-lighter</code></li>
            <li><code>fst-italic</code></li>
            <li><code>fst-normal</code></li>
          </ul>
          {/* Texto - Peso e Itálica */}
        </>
      ),
    },
    {
      id: 'section-10',
      title: 'Display',
      content: (
        <>

          {/* Display */}
          <div>
            <p>Las clases se nombran utilizando el formato:</p>

            <p className='mt-3'>Para xs:</p>
            <code>{`.d-{value}`}</code>

            <p className='mt-3'>Para sm y md, lg, xl y xxl:</p>
            <code>{`.d-{breakpoint}-{value}`}</code>

            <p className='mt-3' >Donde <code>{`{value}`}</code> es uno de:</p>

            <ul className="docs-list">
              <li><code>none</code></li>
              <li><code>inline</code></li>
              <li><code>inline-block</code></li>
              <li><code>block</code></li>
              <li><code>table</code></li>
              <li><code>table-cell</code></li>
              <li><code>table-row</code></li>
              <li><code>flex</code></li>
              <li><code>inline-flex</code></li>
            </ul>
          </div>
          {/* Display */}
        </>
      ),
    },
    {
      id: 'section-11',
      title: 'Flex',
      content: (
        <>
          {/* Flex */}

          <p className='mt-4'>Clase base para flexbox:</p>
          <code>.d-flex</code>

          <p className='mt-4'>Clases para flexbox con breakpoints:</p>
          <code>{`.d-{breakpoint}-flex`}</code><br></br>

          <p>Donde <code>{`{breakpoint}`}</code> puede ser uno de los siguientes valores:</p>
          <ul className="docs-list">
            <li><code>sm</code></li>
            <li><code>md</code></li>
            <li><code>lg</code></li>
            <li><code>xl</code></li>
            <li><code>xxl</code></li>
          </ul>
          {/* Flex */}
        </>
      ),
    },
    {
      id: 'section-12',
      title: '- Dirección',
      content: (
        <>
          {/* Dirección */}
          <ul className="docs-list">
            <li><code>.d-flex flex-row </code></li>
            <li><code>.d-flex flex-column </code></li>
            <li><code>.d-flex flex-row-reverse </code></li>
            <li><code>.d-flex flex-column-reverse </code></li>
          </ul>

          <p className='mt-4'>Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`}</code> es uno de: sm, md, lg, xl, xxl:</p>
          <ul className="docs-list">
            <li><code>{`.flex-{breakpoint}-row`}</code></li>
            <li><code>{`.flex-{breakpoint}-row-reverse`}</code></li>
            <li><code>{`.flex-{breakpoint}-column`}</code></li>
            <li><code>{`.flex-{breakpoint}-column-reverse`}</code></li>
          </ul>
          {/* Dirección */}
        </>
      ),
    },
    {
      id: 'section-13',
      title: '- Justify content ',
      content: (
        <>
          {/* Justify content */}
          <ul className="docs-list">
            <li><code>{`.justify-content-start`}</code></li>
            <li><code>{`.justify-content-end`}</code></li>
            <li><code>{`.justify-content-center`}</code></li>
            <li><code>{`.justify-content-between`}</code></li>
            <li><code>{`.justify-content-around`}</code></li>
            <li><code>{`.justify-content-evenly`}</code></li>
          </ul>

          <p className='mt-4'>Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`}</code> es uno de: sm, md, lg, xl, xxl:</p>
          <ul className="docs-list">
            <li><code>{`.justify-content-{breakpoint}-start`}</code></li>
            <li><code>{`.justify-content-{breakpoint}-end`}</code></li>
            <li><code>{`.justify-content-{breakpoint}-center`}</code></li>
            <li><code>{`.justify-content-{breakpoint}-between`}</code></li>
            <li><code>{`.justify-content-{breakpoint}-around`}</code></li>
            <li><code>{`.justify-content-{breakpoint}-evenly`}</code></li>
          </ul>
          {/* Justify content */}
        </>
      ),
    },
    {
      id: 'section-14',
      title: '- Align items',
      content: (
        <>
          {/* Align items */}
          <ul className="docs-list">
            <li><code>{`.align-items-start`}</code></li>
            <li><code>{`.align-items-end`}</code></li>
            <li><code>{`.align-items-center`}</code></li>
            <li><code>{`.align-items-between`}</code></li>
            <li><code>{`.align-items-around`}</code></li>
            <li><code>{`.align-items-evenly`}</code></li>
          </ul>

          <p className='mt-4'>Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`}</code> es uno de: sm, md, lg, xl, xxl:</p>
          <ul className="docs-list">
            <li><code>{`.align-items-{breakpoint}-start`}</code></li>
            <li><code>{`.align-items-{breakpoint}-end`}</code></li>
            <li><code>{`.align-items-{breakpoint}-center`}</code></li>
            <li><code>{`.align-items-{breakpoint}-between`}</code></li>
            <li><code>{`.align-items-{breakpoint}-around`}</code></li>
            <li><code>{`.align-items-{breakpoint}-evenly`}</code></li>
          </ul>
          {/* Align items */}
        </>
      ),
    },
    {
      id: 'section-15',
      title: '- Align self',
      content: (
        <>
          {/* Align self */}
          <ul className="docs-list">
            <li><code>{`.align-self-start`}</code></li>
            <li><code>{`.align-self-end`}</code></li>
            <li><code>{`.align-self-center`}</code></li>
            <li><code>{`.align-self-baseline`}</code></li>
            <li><code>{`.align-self-stretch`}</code></li>
          </ul>

          <p className='mt-4'>Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`}</code> es uno de: sm, md, lg, xl, xxl:</p>
          <ul className="docs-list">
            <li><code>{`.align-self-{breakpoint}-start`}</code></li>
            <li><code>{`.align-self-{breakpoint}-end`}</code></li>
            <li><code>{`.align-self-{breakpoint}-center`}</code></li>
            <li><code>{`.align-self-{breakpoint}-baseline`}</code></li>
            <li><code>{`.align-self-{breakpoint}-stretch`}</code></li>
          </ul>
          {/* Align self */}
        </>
      ),
    },
    {
      id: 'section-16',
      title: '- Order',
      content: (
        <>
          {/* Order */}
          <ul className="docs-list">
            <li><code>{`.order-0`}</code></li>
            <li><code>{`.order-1`}</code></li>
            <li><code>{`.order-2`}</code></li>
            <li><code>{`.order-3`}</code></li>
            <li><code>{`.order-4`}</code></li>
            <li><code>{`.order-5`}</code></li>
            <li><code>{`.order-first`}</code></li>
            <li><code>{`.order-last`}</code></li>
          </ul>

          <p className='mt-4'>Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`}</code> es uno de: sm, md, lg, xl, xxl:</p>
          <ul className="docs-list">
            <li><code>{`.order-{breakpoint}-0`}</code></li>
            <li><code>{`.order-{breakpoint}-1`}</code></li>
            <li><code>{`.order-{breakpoint}-2`}</code></li>
            <li><code>{`.order-{breakpoint}-3`}</code></li>
            <li><code>{`.order-{breakpoint}-4`}</code></li>
            <li><code>{`.order-{breakpoint}-5`}</code></li>
            <li><code>{`.order-{breakpoint}-first`}</code></li>
            <li><code>{`.order-{breakpoint}-last`}</code></li>
          </ul>
          {/* Order */}
        </>
      ),
    },
    {
      id: 'section-17',
      title: '- Align content',
      content: (
        <>
          {/* Align content */}
          <p><code>{`{alignment}`}</code> es uno de: <code>start, end, center, between, around, stretch </code></p>

          {/* esto chequear */}
          <p className='mt-4'>Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`} es uno de: sm, md, lg, xl, xxl</code>:</p>
          <p><code>d-flex align-content-{`{breakpoint}`}-{`{alignment}`} flex-wrap</code> </p>
          {/* Align content */}
        </>
      ),
    },
    {
      id: 'section-18',
      title: 'Overflow',
      content: (
        <>
          <ul className="docs-list">
            <li><code>overflow-auto</code></li>
            <li><code>overflow-hidden</code></li>
            <li><code>overflow-visible</code></li>
            <li><code>overflow-scroll</code></li>
          </ul>

          <p>Donde <code>{`{direction}`}</code> Toma <code>x</code> o <code>y</code> cómo valores, se puede indicar que sólo funcione horizontal o verticalmente</p>

          <ul className="docs-list">
            <li><code>{`overflow-{direction}-auto`}</code></li>
            <li><code>{`overflow-{direction}-hidden`}</code></li>
            <li><code>{`overflow-{direction}-visible`}</code></li>
            <li><code>{`overflow-{direction}-scroll`}</code></li>
          </ul>
        </>
      ),
    },
    {
      id: 'section-19',
      title: 'Position',
      content: (
        <>
          <p>La forma de usarlo es <code>{`{property}-{position}`}</code></p>
          <p>Donde <code>{`{property}`}</code> es uno de: </p>

          <ul className="docs-list">
            <li><code>{`top`}</code></li>
            <li><code>{`start`}</code></li>
            <li><code>{`bottom`}</code></li>
            <li><code>{`end`}</code></li>
          </ul>

          <p>Donde <code>{`{position}`}</code> es uno de:  </p>

          <ul className="docs-list">
            <li><code>{`0`}</code></li>
            <li><code>{`50`}</code></li>
            <li><code>{`100`}</code></li>
          </ul>

        </>
      ),
    },
    {
      id: 'section-20',
      title: 'Shadows',
      content: (
        <>
          <ul className="docs-list">
            <li><code>{`shadow-none`}</code></li>
            <li><code>{`shadow-sm`}</code></li>
            <li><code>{`shadow`}</code></li>
            <li><code>{`shadow-lg`}</code></li>
          </ul>
        </>
      ),
    },
    {
      id: 'section-21',
      title: 'Sizing',
      content: (
        <>
          <p>Estas clases, funcionan de manera relativa al contenedor padre. </p>
          <p>Donde <code>{`{quantity}`}</code> es uno de: <code>25, 50, 75, 100, auto</code> </p>

          <ul className="docs-list">
            <li><code>{`w-{quantity}`}</code></li>
            <li><code>{`h-{quantity}`}</code></li>
          </ul>

          <p>Ancho y alto máximo 100%. </p>

          <ul className="docs-list">
            <li><code>{`max-height`}</code></li>
            <li><code>{`max-width`}</code></li>
          </ul>

          <p>Ancho y alto relativo el viewport. </p>

          <ul className="docs-list">
            <li><code>{`min-vw-100`}</code></li>
            <li><code>{`min-vh-100`}</code></li>
            <li><code>{`vw-100`}</code></li>
            <li><code>{`vh-100`}</code></li>
          </ul>

        </>
      ),
    },
    {
      id: 'section-22',
      title: 'Espaciados',
      content: (
        <>
          <p>Para <code>{`xs`}</code> <br /> <code>{`{propiedad}-{lado}--{tamaño} `}</code> </p>

          <p>Para <code>{`sm, md, lg, xl y xxl`}</code> <br /> <code>{`{propiedad}-{lado}-{breakpoint}--{tamaño} `}</code> </p>

          <p>Donde <code>{`{propiedad}`}</code> es uno de:</p>
          <ul className="docs-list">
            <li><code>{`m`}</code> - para margin</li>
            <li><code>{`p`}</code> - para padding</li>
          </ul>

          <p>Donde <code>{`{lado}`}</code> es uno de:</p>
          <ul className="docs-list">
            <li><code>{`t`}</code> - para <code>margin</code> o <code>padding</code> <code>top</code></li>
            <li><code>{`b`}</code> - para <code>margin</code> o <code>padding</code> <code>bottom</code></li>
            <li><code>{`s`}</code> - para <code>margin</code> o <code>padding</code> <code>left</code></li>
            <li><code>{`s`}</code> - para <code>margin</code> o <code>padding</code> <code>right</code></li>
            <li><code>{`x`}</code> - para <code>margin</code> o <code>padding</code> | <code>left</code> y <code>right</code></li>
            <li><code>{`y`}</code> - para <code>margin</code> o <code>padding</code> | <code>top</code> y <code>bottom</code></li>
            <li><code>{`nada`}</code> - para que aplique a los 4 lados del elemento</li>
          </ul>
        </>
      ),
    }
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
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default UpdateComponents;