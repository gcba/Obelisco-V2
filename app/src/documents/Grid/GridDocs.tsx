import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import CodeCopy from '@/components/CodeBox';
import MainDescription from '@/components/Template/MainDescription';
import {
  FOUR_COLUMNS,
  LAYOUTS,
  ONE_COLUMN,
  THREE_COLUMNS,
  TWO_COLUMNS,
} from './code-views';

const GridDocs: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Grilla',
      content: (
        <>
          <MainDescription description="La grilla es la base para colocar elementos en la pantalla. Diseñar con una grilla ayuda a crear interfaces organizadas y fáciles de usar." />
        </>
      ),
      h1: true,
    },
    {
      id: 'section-2',
      title: 'Layouts',
      content: (
        <>
          <div className="container text-center text-white">
            <div className="bg-primary py-2">container</div>
          </div>
          <br />
          <div className="container text-white text-center">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="bg-primary py-2">col-12 col-lg-8</div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="bg-primary py-2">col-12 col-lg-4</div>
              </div>
            </div>
          </div>
          <br />
          <CodeCopy code={LAYOUTS} />
        </>
      ),
      h1: false,
    },
    {
      id: 'section-3',
      title: 'Disposiciones',
      content: (
        <>
          <div className="container">
            <h3>Cuatro columnas</h3>
            <div className="max-items-4 text-white text-center">
              <div className="col">
                <div className="bg-primary py-2">1</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">2</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">3</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">4</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">5</div>
              </div>
            </div>
          </div>
          <br />
          <CodeCopy code={FOUR_COLUMNS} />
          <br />
          <div className="container">
            <h3>Tres columnas</h3>
            <div className="max-items-3 text-white text-center">
              <div className="col">
                <div className="bg-primary py-2">1</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">2</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">3</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">4</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">5</div>
              </div>
            </div>
          </div>
          <br />
          <CodeCopy code={THREE_COLUMNS} />
          <br />
          <div className="container">
            <h3>Dos columnas</h3>
            <div className="max-items-2 text-white text-center">
              <div className="col">
                <div className="bg-primary py-2">1</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">2</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">3</div>
              </div>
            </div>
          </div>
          <br />
          <CodeCopy code={TWO_COLUMNS} />
          <br />
          <div className="container">
            <h3>Una columna</h3>
            <div className="max-items-1 text-white text-center">
              <div className="col">
                <div className="bg-primary py-2">1</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">2</div>
              </div>
              <div className="col">
                <div className="bg-primary py-2">3</div>
              </div>
            </div>
          </div>
          <br />
          <CodeCopy code={ONE_COLUMN} />
        </>
      ),
      h1: false,
    }
  ];

  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default GridDocs;