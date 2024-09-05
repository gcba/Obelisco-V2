import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { LIST_LINK } from './code-views';

const ListLinkDocs: React.FC = () => {
  const sections = [
    {
      title: 'Lista de enlaces',
      h1: true,
      content: (
        <MainDescription description="La lista de enlaces organiza y orienta a la persona usuaria a través de diferentes secciones y recursos disponibles en un sitio web. Al funcionar como un bloque coherente, permite encontrar información deseada rápidamente." />
      ),
    },
    {
      id: 'section-1',
      title: 'Lista de enlaces',
      content: (
        <CodeBox codeHTML={LIST_LINK}>
          <div className="container">lorem</div>
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

export default ListLinkDocs;
