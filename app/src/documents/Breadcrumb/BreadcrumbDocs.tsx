import CodeCopy from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';
import { EGcodeSimpleBreadcrumb } from './code-views';

const BreadcrumbDocs: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Migas de pan',
      content: (
        <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
      ),
      h1: true,
    },
    {
      id: 'section-2',
      title: 'Simple',
      content: (
        <>
          <nav aria-label="Navegación secundaria">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">Inicio</a></li>
              <li className="breadcrumb-item">
                <a href="#">Página intermedia con mucho mucho texto</a>
              </li>
              <li className="breadcrumb-item"><a href="#">Intermedia</a></li>
              <li className="breadcrumb-item"><a href="#">Página anterior</a></li>
            </ol>
          </nav>

          <CodeCopy code={EGcodeSimpleBreadcrumb} />
        </>
      ),
    }
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default BreadcrumbDocs;
