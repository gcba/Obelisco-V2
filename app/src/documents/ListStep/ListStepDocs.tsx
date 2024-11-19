import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  LIST_STEP_LARGE,
  LIST_STEP_MEDIUM,
  LIST_STEP_MEDIUM_BORDER,
  LIST_STEP_MEDIUM_NUMBER,
  LIST_STEP_MEDIUM_NUMBER_BORDER,
  LIST_STEP_SMALL,
} from './code-views';

const ListStepDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Tamaños',
    },
    {
      subtitle: 'Grande',
      content: (
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
      ),
    },
    {
      subtitle: 'Mediano',
      content: (
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
      ),
    },
    {
      subtitle: 'Chico',
      content: (
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
      ),
    },
    {
      title: 'Con borde',
      content: (
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
      ),
    },
    {
      title: 'Con número',
      content: (
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
      ),
    },
    {
      title: 'Con número y borde',
      content: (
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
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Lista de pasos"
        description={[
          'Las listas se utilizan para agrupar una serie de elementos relacionados. Para listas que presentan un orden secuencial de pasos, utilizamos la Lista de pasos.',
          <>
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/listas/lista-de-pasos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              enlace
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default ListStepDocs;
