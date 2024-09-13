import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { LIST_INFORMATIVE_BULLET, LIST_INFORMATIVE_CHECK } from './code-views';

const ListInformativeDocs: React.FC = () => {
  const sections = [
    {
      title: 'Lista informativa',
      h1: true,
      content: (
        <>
          <MainDescription description="Las listas informativas organizan piezas simples de información en forma vertical. Se utilizan cuando sus elementos no transmiten un orden secuencial específico." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a href="https://gcba.github.io/estandares/componentes/listas/lista-informativa/" target="_blank" rel="noopener noreferrer">
              enlace
            </a>.
          </p>
        </>
      ),
    },
    {
      id: 'section-1',
      title: 'Con viñeta',
      content: (
        <CodeBox codeHTML={LIST_INFORMATIVE_BULLET}>
          <div className="container">
            <div className="list-informative">
              <h3 className="list-informative-subtitle">
                Este es el subtítulo de una lista general
              </h3>
              <ul className="list-informative-bullet">
                <li>Este es el contenido de un ítem de una lista general.</li>
                <li>Este es el contenido de un ítem de una lista general.</li>
                <li>Este es el contenido de un ítem de una lista general.</li>
                <li>Este es el contenido de un ítem de una lista general.</li>
                <li>Este es el contenido de un ítem de una lista general.</li>
                <li>Este es el contenido de un ítem de una lista general.</li>
                <li>Este es el contenido de un ítem de una lista general.</li>
              </ul>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Con check',
      content: (
        <CodeBox codeHTML={LIST_INFORMATIVE_CHECK}>
          <div className="container">
            <div className="list-informative">
              <h3 className="list-informative-subtitle">
                Este es el subtítulo de una lista de requisitos
              </h3>
              <ul className="list-informative-check">
                <li>Este es el contenido de un ítem de una lista de requisitos.</li>
                <li>Este es el contenido de un ítem de una lista de requisitos.</li>
                <li>Este es el contenido de un ítem de una lista de requisitos.</li>
                <li>Este es el contenido de un ítem de una lista de requisitos.</li>
                <li>Este es el contenido de un ítem de una lista de requisitos.</li>
                <li>Este es el contenido de un ítem de una lista de requisitos.</li>
                <li>Este es el contenido de un ítem de una lista de requisitos.</li>
              </ul>
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

export default ListInformativeDocs;
