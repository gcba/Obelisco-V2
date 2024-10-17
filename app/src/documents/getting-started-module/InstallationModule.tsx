import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { CDN_CODE, NPM_CODE, NPM_UPDATE_CODE, PNPM_CODE, YARN_CODE } from './code-views';

const InstallationModule: React.FC = () => {
  const sections = [
    {
      title: 'Instalación',
      content: (
        <MainDescription description="En esta sección, aprenderás cómo instalar y comenzar a utilizar la librería de estilos de componentes Obelisco V2 en tus proyectos. Siguiendo unos sencillos pasos, podrás integrar nuestros componentes estilizados en cualquier aplicación web, ya sea que trabajes con React, Angular, o cualquier otra tecnología." />
      ),
      h1: true,
      defaultTitle: true,
    },
    {
      id: 'section-1',
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
      id: 'section-3',
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
      id: 'section-4',
      title: 'Uso con CDN',
      description:
        'Si prefieres no instalar nada localmente, puedes incluir los estilos directamente desde nuestra CDN:',
      content: (
        <div className="col-12">
          <SyntaxHighlighter language="html" style={dracula}>
            {CDN_CODE}
          </SyntaxHighlighter>
        </div>
      ),
    },
  ];

  return (
    <>
      <nav aria-label="Navegación secundaria">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/getting-started">Inicio</Link>
          </li>
        </ol>
      </nav>
      <DocumentationTemplate sections={sections} />;
    </>
  );
};

export default InstallationModule;
