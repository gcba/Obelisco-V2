import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { FOOTER } from './code-views';

const FooterDocs: React.FC = () => {
  const sections = [
    {
      title: 'Footer (pie de página)',
      h1: true,
      content: (
        <MainDescription description="El pie de página (o footer en Inglés) se sitúa en la parte inferior de todos los activos digitales de Gobierno. Contiene información institucional o de acceso rápido que permite a los usuarios encontrar de forma sencilla la información que necesitan." />
      ),
    },
    {
      id: 'section-1',
      title: 'Completo',
      content: (
        <CodeBox codeHTML={FOOTER}>
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

export default FooterDocs;
