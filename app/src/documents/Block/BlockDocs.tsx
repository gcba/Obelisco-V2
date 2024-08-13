import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import { EGcodeWithStrong, EGcodeSimpleAlert, EGcodeCloseAlert } from './code-views';
import CodeCopy from '@/components/CodeBox';

const BlockDocs: React.FC = () => {
  const sections = [
    {
      id: 'section-1',
      title: 'Bloque',
      content: (
        <>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </>
      ),
      h1: true,
    },
    {
      id: 'section-2',
      title: 'Simple',
      content: (
        <>
          <div className="col-12 col-lg-8 mx-auto">
            <div className="alert alert-info" role="alert">
              <p>Esta es la descripción de una alerta de información.</p>
            </div>
            <br />
            <div className="alert alert-primary" role="alert">
              <p>Esta es la descripción de una alerta de advertencia.</p>
            </div>
            <br />
            <div className="alert alert-success" role="alert">
              <p>Esta es la descripción de una alerta de éxito.</p>
            </div>
            <br />
            <div className="alert alert-danger" role="alert">
              <p>Esta es la descripción de una alerta de error.</p>
            </div>
            <br />
          </div>
          <CodeCopy code={EGcodeSimpleAlert} />
        </>
      ),
    },
    {
      id: 'section-3',
      title: 'Con cierre',
      content: (
        <>
          <div className="w-50 d-flex flex-column gap-2 mb-3">
            <div className="alert alert-warning alert-dismissible show fade" role="alert">
              <p>Esta es la descripción de una alerta de error.</p>
              <button type="button" className="close" data-dismiss="alert" aria-label="Cerrar">
                <span className="material-icons-round">close</span>
              </button>
            </div>

            <p>Nuevo html de B5</p>

            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
            </div>
          </div>
          <CodeCopy code={EGcodeCloseAlert} />
        </>
      ),
    },
    {
      id: 'section-4',
      title: 'Con lista',
      content: (
        <>
          <div className="w-50 d-flex flex-column gap-2 mb-3 mx-auto">
            <div className="alert alert-danger" role="alert">
              <p>
                <strong>Este es un destacado de una alerta de error.</strong>
                Esta es la descripción de una alerta de error que continua al texto destacado.
              </p>
              <ol className="list-links">
                <li><a href="#">Ancla al error 1</a></li>
                <li><a href="#">Ancla al error 2</a></li>
                <li><a href="#">Ancla al error 3</a></li>
                <li><a href="#">Ancla al error 4</a></li>
                <li><a href="#">Ancla al error 5</a></li>
              </ol>
            </div>
          </div>
          <br />
          <CodeCopy code={EGcodeWithStrong} />
        </>
      ),
    },
  ];

  return (
    <>
      <DocumentationTemplate sections={sections} />
    </>
  );
};

export default BlockDocs;
