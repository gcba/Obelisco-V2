import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { BREADCRUMB } from './code-views';

const BreadcrumbDocs: React.FC = () => {
  const sections = [
    {
      title: 'Migas de pan',
      content: (
        <MainDescription description="El componente de migas de pan ayuda a los usuarios a comprender dónde se encuentran dentro de la estructura de un sitio web y moverse entre niveles." />
      ),
      h1: true,
    },
    {
      id: 'section-1',
      title: 'Simple',
      content: (
        <>
          <CodeBox codeHTML={BREADCRUMB}>
            <div className="container">
              <nav aria-label="Navegación secundaria">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Inicio</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Página intermedia con mucho mucho texto</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Intermedia</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Página anterior</a>
                  </li>
                </ol>
              </nav>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default BreadcrumbDocs;
