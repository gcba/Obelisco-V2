import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import ComponentHeader from '@/components/Template/ComponentHeader';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';

import { CDN_CODE, NPM_CODE, NPM_UPDATE_CODE, PNPM_CODE, YARN_CODE } from './code-views';

const sections = [
  {
    title: 'Instalación con npm',
    description:
      'Para instalar la librería de componentes Obelisco V2 en tu proyecto, puedes utilizar cualquiera de los siguientes gestores de paquetes:',
    content: (
      <div className="col-12">
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
      </div>
    ),
  },
  {
    title: 'Actualización',
    description:
      'Si Obelisco V2 ya está instalado en el proyecto y necesitás actualizarlo a la última versión, en el directorio del proyecto hay que ejecutar:',
    content: (
      <div className="col-12">
        <SyntaxHighlighter language="bash" style={dracula}>
          {NPM_UPDATE_CODE}
        </SyntaxHighlighter>
      </div>
    ),
  },
  {
    title: 'Uso con CDN',
    content: (
      <div className="col-12">
        <p className="mb-4">
          Si no instalás Obelisco de forma local, podés incluir los estilos directamente desde nuestra CDN. Sólo tenés
          que reemplazar la sección de la url en la que figura &quot;<code>X.X.X</code>&quot; por el número de la
          versión que desees utilizar. Te recomendamos usar la{' '}
          <Link href="https://www.jsdelivr.com/package/npm/@gcba/obelisco-v2" target="_blank" rel="noopener noreferrer">
            versión más reciente
          </Link>
          .
        </p>
        <SyntaxHighlighter language="html" style={dracula}>
          {CDN_CODE}
        </SyntaxHighlighter>
      </div>
    ),
  },
];

const InstallationModule: React.FC = () => {
  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/getting-started">Inicio</Link>
          </li>
        </ol>
      </nav>
      <ComponentHeader
        title="Instalación"
        description={[
          'En esta sección, aprenderás cómo instalar y comenzar a utilizar la librería de estilos de componentes Obelisco V2 en tus proyectos. Siguiendo unos sencillos pasos, podrás integrar nuestros componentes estilizados en cualquier aplicación web, ya sea que trabajes con React, Angular, o cualquier otra tecnología.',
        ]}
        divider={true}
      />
      <DocumentationTemplate sections={sections} type="install" />
    </>
  );
};

export default InstallationModule;
