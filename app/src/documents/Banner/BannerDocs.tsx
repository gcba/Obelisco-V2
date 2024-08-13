import MainDescription from '@/components/Template/MainDescription';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import CodeCopy from '@/components/CodeBox';
import { EGcodeSimpleBanner, EGcodeSimpleBannerWithButton, EGcodeSimpleBannerWithButtons } from './code-views';

const BannerDocs: React.FC = () => {

  const sections = [
    {
      id: "section-1",
      title: "Banner",
      content: (
        <MainDescription description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." />
      ),
      h1: true,
    },
    {
      id: "section-2",
      title: "Simple",
      content: (
        <>
          <div className="banner">
            <div className="banner-content">
              <p className="banner-text">
                Esta descripción de banner
                <strong>puede tener énfasis</strong>
                y
                <a href="#" target="_blank" rel="noreferrer">enlace</a>
                .
              </p>
            </div>
          </div>

          <div className="banner banner-dark">
            <div className="banner-content">
              <p className="banner-text">
                Esta descripción de banner
                <strong>puede tener énfasis</strong>
                y
                <a href="#" target="_blank" rel="noreferrer">enlace</a>
                .
              </p>
            </div>
          </div>

          <CodeCopy code={EGcodeSimpleBanner} />
        </>
      ),
    },
    {
      id: "section-3",
      title: "Con botón",
      content: (
        <>
          <div className="banner">
            <div className="banner-content">
              <span className="material-symbols-rounded o-icon">
                terminal
              </span>
              <p className="banner-text">
                Este banner tiene un solo botón y
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
              </div>
            </div>
          </div>

          <div className="banner banner-dark">
            <div className="banner-content">
              <span className="material-symbols-rounded o-icon">
                terminal
              </span>
              <p className="banner-text">
                Este banner tiene un solo botón y
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
              </div>
            </div>
          </div>

          <CodeCopy code={EGcodeSimpleBannerWithButton} />
        </>
      ),
    },
    {
      id: "section-4",
      title: "Con botones",
      content: (
        <>
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

          <CodeCopy code={EGcodeSimpleBannerWithButtons} />
        </>
      ),
    },
  ];

  return (
    <DocumentationTemplate sections={sections} />
  );
};

export default BannerDocs;
