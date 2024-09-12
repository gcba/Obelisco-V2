import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { BLOCK } from './code-views';

const BlockDocs: React.FC = () => {
  const sections = [
    {
      title: 'Bloque de trámite',
      h1: true,
      content: (
        <MainDescription description="Este componente se utiliza dentro de una página informativa de trámite e indica el estado del mismo. Desde él, la persona usuaria puede iniciar el trámite o ver en qué instancia se encuentra." />
      ),
    },
    {
      id: 'section-1',
      title: 'Con título',
      content: (
        <CodeBox codeHTML={BLOCK}>
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

export default BlockDocs;
