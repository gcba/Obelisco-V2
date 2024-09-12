import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { HEADER } from './code-views';

const HeaderDocs: React.FC = () => {
  const sections = [
    {
      title: 'Header (encabezado)',
      h1: true,
      content: (
        <MainDescription description="El header es una sección ubicada en la parte superior de la página que contiene elementos y componentes relacionados a la navegación. Su función es permitir que la persona usuaria pueda navegar y acceder intuitivamente a las diferentes secciones de un sitio." />
      ),
    },
    {
      id: 'section-1',
      title: 'Con buscador',
      content: (
        <CodeBox codeHTML={HEADER}>
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

export default HeaderDocs;
