import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { BADGE_COLORS, BADGE_TYPES } from './code-views';

const BadgeDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Colores',
      content: (
        <CodeBox codeHTML={BADGE_COLORS}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5">
                <span className="badge badge-default">Predeterminada</span>
                <span className="badge badge-danger">Peligro</span>
                <span className="badge badge-info">Info</span>
                <span className="badge badge-success">Éxito</span>
                <span className="badge badge-warning">Advertencia</span>
              </div>
            </div>
          </div>
        </CodeBox>
      ),
    },
    {
      title: 'Enlace',
      content: (
        <CodeBox codeHTML={BADGE_TYPES}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="grid gap-5">
                <LinkClient className="badge badge-default">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-default">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-default">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-3">
                <LinkClient className="badge badge-danger">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-danger">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-danger">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-3">
                <LinkClient className="badge badge-info">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-info">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-info">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-3">
                <LinkClient className="badge badge-success">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-success">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-success">Etiqueta</LinkClient>
              </div>

              <div className="grid gap-5 mt-3">
                <LinkClient className="badge badge-warning">Etiqueta</LinkClient>
                <LinkClient className="badge hover badge-warning">Etiqueta</LinkClient>
                <LinkClient className="badge focus badge-warning">Etiqueta</LinkClient>
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
        title="Etiquetas"
        description={[
          'Las etiquetas se utilizan para identificar y categorizar la información dentro de una página proporcionando más detalles a los usuarios sobre el contenido que necesitan.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a
              href="https://gcba.github.io/estandares/componentes/etiquetas/"
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

export default BadgeDocs;
