import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { LINK_DEFAULT, LINK_EXTERNAL, LINK_DOWNLOAD, LINK_ACCESS } from './code-views';


const LinkDocs: React.FC = () => {
  const sections = [
    {
      title: 'Enlaces',
      h1: true,
      content: (
        <>
          <MainDescription description="Los enlaces son hipervínculos que la persona usuaria utiliza para navegar contenidos en un sitio web. Pueden dirigir tanto a información y recursos dentro de una misma página o sitio web, como también a páginas externas." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a href="https://gcba.github.io/estandares/componentes/enlaces/">
              enlace.
            </a>
          </p>
        </>
      ),
    },

    {
      id: 'section-1',
      title: 'Predeterminado',
      content: (
        <>
          <CodeBox codeHTML={LINK_DEFAULT}>
            <div className="container">
              <p>
                <LinkClient>
                  enlace en párrafo
                </LinkClient>
              </p>
              <p>
                <small>
                  <LinkClient>
                    enlaces en párrafo
                  </LinkClient>
                </small>
              </p>
              <div className="bg-dark p-2">
                <p>
                  <LinkClient className="link-white">
                    enlace en párrafo
                  </LinkClient>{' '}
                </p>
                <p className="mb-0">
                  <small>
                    <LinkClient className="link-white">
                      enlaces en párrafo
                    </LinkClient>
                  </small>
                </p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Externo',
      content: (
        <>
          <CodeBox codeHTML={LINK_EXTERNAL}>
            <div className="container">
              <div className="p-2">
                <p>
                  <LinkClient className="external">
                    enlace externo
                  </LinkClient>
                </p>
              </div>
              <div className="bg-dark p-2">
                <p className="mb-0">
                  <LinkClient className="external link-white">
                    enlace externo
                  </LinkClient>
                </p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-3',
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
              <LinkClient
                className="btn btn-secondary btn-sm download-link my-3"
                download=""
              >
                Descargar
              </LinkClient>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Acceso',
      content: (
        <>
          <CodeBox codeHTML={LINK_ACCESS}>
            <div className="container">
              <div className="p-2">
                <p>
                  <LinkClient className="access">
                    enlace de acceso
                  </LinkClient>
                </p>
              </div>

              <div className="bg-dark p-2">
                <p className="mb-0">
                  <LinkClient className="access link-white">
                    enlace de acceso
                  </LinkClient>
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

  return <DocumentationTemplate sections={sections} />;
};

export default LinkDocs;
