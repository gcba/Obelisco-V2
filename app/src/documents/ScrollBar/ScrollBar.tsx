import CodeBox from '@/components/CodeBox';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { SCROLLBAR_HORIZONTAL, SCROLLBAR_VERTICAL } from './code-views';

const ScrollBarDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      id: 'section-1',
      title: 'Horizontal',
      firstTitle: true,
      content: (
        <CodeBox codeHTML={SCROLLBAR_HORIZONTAL}>
          <div className="container">
            <div className="responsive-scroll" tabIndex={0}>
              <div className="horizontal-example">
                <h1>Esto es un título de ejemplo</h1>
                <p className="lead">
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <h2>Esto es un título de ejemplo</h2>
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Vertical',
      content: (
        <CodeBox codeHTML={SCROLLBAR_VERTICAL}>
          <div className="container">
            <div className="responsive-scroll" tabIndex={0}>
              <div className="vertical-example">
                <h1>Esto es un título de ejemplo</h1>
                <p className="lead">
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <h2>Esto es un título de ejemplo</h2>
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <h2>Esto es un título de ejemplo</h2>
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra de desplazamiento. No tiene
                  ningún fin específico, solo sirve de muestra. El ancho del texto es para probar el desplazamiento
                  horizontal, mientras que la lista de cuerpos de contenido consecutivos es para probar el
                  desplazamiento vertical.
                </p>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return (
    <>
      <ComponentHeader title="Barra de desplazamiento" />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default ScrollBarDocs;
