import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Tabs from '@/components/Tabs';
import ComponentHeader from '@/components/Template/ComponentHeader';

import { ICONS_BOXICONS, ICONS_CUSTOM, ICONS_MATERIAL } from './code-views';

// const basePath = '/Obelisco-V2';

const SECTIONS_DEV = [
  {
    title: 'Íconos personalizados',
    firstTitle: true,
    content: (
      <>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Ícono
                </th>
                <th scope="col" className="tb-text">
                  Clase
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="ob-icon interbanking"></i>
                </td>
                <td>
                  <code>{'ob-icon interbanking'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon red-link"></i>
                </td>
                <td>
                  <code>{'ob-icon red-link'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon maestro"></i>
                </td>
                <td>
                  <code>{'ob-icon maestro'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon cabal"></i>
                </td>
                <td>
                  <code>{'ob-icon cabal'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon visa"></i>
                </td>
                <td>
                  <code>{'ob-icon visa'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon pago-mis-cuentas"></i>
                </td>
                <td>
                  <code>{'ob-icon pago-mis-cuentas'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon mercado-pago"></i>
                </td>
                <td>
                  <code>{'ob-icon mercado-pago'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon american-express"></i>
                </td>
                <td>
                  <code>{'ob-icon american-express'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="ob-icon mastercard"></i>
                </td>
                <td>
                  <code>{'ob-icon mastercard'}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xl fw-semibold mt-3">Estructura/Uso</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ICONS_CUSTOM}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    title: 'Íconos de Boxicons',
    content: (
      <>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Ícono
                </th>
                <th scope="col" className="tb-text">
                  Clase específica
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <i className="o-icon bxl bx-facebook-circle"></i>
                </td>
                <td>
                  <code>{'bx-facebook-circle'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-instagram-alt"></i>
                </td>
                <td>
                  <code>{'bx-instagram-alt'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-twitter-x"></i>
                </td>
                <td>
                  <code>{'bx-twitter-x'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-youtube"></i>
                </td>
                <td>
                  <code>{'bx-youtube'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-linkedin-square"></i>
                </td>
                <td>
                  <code>{'bx-linkedin-square'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-tiktok"></i>
                </td>
                <td>
                  <code>{'bx-tiktok'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="o-icon bxl bx-pinterest"></i>
                </td>
                <td>
                  <code>{'bx-pinterest'}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xl fw-semibold mt-3">Estructura/Uso</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ICONS_BOXICONS}
        </SyntaxHighlighter>

        <a
          className="btn btn-outline-secondary mt-5"
          href="https://boxicons.com/icons?p=filled"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acceder a todos los íconos<span className="material-symbols-rounded o-icon">open_in_new</span>
        </a>
      </>
    ),
  },
  {
    title: 'Íconos de Material',
    content: (
      <>
        <div className="responsive-scroll" tabIndex={0}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="tb-text">
                  Ícono
                </th>
                <th scope="col" className="tb-text">
                  Ligadura tipografica
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    info
                  </span>
                </td>

                <td>
                  <code>{'info'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    check
                  </span>
                </td>

                <td>
                  <code>{'check'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    close
                  </span>
                </td>

                <td>
                  <code>{'close'}</code>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="material-symbols-rounded o-icon" aria-hidden="true">
                    warning
                  </span>
                </td>

                <td>
                  <code>{'warning'}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xl fw-semibold mt-3">Estructura/Uso</p>
        <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
          {ICONS_MATERIAL}
        </SyntaxHighlighter>

        <a
          className="btn btn-outline-secondary mt-5"
          href="https://fonts.google.com/icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acceder a todos los íconos<span className="material-symbols-rounded o-icon">open_in_new</span>
        </a>
      </>
    ),
  },
];

const IconsDocs: React.FC = () => {
  return (
    <>
      <ComponentHeader
        title="Tipografía"
        description={['Conocé las familia de íconos de Obelisco para los productos digitales de GCBA.']}
      />
      <Tabs sectionDev={SECTIONS_DEV} />
    </>
  );
};

export default IconsDocs;
