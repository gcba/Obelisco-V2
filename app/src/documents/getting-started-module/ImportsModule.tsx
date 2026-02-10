import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import {
  BOOTSTRAP_CODE,
  BOXICONS_CODE,
  MATERIAL_S_CODE_NPM,
  MATERIAL_SYMBOLS_CODE,
  NUNITO_CODE,
  OPENSANS_CODE,
  POPPER_CODE,
  STYLES_CODE,
  STYLES_CODE_CSS,
  STYLES_CODE_CSS_WEBPACK4,
} from './code-views';

const sections = [
  {
    title: 'Estilos',
    description: 'Se deben importar los estilos provenientes del paquete de Obelisco v2.',
    content: (
      <div className="col-12">
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {STYLES_CODE}
        </SyntaxHighlighter>

        <br />
        <p>O puedes importarlo en tu hoja de estilos global.</p>

        <SyntaxHighlighter language="scss" style={dracula} wrapLongLines>
          {STYLES_CODE_CSS}
        </SyntaxHighlighter>

        <br />
        <p>Si estas utilizando versiones anteriores de webpack, (Webpack 4 o inferiores), el prefijo ~ es necesario:</p>

        <SyntaxHighlighter language="scss" style={dracula} wrapLongLines>
          {STYLES_CODE_CSS_WEBPACK4}
        </SyntaxHighlighter>
      </div>
    ),
  },
  {
    title: 'Tipografías utilizadas',
    description:
      'Obelisco V2 utiliza las tipografías Open Sans y Nunito para asegurar una apariencia moderna y profesional. Puedes incluirlas en tu proyecto utilizando los siguientes enlaces:',
    content: (
      <div className="col-12">
        <h3 className="headline-md">Open Sans:</h3>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {OPENSANS_CODE}
        </SyntaxHighlighter>

        <br />

        <h3 className="headline-md">Nunito:</h3>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {NUNITO_CODE}
        </SyntaxHighlighter>
      </div>
    ),
  },
  {
    title: 'Iconografía utilizada',
    description:
      'Obelisco V2 hace uso de la iconografía provista por Material Symbols y Boxicons. A continuación se detallan los recursos necesarios:',
  },
  {
    subtitle: 'Boxicons',
    content: (
      <div className="col-12">
        <br />
        <p className="headline-md">Utilizando CDN:</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {BOXICONS_CODE}
        </SyntaxHighlighter>        
        <br />
      </div>
    ),
  },
  {
    subtitle: 'Material Symbols Rounded',
    content: (
      <div className="col-12">
        <br />
        <p className="headline-md">Utilizando NPM:</p>
        <SyntaxHighlighter language="bash" style={dracula} wrapLongLines>
          {MATERIAL_S_CODE_NPM}
        </SyntaxHighlighter>

        <br />
        <p>
          Es importante que incluyas el import a Material Symbols en tu hoja de estilos si lo usas via NPM, asi como
          también los estilos referidos al fill de los íconos.
        </p>

        <SyntaxHighlighter language="scss" style={dracula} wrapLongLines>
          {`
@import "material-symbols/index.css";

.material-symbols-rounded {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
            `}
        </SyntaxHighlighter>

        <br />

        <p className="headline-md">O puedes utilizar la CDN:</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {MATERIAL_SYMBOLS_CODE}
        </SyntaxHighlighter>
      </div>
    ),
  },
  {
    title: 'Scripts necesarios',
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

const ImportsModule: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Importaciones necesarias"
        description={[
          'Después de instalar Obelisco V2 o hacer el llamado a través de la CDN, es necesario importar ciertos complementos esenciales para asegurar el correcto funcionamiento y el estilo de los componentes de Obelisco V2. A continuación, se detallan los recursos que debes incluir en tu proyecto.',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="imports" />;
    </>
  );
};

export default ImportsModule;
