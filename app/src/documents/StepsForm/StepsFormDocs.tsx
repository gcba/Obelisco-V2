'use client';
import React, { useState } from 'react';

import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { STEPS_FORM, STEPS_FORM_LOGIC, STEPS_FORM_LOGIC_JS, STEPS_FORM_VOLANTA } from './code-views';

const StepperWithLogic: React.FC = () => {
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <>
      <div className="stepper-content">
        <div className="stepper">
          <h2 className="step-title">Nombre del paso</h2>
          <p className="step-subtitle">Paso siguiente: Nombre del paso {currentStep}</p>
          <div className="steps">
            <div className="steps-items">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className={`steps-item ${index < currentStep ? 'active' : ''}`}></div>
              ))}
            </div>
            <span className="steps-detail">
              Paso {currentStep} de {totalSteps}
            </span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-start gap-2 ps-3 pt-2">
        <button
          type="button"
          className="btn btn-outline-primary me-2"
          onClick={handlePrev}
          disabled={currentStep === 1}
        >
          Anterior
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleNext}
          disabled={currentStep === totalSteps}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

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
  {
    title: 'Con volanta',
    content: (
      <CodeBox codeHTML={STEPS_FORM_VOLANTA}>
        <div className="stepper-content">
          <div className="stepper">
            <p className="step-volanta">Volanta con información adicional</p>
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
  {
    title: 'Pasos de un formulario con logica',
    firstTitle: true,
    content: (
      <CodeBox codeHTML={STEPS_FORM_LOGIC} codeJS={STEPS_FORM_LOGIC_JS}>
        <StepperWithLogic />
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
