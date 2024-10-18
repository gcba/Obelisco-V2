import Link from 'next/link';

import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

const UpdateComponents: React.FC = () => {
  const sections = [
    {
      title: 'Clases disponibles',
      content: (
        <>
          <MainDescription description="(Texto a modificar) Si tu proyecto es del GCBA/Gubernamental, deberías usar los componentes de Obelisco, basados en nuestro Sistema de Diseño. El cúal cumple los estándares de accesibilidad, y tienen continuo soporte.  " />
        </>
      ),
      h1: true,
      defaultTitle: true,
    },
    {
      id: 'section-1',
      title: 'Background',
      content: (
        <>
          <h4>Opacity</h4>

          <ul className="docs-list">
            <li>
              <code>
                bg-success  bg-opacity-75
              </code>
            </li>
            <li>
              <code>
                bg-success  bg-opacity-50
              </code>
            </li>
            <li>
              <code>
                bg-success  bg-opacity-25
              </code>
            </li>
            <li>
              <code>
                bg-success  bg-opacity-10
              </code>
            </li>
          </ul>
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Bordes',
      content: (
        <>

          {/* Aditivo */}
          <h4>Aditivo</h4>
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

          {/* Sustractivo */}
          <h4>Sustractivo</h4>
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

          {/* Colores del borde */}
          <h4>Colores del borde</h4>
          <ul className="docs-list">
            <li>
              <code>border border-primary</code>
            </li>
            <li>
              <code>border border-primary-subtle</code>
            </li>
            <li>
              <code>border border-secondary</code>
            </li>
            <li>
              <code>border border-secondary-subtle</code>
            </li>
            <li>
              <code>border border-success</code>
            </li>
            <li>
              <code>border border-success-subtle</code>
            </li>
            <li>
              <code>border border-danger</code>
            </li>
            <li>
              <code>border border-danger-subtle</code>
            </li>
            <li>
              <code>border border-warning</code>
            </li>
            <li>
              <code>border border-warning-subtle</code>
            </li>
            <li>
              <code>border border-info</code>
            </li>
            <li>
              <code>border border-info-subtle</code>
            </li>
            <li>
              <code>border border-light</code>
            </li>
            <li>
              <code>border border-light-subtle</code>
            </li>
            <li>
              <code>border border-dark</code>
            </li>
            <li>
              <code>border border-dark-subtle</code>
            </li>
            <li>
              <code>border border-black</code>
            </li>
            <li>
              <code>border border-white</code>
            </li>
          </ul>
          {/* Colores del borde */}

          {/* Opacidad */}
          <h4>Opacidad</h4>
          <ul className="docs-list">
            <li>
              <code>border border-success</code>
            </li>
            <li>
              <code>border border-success border-opacity-75</code>
            </li>
            <li>
              <code>border border-success border-opacity-50</code>
            </li>
            <li>
              <code>border border-success border-opacity-25</code>
            </li>
            <li>
              <code>border border-success border-opacity-10</code>
            </li>
          </ul>
          {/* Opacidad */}

          {/* Width */}
          <h4>Width</h4>
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

          {/* Redondeado */}
          <h4>Redondeado</h4>
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

          {/* Tamaños */}
          <h4>Tamaños</h4>
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
      id: 'section-3',
      title: 'Texto',
      content: (
        <>

          {/* Texto - Opacidad */}
          <h4>Texto - Opacidad</h4>
          <ul className="docs-list">
            <li>
              <code>text-primary text-opacity-75</code>
            </li>
            <li>
              <code>text-primary text-opacity-50</code>
            </li>
            <li>
              <code>text-primary text-opacity-25</code>
            </li>
          </ul>
          {/* Texto - Opacidad */}
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Display',
      content: (
        <>

          {/* Display */}
          <h4>Display</h4>
          <div>
            <p>Las clases se nombran utilizando el formato:</p>

            <p className='mt-3'>Para xs:</p>
            <code>{`.d-{value}`}</code>

            <p className='mt-3'>Para sm y md, lg y xl:</p>
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
      id: 'section-5',
      title: 'Flex',
      content: (
        <>
          {/* Flex */}
          <h4>Flex</h4>

          <p className='mt-4'>Clase base para flexbox:</p>
          <code>.d-flex</code>

          <p className='mt-4'>Clases para flexbox con breakpoints:</p>
          <code>{`.d-{breakpoint}-flex`}</code><br></br>
          <code>{`.d-{breakpoint}-inline-flex`}</code>

          <p>Donde <code>{`{breakpoint}`}</code> puede ser uno de los siguientes valores:</p>
          <ul className="docs-list">
            <li><code>sm</code></li>
            <li><code>md</code></li>
            <li><code>lg</code></li>
            <li><code>xl</code></li>
            <li><code>xxl</code></li>
          </ul>
          {/* Flex */}

          {/* Dirección */}
          <h4>Dirección</h4>
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

          {/* Justify content */}
          <h4>Justify content</h4>
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

          {/* Align items */}
          <h4>Align items</h4>
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

          {/* Align self */}
          <h4>Align self</h4>
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

          {/* Order */}
          <h4>Order</h4>
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

          {/* Align content */}
          <h4>Align content</h4>
          <p><code>{`{alignment}`}</code> es uno de: <code>start, end, center, between, around, stretch </code></p>

          {/* esto chequear */}
          <p className='mt-4'>Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`} es uno de: sm, md, lg, xl, xxl</code>:</p>
          <p><code>d-flex align-content-{`{breakpoint}`}-{`{alignment}`} flex-wrap</code> </p>
          {/* Align content */}

        </>
      ),
    },
    {
      id: 'section-6',
      title: 'Interacciones',
      content: (
        <>
          <h4>Interacciones</h4>
          <ul className="docs-list">
            <li><code>.user-select-all</code></li>
            <li><code>.user-select-auto</code></li>
            <li><code>.user-select-none</code></li>
          </ul>
        </>
      ),
    },
    {
      id: 'section-7',
      title: 'Link',
      content: (
        <>

        </>
      ),
    },
    {
      id: 'section-8',
      title: '',
      content: (
        <>

        </>
      ),
    },
    {
      id: 'section-9',
      title: '',
      content: (
        <>

        </>
      ),
    },
    {
      id: 'section-10',
      title: '',
      content: (
        <>

        </>
      ),
    },
    {
      id: 'section-11',
      title: '',
      content: (
        <>

        </>
      ),
    },
    {
      id: 'section-12',
      title: '',
      content: (
        <>

        </>
      ),
    },
    {
      id: 'section-13',
      title: '',
      content: (
        <>

        </>
      ),
    },
    {
      id: 'section-14',
      title: '',
      content: (
        <>

        </>
      ),
    },
  ];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/class-documentation">Documentacion de Clases</Link>
          </li>
        </ol>
      </nav>
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default UpdateComponents;
