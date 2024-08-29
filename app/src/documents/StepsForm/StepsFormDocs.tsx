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
        <MainDescription description="Es un indicador de progreso que muestra visualmente los pasos de las acciones del usuario en un formulario. Los ayuda a comprender la progresión de los formularios largos y reduce la incertidumbre a medida que completan cada pantalla." />
      ),
    },
    {
      id: 'section-1',
      title: 'Pasos de un formulario',
      content: (
        <CodeBox codeHTML={STEPS_FORM}>
          <div className="container">lorem</div>
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
