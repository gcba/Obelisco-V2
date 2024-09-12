import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  BOOTSTRAP_CODE,
  BOXICONS_CODE,
  MATERIAL_SYMBOLS_CODE,
  NUNITO_CODE,
  OPENSANS_CODE,
  POPPER_CODE,
  STYLES_CODE,
} from './code-views';

const ImportsModule: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Importaciones Necesarias',
      content: (
        <MainDescription description="Después de instalar Obelisco V2 o hacer el llamado a través de la CDN, es necesario importar ciertos complementos esenciales para asegurar el correcto funcionamiento y el estilo de los componentes de Obelisco V2. A continuación, se detallan los recursos que debes incluir en tu proyecto:" />
      ),
      h1: true,
      defaultTitle: true,
    },
    {
      id: 'section-2',
      title: 'Estilos',
      description: 'Se deben importar los estilos provenientes del paquete de obelisco v2.',
      content: (
        <div className="col-12">
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {STYLES_CODE}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      id: 'section-3',
      title: 'Tipografías Utilizadas',
      description:
        'Obelisco V2 utiliza las tipografías Open Sans y Nunito para asegurar una apariencia moderna y profesional. Puedes incluirlas en tu proyecto utilizando los siguientes enlaces:',
      content: (
        <div className="col-12">
          <h3 className="headline-lg">Open Sans:</h3>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {OPENSANS_CODE}
          </SyntaxHighlighter>

          <br />

          <h3 className="headline-lg">Nunito:</h3>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {NUNITO_CODE}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      id: 'section-4',
      title: 'Iconografía Utilizada',
      description:
        'Obelisco V2 hace uso de la iconografía provista por Material Symbols y Boxicons. A continuación se detallan los recursos necesarios:',
      content: (
        <div className="col-12">
          <h3 className="headline-lg">Boxicons:</h3>
          <SyntaxHighlighter language="bash" style={dracula} wrapLongLines>
            {`npm install boxicons`}
          </SyntaxHighlighter>

          <br />

          <h3 className="headline-lg">O puedes utilizar la CDN:</h3>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {BOXICONS_CODE}
          </SyntaxHighlighter>

          <br />

          <h3 className="headline-lg">Material Symbols:</h3>
          <SyntaxHighlighter language="bash" style={dracula} wrapLongLines>
            {`npm install material-symbols@latest`}
          </SyntaxHighlighter>

          <br />

          <h3 className="headline-lg">O puedes utilizar la CDN:</h3>
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {MATERIAL_SYMBOLS_CODE}
          </SyntaxHighlighter>
        </div>
      ),
    },
    {
      id: 'section-5',
      title: 'Scripts Necesarios',
      description:
        'Para asegurar el correcto funcionamiento de los componentes basados en Bootstrap 5, es necesario incluir los siguientes scripts:',
      content: (
        <div className="col-12">
          <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
            {`${POPPER_CODE}\n\n${BOOTSTRAP_CODE}`}
          </SyntaxHighlighter>
        </div>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default ImportsModule;
