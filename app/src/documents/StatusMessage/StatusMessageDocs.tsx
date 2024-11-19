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
        <div className="px-4 col-sm-12 col-md-8">
          <div className="status status-info">
            <h2 className="status-title">Esto es un título de un mensaje de información</h2>
            <p className="status-text">
              Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas
              usuarias a finalizar un proceso o iniciar uno nuevo.
            </p>
            <p className="status-text">
              Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas
              usuarias a finalizar un proceso o iniciar uno nuevo.
            </p>
            <button type="button" className="btn btn-primary">
              <i className="bx bxs-info-circle o-icon"></i>
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
        <div className="px-4 col-sm-12 col-md-8">
          <div className="status status-success">
            <h2 className="status-title">Esto es un título de un mensaje de éxito</h2>
            <p className="status-text">
              Esto es un párrafo que acompaña y sirve para indicar que el usuario realizó una acción correctamente, como
              cuando realiza una tarea con éxito.
            </p>
            <ul className="status-list">
              <li>
                Éste es un ítem dentro de una lista que puede contener un <LinkClient href="#">enlace</LinkClient>.
              </li>
              <li>Los ítems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.</li>
              <li>Éste es otro ítem dentro de una lista.</li>
            </ul>
            <button type="button" className="btn btn-primary">
              <i className="bx bxs-info-circle o-icon"></i>
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
        <div className="px-4 col-sm-12 col-md-8">
          <div className="status status-warning">
            <h2 className="status-title">Esto es un título de un mensaje de advertencia</h2>
            <p className="status-text">
              Esto es un párrafo que advierte y sirve para indicarle al usuario que preste atención a determinada
              información o acción que debe realizar.
            </p>
            <ul className="status-list">
              <li>
                Contar con Clave Ciudad de <LinkClient href="#">AGIP</LinkClient>
              </li>
              <li>Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:</li>
              <li>Anexo II Formulario de Presentación de Programa de Capacitación</li>
            </ul>
            <button type="button" className="btn btn-primary">
              <i className="bx bxs-info-circle o-icon"></i>
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
        <div className="px-4 col-sm-12 col-md-8">
          <div className="status status-danger">
            <h2 className="status-title">Esto es un título de un mensaje de peligro</h2>
            <p className="status-text">
              Este párrafo sirve para comunicar que algo salió mal y explica cómo puede ser solucionado. Muestra errores
              sobre algo que se realizó.
            </p>
            <ul className="status-list">
              <li>
                Contar con Clave Ciudad de <LinkClient href="#">AGIP</LinkClient>
              </li>
              <li>Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:</li>
              <li>Anexo II Formulario de Presentación de Programa de Capacitación</li>
            </ul>
            <button type="button" className="btn btn-primary">
              <i className="bx bxs-info-circle o-icon"></i>
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
        <div className="px-4 col-sm-12 col-md-8">
          <div className="status status-institutional">
            <h2 className="status-title">Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires</h2>
            <p className="status-text">
              En el cuerpo de este componente pueden ir enlaces o botones:
              <LinkClient href="#">https://ejemplo.buenosaires.gob.ar</LinkClient>
            </p>
            <button type="button" className="btn btn-primary">
              <i className="bx bxs-info-circle o-icon"></i>
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
