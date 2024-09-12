import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { COLLAPSE } from './code-views';

const CollapseDocs: React.FC = () => {
  const sections = [
    {
      title: 'Colapsables',
      h1: true,
      content: (
        <div>
          <MainDescription description="Los colapsables sirven para mostrar y ocultar secciones de contenido relacionado en una página, lo que mejora la experiencia de las personas usuarias." />
        </div>
      ),
    },
    {
      id: 'section-1',
      title: 'Slección única',
      content: (
        <CodeBox codeHTML={COLLAPSE}>
          <div className="container">lorem</div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default CollapseDocs;
