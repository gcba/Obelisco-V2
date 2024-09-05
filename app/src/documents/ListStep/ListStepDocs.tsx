import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { LIST_STEP } from './code-views';

const ListStepDocs: React.FC = () => {
  const sections = [
    {
      title: 'Lista de pasos',
      h1: true,
      content: (
        <MainDescription description="Las listas se utilizan para agrupar una serie de elementos relacionados. Para listas que presentan un orden secuencial de pasos, utilizamos la Lista de pasos." />
      ),
    },
    {
      id: 'section-1',
      title: 'Tamaños',
      content: (
        <CodeBox codeHTML={LIST_STEP}>
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

export default ListStepDocs;
