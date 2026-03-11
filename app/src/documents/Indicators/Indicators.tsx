import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { INDICATOR, INDICATOR_BG, INDICATOR_NO_BORDER, INDICATOR_SIZE, INDICATOR_MULTIPLES } from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Sin fondo',
    firstTitle: true,
    content: (
      <CodeBox codeHTML={INDICATOR}>
        <div className="container">
          <div className="indicator">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Con fondos',
    content: (
      <CodeBox codeHTML={INDICATOR_BG}>
        <div className="container">
          <div className="indicator bg-light">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Sin borde',
    content: (
      <CodeBox codeHTML={INDICATOR_NO_BORDER}>
        <div className="container">
          <div className="indicator bg-light unbordered">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
          <br />
          <div className="indicator unbordered">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Tamaños',
    content: (
      <CodeBox codeHTML={INDICATOR_SIZE}>
        <div className="container">
          <div className="indicator indicator-start bigger-title">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
          <br />
          <div className="indicator indicator-start bigger-title">
            <h1>36.578</h1>
            <p className="headline-lg">Días ahorrados</p>
            <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Multiples',
    content: (
      <CodeBox codeHTML={INDICATOR_MULTIPLES}>
        <div className="container">
          <div className="d-flex gap-3 justify-content-center">
            <div className="indicator">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>

            <div className="indicator">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>

            <div className="indicator">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center pt-3">
            <div className="indicator bg-light">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>

            <div className="indicator bg-light">
              <h1>36.578</h1>
              <p className="headline-lg">Días ahorrados</p>
              <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
];

const IndicatorsDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader title="Indicador" description={['Componente Indicador de datos']} />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default IndicatorsDocs;
