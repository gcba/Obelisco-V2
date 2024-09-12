import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { HIGHLIGHTED } from './code-views';

const HighlightedDocs: React.FC = () => {
  const sections = [
    {
      title: 'Destacado',
      h1: true,
      content: (
        <MainDescription description="Los destacados permiten resaltar contenido relevante que requiere un nivel jerárquico mayor al resto de la información. Se usa para captar la atención de la persona usuaria incorporando imágenes, accionables y otros elementos interactivos." />
      ),
    },
    {
      id: 'section-1',
      title: 'Tipos',
      content: (
        <CodeBox codeHTML={HIGHLIGHTED}>
          <div className="container">lorem</div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default HighlightedDocs;
