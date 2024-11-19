import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { LIST_LINK } from './code-views';

const ListLinkDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Lista de enlaces',
      content: (
        <CodeBox codeHTML={LIST_LINK}>
          <div className="container">
            <div className="list-link">
              <h3 className="list-link-title">Este es el título de una lista de enlaces</h3>
              <LinkClient>Enlace predeterminado</LinkClient>
              <LinkClient>Enlace predeterminado</LinkClient>
              <LinkClient>Enlace predeterminado</LinkClient>
              <LinkClient>Enlace predeterminado</LinkClient>
              <LinkClient>Enlace predeterminado</LinkClient>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Lista de enlaces"
        description={[
          'La lista de enlaces organiza y orienta a la persona usuaria a través de diferentes secciones y recursos disponibles en un sitio web. Al funcionar como un bloque coherente, permite encontrar información deseada rápidamente.',
          <>
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/listas/lista-de-enlaces/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              enlace
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default ListLinkDocs;
