import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { HEADLINE, HEADINGS, BODY, OTHER_STYLES, DEFAULT_LISTS, BLOCKQUOTE } from './code-views';

const TypographyDocs: React.FC = () => {
  const sections = [
    {
      h1: true,
      title: 'Tipografía',
      content: (
        <MainDescription description="La tipografía es nuestro sistema de fuentes. Las buenas prácticas ayudan a presentar el contenido de manera clara y eficiente." />
      ),
    },
    {
      id: 'section-1',
      title: 'Títulos',
      content: (
        <>
          <CodeBox codeHTML={HEADINGS}>
            <div className="container">
              <h1>Headings h1 - Nunito, 40px, IL 48px</h1>
              <h2>Headings h2 - Nunito, 36px, IL 44px</h2>
              <h3>Headings h3 - Nunito, 32px, IL 44px</h3>
              <h4>Headings h4 - Nunito, 28px, IL 36px</h4>
              <h5>Headings h5 - Nunito, 24px, IL 32px</h5>
              <h6>Headings h6 - Nunito, 20px, IL 28px</h6>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-2',
      title: 'Titulares',
      content: (
        <>
          <CodeBox codeHTML={HEADLINE}>
            <div className="container">
              <p className="headline-lg">Titular L - Nunito, 20px, IL 24px</p>
              <p className="headline-md">Titular M - Nunito, 18px, IL 24px</p>
              <p className="headline-sm">Titular S - Nunito, 16px, IL 20px</p>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Cuerpo',
      content: (
        <>
          <CodeBox codeHTML={BODY}>
            <div className="container">
              <p className="text-xl">Cuerpo XL - Open Sans, 20px, IL 28px</p>
              <p className="text-lg">Cuerpo L - Open Sans, 18px, IL 28px</p>
              <p>Cuerpo M - Open Sans, 16px, IL 24px</p>
              <p className="text-sm">Cuerpo S - Open Sans, 14px, IL 20px</p>
              <p className="text-xs">Cuerpo XS - Open Sans, 12px, IL 16px</p>
              <br />
              <p>Cuerpo M - Predeterminado - Open Sans, 16px, IL 24px</p>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Otros estilos',
      content: (
        <>
          <CodeBox codeHTML={OTHER_STYLES}>
            <div className="container">
              <p className="fw-normal">Texto con font-weight normal (400)</p>
              <p className="fw-semibold">Texto con font-weight semibold (600)</p>
              <p className="fw-bold">Texto con font-weight bold (700)</p>
              <p className="fst-italic">Texto en itálica</p>
              <p className="underline-1">Texto subrayado con grosor de 1px</p>
              <p className="underline-2">Texto subrayado con grosor de 2px</p>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-5',
      title: 'Listas predeterminadas',
      content: (
        <>
          <CodeBox codeHTML={DEFAULT_LISTS}>
            <div className="container">
              <ul>
                <li>Esto es el texto de una lista</li>
                <li>Esto es el texto de una lista</li>
                <li>Esto es el texto de una lista</li>
              </ul>
              <br />
              <ol>
                <li>Esto es el texto de una lista ordenada</li>
                <li>Esto es el texto de una lista ordenada</li>
                <li>Esto es el texto de una lista ordenada</li>
              </ol>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      id: 'section-6',
      title: 'Citas',
      content: (
        <>
          <CodeBox codeHTML={BLOCKQUOTE}>
            <div className="container">
              <blockquote>
                <p>
                  Este es un apartado del texto que se quiere destacar por su importancia dentro del contenido de la
                  página.
                </p>
                <p className="author">Nombre del autor de la cita</p>
              </blockquote>
            </div>
          </CodeBox>
          <br />
          <br />
        </>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default TypographyDocs;
