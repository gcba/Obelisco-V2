import Link from 'next/link';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

const sections = [
  {
    title: 'Accesos',
    content: (
      <>
        <p>
          Disposición de{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/access#section-5" target="_blank">
            Accesos
          </a>
          .
        </p>

        <ul className="docs-list">
          <li>
            <code>access-items-4</code>
          </li>
          <li>
            <code>access-items-4 row-cols-md-1</code>
          </li>
          <li>
            <code>access-items-3</code>
          </li>
          <li>
            <code>access-items-3 row-cols-md-1</code>
          </li>
          <li>
            <code>access-items-1</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Background',
    content: (
      <>
        <p>
          Estas son las clases de nuestra paleta de colores{' '}
          <a target="_blank" href="https://gcba.github.io/Obelisco-V2/components/colors">
            {' '}
            theme-colors
          </a>
          .
        </p>
        <ul className="docs-list">
          <li>
            <code>bg-primary</code>
          </li>
          <li>
            <code>bg-secondary</code>
          </li>
          <li>
            <code>bg-success</code>
          </li>
          <li>
            <code>bg-danger</code>
          </li>
          <li>
            <code>bg-warning</code>
          </li>
          <li>
            <code>bg-info</code>
          </li>
          <li>
            <code>bg-tertiary</code>
          </li>
          <li>
            <code>bg-light</code>
          </li>
          <li>
            <code>bg-dark</code>
          </li>
          <li>
            <code>bg-berries</code>
          </li>
          <li>
            <code>bg-sky</code>
          </li>
          <li>
            <code>form-bg-light</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Bordes',
  },
  {
    subtitle: 'Aditivo',
    content: (
      <>
        {/* Aditivo */}
        <ul className="docs-list">
          <li>
            <code>border</code>
          </li>
          <li>
            <code>border-top</code>
          </li>
          <li>
            <code>border-right</code>
          </li>
          <li>
            <code>border-bottom</code>
          </li>
          <li>
            <code>border-left</code>
          </li>
        </ul>
        {/* Aditivo */}
      </>
    ),
  },
  {
    subtitle: 'Sustractivo',
    content: (
      <>
        {/* Sustractivo */}
        <ul className="docs-list">
          <li>
            <code>border-0</code>
          </li>
          <li>
            <code>border-top-0</code>
          </li>
          <li>
            <code>border-right-0</code>
          </li>
          <li>
            <code>border-bottom-0</code>
          </li>
          <li>
            <code>border-left-0</code>
          </li>
        </ul>
        {/* Sustractivo */}
      </>
    ),
  },
  {
    subtitle: 'Redondeado',
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
    subtitle: 'Tamaños',
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
    subtitle: 'Width',
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
    title: 'Calendario',
    content: (
      <>
        {/* Calendario */}
        <p>
          Disposición de{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/calendar#section-8" target="_blank">
            Calendario
          </a>
        </p>
        <ul className="docs-list">
          <li>
            <code>calendar-deck</code>
          </li>
        </ul>
        {/* Calendario */}
      </>
    ),
  },
  {
    title: 'Destacado',
    content: (
      <>
        {/* Destacado */}
        <p>
          Disposición de{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/highlighted#section-5">Destacado Conjunto</a>.
        </p>

        <ul className="docs-list">
          <li>
            <code>highlighted-items-2</code>
          </li>
        </ul>
        {/* Destacado */}
      </>
    ),
  },
  {
    title: 'Display',
    content: (
      <>
        {/* Display */}
        <div>
          <p>Las clases se nombran utilizando el formato:</p>

          <p className="mt-3">
            Para <code>xs</code>:
          </p>
          <ul className="docs-list">
            <li>
              <code>{`d-{value}`}</code>
            </li>
          </ul>
          <p className="mt-3">
            Para<code> sm, md, lg, xl y xxl</code>:
          </p>
          <ul className="docs-list">
            <li>
              <code>{`d-{breakpoint}-{value}`}</code>
            </li>
          </ul>
          <p className="mt-3">
            Donde <code>{`{value}`}</code> es uno de:
          </p>

          <ul className="docs-list">
            <li>
              <code>none</code>
            </li>
            <li>
              <code>inline</code>
            </li>
            <li>
              <code>inline-block</code>
            </li>
            <li>
              <code>block</code>
            </li>
            <li>
              <code>table</code>
            </li>
            <li>
              <code>table-cell</code>
            </li>
            <li>
              <code>table-row</code>
            </li>
            <li>
              <code>flex</code>
            </li>
            <li>
              <code>inline-flex</code>
            </li>
          </ul>
        </div>
        {/* Display */}
      </>
    ),
  },
  {
    title: 'Espaciados',
    content: (
      <>
        <p>
          Para <code>xs</code>: <br />
        </p>
        <ul className="docs-list">
          <li>
            <code>{`{propiedad}-{lado}-{tamaño} `}</code>
          </li>
        </ul>

        <p>
          Para <code>sm, md, lg, xl</code> y <code> xxl</code> : <br />{' '}
        </p>
        <ul className="docs-list">
          <li>
            <code>{`{propiedad}-{lado}-{breakpoint}-{tamaño} `}</code>
          </li>
        </ul>

        <p>
          Donde{' '}
          <strong>
            <code>{`{propiedad}`}</code>
          </strong>{' '}
          es uno de:
        </p>
        <ul className="docs-list">
          <li>
            <code>{`m`}</code> - para margin
          </li>
          <li>
            <code>{`p`}</code> - para padding
          </li>
        </ul>

        <p>
          Donde{' '}
          <strong>
            <code>{`{lado}`}</code>
          </strong>{' '}
          es uno de:
        </p>
        <ul className="docs-list">
          <li>
            <code>{`t`}</code> - para <code>margin</code> o <code>padding</code> <code>top</code>
          </li>
          <li>
            <code>{`b`}</code> - para <code>margin</code> o <code>padding</code> <code>bottom</code>
          </li>
          <li>
            <code>{`s`}</code> - para <code>margin</code> o <code>padding</code> <code>left</code>
          </li>
          <li>
            <code>{`s`}</code> - para <code>margin</code> o <code>padding</code> <code>right</code>
          </li>
          <li>
            <code>{`x`}</code> - para <code>margin</code> o <code>padding</code> | <code>left</code> y{' '}
            <code>right</code>
          </li>
          <li>
            <code>{`y`}</code> - para <code>margin</code> o <code>padding</code> | <code>top</code> y{' '}
            <code>bottom</code>
          </li>
          <li>
            <code>{`nada`}</code> - para que aplique a los 4 lados del elemento
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Flex',
    content: (
      <>
        {/* Flex */}

        <p className="mt-4">Clase base para flexbox:</p>
        <code>.d-flex</code>

        <p className="mt-4">Clases para flexbox con breakpoints:</p>
        <code>{`.d-{breakpoint}-flex`}</code>
        <br></br>

        <p>
          Donde <code>{`{breakpoint}`}</code> puede ser uno de los siguientes valores:
        </p>
        <ul className="docs-list">
          <li>
            <code>sm</code>
          </li>
          <li>
            <code>md</code>
          </li>
          <li>
            <code>lg</code>
          </li>
          <li>
            <code>xl</code>
          </li>
          <li>
            <code>xxl</code>
          </li>
        </ul>
        {/* Flex */}
      </>
    ),
  },
  {
    subtitle: 'Align content',
    content: (
      <>
        {/* Align content */}
        <p>
          Donde <code>{`{alignment}`}</code> es uno de: <code>start, end, center, between, around, stretch</code>.{' '}
        </p>
        <ul className="docs-list">
          <li>
            <code>.align-content-{`{alignment}`}</code>
          </li>
        </ul>

        <p className="mt-4">
          Donde <code>{`{breakpoint}`}</code> es uno de: <code> sm, md, lg, xl, xxl</code>:
        </p>

        <ul className="docs-list">
          <li>
            <code>{`.align-content-{breakpoint}-{alignment}`}</code>
          </li>
        </ul>

        {/* Align content */}
      </>
    ),
  },
  {
    subtitle: 'Align items',
    content: (
      <>
        {/* Align items */}

        <p>
          Donde <code>{`{alignment}`}</code> es uno de: <code>start, end, center, between, around, stretch</code>.{' '}
        </p>
        <ul className="docs-list">
          <li>
            <code>.align-items-{`{alignment}`}</code>
          </li>
        </ul>

        <p className="mt-4">
          Donde <code>{`{breakpoint}`}</code> es uno de: <code> sm, md, lg, xl, xxl</code>:
        </p>

        <ul className="docs-list">
          <li>
            <code>{`.align-items-{breakpoint}-{alignment}`}</code>
          </li>
        </ul>
        {/* Align items */}
      </>
    ),
  },
  {
    subtitle: 'Align self',
    content: (
      <>
        {/* Align self */}

        <p>
          Donde <code>{`{alignment}`}</code> es uno de: <code>start, end, center, between, around, stretch</code>.{' '}
        </p>
        <ul className="docs-list">
          <li>
            <code>.align-self-{`{alignment}`}</code>
          </li>
        </ul>

        <p className="mt-4">
          Donde <code>{`{breakpoint}`}</code> es uno de: <code> sm, md, lg, xl, xxl</code>:
        </p>

        <ul className="docs-list">
          <li>
            <code>{`.align-self-{breakpoint}-{alignment}`}</code>
          </li>
        </ul>
        {/* Align self */}
      </>
    ),
  },
  {
    subtitle: 'Dirección',
    content: (
      <>
        {/* Dirección */}
        <ul className="docs-list">
          <li>
            <code>.d-flex flex-row </code>
          </li>
          <li>
            <code>.d-flex flex-column </code>
          </li>
          <li>
            <code>.d-flex flex-row-reverse </code>
          </li>
          <li>
            <code>.d-flex flex-column-reverse </code>
          </li>
        </ul>

        <p className="mt-4">
          Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`}</code> es uno de:{' '}
          <code> sm, md, lg, xl, xxl</code>:
        </p>
        <ul className="docs-list">
          <li>
            <code>{`.flex-{breakpoint}-row`}</code>
          </li>
          <li>
            <code>{`.flex-{breakpoint}-row-reverse`}</code>
          </li>
          <li>
            <code>{`.flex-{breakpoint}-column`}</code>
          </li>
          <li>
            <code>{`.flex-{breakpoint}-column-reverse`}</code>
          </li>
        </ul>
        {/* Dirección */}
      </>
    ),
  },
  {
    subtitle: 'Justify content ',
    content: (
      <>
        {/* Justify content */}

        <p>
          Donde <code>{`{alignment}`}</code> es uno de: <code>start, end, center, between, around, evenly</code>.{' '}
        </p>
        <ul className="docs-list">
          <li>
            <code>.justify-content-{`{alignment}`}</code>
          </li>
        </ul>

        <p className="mt-4">
          Donde <code>{`{breakpoint}`}</code> es uno de: <code> sm, md, lg, xl, xxl</code>:
        </p>

        <ul className="docs-list">
          <li>
            <code>{`.justify-content-{breakpoint}-{alignment}`}</code>
          </li>
        </ul>
        {/* Justify content */}
      </>
    ),
  },
  {
    subtitle: 'Order',
    content: (
      <>
        {/* Order */}

        <p>
          Donde <code>{`{level}`}</code> es uno de: <code>0, 1, 2, 3, 4, 5</code>.{' '}
        </p>

        <ul className="docs-list">
          <li>
            <code>.order-{`{level}`}</code>
          </li>
          <li>
            <code>.order-first</code>
          </li>
          <li>
            <code>.order-last</code>
          </li>
        </ul>

        <p className="mt-4">
          Clases para flexbox con breakpoints, donde <code>{`{breakpoint}`}</code> es uno de:{' '}
          <code> sm, md, lg, xl, xxl</code>:
        </p>
        <ul className="docs-list">
          <li>
            <code>{`.order-{breakpoint}-{level}`}</code>
          </li>
          <li>
            <code>{`.order-{breakpoint}-first`}</code>
          </li>
          <li>
            <code>{`.order-{breakpoint}-last`}</code>
          </li>
        </ul>
        {/* Order */}
      </>
    ),
  },
  {
    title: 'Overflow',
    content: (
      <>
        <ul className="docs-list">
          <li>
            <code>overflow-auto</code>
          </li>
          <li>
            <code>overflow-hidden</code>
          </li>
          <li>
            <code>overflow-visible</code>
          </li>
          <li>
            <code>overflow-scroll</code>
          </li>
        </ul>

        <p>
          Donde <code>{`{direction}`}</code> Toma <code>x</code> o <code>y</code> cómo valores, se puede indicar que
          sólo funcione horizontal o verticalmente
        </p>

        <ul className="docs-list">
          <li>
            <code>{`overflow-{direction}-auto`}</code>
          </li>
          <li>
            <code>{`overflow-{direction}-hidden`}</code>
          </li>
          <li>
            <code>{`overflow-{direction}-visible`}</code>
          </li>
          <li>
            <code>{`overflow-{direction}-scroll`}</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Position',
    content: (
      <>
        <p>
          Modo de uso: <code>{`{property}-{position}`}</code>
        </p>
        <p>
          Donde <code>{`{property}`}</code> es uno de:{' '}
        </p>

        <ul className="docs-list">
          <li>
            <code>{`top`}</code>
          </li>
          <li>
            <code>{`start`}</code>
          </li>
          <li>
            <code>{`bottom`}</code>
          </li>
          <li>
            <code>{`end`}</code>
          </li>
        </ul>

        <p>
          Donde <code>{`{position}`}</code> es uno de:{' '}
        </p>

        <ul className="docs-list">
          <li>
            <code>{`0`}</code>
          </li>
          <li>
            <code>{`50`}</code>
          </li>
          <li>
            <code>{`100`}</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Responsive Scroll',
    content: (
      <>
        <ul className="docs-list">
          <li>
            <code>responsive-scroll</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Sombras',
    content: (
      <>
        <ul className="docs-list">
          <li>
            <code>{`shadow-none`}</code>
          </li>
          <li>
            <code>{`shadow-sm`}</code>
          </li>
          <li>
            <code>{`shadow`}</code>
          </li>
          <li>
            <code>{`shadow-lg`}</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Tamaños',
    content: (
      <>
        <p>Estas clases, funcionan de manera relativa al contenedor padre. </p>
        <p>
          Donde <code>{`{quantity}`}</code> es uno de: <code>25, 50, 75, 100, auto</code>{' '}
        </p>

        <ul className="docs-list">
          <li>
            <code>{`w-{quantity}`}</code>
          </li>
          <li>
            <code>{`h-{quantity}`}</code>
          </li>
        </ul>

        <p>Ancho y alto máximo 100%. </p>

        <ul className="docs-list">
          <li>
            <code>{`max-height`}</code>
          </li>
          <li>
            <code>{`max-width`}</code>
          </li>
        </ul>

        <p>Ancho y alto relativo el viewport. </p>

        <ul className="docs-list">
          <li>
            <code>{`min-vw-100`}</code>
          </li>
          <li>
            <code>{`min-vh-100`}</code>
          </li>
          <li>
            <code>{`vw-100`}</code>
          </li>
          <li>
            <code>{`vh-100`}</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Tarjetas',
    content: (
      <>
        <p>
          Disposición de{' '}
          <a href="https://gcba.github.io/Obelisco-V2/components/cards#section-11" target="_blank">
            Tarjetas
          </a>{' '}
        </p>

        <ul className="docs-list">
          <li>
            <code>card-items-3</code>
          </li>
          <li>
            <code>card-items-2</code>
          </li>
          <li>
            <code>vertical-cards-container</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Texto',
  },
  {
    subtitle: 'Truncado de Texto',
    content: (
      <>
        <p>Estas clases truncan el texto a 1, 2, 3 y 4 lineas.</p>
        <ul className="docs-list">
          <li>
            <code>ellipsis-1</code>
          </li>
          <li>
            <code>ellipsis-2</code>
          </li>
          <li>
            <code>ellipsis-3</code>
          </li>
          <li>
            <code>ellipsis-4</code>
          </li>
          <li>
            <code>text-truncate</code>
          </li>
        </ul>
      </>
    ),
  },
  {
    subtitle: 'Alineamiento de Texto',
    content: (
      <>
        {/* Texto - Alineamiento de Texto */}
        <ul className="docs-list">
          <li>
            <code>text-start</code>
          </li>
          <li>
            <code>text-center</code>
          </li>
          <li>
            <code>text-end</code>
          </li>
          <li>
            <code>text-sm-end</code>
          </li>
          <li>
            <code>text-md-end</code>
          </li>
          <li>
            <code>text-lg-end</code>
          </li>
          <li>
            <code>text-xl-end</code>
          </li>
          <li>
            <code>text-xxl-end</code>
          </li>
        </ul>
        {/* Texto - Alineamiento de Texto */}
      </>
    ),
  },
  {
    subtitle: 'Peso e Itálica',
    content: (
      <>
        {/* Texto - Peso e Itálica */}
        <ul className="docs-list">
          <li>
            <code>fw-bold</code>
          </li>
          <li>
            <code>fw-bolder</code>
          </li>
          <li>
            <code>fw-semibold</code>
          </li>
          <li>
            <code>fw-medium</code>
          </li>
          <li>
            <code>fw-normal</code>
          </li>
          <li>
            <code>fw-light</code>
          </li>
          <li>
            <code>fw-lighter</code>
          </li>
          <li>
            <code>fst-italic</code>
          </li>
          <li>
            <code>fst-normal</code>
          </li>
        </ul>
        {/* Texto - Peso e Itálica */}
      </>
    ),
  },
];

const UpdateComponents: React.FC = () => {
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
        title="Clases disponibles"
        description={[
          'En la siguiente sección podemos encontrar algunas de las clases heredadas de Bootstrap 5 disponibles en Obelisco, las cuales pueden ser utilizadas en el sistema de diseño.',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="classes" />
    </>
  );
};

export default UpdateComponents;
