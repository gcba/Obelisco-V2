import CodeContainer from '@/components/CodeContainer';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { BANNER_BUTTON, BANNER_BUTTON_DARK, BANNER_BUTTONS, BANNER_BUTTONS_DARK, BANNER_SIMPLE, BANNER_SIMPLE_DARK } from './code-views';

const BannerDocs: React.FC = () => {

  const sections = [
    {
      id: "section-1",
      title: "Banner",
      content: (
        <MainDescription description="Los banners muestran mensajes importantes y breves, a modo de aviso general, para informar a los usuarios sobre temas de diverso interés. Se muestran al ancho completo." />
      ),
      h1: true,
    },
    {
      id: "section-2",
      title: "Simple",
      content: (
        <>
        <CodeContainer codeHTML={BANNER_SIMPLE}>
          <div className="banner">
            <div className="banner-content">
              <p className="banner-text">
                Esta descripción de banner <strong>puede tener énfasis</strong> y <a href="#" target="_blank" rel="noreferrer">enlace</a>.
              </p>
            </div>
          </div>
        </CodeContainer>
        <br />
        <CodeContainer codeHTML={BANNER_SIMPLE_DARK}>
          <div className="banner banner-dark">
            <div className="banner-content">
              <p className="banner-text">
                Esta descripción de banner <strong>puede tener énfasis</strong> y <a href="#" target="_blank" rel="noreferrer"> enlace</a>.
              </p>
            </div>
          </div>
        </CodeContainer>
        </>
      ),
    },
    {
      id: "section-3",
      title: "Con botón",
      content: (
        <>
          <CodeContainer codeHTML={BANNER_BUTTON}>
            <div className="banner">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon">
                  terminal
                </span>
                <p className="banner-text">
                  Este banner tiene un solo botón y <strong>puede tener énfasis</strong>
                  . Se truncan los textos que superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-secondary"
                  >
                    Botón
                  </a>
                </div>
              </div>
            </div>
          </CodeContainer>
          <br />
          <CodeContainer codeHTML={BANNER_BUTTON_DARK}>
            <div className="banner banner-dark">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon">
                  terminal
                </span>
                <p className="banner-text">
                  Este banner tiene un solo botón y <strong>puede tener énfasis</strong>
                  . Se truncan los textos que superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-secondary"
                  >
                    Botón
                  </a>
                </div>
              </div>
            </div>
          </CodeContainer>
        </>
      ),
    },
    {
      id: "section-4",
      title: "Con botones",
      content: (
        <>
        <CodeContainer codeHTML={BANNER_BUTTONS}>
          <div className="banner">
            <div className="banner-content">
              <span className="material-symbols-rounded o-icon">
                terminal
              </span>
              <p className="banner-text">
                Este banner tiene dos botones y
                <strong>puede tener énfasis</strong>
                . Se truncan los textos que superen más de una línea de texto.
              </p>
              <div className="banner-actions">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-secondary"
                >
                  Botón
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Botón
                </a>
              </div>
            </div>
          </div>
        </CodeContainer>
        <br />
        <CodeContainer codeHTML={BANNER_BUTTONS_DARK}>
          <div className="banner banner-dark">
            <div className="banner-content">
              <span className="material-symbols-rounded o-icon">
                terminal
              </span>
              <p className="banner-text">
                Este banner tiene dos botones y
                <strong>puede tener énfasis</strong>
                . Se truncan los textos que superen más de una línea de texto.
              </p>
              <div className="banner-actions">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-secondary"
                >
                  Botón
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Botón
                </a>
              </div>
            </div>
          </div>
        </CodeContainer>
        <br /><br /><br /><br />
        </>
      ),
    },
  ];

  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default BannerDocs;
