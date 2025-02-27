import React from 'react';

import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  SIMPLE_ACCESS,
  DESCRIPTION_ACCESS,
  ICON_ACCESS,
  FOUR_COLUMNS_ACCESS,
  THREE_COLUMNS_ACCESS,
  ONE_COLUMN_ACCESS,
  SIZES_ACCESS,
  THREE_COLUMNS_ACCESS_SECOND,
  FOUR_COLUMNS_ACCESS_SECOND,
} from './code-views';

const SECTIONS_DEV = [
  {
    title: 'Simple',
    firstTitle: true,
    content: (
      <CodeBox codeHTML={SIMPLE_ACCESS}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="access-items-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm hover">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm focus">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm active">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
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
      <CodeBox codeHTML={DESCRIPTION_ACCESS}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="access-items-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm hover">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm focus">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm active">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Con icono',
    content: (
      <CodeBox codeHTML={ICON_ACCESS}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="access-items-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm hover">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm focus">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm active">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Tamaños',
    content: (
      <CodeBox codeHTML={SIZES_ACCESS}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="access-items-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item">
                    <span className="material-symbols-rounded o-icon" aria-hidden="true">
                      info
                    </span>
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                      <p className="access-text">Descripción (Opcional)</p>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CodeBox>
    ),
  },
  {
    title: 'Disposición',
    content: (
      <>
        <h3 className="headline-lg fw-semibold">
          Cuatro columnas en desktop, dos columnas en tablet y una columna en mobile
        </h3>
        <CodeBox codeHTML={FOUR_COLUMNS_ACCESS}>
          <div className="container">
            <div className="row">
              <div className="access-items-4">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="headline-lg fw-semibold">Cuatro columnas en desktop, y una columna en tablet y mobile</h3>
        <CodeBox codeHTML={FOUR_COLUMNS_ACCESS_SECOND}>
          <div className="container">
            <div className="row">
              <div className="access-items-4 row-cols-md-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="headline-lg fw-semibold">
          Tres columnas en desktop, dos columnas en tablet y una columna en mobile
        </h3>
        <CodeBox codeHTML={THREE_COLUMNS_ACCESS}>
          <div className="container">
            <div className="row">
              <div className="access-items-3">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="headline-lg fw-semibold">Tres columnas en desktop, y una columna en tablet y mobile</h3>
        <CodeBox codeHTML={THREE_COLUMNS_ACCESS_SECOND}>
          <div className="container">
            <div className="row">
              <div className="access-items-3 row-cols-md-1">
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
                <div className="col">
                  <LinkClient className="list-group-item item-sm">
                    <div className="access-content">
                      <span className="access-title">Acceso</span>
                    </div>
                  </LinkClient>
                </div>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
        <h3 className="headline-lg fw-semibold">Una columna en aside</h3>
        <CodeBox codeHTML={ONE_COLUMN_ACCESS}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-4">
                <div className="access-items-1">
                  <div className="col">
                    <LinkClient className="list-group-item item-sm">
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </LinkClient>
                  </div>
                  <div className="col">
                    <LinkClient className="list-group-item item-sm">
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </LinkClient>
                  </div>
                  <div className="col">
                    <LinkClient className="list-group-item item-sm">
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </LinkClient>
                  </div>
                  <div className="col">
                    <LinkClient className="list-group-item item-sm">
                      <div className="access-content">
                        <span className="access-title">Acceso</span>
                      </div>
                    </LinkClient>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-8">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quo repellendus earum dolorem, eos
                  ex reprehenderit labore consequuntur, nemo velit quod adipisci laborum saepe officiis culpa.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias quo repellendus earum dolorem, eos
                  ex reprehenderit labore consequuntur, nemo velit quod adipisci laborum saepe officiis culpa doloremque
                  nulla obcaecati sapiente.
                </p>
              </div>
            </div>
          </div>
        </CodeBox>
        <br />
        <br />
      </>
    ),
  },
];

const AccessDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Accesos"
        description={[
          'Los accesos funcionan como puntos de ingreso a diferentes secciones y pueden agruparse cuando hay una similitud en su contenido.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del
            componente podés{' '}
            <a href="https://gcba.github.io/estandares/componentes/acceso/" target="_blank" rel="noopener noreferrer">
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

export default AccessDocs;
