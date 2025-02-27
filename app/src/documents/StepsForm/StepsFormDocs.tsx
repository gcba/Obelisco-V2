import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { STEPS_FORM } from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Pasos de un formulario',
    firstTitle: true,
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

const StepsFormDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Pasos de un formulario"
        description={[
          'Es un indicador de progreso que muestra visualmente los pasos de las acciones del usuario en un formulario. Los ayuda a comprender la progresión de los formularios largos y reduce la incertidumbre a medida que completan cada pantalla.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/paso-a-paso/"
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

export default StepsFormDocs;
