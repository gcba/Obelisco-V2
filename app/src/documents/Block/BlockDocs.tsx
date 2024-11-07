import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import DocumentationTemplate from '@/components/Template/DocumentationTemplate';
import MainDescription from '@/components/Template/MainDescription';

import { BLOCK, BLOCK_BG, BLOCK_DESCRIPTION, BLOCK_PROGRESS } from './code-views';

const BlockDocs: React.FC = () => {
  const sections = [
    {
      title: 'Bloque de trámite',
      h1: true,
      content: (
        <>
          <MainDescription description="Este componente se utiliza dentro de una página informativa de trámite e indica el estado del mismo. Desde él, la persona usuaria puede iniciar el trámite o ver en qué instancia se encuentra." />
          <p className="lead mb-4">
            Si quieres conocer las buenas prácticas de uso del componente, puedes visitar el siguiente&nbsp;
            <a
              href="https://gcba.github.io/estandares/componentes/bloque-de-tramite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              enlace
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'section-1',
      title: 'Predeterminado',
      content: (
        <CodeBox codeHTML={BLOCK}>
          <div className="container">
            <div className="col-12 col-xl-6">
              <div className="block position-sticky" style={{ top: '48px' }}>
                <div className="block-body">
                  <h2 className="block-title">Iniciá el trámite y completá todos los pasos</h2>
                  <LinkClient className="btn btn-lg btn-primary btn-block">Iniciar trámite</LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-2',
      title: 'Con descripción',
      content: (
        <CodeBox codeHTML={BLOCK_DESCRIPTION}>
          <div className="container">
            <div className="col-12 col-xl-6">
              <div className="block position-sticky" style={{ top: '48px' }}>
                <div className="block-body">
                  <h2 className="block-title">Iniciá el trámite y completá todos los pasos</h2>
                  <p className="block-text">Si tenés un trámite iniciado podés continuarlo desde acá.</p>
                  <button type="button" className="btn btn-lg btn-primary btn-block">
                    Iniciar trámite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-3',
      title: 'Con barra de progreso',
      content: (
        <CodeBox codeHTML={BLOCK_PROGRESS}>
          <div className="container">
            <div className="col-12 col-xl-6">
              <div className="block position-sticky" style={{ top: '48px' }}>
                <div className="block-body">
                  <h2 className="block-title">Este es tu progreso en el trámite</h2>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                  <LinkClient className="btn btn-lg btn-primary btn-block">Continuar trámite</LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      id: 'section-4',
      title: 'Con fondo',
      content: (
        <CodeBox codeHTML={BLOCK_BG}>
          <div className="container">
            <div className="col-12 col-xl-6">
              <div className="block position-sticky bg-light" style={{ top: '48px' }}>
                <div className="block-body">
                  <h2 className="block-title">Iniciá el trámite y completá todos los pasos</h2>
                  <p className="block-text">Si tenés un trámite iniciado podés continuarlo desde acá.</p>
                  <button type="button" className="btn btn-lg btn-primary btn-block">
                    Iniciar trámite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
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
