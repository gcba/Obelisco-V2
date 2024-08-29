import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { SEARCH } from './code-views';

const FormSearchDocs: React.FC = () => {
  const sections = [
    {
      title: 'Buscador',
      h1: true,
      content: (
        <MainDescription description="Los campos de búsqueda llevan siempre un placeholder que anticipe y ayude al usuario a saber qué información podrá encontrar en el buscador." />
      ),
    },
    {
      id: 'section-1',
      title: 'Buscador',
      content: (
        <CodeBox codeHTML={SEARCH}>
          <div className="container">
            lorem
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Buscador con botón',
      content: (
        <CodeBox codeHTML={SEARCH}>
          <div className="container">
            lorem
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Deshabilitado',
      content: (
        <CodeBox codeHTML={SEARCH}>
          <div className="container">
            lorem
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default FormSearchDocs;
