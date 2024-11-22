import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { LIST_INFORMATIVE_BULLET, LIST_INFORMATIVE_CHECK } from './code-views';

const ListInformativeDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Con viñeta',
      content: (
        <CodeBox codeHTML={LIST_INFORMATIVE_BULLET}>
          <div className="container">
            <div className="list-informative">
              <h3 className="list-informative-subtitle">Este es el subtítulo de una lista general</h3>
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
      title: 'Con check',
      content: (
        <CodeBox codeHTML={LIST_INFORMATIVE_CHECK}>
          <div className="container">
            <div className="list-informative">
              <h3 className="list-informative-subtitle">Este es el subtítulo de una lista de requisitos</h3>
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
      <ComponentHeader
        title="Lista informativa"
        description={[
          'Las listas informativas organizan piezas simples de información en forma vertical. Se utilizan cuando sus elementos no transmiten un orden secuencial específico.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/listas/lista-informativa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default ListInformativeDocs;
