import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  SIMPLE_ALERT,
  WITH_CLOSE_ALERT,
  HIGHLIGTHED_ALERT,
  HYPERLINK_ALERT,
  LIST_LINK_ALERT,
  WITH_DESCRIPTION_ALERT,
} from './code-views';

const AlertDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
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
      title: 'Con cierre',
      content: (
        <CodeBox codeHTML={WITH_CLOSE_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de información.</p>
              <button type="button" className="btn-close" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-success alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de éxito.</p>
              <button type="button" className="btn-close" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de advertencia.</p>
              <button type="button" className="btn-close" aria-label="Cerrar"></button>
            </div>

            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <p>Esta es la descripción de una alerta de error.</p>
              <button type="button" className="btn-close" aria-label="Cerrar"></button>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
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
      title: 'Con hipervinculo',
      content: (
        <CodeBox codeHTML={HYPERLINK_ALERT}>
          <div className="container d-flex flex-column gap-3">
            <div className="alert alert-info" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de información. </strong>
                Esta es la descripción de una alerta de información que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>.
              </p>
            </div>

            <div className="alert alert-success" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de éxito. </strong>
                Esta es la descripción de una alerta de éxito que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>.
              </p>
            </div>

            <div className="alert alert-warning" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de advertencia. </strong>
                Esta es la descripción de una alerta de advertencia que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>.
              </p>
            </div>

            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error. </strong>
                Esta es la descripción de una alerta de error que continua al texto destacado, incluso{' '}
                <LinkClient>con enlaces</LinkClient>.
              </p>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
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
                  <LinkClient>Ancla al error 1</LinkClient>
                </li>
                <li>
                  <LinkClient>Ancla al error 2</LinkClient>
                </li>
                <li>
                  <LinkClient>Ancla al error 3</LinkClient>
                </li>
                <li>
                  <LinkClient>Ancla al error 4</LinkClient>
                </li>
                <li>
                  <LinkClient>Ancla al error 5</LinkClient>
                </li>
              </ol>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
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

  return (
    <>
      <ComponentHeader
        title="Alertas"
        description={[
          'Las alertas son avisos que mantienen a los usuarios informados sobre el estado del sistema y pueden requerir o no que realicen una acción.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del componente podés <a href="https://gcba.github.io/estandares/componentes/alerta/" target="_blank" rel="noopener noreferrer">
            visitar la documentación en Obelisco v.1
            </a>.
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default AlertDocs;
