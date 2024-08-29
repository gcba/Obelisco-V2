import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { LIST_INFORMATIVE } from './code-views';

const ListInformativeDocs: React.FC = () => {
  const sections = [
    {
      title: 'Lista informativa',
      h1: true,
      content: (
        <MainDescription description="Las listas informativas organizan piezas simples de información en forma vertical. Se utilizan cuando sus elementos no transmiten un orden secuencial específico." />
      ),
    },
    {
      id: 'section-1',
      title: 'Con viñeta',
      content: (
        <CodeBox codeHTML={LIST_INFORMATIVE}>
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

export default ListInformativeDocs;
