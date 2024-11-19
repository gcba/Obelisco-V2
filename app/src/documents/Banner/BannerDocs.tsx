import CodeBox from '@/components/CodeBox';
import LinkClient from '@/components/LinkClient';
import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import {
  BANNER_BUTTON,
  BANNER_BUTTON_DARK,
  BANNER_BUTTONS,
  BANNER_BUTTONS_DARK,
  BANNER_SIMPLE,
  BANNER_SIMPLE_DARK,
} from './code-views';

const BannerDocs: React.FC = () => {
  const SECTIONS_DEV = [
    {
      title: 'Simple',
      content: (
        <>
          <CodeBox codeHTML={BANNER_SIMPLE}>
            <div className="banner">
              <div className="banner-content">
                <p className="banner-text">
                  Esta descripción de banner <strong>puede tener énfasis</strong> y <LinkClient>enlace</LinkClient>.
                </p>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BANNER_SIMPLE_DARK}>
            <div className="banner banner-dark">
              <div className="banner-content">
                <p className="banner-text">
                  Esta descripción de banner <strong>puede tener énfasis</strong> y <LinkClient>enlace</LinkClient>.
                </p>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con botón',
      content: (
        <>
          <CodeBox codeHTML={BANNER_BUTTON}>
            <div className="banner">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  departure_board
                </span>
                <p className="banner-text">
                  Este banner tiene un solo botón y <strong>puede tener énfasis</strong>. Se truncan los textos que
                  superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <LinkClient className="btn btn-sm btn-primary">Botón</LinkClient>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BANNER_BUTTON_DARK}>
            <div className="banner banner-dark">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  departure_board
                </span>
                <p className="banner-text">
                  Este banner tiene un solo botón y <strong>puede tener énfasis</strong>. Se truncan los textos que
                  superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <LinkClient className="btn btn-sm btn-primary">Botón</LinkClient>
                </div>
              </div>
            </div>
          </CodeBox>
        </>
      ),
    },
    {
      title: 'Con botones',
      content: (
        <>
          <CodeBox codeHTML={BANNER_BUTTONS}>
            <div className="banner">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  cookie
                </span>
                <p className="banner-text">
                  Este banner tiene dos botones y <strong>puede tener énfasis</strong>. Se truncan los textos que
                  superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <LinkClient className="btn btn-sm btn-primary">Botón</LinkClient>
                  <LinkClient className="btn btn-sm btn-outline-primary">Botón</LinkClient>
                </div>
              </div>
            </div>
          </CodeBox>
          <br />
          <CodeBox codeHTML={BANNER_BUTTONS_DARK}>
            <div className="banner banner-dark">
              <div className="banner-content">
                <span className="material-symbols-rounded o-icon" aria-hidden="true">
                  cookie
                </span>
                <p className="banner-text">
                  Este banner tiene dos botones y <strong>puede tener énfasis</strong>. Se truncan los textos que
                  superen más de una línea de texto.
                </p>
                <div className="banner-actions">
                  <LinkClient className="btn btn-sm btn-primary">Botón</LinkClient>
                  <LinkClient className="btn btn-sm btn-outline-light">Botón</LinkClient>
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

  return (
    <>
      <ComponentHeader
        title="Banner"
        description={[
          'Los banners muestran mensajes importantes y breves, a modo de aviso general, para informar a los usuarios sobre temas de diverso interés. Se muestran al ancho completo.',
          <>
            Estamos actualizando todas las fichas de los componentes. Para conocer más sobre los lineamientos de uso del componente podés <a href="https://gcba.github.io/estandares/componentes/banner/" target="_blank" rel="noopener noreferrer">
            visitar la documentación en Obelisco v.1
            </a>.
          </>,
        ]}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default BannerDocs;
