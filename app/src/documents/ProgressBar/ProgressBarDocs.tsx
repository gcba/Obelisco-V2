'use client';

import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  PROGRESSBAR_DESCRIPTION_INFO,
  PROGRESSBAR_DESCRIPTION_SUCCESS,
  PROGRESSBAR_TYPES_INFO,
  PROGRESSBAR_TYPES_SUCCESS,
} from './code-views';

const ProgressBarDocs: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Barra de progreso',
      h1: true,
      content: (
        <MainDescription description="Las barras de progreso muestran visualmente el avance de un proceso de varios pasos a partir de la interacción de la persona usuaria." />
      ),
    },
    {
      id: 'section-2',
      title: 'Simple',
      content: (
        <>
          <CodeBox codeHTML={PROGRESSBAR_TYPES_INFO}>
            <div className="container">
              <div className="progress">
                <div
                  className="progress-bar bg-info"
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
                  className="progress-bar bg-info"
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
                  className="progress-bar bg-info"
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
      id: 'section-3',
      title: 'Con descripción',
      content: (
        <>
          <CodeBox codeHTML={PROGRESSBAR_DESCRIPTION_INFO}>
            <div className="container">
              <p className="steps">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: '50%' }}
                ></div>
              </div>

              <br />

              <p className="steps">Descripción</p>
              <div className="progress">
                <div
                  className="progress-bar bg-info"
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
              <p className="steps">Descripción</p>
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

              <p className="steps">Descripción</p>
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
          <br />
          <br />
          <br />
          <br />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default ProgressBarDocs;
