import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { STEPS_FORM } from './code-views';

const StepsFormDocs: React.FC = () => {
  const sections = [
    {
      title: 'Pasos de un formulario',
      h1: true,
      content: (
        <>
          <MainDescription description="Es un indicador de progreso que muestra visualmente los pasos de las acciones del usuario en un formulario. Los ayuda a comprender la progresión de los formularios largos y reduce la incertidumbre a medida que completan cada pantalla." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a
              href="https://gcba.github.io/estandares/componentes/paso-a-paso/"
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
      title: 'Pasos de un formulario',
      content: (
        <CodeBox codeHTML={STEPS_FORM}>
          <div className="stepper-content">
            <div className="stepper">
              <h2 className="step-title">Nombre del paso</h2>
              <p className="step-subtitle">Paso siguiente: Nombre del paso 3</p>
              <div className="steps">
                <div className="steps-items">
                  <div className="steps-item active"></div>
                  <div className="steps-item active"></div>
                  <div className="steps-item"></div>
                  <div className="steps-item"></div>
                  <div className="steps-item"></div>
                </div>
                <span className="steps-detail">Paso 2 de 5</span>
              </div>
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

export default StepsFormDocs;
