import CodeBox from '@/components/CodeBox';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import {
  SIMPLE_ALERT,
  WITH_CLOSE_ALERT,
  HIGHLIGTHED_ALERT,
  HYPERLINK_ALERT,
  LIST_LINK_ALERT,
  WITH_DESCRIPTION_ALERT,
} from './code-views';

const AlertDocs: React.FC = () => {
  const sections = [
    {
      title: 'Alertas',
      content: (
        <MainDescription description="Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción." />
      ),
    },
    {
      id: 'section-1',
      title: 'Simple',
      content: (
        <CodeBox codeHTML={SIMPLE_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info" role="alert">
              Esta es la descripción de una alerta de información.
            </div>

            <div className="alert alert-success" role="alert">
              Esta es la descripción de una alerta de éxito.
            </div>

            <div className="alert alert-warning" role="alert">
              Esta es la descripción de una alerta de advertencia.
            </div>

            <div className="alert alert-danger" role="alert">
              Esta es la descripción de una alerta de error.
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Con cierre',
      content: (
        <CodeBox codeHTML={WITH_CLOSE_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de información.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de éxito.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de advertencia.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de error.</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Con destacado',
      content: (
        <CodeBox codeHTML={HIGHLIGTHED_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta
                de información que continua al texto destacado.
              </p>
            </div>

            <div className="alert alert-warning" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de advertencia.</strong> Esta es la descripción de una alerta
                de advertencia que continua al texto destacado.
              </p>
            </div>

            <div className="alert alert-success" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de éxito.</strong> Esta es la descripción de una alerta de
                éxito que continua al texto destacado.
              </p>
            </div>

            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error.</strong>
                Esta es la descripción de una alerta de error que continua al texto destacado.
              </p>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-4',
      title: 'Con hipervinculo',
      content: (
        <CodeBox codeHTML={HYPERLINK_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información. </strong>
                Esta es la descripción de una alerta de información que continua al texto destacado, incluso{' '}
                <a href="#">con enlaces</a>.
              </p>
            </div>

            <div className="alert alert-success" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de éxito. </strong>
                Esta es la descripción de una alerta de éxito que continua al texto destacado, incluso{' '}
                <a href="#">con enlaces</a>.
              </p>
            </div>

            <div className="alert alert-warning" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de advertencia. </strong>
                Esta es la descripción de una alerta de advertencia que continua al texto destacado, incluso{' '}
                <a href="#">con enlaces</a>.
              </p>
            </div>

            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error. </strong>
                Esta es la descripción de una alerta de error que continua al texto destacado, incluso{' '}
                <a href="#">con enlaces</a>.
              </p>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-5',
      title: 'Con lista de enlaces',
      content: (
        <CodeBox codeHTML={LIST_LINK_ALERT}>
          <div className="container">
            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error.</strong> Esta es la descripción de una alerta de
                error que continua al texto destacado.
              </p>
              <ol>
                <li>
                  <a href="#">Ancla al error 1</a>
                </li>
                <li>
                  <a href="#">Ancla al error 2</a>
                </li>
                <li>
                  <a href="#">Ancla al error 3</a>
                </li>
                <li>
                  <a href="#">Ancla al error 4</a>
                </li>
                <li>
                  <a href="#">Ancla al error 5</a>
                </li>
              </ol>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-6',
      title: 'Con lista de enlaces descriptiva',
      content: (
        <CodeBox codeHTML={WITH_DESCRIPTION_ALERT}>
          <div className="container">
            <div className="alert alert-info" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información.</strong> Esta es la descripción de una alerta
                de información que continua al texto destacado.
              </p>
              <ol>
                <li>
                  <span>Texto descriptivo 1</span>
                </li>
                <li>
                  <span>Texto descriptivo 2</span>
                </li>
                <li>
                  <span>Texto descriptivo 3</span>
                </li>
                <li>
                  <span>Texto descriptivo 4</span>
                </li>
                <li>
                  <span>Texto descriptivo 5</span>
                </li>
              </ol>
            </div>
          </div>
        </CodeBox>
      ),
    },
  ];

  return <DocumentationTemplate sections={sections} />;
};

export default AlertDocs;
