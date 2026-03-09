import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

const SECTIONS_DEV = [
  {
    title: 'Sin fondo',
    firstTitle: true,
    content: (
      <>
        <div className="indicator">
          <h1>36.578</h1>
          <p className="headline-lg">Días ahorrados</p>
          <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
        </div>
      </>
    ),
  },
  {
    title: 'Con fondos',
    content: (
      <>
        <div className="indicator bg-light">
          <h1>36.578</h1>
          <p className="headline-lg">Días ahorrados</p>
          <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
        </div>
      </>
    ),
  },
  {
    title: 'Sin borde',
    content: (
      <>
        <div className="indicator bg-light unbordered">
          <h1>36.578</h1>
          <p className="headline-lg">Días ahorrados</p>
          <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
        </div>
        <br />
        <div className="indicator">
          <h1>36.578</h1>
          <p className="headline-lg">Días ahorrados</p>
          <p className="text-md">Tiempo que se ahorran los vecinos y la administracion Pública</p>
        </div>
      </>
    ),
  },

  {
    title: 'Tamaños',
    content: (
      <>
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
      </>
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
