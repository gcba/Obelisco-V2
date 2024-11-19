import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { LINK_DEFAULT, LINK_EXTERNAL, LINK_DOWNLOAD, LINK_ACCESS } from './code-views';

const LinkDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Predeterminado',
      content: (
        <>
          <CodeBox codeHTML={LINK_DEFAULT}>
            <div className="container">
              <p>
                <LinkClient>enlace en párrafo</LinkClient>
              </p>
              <p>
                <small>
                  <LinkClient>enlaces en párrafo</LinkClient>
                </small>
              </p>
              <div className="bg-dark p-2">
                <p>
                  <LinkClient className="link-white">enlace en párrafo</LinkClient>{' '}
                </p>
                <p className="mb-0">
                  <small>
                    <LinkClient className="link-white">enlaces en párrafo</LinkClient>
                  </small>
                </p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Externo',
      content: (
        <>
          <CodeBox codeHTML={LINK_EXTERNAL}>
            <div className="container">
              <div className="p-2">
                <p>
                  <LinkClient className="external">enlace externo</LinkClient>
                </p>
              </div>
              <div className="bg-dark p-2">
                <p className="mb-0">
                  <LinkClient className="external link-white">enlace externo</LinkClient>
                </p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Descarga',
      content: (
        <>
          <CodeBox codeHTML={LINK_DOWNLOAD}>
            <div className="container">
              <div className="p-2">
                <p>
                  <LinkClient className="download" download="">
                    enlace de descarga
                  </LinkClient>
                </p>
              </div>

              <div className="bg-dark p-2">
                <p className="mb-0">
                  <LinkClient className="download link-white" download="">
                    enlace de descarga
                  </LinkClient>
                </p>
              </div>
              <LinkClient className="btn btn-secondary btn-sm download-link my-3" download="">
                Descargar
              </LinkClient>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Acceso',
      content: (
        <>
          <CodeBox codeHTML={LINK_ACCESS}>
            <div className="container">
              <div className="p-2">
                <p>
                  <LinkClient className="access">enlace de acceso</LinkClient>
                </p>
              </div>

              <div className="bg-dark p-2">
                <p className="mb-0">
                  <LinkClient className="access link-white">enlace de acceso</LinkClient>
                </p>
              </div>
            </div>
          </CodeBox>
          <br />
          <br />
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Enlaces"
        description={[
          'Los enlaces son hipervínculos que la persona usuaria utiliza para navegar contenidos en un sitio web. Pueden dirigir tanto a información y recursos dentro de una misma página o sitio web, como también a páginas externas.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del componente podés <a href="https://gcba.github.io/estandares/componentes/enlaces/" target="_blank" rel="noopener noreferrer">
            visitar la documentación en Obelisco v.1
            </a>.
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default LinkDocs;
