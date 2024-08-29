import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { CARDS } from './code-views';

const CardDocs: React.FC = () => {
  const sections = [
    {
      title: 'Tarjetas',
      h1: true,
      content: (
        <div>
          <MainDescription description="Las tarjetas son componentes accionables que se utilizan en grupo para comunicar información que requiere de cierto tipo de categorización y jerarquización visual. Se visualizan en contenedores flexibles y actúan como punto de entrada a un tema en particular." />
        </div>
      ),
    },
    {
      id: 'section-1',
      title: 'Horizontal',
      content: (
        <CodeBox codeHTML={CARDS}>
          <div className="container">lorem</div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default CardDocs;
