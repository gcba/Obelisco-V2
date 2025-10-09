import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { BLOCK, BLOCK_BG, BLOCK_DESCRIPTION, BLOCK_PROGRESS } from './code-views';

const BlockDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Predeterminado',
      firstTitle: true,
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
      <ComponentHeader
        title="Bloque de trámite"
        description={[
          'Este componente se utiliza dentro de una página informativa de trámite e indica el estado del mismo. Desde él, la persona usuaria puede iniciar el trámite o ver en qué instancia se encuentra.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/bloque-de-tramite/"
              target="_blank"
              rel="noopener noreferrer"
            >
              visitar la documentación en Obelisco v.1
            </a>
            .
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default BlockDocs;
