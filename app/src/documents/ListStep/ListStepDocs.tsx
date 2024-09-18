import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  LIST_STEP_LARGE,
  LIST_STEP_LARGE_BORDER,
  LIST_STEP_MEDIUM,
  LIST_STEP_MEDIUM_BORDER,
  LIST_STEP_MEDIUM_NUMBER,
  LIST_STEP_MEDIUM_NUMBER_BORDER,
  LIST_STEP_SMALL,
  LIST_STEP_SMALL_BORDER,
} from './code-views';

const ListStepDocs: React.FC = () => {
  const sections = [
    {
      title: 'Lista de pasos',
      h1: true,
      content: (
        <>
          <MainDescription description="Las listas se utilizan para agrupar una serie de elementos relacionados. Para listas que presentan un orden secuencial de pasos, utilizamos la Lista de pasos." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a
              href="https://gcba.github.io/estandares/componentes/listas/listas-de-pasos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              enlace
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'section-1',
      title: 'Tamaños',
      content: (
        <>
          <p className="headline-md">Grande</p>
          <CodeBox codeHTML={LIST_STEP_LARGE}>
            <div className="container">
              <ul className="list-steps list-steps-lg">
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 1</h3>
                  <p>
                    En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego. En esta descripción de la instrucción 1 se muestran los detalles
                    principales de las acciones que deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 2</h3>
                  <p>
                    En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego. En esta descripción de la instrucción 2 se muestran los detalles
                    principales de las acciones que deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 3</h3>
                  <p>
                    En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego. En esta descripción de la instrucción 3 se muestran los detalles
                    principales de las acciones que deberá tomar el usuario luego.
                  </p>
                </li>
              </ul>
            </div>
          </CodeBox>
          <br />
          <br />
          <p className="headline-md">Mediano</p>
          <CodeBox codeHTML={LIST_STEP_MEDIUM}>
            <div className="container">
              <ul className="list-steps">
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 1</h3>
                  <p>
                    En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 2</h3>
                  <p>
                    En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 3</h3>
                  <p>
                    En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
              </ul>
            </div>
          </CodeBox>
          <br />
          <br />
          <p className="headline-md">Chico</p>
          <CodeBox codeHTML={LIST_STEP_SMALL}>
            <div className="container">
              <ul className="list-steps list-steps-sm">
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 1</h3>
                  <p>
                    En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 2</h3>
                  <p>
                    En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 3</h3>
                  <p>
                    En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
              </ul>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Con borde',
      content: (
        <>
          <p className="headline-md">Grande</p>
          <CodeBox codeHTML={LIST_STEP_LARGE_BORDER}>
            <div className="container">
              <ul className="list-steps list-steps-lg list-steps-light">
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 1</h3>
                  <p>
                    En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego. En esta descripción de la instrucción 1 se muestran los detalles
                    principales de las acciones que deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 2</h3>
                  <p>
                    En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego. En esta descripción de la instrucción 2 se muestran los detalles
                    principales de las acciones que deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 3</h3>
                  <p>
                    En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego. En esta descripción de la instrucción 3 se muestran los detalles
                    principales de las acciones que deberá tomar el usuario luego.
                  </p>
                </li>
              </ul>
            </div>
          </CodeBox>
          <br />
          <br />
          <p className="headline-md">Mediano</p>
          <CodeBox codeHTML={LIST_STEP_MEDIUM_BORDER}>
            <div className="container">
              <ul className="list-steps list-steps-light">
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 1</h3>
                  <p>
                    En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 2</h3>
                  <p>
                    En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 3</h3>
                  <p>
                    En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
              </ul>
            </div>
          </CodeBox>
          <br />
          <br />
          <p className="headline-md">Chico</p>
          <CodeBox codeHTML={LIST_STEP_SMALL_BORDER}>
            <div className="container">
              <ul className="list-steps list-steps-sm list-steps-light">
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 1</h3>
                  <p>
                    En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 2</h3>
                  <p>
                    En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 3</h3>
                  <p>
                    En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
              </ul>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Con número',
      content: (
        <>
          <CodeBox codeHTML={LIST_STEP_MEDIUM_NUMBER}>
            <div className="container">
              <ul className="list-steps list-steps-numbers">
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 1</h3>
                  <p>
                    En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 2</h3>
                  <p>
                    En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 3</h3>
                  <p>
                    En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
              </ul>
            </div>
          </CodeBox>
          <br />
          <br />
          <p className="headline-md">Con borde</p>
          <CodeBox codeHTML={LIST_STEP_MEDIUM_NUMBER_BORDER}>
            <div className="container">
              <ul className="list-steps list-steps-numbers list-steps-light">
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 1</h3>
                  <p>
                    En esta descripción de la instrucción 1 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 2</h3>
                  <p>
                    En esta descripción de la instrucción 2 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
                <li className="list-steps-item">
                  <h3 className="list-steps-item-title">Instrucción 3</h3>
                  <p>
                    En esta descripción de la instrucción 3 se muestran los detalles principales de las acciones que
                    deberá tomar el usuario luego.
                  </p>
                </li>
              </ul>
            </div>
          </CodeBox>
        </>
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
