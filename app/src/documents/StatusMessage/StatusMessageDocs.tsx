import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { SM_INFO, SM_SUCCESS, SM_WARNING, SM_DANGER, SM_INSTITUTIONAL } from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Información',
    content: (
      <CodeBox codeHTML={SM_INFO}>
        <div className="px-3">
          <div className="status status-info">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como la realización de una tarea o instrucciones a seguir.
            </p>
            <div className="list-informative status-list">
              <ul className="list-informative-bullet">
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Éxito',
    content: (
      <CodeBox codeHTML={SM_SUCCESS}>
        <div className="px-3">
          <div className="status status-success">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como la realización de una tarea o instrucciones a seguir.
            </p>
            <div className="list-informative status-list">
              <ul className="list-informative-bullet">
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Advertencia',
    content: (
      <CodeBox codeHTML={SM_WARNING}>
        <div className="px-3">
          <div className="status status-warning">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como la realización de una tarea o instrucciones a seguir.
            </p>
            <div className="list-informative status-list">
              <ul className="list-informative-bullet">
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Error',
    content: (
      <CodeBox codeHTML={SM_DANGER}>
        <div className="px-3">
          <div className="status status-danger">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como la realización de una tarea o instrucciones a seguir.
            </p>
            <div className="list-informative status-list">
              <ul className="list-informative-bullet">
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
                <li>
                  Este es el contenido de un ítem de una lista general. Puede contener un <LinkClient>enlace</LinkClient>.
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Institucional',
    content: (
      <CodeBox codeHTML={SM_INSTITUTIONAL}>
        <div className="px-3">
          <div className="status status-institutional">
            <h2 className="status-title">Este es el título de un mensaje de estado</h2>
            <p className="status-text">
              Este es un párrafo breve que sirve como mensaje. Puede utilizarse para dar indicaciones adicionales como la realización de una tarea o instrucciones a seguir. Puede contener un <LinkClient>enlace</LinkClient>.
            </p>
            <button type="button" className="btn btn-primary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-primary">
              Botón
            </button>
          </div>
        </div>
      </CodeBox>
    ),
  },
];

const StatusMessageDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Mensaje de estado"
        description={[
          'Los mensajes de estado son comunicaciones que ayudan a las personas usuarias a tomar decisiones premeditadas. Informan que algo ha ocurrido o va a ocurrir y tal vez requieran de su acción. También, sirven para reducir la incertidumbre y evitar que los usuarios cometan errores.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del componente podés <a href="https://gcba.github.io/estandares/componentes/mensajes-de-estado/" target="_blank" rel="noopener noreferrer">
            visitar la documentación en Obelisco v.1
            </a>.
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default StatusMessageDocs;
