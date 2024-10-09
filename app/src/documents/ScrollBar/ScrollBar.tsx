import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { MAP_INSTITUTION, MAP_LATERAL } from './code-views';

const MapDocs: React.FC = () => {
  const sections = [
    {
      title: 'Barra de desplazamiento',
      h1: true,
      content: (
        <>
          <MainDescription description="Descripcion Barra de desplazamiento" />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a href="https://gcba.github.io/estandares/componentes/mapa/" target="_blank" rel="noopener noreferrer">
              enlace
            </a>
            {/* qestandares de barra de desplazamiento? */}
            .
          </p>
        </>
      ),
    },
    {
      id: 'section-1',
      title: 'Lateral',
      content: (
        <CodeBox codeHTML={MAP_LATERAL}>
          {/* <div className="container"> */}
          <div className="responsive-scroll" tabIndex={0}>
            <div className="horizontal-example">
              <h1>Esto es un título de ejemplo</h1>
              <p className="lead">
                Esto es un párrafo de ejemplo para probar el funcionamiento de la barra
                de desplazamiento. No tiene ningún fin específico, solo sirve de
                muestra. El ancho del texto es para probar el desplazamiento horizontal,
                mientras que la lista de cuerpos de contenido consecutivos es para
                probar el desplazamiento vertical.
              </p>
              <br />
              <hr />
              <br />
              <h2>Esto es un título de ejemplo</h2>
              <p>
                Esto es un párrafo de ejemplo para probar el funcionamiento de la barra
                de desplazamiento. No tiene ningún fin específico, solo sirve de
                muestra. El ancho del texto es para probar el desplazamiento horizontal,
                mientras que la lista de cuerpos de contenido consecutivos es para
                probar el desplazamiento vertical.
              </p>
            </div>
          </div>
          {/* </div> */}
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Institucional',
      content: (
        <CodeBox codeHTML={MAP_INSTITUTION}>
          <div className="container">
            <div className="responsive-scroll" tabIndex={0}>
              <div className="vertical-example">
                <h1>Esto es un título de ejemplo</h1>
                <p className="lead">
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra
                  de desplazamiento. No tiene ningún fin específico, solo sirve de
                  muestra. El ancho del texto es para probar el desplazamiento horizontal,
                  mientras que la lista de cuerpos de contenido consecutivos es para
                  probar el desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra
                  de desplazamiento. No tiene ningún fin específico, solo sirve de
                  muestra. El ancho del texto es para probar el desplazamiento horizontal,
                  mientras que la lista de cuerpos de contenido consecutivos es para
                  probar el desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <h2>Esto es un título de ejemplo</h2>
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra
                  de desplazamiento. No tiene ningún fin específico, solo sirve de
                  muestra. El ancho del texto es para probar el desplazamiento horizontal,
                  mientras que la lista de cuerpos de contenido consecutivos es para
                  probar el desplazamiento vertical.
                </p>
                <br />
                <hr />
                <br />
                <h2>Esto es un título de ejemplo</h2>
                <p>
                  Esto es un párrafo de ejemplo para probar el funcionamiento de la barra
                  de desplazamiento. No tiene ningún fin específico, solo sirve de
                  muestra. El ancho del texto es para probar el desplazamiento horizontal,
                  mientras que la lista de cuerpos de contenido consecutivos es para
                  probar el desplazamiento vertical.
                </p>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },

  ];

  return <DocumentationTemplate sections={sections} />;
};

export default MapDocs;
