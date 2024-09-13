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
        <>
          <MainDescription description="La lista de enlaces organiza y orienta a la persona usuaria a través de diferentes secciones y recursos disponibles en un sitio web. Al funcionar como un bloque coherente, permite encontrar información deseada rápidamente." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a href="https://gcba.github.io/estandares/componentes/modals/" target="_blank" rel="noopener noreferrer">
              enlace.
            </a>
          </p>
        </>
      ),
    },
    {
      id: 'section-1',
      title: 'Lista de enlaces',
      content: (
        <CodeBox codeHTML={LIST_LINK}>
          <div className="container">
            <div className="list-link">
              <h3 className="list-link-title">Este es el título de una lista de enlaces</h3>
              <a href="#" target="_blank" rel="noopener noreferrer">Enlace predeterminado</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Enlace predeterminado</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Enlace predeterminado</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Enlace predeterminado</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Enlace predeterminado</a>
            </div>
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

export default ListLinkDocs;
