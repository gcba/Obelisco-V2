'use client';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  PROGRESSBAR_DESCRIPTION_PRIMARY,
  PROGRESSBAR_DESCRIPTION_SUCCESS,
  PROGRESSBAR_TYPES_PRIMARY,
  PROGRESSBAR_TYPES_SUCCESS,
} from './code-views';

const ProgressBarDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Simple',
      firstTitle: true,
      content: (
        <>
          <CodeBox codeHTML={PROGRESSBAR_TYPES_PRIMARY}>
            <div className="container">
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '25%' }}
                ></div>
              </div>
              <br />
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>
              <br />
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={PROGRESSBAR_TYPES_SUCCESS}>
            <div className="container">
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '25%' }}
                ></div>
              </div>

              <br />

              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>

              <br />

              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con descripción',
      content: (
        <>
          <CodeBox codeHTML={PROGRESSBAR_DESCRIPTION_PRIMARY}>
            <div className="container">
              <p className="progress-description">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>

              <br />

              <p className="progress-description">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={PROGRESSBAR_DESCRIPTION_SUCCESS}>
            <div className="container">
              <p className="progress-description">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>

              <br />

              <p className="progress-description">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader
        title="Barra de progreso"
        description={[
          'Las barras de progreso muestran visualmente el avance de un proceso de varios pasos a partir de la interacción de la persona usuaria.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/barra-de-progreso/"
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

export default ProgressBarDocs;
