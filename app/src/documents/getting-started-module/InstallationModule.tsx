import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { CDN_CODE, NPM_CODE, PNPM_CODE, YARN_CODE } from './code-views';

const InstallationModule: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Instalación',
      content: (
        <MainDescription description="En esta sección, aprenderás cómo instalar y comenzar a utilizar la librería de estilos de componentes Obelisco V2 en tus proyectos. Siguiendo unos sencillos pasos, podrás integrar nuestros componentes estilizados en cualquier aplicación web, ya sea que trabajes con React, Angular, o cualquier otra tecnología." />
      ),
      h1: true,
      defaultTitle: true,
    },
    {
      id: 'section-2',
      title: 'Instalación con npm',
      description:
        'Para instalar la librería de componentes Obelisco V2 en tu proyecto, puedes utilizar cualquiera de los siguientes gestores de paquetes:',
      content: (
        <>
          <h3 className="headline-lg">npm:</h3>
          <SyntaxHighlighter language="bash" style={dracula}>
            {NPM_CODE}
          </SyntaxHighlighter>

          <br />

          <h3 className="headline-lg">yarn:</h3>
          <SyntaxHighlighter language="bash" style={dracula}>
            {YARN_CODE}
          </SyntaxHighlighter>

          <br />

          <h3 className="headline-lg">pnpm:</h3>
          <SyntaxHighlighter language="bash" style={dracula}>
            {PNPM_CODE}
          </SyntaxHighlighter>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Uso con CDN',
      description:
        'Si prefieres no instalar nada localmente, puedes incluir los estilos directamente desde nuestra CDN:',
      content: (
        <SyntaxHighlighter language="html" style={dracula}>
          {CDN_CODE}
        </SyntaxHighlighter>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default InstallationModule;
