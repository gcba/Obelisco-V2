import Image from 'next/image';
import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';
const basePath = '/Obelisco-V2';

import { BREADCRUMB } from './code-views';

const BreadcrumbDocs: React.FC = () => {

  const SECTIONS_DEV = [
    {
      title: 'Simple',
      content: (
        <>
          <CodeBox codeHTML={BREADCRUMB}>
            <div className="container">
              <nav aria-label="Navegación secundaria">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <LinkClient>Inicio</LinkClient>
                  </li>
                  <li className="breadcrumb-item">
                    <LinkClient>Página intermedia con mucho mucho texto</LinkClient>
                  </li>
                  <li className="breadcrumb-item">
                    <LinkClient>Intermedia</LinkClient>
                  </li>
                  <li className="breadcrumb-item">
                    <LinkClient>Página anterior</LinkClient>
                  </li>
                </ol>
              </nav>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  const SECTION_UX = [
    {
      title: 'Uso',
      content: (
        <>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo usar</p>
            <ul className="list-informative-bullet">
              <li>
                Para mostrar la jerarquía de navegación, de más de dos niveles, y los pasos que siguió el usuario para llegar a la página actual.
              </li>
            </ul>
          </div>
          <div className="list-informative pb-3">
            <p className="text-xl">Cuándo no usar</p>
            <ul className="list-informative-bullet">
              <li>
                Como enlaces a contenido que se ubique por fuera del encabezado de la página.
              </li>
              <li>
                Dentro de un bloque de texto, considerá utilizar el componente <a href="https://gcba.github.io/Obelisco-V2/components/link">Enlace</a>.
              </li>
              <li>Para guiar a los usuarios a través de un proceso de varios pasos, utilizá el componente <a href="https://gcba.github.io/Obelisco-V2/components/steps-form">Pasos de un formulario</a>.</li>
              <li>Cuando se utiliza la navegación horizontal en combinación con la navegación principal, puede resultar redundante incluir migas de pan.</li>
              <li>En las páginas de inicio omita incluir el componente migas de pan.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      title: 'Disposición',
      content: (
        <>
          <p className='text-md' >
            Se ubican en la parte superior izquierda de la página, generalmente, dentro del encabezado de página, por encima del título H1.
          </p>
          <Image
            src={`${basePath}/images/encabezado/encabezado_disposicion.svg`}
            alt="Encabezado disposición"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
      ),
    },
    {
      title: 'Contenido',
    },
    {
      subtitle: 'Basado en el ancho',
      content:
        <>
          <p className="text-md">Cuando el nombre de un enlace de ancla excede los 32 caracteres (incluyendo espacios), el texto se trunca y agrega tres puntos (…) al final para visualizar que hay más texto en ese nivel.</p>
          <Image
            src={`${basePath}/images/encabezado/encabezado_contenido.svg`}
            alt="Encabezado basado en el ancho"
            width="800"
            height="200"
            className="img-fluid"
          />
        </>
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Migas de pan"
        description={[
          'El componente de migas de pan ayuda a los usuarios a comprender dónde se encuentran dentro de la estructura de un sitio web y moverse entre niveles.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/miga-de-pan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} sectionUx={SECTION_UX} />
    </>
  );
};

export default BreadcrumbDocs;
