import BoxTemplate from "@/components/Template/Box";
import MainDescription from '@/components/Template/MainDescription';
import { SMType1, SMType2, SMType3, SMType4, SMType5 } from "./code-views";
import CodeCopy from '@/components/CodeBox';
import DocumentationTemplate from "@/components/Template/DocumentationTemplate";



const sections = [
  {
    id: 'section-1',
    title: 'Mensaje de estado',
    content: (
      <MainDescription description="Los mensajes de estado son comunicaciones que ayudan a las personas usuarias a tomar decisiones premeditadas. Informan que algo ha ocurrido o va a ocurrir y tal vez requieran de su acción. También, sirven para reducir la incertidumbre y evitar que los usuarios cometan errores." />
    ),
    h1: true,
  },
  {
    id: 'section-2',
    title: 'Información',
    content: (
      <>
        <div className="container p-5 bg-light">
          <div className="status status-info">
            <h2 className="status-title">
              Esto es un título de un mensaje de información
            </h2>
            <p className="status-text">
              Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.
            </p>
            <p className="status-text">
              Este es un párrafo que brinda información necesaria con la finalidad de guiar y ayudar a las personas usuarias a finalizar un proceso o iniciar uno nuevo.
            </p>
            <button type="button" className="btn btn-secondary">
              Botón
            </button>
          </div>
        </div>
        <br />
        <CodeCopy code={SMType1} />
      </>
    ),
  },
  {
    id: 'section-3',
    title: 'Éxito',
    content: (
      <>
        <div className="container p-5 bg-light">
          <div className="status status-success">
            <h2 className="status-title">
              Esto es un título de un mensaje de éxito
            </h2>
            <p className="status-text">
              Esto es un párrafo que acompaña y sirve para indicar que el usuario realizó una acción correctamente, como cuando realiza una tarea con éxito.
            </p>
            <ul className="status-list">
              <li>
                Éste es un ítem dentro de una lista que puede contener un <a href="#">enlace</a>.
              </li>
              <li>
                Los ítems pueden contener o no enlaces. Este es un ejemplo para un detalle que no lleva enlace.
              </li>
              <li>Éste es otro ítem dentro de una lista.</li>
            </ul>
            <button type="button" className="btn btn-secondary">
              Botón
            </button>
          </div>
        </div>
        <br />
        <CodeCopy code={SMType2} />
      </>
    ),
  },
  {
    id: 'section-4',
    title: 'Advertencia',
    content: (
      <>
        <div className="container p-5 bg-light">
          <div className="status status-warning">
            <h2 className="status-title">
              Esto es un título de un mensaje de advertencia
            </h2>
            <p className="status-text">
              Esto es un párrafo que advierte y sirve para indicarle al usuario que preste atención a determinada información o acción que debe realizar.
            </p>
            <ul className="status-list">
              <li>
                Contar con Clave Ciudad de <a href="#">AGIP</a>
              </li>
              <li>
                Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:
              </li>
              <li>
                Anexo II Formulario de Presentación de Programa de Capacitación
              </li>
            </ul>
            <button type="button" className="btn btn-secondary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Botón
            </button>
          </div>
        </div>
        <br />
        <CodeCopy code={SMType3} />
      </>
    ),
  },
  {
    id: 'section-5',
    title: 'Error',
    content: (
      <>
        <div className="container p-5 bg-light">
          <div className="status status-danger">
            <h2 className="status-title">
              Esto es un título de un mensaje de peligro
            </h2>
            <p className="status-text">
              Este párrafo sirve para comunicar que algo salió mal y explica cómo puede ser solucionado. Muestra errores sobre algo que se realizó.
            </p>
            <ul className="status-list">
              <li>
                Contar con Clave Ciudad de <a href="#">AGIP</a>
              </li>
              <li>
                Cargar en el Sistema de Tramitación a Distancia (TAD) la siguiente documentación obligatoria:
              </li>
              <li>
                Anexo II Formulario de Presentación de Programa de Capacitación
              </li>
            </ul>
            <button type="button" className="btn btn-secondary">
              Botón
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Botón
            </button>
          </div>
        </div>
        <br />
        <CodeCopy code={SMType4} />
      </>
    ),
  },
  {
    id: 'section-6',
    title: 'Institucional',
    content: (
      <>
        <div className="container p-5 bg-light">
          <div className="status status-institutional">
            <h2 className="status-title">
              Este es un mensaje institucional del Gobierno de la Ciudad de Buenos Aires
            </h2>
            <p className="status-text">
              En el cuerpo de este componente pueden ir enlaces o botones:
              <a href="#">https://ejemplo.buenosaires.gob.ar</a>
            </p>
            <button type="button" className="btn btn-outline-link">
              Ir al sitio web
            </button>
          </div>
        </div>
        <br />
        <CodeCopy code={SMType5} />
      </>
    ),
  },
];

const StatusMessageDocs: React.FC = () => {
  return (
    <BoxTemplate>
      <DocumentationTemplate sections={sections} />
    </BoxTemplate>
  );
};

export default StatusMessageDocs;
