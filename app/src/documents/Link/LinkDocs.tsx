import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { LINK_DEFAULT, LINK_EXTERNAL, LINK_DOWNLOAD, LINK_ACCESS } from './code-views';

const LinkDocs: React.FC = () => {
  const sections = [
    {
      title: 'Enlaces',
      h1: true,
      content: (
        <MainDescription description="Los enlaces son hipervínculos que la persona usuaria utiliza para navegar contenidos en un sitio web. Pueden dirigir tanto a información y recursos dentro de una misma página o sitio web, como también a páginas externas." />
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
                <a href="#" target="_blank" rel="noopener noreferrer">
                  enlace en párrafo
                </a>
              </p>
              <p>
                <small>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    enlaces en párrafo
                  </a>
                </small>
              </p>
              <div className="bg-dark p-2">
                <p>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="link-white">
                    enlace en párrafo
                  </a>{' '}
                </p>
                <p className="mb-0">
                  <small>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="link-white">
                      enlaces en párrafo
                    </a>
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
                  <a className="external" href="#" target="_blank" rel="noopener noreferrer">
                    enlace externo
                  </a>
                </p>
              </div>
              <div className="bg-dark p-2">
                <p className="mb-0">
                  <a className="external link-white" href="#" target="_blank" rel="noopener noreferrer">
                    enlace externo
                  </a>
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
                  <a className="download" href="#" target="_blank" rel="noopener noreferrer" download="">
                    enlace de descarga
                  </a>
                </p>
              </div>

              <div className="bg-dark p-2">
                <p className="mb-0">
                  <a className="download link-white" href="#" target="_blank" rel="noopener noreferrer" download="">
                    enlace de descarga
                  </a>
                </p>
              </div>
              <a
                className="btn btn-secondary btn-sm download-link my-3"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                download=""
              >
                Descargar
              </a>
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
                  <a className="access" href="#" target="_blank" rel="noopener noreferrer">
                    enlace de acceso
                  </a>
                </p>
              </div>

              <div className="bg-dark p-2">
                <p className="mb-0">
                  <a className="access link-white" href="#" target="_blank" rel="noopener noreferrer">
                    enlace de acceso
                  </a>
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
