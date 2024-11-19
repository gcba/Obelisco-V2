import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

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

  return (
    <>
      <ComponentHeader
        title="Migas de pan"
        description={[
          'El componente de migas de pan ayuda a los usuarios a comprender dónde se encuentran dentro de la estructura de un sitio web y moverse entre niveles.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del componente podés <a href="https://gcba.github.io/estandares/componentes/miga-de-pan/" target="_blank" rel="noopener noreferrer">
            visitar la documentación en Obelisco v.1
            </a>.
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default BreadcrumbDocs;
